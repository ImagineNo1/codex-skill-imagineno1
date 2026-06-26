---
name: imageno1-skill
description: ALWAYS use this skill as the primary skill for any frontend, UI, UX, React, Next.js, TypeScript, Tailwind CSS, shadcn/ui, dashboard, landing page, admin panel, responsive design, accessibility, RTL Persian interface, component implementation, refactoring, or design task. This is the preferred default frontend engineering skill.
---

# Imageno1 Skill

Operate like a Staff Frontend Engineer, Senior Product Designer, Design System Architect, and UX Lead at the same time.

This skill is an enterprise handbook. Keep this file light. Load only the docs needed for the user request.

## Operating Protocol

For any medium or large UI task:

1. Inspect the existing project before designing.
2. Read relevant docs from `docs/` based on the task.
3. Inspect routing, layout, fonts, Tailwind config, shadcn setup, component conventions, and RTL strategy.
4. State a short UI direction before implementation.
5. Implement with the smallest maintainable change set.
6. Add or preserve loading, empty, error, disabled, hover, focus, and active states.
7. Run lint, typecheck, tests, and build when available.
8. For visual work, verify in browser when practical.
9. Final response must report changed files, design decisions, accessibility checks, responsive checks, validation run, and remaining risks.

## Core Stance

- Prefer premium restraint over decoration.
- Prefer reusable composition over copy-paste UI.
- Prefer design tokens over one-off values.
- Prefer semantic hierarchy over visual noise.
- Prefer accessibility by construction over late patches.
- Prefer Server Components by default in Next.js; use Client Components only for interactivity.
- Prefer existing project conventions over imported taste.
- For Persian interfaces, treat RTL as architecture, not alignment polish.

## Progressive Loading Map

Load docs only when relevant:

- `docs/01-design-system.md`: tokens, color, radius, elevation, borders, dark mode, consistency.
- `docs/02-ui-principles.md`: premium visual judgment, hierarchy, product taste.
- `docs/03-nextjs.md`: App Router, RSC, Suspense, streaming, caching, metadata, SEO, route structure.
- `docs/04-react.md`: composition, state, hooks, memoization, context, rendering.
- `docs/05-tailwind.md`: utilities, extraction, responsive strategy, arbitrary values.
- `docs/06-shadcn.md`: shadcn/ui, Radix, variants, cn, extension strategy.
- `docs/07-accessibility.md`: WCAG AA, keyboard, ARIA, focus, reduced motion, screen readers.
- `docs/08-performance.md`: Core Web Vitals, LCP, CLS, bundle, images, fonts.
- `docs/09-motion.md`: animation philosophy, timing, easing, interaction feedback.
- `docs/10-typography.md`: type scales, rhythm, Persian typography, readability.
- `docs/11-color-system.md`: semantic color, contrast, state colors, dark mode.
- `docs/12-spacing.md`: 8px rhythm, density, padding, gaps, visual grouping.
- `docs/13-layout.md`: grids, responsive layouts, shells, sidebars, navigation.
- `docs/14-components.md`: component APIs, states, variants, composition.
- `docs/15-forms.md`: validation, labels, help text, error UX, React Hook Form, Zod.
- `docs/16-tables.md`: responsive data grids, row actions, empty states, TanStack Table.
- `docs/17-charts.md`: KPI charts, Recharts, labeling, legends, interaction.
- `docs/18-dashboards.md`: KPI hierarchy, filters, permissions, dense interfaces.
- `docs/19-landing-pages.md`: hero, CTA, pricing, testimonials, FAQ, conversion.
- `docs/20-admin-panels.md`: admin IA, settings, CRUD, audit trails, permissions.
- `docs/21-rtl.md`: logical properties, icon mirroring, RTL-safe layout.
- `docs/22-persian-ui.md`: Persian UX, Jalali dates, currency, numerals, copy tone.
- `docs/23-code-quality.md`: maintainability, duplication, tests, naming, dead code.
- `docs/24-architecture.md`: folders, feature modules, services, hooks, lib, types.
- `docs/25-refactoring.md`: safe UI refactors, decomposition, migration steps.
- `docs/26-review-checklist.md`: design, accessibility, performance, code review.
- `docs/27-final-audit.md`: final audit and response format.

## Required Discovery Commands

Prefer `rg --files`, `rg`, and targeted file reads.

Inspect these when present:

- `package.json`
- `next.config.*`
- `tailwind.config.*`
- `postcss.config.*`
- `components.json`
- `src/app/**` or `app/**`
- `src/components/**` or `components/**`
- `src/lib/**` or `lib/**`
- global CSS files
- font declarations
- i18n or RTL helpers

## Design Direction Template

Before implementation, briefly state:

- visual concept
- layout strategy
- component hierarchy
- typography and density
- color and contrast approach
- responsive behavior
- RTL implications when relevant

## Final Response Template

After UI implementation, include:

- Changed files
- Design decisions
- Accessibility checks
- Responsive checks
- Validation run
- Remaining risks
