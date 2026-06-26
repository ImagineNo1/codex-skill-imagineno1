const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");

const requiredDocs = [
  "00-execution-engine.md",
  "01-design-system.md",
  "02-ui-principles.md",
  "03-nextjs.md",
  "04-react.md",
  "05-tailwind.md",
  "06-shadcn.md",
  "07-accessibility.md",
  "08-performance.md",
  "09-motion.md",
  "10-typography.md",
  "11-color-system.md",
  "12-spacing.md",
  "13-layout.md",
  "14-components.md",
  "15-forms.md",
  "16-tables.md",
  "17-charts.md",
  "18-dashboards.md",
  "19-landing-pages.md",
  "20-admin-panels.md",
  "21-rtl.md",
  "22-persian-ui.md",
  "23-code-quality.md",
  "24-architecture.md",
  "25-refactoring.md",
  "26-review-checklist.md",
  "27-final-audit.md",
  "28-design-intelligence.md",
];

const errors = [];

function filePath(relativePath) {
  return path.join(root, relativePath);
}

function exists(relativePath) {
  return fs.existsSync(filePath(relativePath));
}

function read(relativePath) {
  return fs.readFileSync(filePath(relativePath), "utf8");
}

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    if (entry.name === ".git" || entry.name === "node_modules") continue;
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...walk(fullPath));
    if (entry.isFile()) files.push(fullPath);
  }
  return files;
}

function normalizePathForSkill(relativePath) {
  return relativePath.split(path.sep).join("/");
}

function markdownLinks(content) {
  const links = [];
  const regex = /\[[^\]]+\]\(([^)]+)\)/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
    links.push(match[1]);
  }
  return links;
}

if (!exists("SKILL.md")) {
  errors.push("SKILL.md is missing.");
}

if (!exists("docs")) {
  errors.push("docs/ is missing.");
}

let skill = "";
if (exists("SKILL.md")) {
  skill = read("SKILL.md");
  const frontmatter = skill.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!frontmatter) {
    errors.push("SKILL.md frontmatter is missing or malformed.");
  } else if (!/^name:\s*imageno1-skill\s*$/m.test(frontmatter[1])) {
    errors.push("SKILL.md frontmatter name must be `imageno1-skill`.");
  }
  if (!/^# Imageno1 Frontend OS v2\.0\s*$/m.test(skill)) {
    errors.push("SKILL.md must use title `Imageno1 Frontend OS v2.0`.");
  }
  if (!/Version:\s*2\.1\.0/.test(skill)) {
    errors.push("SKILL.md must include Version: 2.1.0.");
  }
}

if (exists("package.json")) {
  const pkg = JSON.parse(read("package.json"));
  if (pkg.version !== "2.1.0") {
    errors.push("package.json version must be 2.1.0.");
  }
} else {
  errors.push("package.json is missing.");
}

for (const doc of requiredDocs) {
  const relative = path.join("docs", doc);
  if (!exists(relative)) {
    errors.push(`Required doc is missing: ${relative}`);
  }
  const normalized = `docs/${doc}`;
  if (skill && !skill.includes(normalized)) {
    errors.push(`Required doc is not reachable from SKILL.md: ${normalized}`);
  }
}

if (exists("docs")) {
  const docsFiles = fs.readdirSync(filePath("docs")).filter((name) => name.endsWith(".md"));
  for (const doc of docsFiles) {
    const normalized = `docs/${doc}`;
    if (!skill.includes(normalized)) {
      errors.push(`Docs markdown file is not reachable from SKILL.md: ${normalized}`);
    }
  }
}

for (const file of walk(root)) {
  if (file.toLowerCase().endsWith(".md")) {
    const content = fs.readFileSync(file, "utf8");
    const relative = path.relative(root, file);
    const normalized = normalizePathForSkill(relative);
    if (content.trim().length === 0) {
      errors.push(`Markdown file is empty: ${relative}`);
    }
    if (normalized !== "SKILL.md" && skill && !skill.includes(normalized)) {
      errors.push(`Markdown file is not reachable from SKILL.md: ${normalized}`);
    }
    for (const link of markdownLinks(content)) {
      if (/^(https?:|mailto:|#)/.test(link)) continue;
      if (link.startsWith("`")) continue;
      const cleanLink = link.split("#")[0];
      if (!cleanLink) continue;
      const target = path.resolve(path.dirname(file), cleanLink);
      if (!fs.existsSync(target)) {
        errors.push(`Broken markdown link in ${relative}: ${link}`);
      }
    }
  }
}

if (errors.length > 0) {
  console.error("Verification failed:");
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  process.exit(1);
}

console.log("Verification passed: Imageno1 Frontend OS v2.1 is complete.");
