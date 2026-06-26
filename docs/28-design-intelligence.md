# Design Intelligence

Load when: Use this automatically for landing pages, dashboards, SaaS products, admin panels, visual redesigns, UI polish, "make it beautiful", "make it premium", "modernize this UI", or "make it not look AI-generated".

## Purpose

Design Intelligence turns clean frontend implementation into high-end product UI. It governs visual hierarchy, composition, taste, interaction quality, and premium feel.

## Core Rule

Choose one visual language before designing. Every spacing, type, color, card, CTA, table, and interaction choice should support that direction.

## Visual Language Menu

- Apple Calm: clarity, restraint, large readable type, generous whitespace, almost invisible chrome.
- Linear Precision: dense hierarchy, exact alignment, sharp contrast, refined dark mode, low-noise controls.
- Stripe Conversion: confident sections, polished CTA path, trust-building proof, restrained accent energy.
- Vercel Developer Premium: monochrome confidence, crisp typography, code/product clarity, minimal ornament.
- Raycast Command Center: compact workflows, keyboard-first density, fast scanning, immediate feedback.
- GitHub Utility: durable navigation, practical states, clear affordances, product usefulness over theatrics.
- Notion Workspace: calm surfaces, block-like information, soft contrast, approachable productivity.
- Persian Luxury RTL: formal Persian typography, dark premium surfaces, restrained gold or jewel accents, legal/finance dignity.
- Enterprise Admin Clean: structured density, predictable controls, strong tables, low decoration, high trust.

## Never Mix Randomly

- Do not combine Apple whitespace, Stripe gradients, Linear dark panels, and Notion softness on one page without a unifying reason.
- Do not let every section feel designed by a different product.
- Do not choose colors, shadows, radii, or illustrations independently.
- Do not make a dashboard look like a marketing page.
- Do not make an admin panel feel like a landing page.

## Premium Visual Hierarchy

- Start with the user's decision, not the decoration.
- Make one thing dominant per viewport.
- Use size, weight, contrast, and placement before ornament.
- Keep primary action visible and distinct.
- Use secondary actions as quiet alternatives, not competing heroes.
- Make section titles describe purpose, not vague categories.
- Let metadata support the main content.
- Use whitespace to group and separate concepts.
- Use borders for structure and shadows for rare elevation.
- Make scan order obvious from top to bottom and side to side.

## Hierarchy Checklist

- Can a user identify the page purpose in three seconds?
- Is the primary action visually stronger than secondary actions?
- Are cards or sections ranked by importance?
- Does the eye know where to go next?
- Are labels, captions, and helper text quieter than main values?
- Are destructive actions distinct but not visually dominant until needed?

## Color Psychology By Product Category

- Legal: deep navy, charcoal, white, restrained gold; communicate authority and trust.
- Finance: blue, green, neutral, high contrast; communicate stability, precision, safety.
- Healthcare: white, soft blue, green, warm neutral; communicate calm and care.
- Developer tools: neutral, black, white, blue, violet sparingly; communicate precision and speed.
- Creative tools: neutral base with selective expressive accent; communicate freedom without chaos.
- SaaS operations: neutral surfaces, blue or green accents; communicate clarity and reliability.
- Luxury: deep darks, ivory, gold, muted jewel tones; communicate scarcity and refinement.
- Education: warm neutrals, clear blues, friendly accents; communicate guidance.
- AI products: avoid purple-blue cliché unless brand-owned; communicate capability through workflow clarity.

## Color Rules

- Use brand color as attention, not wallpaper.
- Keep neutral surfaces dominant for complex products.
- Reserve saturated color for action, status, or identity.
- Use semantic tokens for success, warning, destructive, info, and accent.
- Ensure text contrast survives real screens.
- Pair status colors with labels or icons.
- Design dark mode separately; do not invert blindly.

## Typography Systems

- Define roles: display, title, heading, body, label, caption, metric.
- Use one type scale per product surface.
- Use weight changes sparingly; too many bold elements flatten hierarchy.
- Keep line-height generous for prose and tighter for dense data.
- Use tabular numbers for KPIs and tables when available.
- Avoid negative tracking, especially in Persian UI.
- Use Persian-capable fonts for RTL products.
- Make labels short, precise, and scannable.
- Do not use hero-scale text inside cards, dashboards, or compact panels.

## Typography Checklist

- Is there a clear type scale?
- Are headings meaningfully different from body text?
- Are metrics aligned and readable?
- Are long labels handled without overflow?
- Is Persian text shaped and spaced naturally?
- Are uppercase, tracking, and font weight used intentionally?

## Spacing And White-Space Intelligence

- Use an 8px rhythm as the default.
- Use 4px for tight internal relationships.
- Use 16px to 24px for component internals.
- Use 32px to 48px for section rhythm in tools.
- Use 64px to 120px for landing page breathing room.
- Increase whitespace when concept changes.
- Reduce whitespace when items belong together.
- Do not fill empty space with decoration.
- Whitespace is premium when it clarifies, wasteful when it hides weak hierarchy.

## Layout Rhythm

- Repeat rhythm across sections so the product feels intentional.
- Align headings, bodies, CTAs, and media to stable edges.
- Use consistent max widths for prose, dashboards, and forms.
- Keep above-the-fold composition purposeful.
- Show a hint of next content on landing pages when possible.
- Avoid isolated floating cards unless the object truly needs framing.

## Grid Systems

- Use 12-column grids for marketing and complex responsive layouts.
- Use CSS grid for dashboards and data-heavy surfaces.
- Use fixed sidebar + flexible content for admin tools.
- Use container queries or content-driven breakpoints when available.
- Keep grid gaps consistent.
- Avoid masonry unless content naturally varies and ordering is not critical.
- Use stable chart and table dimensions to prevent layout shift.

## Gestalt Principles

- Proximity: nearby items are perceived as related.
- Similarity: repeated styling implies repeated meaning.
- Continuity: align edges to guide the eye.
- Closure: bordered or grouped regions imply a complete unit.
- Figure-ground: important content must separate from the surface.
- Common region: use panels to group controls only when grouping helps.
- Focal point: one standout element controls attention.

## Dashboard Composition

- Lead with the operational question.
- Put KPIs in decision order, not database order.
- Show trend, comparison, and timeframe for metrics.
- Use charts only when they answer a question.
- Keep filters close to the data they affect.
- Make empty and loading states preserve layout.
- Use tables for comparison and cards for summaries.
- Avoid equal-weight widget walls.
- Use density for speed, not clutter.

## Landing Page Composition

- Hero must communicate offer, audience, and next action.
- One strong H1; supporting copy carries nuance.
- CTA copy should describe the action.
- Trust signals need context.
- Feature sections should connect capability to outcome.
- Testimonials should be specific.
- Pricing should reduce decision anxiety.
- FAQ should address objections.
- Final CTA should feel earned.
- Avoid generic hero gradients without product signal.

## SaaS UI Patterns

- Use a durable app shell: sidebar/topbar/content/action region.
- Keep navigation labels concrete.
- Make current location obvious.
- Put create actions where users expect to start work.
- Use command menus only when they improve speed.
- Keep account, billing, team, and settings IA predictable.
- Make plan limits and permission states explicit.
- Provide undo or safe recovery for destructive actions.

## Card Design

- Cards need a purpose: summarize, compare, preview, or act.
- Do not put cards inside cards.
- Keep radius consistent.
- Use border first, shadow second.
- Keep card padding proportional to density.
- Do not make all cards equally loud.
- Avoid decorative icons that do not add meaning.
- Use hover states only if the card is interactive.

## CTA Design

- One primary CTA per decision region.
- CTA label must be action-specific.
- Use color, size, and placement to signal priority.
- Secondary CTA should reduce risk or offer exploration.
- Do not place three competing primary buttons together.
- Disabled CTA must explain why when not obvious.
- For RTL, verify icon direction and text alignment.

## Empty States

- Empty states should explain what happened.
- Offer the next useful action.
- Keep them visually calm.
- Do not over-illustrate operational empty states.
- Distinguish zero data from filtered-out data.
- For admin tools, include permission or setup hints when relevant.

## Onboarding Flows

- Ask only for information needed now.
- Show progress when multi-step.
- Use defaults and examples.
- Let users skip non-essential personalization.
- Celebrate completion quietly.
- Avoid modal stacks.
- Persist progress when possible.

## Pricing Sections

- Make plan differences comparable.
- Highlight the recommended plan only when there is a clear default.
- Put price, audience, limits, and CTA in predictable positions.
- Use plain language for features.
- Avoid fake urgency.
- Include billing period and currency clarity.
- Make enterprise contact paths obvious.

## Trust Sections

- Trust is built by specificity.
- Use logos only when meaningful.
- Pair claims with proof: metrics, testimonials, security notes, or case outcomes.
- Keep security and compliance sections sober.
- Avoid vague claims like "trusted by teams everywhere" without support.

## Admin Panel Polish

- Admin UI should feel controlled, not flashy.
- Tabs should show only active content unless comparison is intentional.
- Settings need grouping and live preview when output is user-facing.
- Dangerous actions need confirmation and recovery.
- Bulk actions need visible selection state.
- Audit logs need who, what, when.
- Use compact tables, clear filters, and sticky actions where useful.

## Data-Heavy Interface Design

- Optimize for scanning, filtering, comparing, and acting.
- Keep column alignment meaningful.
- Use numeric alignment for values.
- Use sticky headers for long tables when useful.
- Show units and timeframes.
- Use skeletons that match final structure.
- Avoid chart junk.
- Do not hide primary row actions behind hover-only controls.

## Interaction Design

- Every interactive element needs hover, focus, active, disabled where relevant.
- Pressed state should feel immediate.
- Focus state must be visible and accessible.
- Loading state should prevent double submit.
- Error state should show recovery.
- Use optimistic UI only when failure is manageable.
- Keep keyboard paths logical.

## Micro-Interactions

- Motion should confirm, orient, or explain.
- Use opacity and transform first.
- Keep duration short.
- Avoid motion on large data-heavy surfaces.
- Respect reduced motion.
- Use tactile feedback for toggles, tabs, menus, and command actions.
- Do not animate everything.

## Premium Dark Mode

- Dark mode needs surface hierarchy.
- Use multiple dark surfaces, not one flat black.
- Reduce saturated accents in dark mode.
- Avoid pure white text for large blocks.
- Keep borders visible but subtle.
- Make focus and selection states clear.
- Charts need dark-mode-safe colors.
- Shadows are less useful; use contrast and borders.

## Anti-AI-Looking UI Rules

- Avoid generic gradient blobs.
- Avoid four-card feature grids with identical weight unless content demands it.
- Avoid placeholder testimonials.
- Avoid vague copy like "streamline your workflow" without specifics.
- Avoid random glassmorphism.
- Avoid oversized icons in every card.
- Avoid decorative dashboards inside cards when real UI would be better.
- Avoid purple-blue AI clichés unless brand-owned.
- Avoid inconsistent radii, shadows, and spacing.
- Avoid fake complexity.

## Visual Consistency Engine

- Same role means same style.
- Same spacing relationship means same gap.
- Same action priority means same button treatment.
- Same status means same color and icon pattern.
- Same data type means same formatting.
- Same surface level means same background and border.
- Same interactive pattern means same state behavior.

## Design Language Selection

Choose based on product category:

- Consumer premium: Apple Calm.
- Productivity SaaS: Linear Precision or Notion Workspace.
- Developer product: Vercel Developer Premium or GitHub Utility.
- Command-heavy tool: Raycast Command Center.
- Conversion landing page: Stripe Conversion.
- Persian legal or finance: Persian Luxury RTL.
- Back-office system: Enterprise Admin Clean.

Choose based on user task:

- "Make it premium": pick the clearest product fit, then reduce ornament.
- "Modernize": preserve IA, improve hierarchy, tokens, spacing, and states.
- "Not AI-generated": remove generic gradients, fake cards, vague copy, and inconsistent decoration.
- "Dashboard": choose Linear Precision or Enterprise Admin Clean.
- "Landing page": choose Stripe Conversion, Apple Calm, or Persian Luxury RTL.

## Apple-Inspired Clarity

- Use restraint.
- Let content breathe.
- Make interactions feel obvious.
- Prefer fewer, stronger elements.
- Keep language simple.
- Use high-quality imagery only when it truly represents the product.

## Linear-Inspired Hierarchy

- Dense does not mean cramped.
- Align everything.
- Use quiet surfaces and sharp active states.
- Make issue, task, and status flows fast.
- Use dark mode with discipline.

## Stripe-Inspired Conversion Polish

- Make value concrete.
- Use progressive sections that build confidence.
- Keep CTA path visible.
- Use color energy sparingly.
- Use proof near claims.
- Make pricing and integration details clear.

## Vercel-Inspired Developer Premium

- Respect developer attention.
- Use monochrome confidence.
- Make code, API, and deployment concepts readable.
- Keep docs-like clarity in product UI.
- Use performance as part of the design.

## Raycast-Inspired Command-Center UX

- Optimize for speed.
- Use compact rows, shortcuts, and command surfaces.
- Make search central.
- Keep feedback immediate.
- Avoid slow, decorative transitions.

## GitHub-Inspired Product Utility

- Use durable components.
- Make state and permissions obvious.
- Prioritize working affordances over polish theater.
- Keep navigation predictable.
- Make collaboration and history easy to inspect.

## Notion-Inspired Calm Workspace

- Use soft hierarchy.
- Keep surfaces calm.
- Make editing and organization feel approachable.
- Avoid heavy chrome.
- Let content define structure.

## Persian Luxury RTL

- Use formal Persian typography.
- Use dark navy, charcoal, ivory, muted gold, or restrained jewel accents.
- Keep gold accents rare and meaningful.
- Respect RTL flow in nav, forms, tables, modals, and icons.
- Use dignified copy.
- Avoid playful SaaS styling for legal, finance, or official interfaces.

## Design Critique Checklist

- Is there one clear design language?
- Is hierarchy unmistakable?
- Is typography scaled and consistent?
- Is spacing rhythmic?
- Is color semantic and restrained?
- Are components consistent?
- Are interactions polished?
- Does dark mode feel designed?
- Does RTL feel native when relevant?
- Does the UI avoid generic AI patterns?

## Score Gate

Before final delivery on visual UI, score:

- visual hierarchy
- typography
- spacing
- color system
- component consistency
- interaction quality
- premium feel
- non-AI look
- RTL polish when relevant

Any score below 90 requires revision before final response.
