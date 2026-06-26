const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");

const requiredDocs = [
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
];

const errors = [];

function exists(relativePath) {
  return fs.existsSync(path.join(root, relativePath));
}

function read(relativePath) {
  return fs.readFileSync(path.join(root, relativePath), "utf8");
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

if (!exists("SKILL.md")) {
  errors.push("SKILL.md is missing.");
}

if (!exists("docs")) {
  errors.push("docs/ is missing.");
}

if (exists("SKILL.md")) {
  const skill = read("SKILL.md");
  const frontmatter = skill.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!frontmatter) {
    errors.push("SKILL.md frontmatter is missing or malformed.");
  } else if (!/^name:\s*imageno1-skill\s*$/m.test(frontmatter[1])) {
    errors.push("SKILL.md frontmatter name must be `imageno1-skill`.");
  }
}

for (const doc of requiredDocs) {
  if (!exists(path.join("docs", doc))) {
    errors.push(`Required doc is missing: docs/${doc}`);
  }
}

for (const file of walk(root)) {
  if (file.toLowerCase().endsWith(".md")) {
    const content = fs.readFileSync(file, "utf8");
    if (content.trim().length === 0) {
      errors.push(`Markdown file is empty: ${path.relative(root, file)}`);
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

console.log("Verification passed: imageno1-skill repository is complete.");
