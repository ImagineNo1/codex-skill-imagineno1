#!/usr/bin/env node
const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const dataDir = path.join(root, "data");

const domains = {
  product: "products.json",
  products: "products.json",
  style: "styles.json",
  styles: "styles.json",
  color: "colors.json",
  colors: "colors.json",
  typography: "typography.json",
  font: "typography.json",
  ux: "ux-guidelines.json",
  "ux-guidelines": "ux-guidelines.json",
  chart: "charts.json",
  charts: "charts.json",
  stack: "stacks.json",
  stacks: "stacks.json",
  rtl: "persian-rtl.json",
  persian: "persian-rtl.json",
  "design-language": "design-languages.json",
  language: "design-languages.json"
};

function parseArgs(argv) {
  const args = argv.filter(Boolean).filter((arg) => arg !== "--");
  const out = { query: "", domain: null, stack: null, max: 8, json: false };
  const query = [];
  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (arg === "--domain") out.domain = args[++i];
    else if (arg === "--stack") out.stack = args[++i];
    else if (arg === "--max" || arg === "-n") out.max = Number(args[++i] || 8);
    else if (arg === "--json") out.json = true;
    else query.push(arg);
  }
  out.query = query.join(" ").trim();
  return out;
}

function norm(text) {
  return String(text || "").toLowerCase().replace(/[^a-z0-9آ-ی#.+-]+/g, " ").trim();
}

function tokens(text) {
  return norm(text).split(/\s+/).filter(Boolean);
}

function loadDomain(domain) {
  const file = domains[domain] || domain;
  const full = path.join(dataDir, file);
  if (!fs.existsSync(full)) throw new Error(`Unknown domain or missing data file: ${domain}`);
  return JSON.parse(fs.readFileSync(full, "utf8")).map((item) => ({ ...item, domain: file.replace(".json", "") }));
}

function loadAll() {
  return fs.readdirSync(dataDir)
    .filter((file) => file.endsWith(".json"))
    .flatMap((file) => JSON.parse(fs.readFileSync(path.join(dataDir, file), "utf8")).map((item) => ({ ...item, domain: file.replace(".json", "") })));
}

function scoreItem(item, queryTokens, stack) {
  const name = norm(item.name);
  const category = norm(item.category);
  const tags = (item.tags || []).map(norm);
  const keywords = (item.keywords || []).map(norm);
  const guidance = norm(item.guidance);
  let score = 0;
  const reasons = [];
  for (const token of queryTokens) {
    if (!token) continue;
    if (name.includes(token)) { score += 10; reasons.push(`name:${token}`); }
    if (category.includes(token)) { score += 5; reasons.push(`category:${token}`); }
    if (tags.some((tag) => tag.includes(token))) { score += 7; reasons.push(`tag:${token}`); }
    if (keywords.some((keyword) => keyword.includes(token))) { score += 4; reasons.push(`keyword:${token}`); }
    if (guidance.includes(token)) { score += 2; reasons.push(`guidance:${token}`); }
  }
  if (stack) {
    const s = norm(stack);
    if (item.domain === "stacks" && (name.includes(s) || tags.some((tag) => tag.includes(s)))) score += 12;
    if (tags.some((tag) => tag.includes(s)) || keywords.some((keyword) => keyword.includes(s))) score += 6;
    if (guidance.includes(s)) score += 3;
  }
  return { score, reasons: [...new Set(reasons)].slice(0, 6) };
}

function search(query, options = {}) {
  const queryTokens = tokens(query);
  const collection = options.domain ? loadDomain(options.domain) : loadAll();
  return collection
    .map((item) => {
      const scored = scoreItem(item, queryTokens, options.stack);
      return { ...item, score: scored.score, reasons: scored.reasons };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score || a.name.localeCompare(b.name))
    .slice(0, options.max || 8);
}

function markdown(results, query) {
  if (!results.length) return `No results for "${query}".`;
  return [
    `# Search Results: ${query}`,
    "",
    ...results.flatMap((item, index) => [
      `## ${index + 1}. ${item.name}`,
      "",
      `- Domain: ${item.domain}`,
      `- Category: ${item.category || "n/a"}`,
      `- Score: ${item.score}`,
      `- Tags: ${(item.tags || []).join(", ")}`,
      `- Guidance: ${item.guidance || ""}`,
      item.colors ? `- Colors: ${item.colors.join(", ")}` : null,
      item.heading ? `- Heading: ${item.heading}` : null,
      item.body ? `- Body: ${item.body}` : null,
      `- Match: ${(item.reasons || []).join(", ") || "weighted text match"}`,
      ""
    ].filter(Boolean))
  ].join("\n");
}

if (require.main === module) {
  const opts = parseArgs(process.argv.slice(2));
  if (!opts.query) {
    console.error('Usage: node scripts/search.js "query" [--domain style] [--stack nextjs] [--max 10] [--json]');
    process.exit(1);
  }
  const results = search(opts.query, opts);
  if (opts.json) console.log(JSON.stringify(results, null, 2));
  else console.log(markdown(results, opts.query));
}

module.exports = { search, loadAll, loadDomain, markdown };
