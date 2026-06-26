# Searchable Design Database

Load when: Use this for design recommendation, product matching, palette selection, typography choice, UX guidance, chart choice, stack-specific frontend decisions, or when the user asks for premium, non-generic UI direction.

## Purpose

Imageno1 includes an original searchable design knowledge base. Use it to ground visual and UX decisions before implementing important UI.

## When To Search

- New landing page, dashboard, SaaS product, admin panel, or redesign.
- Product category is unclear.
- Palette, typography, chart, or style direction needs justification.
- Persian or RTL behavior matters.
- The task risks generic AI-looking UI.

## Commands

```bash
node scripts/search.js "Persian SaaS dashboard"
node scripts/search.js "Persian SaaS dashboard" --domain product
node scripts/search.js "luxury legal" --domain color
node scripts/search.js "rtl persian admin" --domain typography
node scripts/search.js "analytics dashboard" --domain chart
node scripts/search.js "forms validation" --domain ux
node scripts/search.js "server components" --stack nextjs
node scripts/search.js "shadcn variants" --stack shadcn
node scripts/search.js "mixed ltr" --stack rtl
node scripts/search.js "legal dashboard" --max 10 --json
```

## Domains

- product: product-type recommendations.
- style: UI style and visual direction.
- color: palette recommendations.
- typography: font pairing recommendations.
- ux: UX guideline recommendations.
- chart: chart and dashboard patterns.
- stack: stack-specific frontend guidance.
- persian or rtl: Persian and RTL patterns.
- design-language: high-level design language profiles.

## Design-System Generator

Run this before major UI work:

```bash
node scripts/design-system.js "Persian legal SaaS dashboard"
```

Use the output as the design direction:

- design language
- product match
- color palette
- typography
- spacing rhythm
- radius and elevation
- component tone
- chart style
- landing/dashboard guidance
- RTL notes
- implementation checklist

## Combining Results

1. Search product domain first.
2. Search design-language or style domain second.
3. Search color and typography after product/style are known.
4. Search UX for the specific workflow.
5. Search chart only when data visualization is needed.
6. Search stack for framework-specific implementation risks.
7. Search Persian/RTL when direction, typography, dates, currency, or mixed LTR content matter.

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
