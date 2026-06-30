# Super Skill Orchestration

Load when: Use this for any medium or large frontend, UI/UX, visual design, brand, banner, social asset, slide, logo, icon, dashboard, landing page, app interface, or product-design task.

## Purpose

Imageno1 is a Codex super-skill. It should not behave like a single prompt. It should orchestrate retrieval, design reasoning, project inspection, implementation, and audit.

## Mandatory Run Order

1. Parse the user request into product, audience, surface, stack, brand context, interaction needs, accessibility needs, and delivery format.
2. Run `node scripts/super-run.js "<request>"` for medium or large work.
3. Inspect the existing project before implementing.
4. Select one coherent design language.
5. Convert retrieved guidance into concrete tokens, layout, component hierarchy, states, and validation steps.
6. Implement with existing project conventions.
7. Verify behavior, responsive layout, accessibility, dark mode, performance, and RTL where relevant.
8. Run the Design Critique Gate and Self Critique Engine.

## Subsystem Routing

- UI screen, component, dashboard, admin, SaaS, landing page: use `super-run`, then relevant docs `01` through `29`.
- Brand identity, tone, colors, voice, style guide: search `logo`, `color`, `typography`, `design-prompts`; use `docs/30-brand-and-asset-workflows.md` and `references/brand/*`.
- Logo direction: search `logo` and `icon-styles`; use `references/design/logo-design.md`; run `tools/logo/search.py` for briefs and `tools/logo/generate.py` only when image generation is requested and `GEMINI_API_KEY` is available.
- CIP or corporate identity: search `cip`, `logo`, `color`, `typography`; use `references/design/cip-design.md`; include deliverables, mockup context, materials, finish, and usage rules. Run `tools/cip/search.py` for briefs and `tools/cip/generate.py` only when generation is requested and `GEMINI_API_KEY` is available.
- Banner or social asset: search `landing`, `style`, `color`, `typography`, `design-prompts`; use exact platform sizes from `docs/30-brand-and-asset-workflows.md`.
- Slides or presentation: search `slides`, `chart`, `typography`, `color`; use `references/design/slides.md` or `references/slides/create.md`; use `tools/design-system/search-slides.py` and `tools/design-system/generate-slide.py` for executable slide workflows.
- Token systems: use `references/design-system/token-architecture.md`; run `tools/design-system/generate-tokens.cjs` and `tools/design-system/validate-tokens.cjs` when token files are needed.
- shadcn/Tailwind setup: use `references/ui-styling/*`; run `tools/ui-styling/shadcn_add.py` or `tools/ui-styling/tailwind_config_gen.py` when deterministic setup helps.
- Mobile/app UI: search `app`, `ux`, `performance`, `icons`, and the target stack.
- React/Next.js performance: search `performance`, `stack`, `react`, and `nextjs`.
- Persian/RTL: search `persian`, `rtl`, `typography`, and any product-specific domain.

## Hard Rules

- Do not choose a trendy style without product-category reasoning.
- Do not mix unrelated visual languages.
- Do not invent hardcoded colors if tokens exist.
- Do not use decorative UI elements that do not support the product goal.
- Do not ship icon-only controls without accessible names.
- Do not ship visual work without hover, focus, disabled, loading, empty, and error states when applicable.
- Do not infer mobile quality from desktop layout.
- Do not treat RTL as a final alignment pass.

## Super Run Interpretation

The output of `super-run` is evidence. Synthesize it into a smaller design direction before coding:

- product and industry rule
- visual language
- layout strategy
- token direction
- typography and density
- component states
- motion and interaction rules
- accessibility and performance risks
- final verification checklist

Do not paste the full retrieval output into the final user response unless requested.
