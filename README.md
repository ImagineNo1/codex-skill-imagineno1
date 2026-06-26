# Imageno1 Frontend OS v2.0

`imageno1-skill` is an execution-driven Codex skill for production frontend work. It is designed to behave like a Staff Frontend Engineer, Senior Product Designer, Design System Architect, UX Researcher, Accessibility Expert, Performance Engineer, Technical Lead, and Senior Code Reviewer at the same time.

It is not only a documentation pack. It is a frontend operating system with an execution engine, progressive handbook loading, quality gates, and delivery rules.

## What This Skill Does

Use `imageno1-skill` for:

- Next.js and React interfaces
- TypeScript frontend architecture
- Tailwind CSS systems
- shadcn/ui and Radix UI components
- Dashboards and admin panels
- Landing pages and conversion surfaces
- Forms, tables, charts, modals, sidebars, and navigation
- Accessibility and responsive design
- RTL Persian interfaces
- Design systems and component architecture
- Frontend refactoring and UI code review

## Execution Engine

For every frontend task, the skill follows this workflow:

```text
Understand Request
-> Inspect Existing Project
-> Detect Tech Stack
-> Inspect Design System
-> Inspect Existing Components
-> Inspect Architecture
-> Create Short Implementation Plan
-> Identify Risks
-> Implement
-> Self Review
-> Refactor
-> Accessibility Audit
-> Performance Audit
-> Final Delivery
```

The skill avoids jumping directly into coding. It first inspects the project, detects the stack, loads only relevant docs, then implements and audits the result.

## Progressive Loading

`SKILL.md` acts as a lightweight router. The skill does not load the whole handbook for every task.

It loads only the docs relevant to the current request:

- `docs/00-execution-engine.md` for the workflow engine and quality gates
- `docs/03-nextjs.md` for Next.js routing, rendering, caching, metadata, and App Router decisions
- `docs/05-tailwind.md` for Tailwind conventions and token usage
- `docs/06-shadcn.md` for shadcn/ui and Radix component work
- `docs/07-accessibility.md` for WCAG, keyboard, ARIA, and focus work
- `docs/08-performance.md` for Core Web Vitals, images, fonts, bundle, and rendering cost
- `docs/21-rtl.md` and `docs/22-persian-ui.md` for RTL and Persian interfaces

This keeps context usage low while preserving high-quality reasoning.

## Stack Detection

Before implementation, Imageno1 Frontend OS inspects the project to detect:

- Next.js, React, TypeScript, Tailwind CSS, shadcn/ui, Radix UI
- Zustand, Redux, TanStack packages, React Hook Form, Zod
- Prisma, Drizzle, MongoDB, PostgreSQL
- ESLint, Biome, Prettier
- Turbopack, Vite, Webpack
- pnpm, npm, yarn, or bun

Detected stack facts decide which handbook modules are loaded and which implementation patterns are safe.

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
- Zustand and Redux when present
- Prisma, Drizzle, MongoDB, PostgreSQL when present
- ESLint, Biome, Prettier
- Turbopack, Vite, Webpack
- pnpm, npm, yarn, bun
- RTL Persian UI patterns

## Self Critique

Before final delivery, the skill scores the work across:

- Architecture
- Accessibility
- Performance
- Visual Design
- Maintainability
- Consistency
- Type Safety
- Responsive Design
- RTL
- Dark Mode

If any score is below 90/100, the skill is instructed to improve the implementation before responding, unless an external blocker prevents it.

## Quality Gates

The skill is designed to avoid finishing until these are satisfied or explicitly reported as blocked:

- Type-safe
- Responsive
- Accessible
- RTL-safe
- Mobile-friendly
- Dark mode compatible
- Loading states
- Empty states
- Error states
- Keyboard navigation
- No duplicated logic
- No duplicated components
- No unnecessary Client Components
- No unnecessary re-renders
- No obvious performance issues

## RTL and Persian Support

Imageno1 Frontend OS treats RTL as architecture, not a final alignment pass.

It checks:

- direction strategy and `dir` boundaries
- logical CSS properties and utilities
- mirrored directional icons
- sidebars, modals, dropdowns, tables, and forms
- Persian typography
- Jalali dates when appropriate
- Toman/Rial formatting consistency
- mixed LTR content such as emails, URLs, code, and identifiers

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
- internal title is `Imageno1 Frontend OS v2.0`
- package version is `2.0.0`
- every docs markdown file is referenced from `SKILL.md`
- markdown files are not empty

## Usage Examples

Ask Codex:

```text
Use imageno1-skill to redesign this dashboard with better hierarchy, RTL support, and responsive behavior.
```

```text
Use imageno1-skill to review this Next.js admin panel for accessibility, layout, component architecture, and performance issues.
```

```text
Use imageno1-skill to implement a Persian RTL landing page using Tailwind and shadcn/ui.
```

## Recommended Prompts

- `Use imageno1-skill and run the full Frontend OS workflow before changing UI.`
- `Use imageno1-skill to inspect the existing design system, detect the stack, and implement this as production-ready UI.`
- `Use imageno1-skill to audit this interface for WCAG AA, RTL safety, dark mode, and mobile layout issues.`
- `Use imageno1-skill to refactor this component without duplicating existing shadcn/ui patterns.`

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
|-- SKILL.md
|-- docs/
|   |-- 00-execution-engine.md
|   |-- 01-design-system.md
|   |-- 02-ui-principles.md
|   |-- 03-nextjs.md
|   |-- ...
|   `-- 27-final-audit.md
|-- scripts/
|   |-- install.ps1
|   |-- install.sh
|   `-- verify.js
|-- README.md
|-- CHANGELOG.md
|-- LICENSE
|-- package.json
`-- .gitignore
```

## License

MIT
