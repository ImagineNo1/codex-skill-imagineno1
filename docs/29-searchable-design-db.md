# Searchable Design Database

Load when: Use this for design recommendation, product matching, industry reasoning, landing structure, palette selection, typography choice, icon choice, logo direction, CIP/corporate identity, slide strategy, UX guidance, app-interface rules, React performance, chart choice, stack-specific frontend decisions, or when the user asks for premium, non-generic UI direction.

## Purpose

Imageno1 includes an original searchable design knowledge base plus Codex-native UI UX Pro Max intelligence. Use retrieval to ground visual and UX decisions before implementing important UI.

## When To Search

- New landing page, dashboard, SaaS product, admin panel, or redesign.
- Product category is unclear.
- Palette, typography, chart, or style direction needs justification.
- Landing page structure, CTA placement, or conversion strategy needs justification.
- Icon family, app/mobile UI rules, or React performance risks need guidance.
- Logo, brand identity, corporate identity, presentation, or social asset direction matters.
- Persian or RTL behavior matters.
- The task risks generic AI-looking UI.

## Commands

```bash
node scripts/search.js "Persian SaaS dashboard"
node scripts/search.js "Persian SaaS dashboard" --domain product
node scripts/search.js "fintech banking trust" --domain reasoning
node scripts/search.js "hero social proof booking" --domain landing
node scripts/search.js "luxury legal" --domain color
node scripts/search.js "rtl persian admin" --domain typography
node scripts/search.js "luxury editorial serif" --domain google-fonts
node scripts/search.js "sidebar navigation" --domain icons
node scripts/search.js "rounded friendly navigation icon" --domain icon-styles
node scripts/search.js "analytics dashboard" --domain chart
node scripts/search.js "forms validation" --domain ux
node scripts/search.js "touch target accessibility label" --domain app
node scripts/search.js "promise all suspense cache" --domain performance
node scripts/search.js "tech startup logo" --domain logo
node scripts/search.js "business card premium stationery" --domain cip
node scripts/search.js "investor pitch problem slide" --domain slides
node scripts/search.js "server components" --stack nextjs
node scripts/search.js "shadcn variants" --stack shadcn
node scripts/search.js "mixed ltr" --stack rtl
node scripts/search.js "legal dashboard" --max 10 --json
```

## Domains

- product: product-type recommendations.
- reasoning or ui-reasoning: product-category design rules, anti-patterns, severity, and decision rules.
- landing: landing-page structures, CTA placement, conversion strategy, section order, and effects.
- style: UI style and visual direction.
- color: palette recommendations.
- typography: font pairing recommendations.
- google-fonts or fonts: detailed Google Fonts metadata for exact font selection.
- icons: semantic icon recommendations and import/use hints.
- icon-styles: icon system style directions.
- logo or logo-design: logo style, palette, industry, symbol, typography, and psychology guidance.
- cip or cip-design: corporate identity deliverables, mockup context, industry guidance, materials, and finishes.
- slides or slides-design: presentation strategy, layouts, copywriting formulas, slide typography, color logic, and charts.
- ux: UX guideline recommendations.
- app or app-interface: app/mobile interface rules, accessibility labels, touch targets, safe areas, and native interaction states.
- performance or react-performance: React and Next.js performance rules.
- chart: chart and dashboard patterns.
- stack: stack-specific frontend guidance.
- persian or rtl: Persian and RTL patterns.
- design-language: high-level design language profiles.
- prompt or design-prompts: broad visual prompt references for unusual creative directions.
- draft or draft-prompts: backup visual prompt references; use after the product direction is clear.

## Design-System Generator

Run this before major UI work:

```bash
node scripts/design-system.js "Persian legal SaaS dashboard"
```

Run the full super-skill retrieval before medium or large work:

```bash
node scripts/super-run.js "Persian legal SaaS dashboard"
```

Use the output as the design direction:

- design language
- industry reasoning
- product match
- color palette
- typography
- spacing rhythm
- radius and elevation
- component tone
- chart style
- landing pattern
- icon guidance
- prompt direction
- performance guidance
- app-interface guidance
- landing/dashboard guidance
- RTL notes
- implementation checklist

## Combining Results

1. Search product domain first.
2. Search reasoning for product-category pattern, anti-pattern, and severity.
3. Search design-language or style domain second.
4. Search landing when building a marketing or conversion page.
5. Search color and typography after product/style are known.
6. Search UX for the specific workflow.
7. Search performance for React/Next.js rendering, async, bundle, and cache risks.
8. Search app-interface for mobile/app surfaces, touch targets, safe areas, and labels.
9. Search icons when choosing icon metaphors or imports.
10. Search logo/CIP/slides when the task touches brand identity, corporate assets, or presentations.
11. Search chart only when data visualization is needed.
12. Search stack for framework-specific implementation risks.
13. Search Persian/RTL when direction, typography, dates, currency, or mixed LTR content matter.

## Anti-Generic Rule

Do not pick a random popular palette or trendy style. Use retrieval to justify choices:

- product fit
- user expectation
- workflow density
- trust level
- content type
- accessibility
- RTL needs

## Output Discipline

In implementation notes, briefly mention which direction was selected and why. Do not dump raw search output into the final response unless the user asks.
