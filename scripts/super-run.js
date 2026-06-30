#!/usr/bin/env node
const { search, markdown } = require("./search.js");
const { recommendation, markdown: designSystemMarkdown } = require("./design-system.js");

const query = process.argv.slice(2).filter((arg) => arg !== "--").join(" ").trim();

if (!query) {
  console.error('Usage: node scripts/super-run.js "request or product query"');
  process.exit(1);
}

const domainPlan = [
  ["ui-reasoning", "industry reasoning and anti-patterns", 3],
  ["product", "product fit", 3],
  ["style", "visual style", 3],
  ["landing", "landing and conversion structure", 3],
  ["color", "semantic palette", 3],
  ["typography", "font pairing", 3],
  ["ux", "UX risks", 5],
  ["performance", "React/Next performance", 4],
  ["app", "app interface and touch/a11y rules", 4],
  ["icons", "icon metaphor and imports", 3],
  ["icon-styles", "icon style system", 2],
  ["chart", "data visualization", 3],
  ["stack", "framework implementation guidance", 5],
  ["logo", "logo and identity direction", 3],
  ["cip", "corporate identity deliverables", 3],
  ["slides", "presentation and slide strategy", 3],
  ["design-prompts", "creative visual prompt direction", 2],
  ["draft-prompts", "backup creative prompt direction", 2],
  ["persian", "Persian and RTL guidance", 4],
];

function section(title, body) {
  return [`## ${title}`, "", body || "No direct match.", ""].join("\n");
}

const lines = [
  "# Imageno1 Super Run",
  "",
  `Query: ${query}`,
  "",
  "This run retrieves the full frontend/design intelligence stack. Use it to select a coherent direction, then inspect the project before editing.",
  "",
  designSystemMarkdown(recommendation(query)),
  "",
  "# Domain Retrieval",
  "",
];

for (const [domain, purpose, max] of domainPlan) {
  const results = search(query, { domain, max });
  lines.push(section(`${domain}: ${purpose}`, markdown(results, query)));
}

lines.push(
  "# Mandatory Synthesis",
  "",
  "- Pick one coherent design language; do not mix unrelated styles.",
  "- Preserve the user's existing project design system before adding tokens.",
  "- Treat UI UX Pro Max retrieval as evidence, not decoration.",
  "- Apply industry anti-patterns as hard constraints unless the user explicitly overrides them.",
  "- Verify accessibility, responsiveness, dark mode, motion, performance, and RTL where relevant.",
  "- For brand/banner/slide/logo/social asset tasks, use the corresponding retrieved sections before composing visuals.",
  ""
);

console.log(lines.join("\n"));
