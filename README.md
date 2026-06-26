# imageno1-skill

Enterprise-grade frontend engineering skill for Codex. It acts as a Staff Frontend Engineer, Senior Product Designer, Design System Architect, and UX Lead for modern frontend work.

## What It Does

`imageno1-skill` provides opinionated guidance for premium UI implementation, review, and refactoring. It is built for production frontend work, not generic mockups.

Use it for:

- Next.js and React interfaces
- TypeScript frontend architecture
- Tailwind CSS systems
- shadcn/ui and Radix UI components
- Dashboards and admin panels
- Landing pages and conversion surfaces
- Forms, tables, charts, modals, sidebars, and navigation
- Accessibility and responsive design
- RTL Persian interfaces
- Design systems, component architecture, and frontend refactoring

## Supported Stack

- Next.js App Router
- React and TypeScript
- Tailwind CSS
- shadcn/ui
- Radix UI
- lucide-react
- React Hook Form and Zod
- TanStack Table
- Recharts
- Framer Motion when useful
- RTL Persian UI patterns

## Install For Codex

Clone or download this repository, then run the installer for your OS.

### Windows PowerShell

```powershell
cd C:\path\to\imageno1-skill
powershell -ExecutionPolicy Bypass -File .\scripts\install.ps1
```

Manual install:

```powershell
$dest = "$HOME\.agents\skills\imageno1-skill"
New-Item -ItemType Directory -Force "$HOME\.agents\skills" | Out-Null
if (Test-Path $dest) { Remove-Item -Recurse -Force $dest }
Copy-Item -Recurse -Force . $dest
```

### macOS/Linux

```bash
cd /path/to/imageno1-skill
chmod +x ./scripts/install.sh
./scripts/install.sh
```

Manual install:

```bash
mkdir -p "$HOME/.agents/skills"
rm -rf "$HOME/.agents/skills/imageno1-skill"
cp -R . "$HOME/.agents/skills/imageno1-skill"
```

Restart Codex after installation so the skill is discovered in new sessions.

## Claude Code Compatibility

This repository is formatted as an Agent Skill with a `SKILL.md` entrypoint and supporting docs. If your Claude Code setup supports local skill-style instructions, copy or symlink this repository into the equivalent skills/instructions location used by your environment.

Suggested manual placement:

```bash
mkdir -p "$HOME/.agents/skills"
cp -R . "$HOME/.agents/skills/imageno1-skill"
```

If your Claude Code environment does not automatically discover Agent Skills, reference `SKILL.md` directly in your project or global instructions.

## Verify

```bash
npm run verify
```

The verifier checks:

- `SKILL.md` exists
- `docs/` exists
- all required docs files exist
- frontmatter name is `imageno1-skill`
- markdown files are not empty

## Usage Examples

Ask Codex:

```text
Use imageno1-skill to redesign this dashboard with better hierarchy, RTL support, and responsive behavior.
```

```text
Use imageno1-skill to review this Next.js admin panel for accessibility, layout, and component architecture issues.
```

```text
Use imageno1-skill to implement a Persian RTL landing page using Tailwind and shadcn/ui.
```

## Recommended Prompts

- `Use imageno1-skill and inspect the existing design system before changing the UI.`
- `Use imageno1-skill to build this as production-ready Next.js UI, including loading, empty, error, and responsive states.`
- `Use imageno1-skill to audit this interface for WCAG AA, RTL safety, and mobile layout issues.`
- `Use imageno1-skill to refactor this component into reusable shadcn/ui-compatible primitives.`

## Update Instructions

Pull the latest repository version, then reinstall:

```bash
git pull
npm run install:skill
npm run verify
```

On Windows without npm:

```powershell
git pull
powershell -ExecutionPolicy Bypass -File .\scripts\install.ps1
node .\scripts\verify.js
```

## Folder Structure

```text
imageno1-skill/
├── SKILL.md
├── docs/
│   ├── 01-design-system.md
│   ├── 02-ui-principles.md
│   ├── 03-nextjs.md
│   └── ...
├── scripts/
│   ├── install.ps1
│   ├── install.sh
│   └── verify.js
├── README.md
├── CHANGELOG.md
├── LICENSE
├── package.json
└── .gitignore
```

## License

MIT
