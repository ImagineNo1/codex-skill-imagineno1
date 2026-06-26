# Tailwind

Load when: Use this for utility conventions, token usage, class organization, extraction strategy, arbitrary value policy, and responsive behavior.

## Staff-Level Intent

Treat tailwind as a product quality system, not a cosmetic checklist.
Make decisions that improve clarity, speed, accessibility, maintainability, and trust.
When project conventions conflict with these rules, inspect first and change only with a clear reason.

## Non-Negotiables

- Start from the existing system before inventing a new one.
- Prefer one clear hierarchy over many equally loud elements.
- Use real product content and meaningful states; avoid placeholder theater.
- Keep density intentional: roomy for marketing, tighter for tools, never cramped by accident.
- Make mobile behavior explicit instead of hoping flex-wrap saves the layout.
- Treat hover, focus, active, disabled, loading, empty, and error as first-class states.
- Use contrast, spacing, borders, and alignment before adding shadows or gradients.
- Preserve project conventions unless the current convention is the source of the problem.
- Prefer composable primitives over page-specific monoliths.
- Make accessibility and performance part of the implementation, not a final garnish.

## Topic Rules

- Use Tailwind as a token language, not a random value scratchpad.
- Prefer scale values from the config before arbitrary values.
- Extract repeated class clusters into components when they represent a UI primitive.
- Keep one-off layout classes inline when extraction would hide simple intent.
- Use responsive prefixes deliberately: base mobile first, then enhance.
- Use group, peer, data attributes, and aria selectors for stateful styling.
- Prefer logical utilities when available for RTL-sensitive spacing.
- Do not create className walls that obscure component meaning.
- Keep color utilities semantic through CSS variables when shadcn is present.
- Avoid negative spacing unless solving a deliberate overlap.

## Implementation Heuristics

- Heuristic 1: Use Tailwind as a token language, not a random value scratchpad. Apply it through existing components, tokens, routes, and state boundaries before adding new abstractions.
- Heuristic 2: Prefer scale values from the config before arbitrary values. Apply it through existing components, tokens, routes, and state boundaries before adding new abstractions.
- Heuristic 3: Extract repeated class clusters into components when they represent a UI primitive. Apply it through existing components, tokens, routes, and state boundaries before adding new abstractions.
- Heuristic 4: Keep one-off layout classes inline when extraction would hide simple intent. Apply it through existing components, tokens, routes, and state boundaries before adding new abstractions.
- Heuristic 5: Use responsive prefixes deliberately: base mobile first, then enhance. Apply it through existing components, tokens, routes, and state boundaries before adding new abstractions.
- Heuristic 6: Use group, peer, data attributes, and aria selectors for stateful styling. Apply it through existing components, tokens, routes, and state boundaries before adding new abstractions.
- Heuristic 7: Prefer logical utilities when available for RTL-sensitive spacing. Apply it through existing components, tokens, routes, and state boundaries before adding new abstractions.
- Heuristic 8: Do not create className walls that obscure component meaning. Apply it through existing components, tokens, routes, and state boundaries before adding new abstractions.
- Heuristic 9: Keep color utilities semantic through CSS variables when shadcn is present. Apply it through existing components, tokens, routes, and state boundaries before adding new abstractions.
- Heuristic 10: Avoid negative spacing unless solving a deliberate overlap. Apply it through existing components, tokens, routes, and state boundaries before adding new abstractions.
- Heuristic 11: Use Tailwind as a token language, not a random value scratchpad. Apply it through existing components, tokens, routes, and state boundaries before adding new abstractions.
- Heuristic 12: Prefer scale values from the config before arbitrary values. Apply it through existing components, tokens, routes, and state boundaries before adding new abstractions.
- Heuristic 13: Extract repeated class clusters into components when they represent a UI primitive. Apply it through existing components, tokens, routes, and state boundaries before adding new abstractions.
- Heuristic 14: Keep one-off layout classes inline when extraction would hide simple intent. Apply it through existing components, tokens, routes, and state boundaries before adding new abstractions.
- Heuristic 15: Use responsive prefixes deliberately: base mobile first, then enhance. Apply it through existing components, tokens, routes, and state boundaries before adding new abstractions.
- Heuristic 16: Use group, peer, data attributes, and aria selectors for stateful styling. Apply it through existing components, tokens, routes, and state boundaries before adding new abstractions.
- Heuristic 17: Prefer logical utilities when available for RTL-sensitive spacing. Apply it through existing components, tokens, routes, and state boundaries before adding new abstractions.

## Inspection Checklist

- Find the closest existing implementation before creating a new pattern.
- Check global CSS, Tailwind config, component primitives, and route structure.
- Check states, responsive behavior, accessibility, and data loading boundaries.
- Check whether the UI needs RTL or Persian-specific formatting.
- Check whether the task changes public UX, admin UX, or shared system behavior.
- Check whether the change introduces a new dependency, token, variant, or route.
- Check whether the same problem is already solved elsewhere in the app.
- Check whether the implementation can be verified with lint, typecheck, build, tests, or browser QA.
- Check whether real content, long labels, empty data, and slow networks break the design.
- Check whether the new surface still reads as part of the same product.

## Anti-Patterns

- Do not ship generic AI-looking cards with equal weight everywhere.
- Do not add decorative gradients when hierarchy is the actual missing piece.
- Do not introduce a second design system inside one feature.
- Do not duplicate components that already exist with compatible APIs.
- Do not hide broken mobile layouts behind horizontal overflow unless data truly requires it.
- Do not use weak gray text for important information.
- Do not rely on color alone to communicate state.
- Do not hard-code direction-sensitive left/right choices in RTL projects without checking strategy.
- Do not make motion block comprehension or task completion.
- Do not optimize code shape while making the user workflow worse.

## Enterprise Review Questions

- What is the primary user decision on this screen?
- What information is required before that decision is safe?
- What can be removed without reducing comprehension?
- What state is most likely to fail in production?
- What will happen with real names, long labels, empty data, and slow networks?
- Does the mobile version preserve the same workflow priority?
- Does keyboard navigation match visual expectations?
- Does the component API make the next change easier?
- Does the visual system still feel like one product?
- Would this survive a design review and a code review?

## Verification

- Run the available validation commands: lint, typecheck, tests, and build when present.
- Use browser verification for layout, interaction, and responsive changes when practical.
- Inspect focus states and tab order for new interactive surfaces.
- Inspect reduced motion behavior when adding animation.
- Inspect dark mode when tokens or surfaces changed.
- Inspect RTL behavior when Persian UI or direction-sensitive layout changed.
- Report validation failures with exact commands and the practical risk.
- Preserve unrelated user changes and do not normalize files outside the task.

## Decision Matrix

- If the problem is unclear, inspect and propose one direction before coding.
- If the pattern exists, extend it instead of creating a parallel version.
- If the pattern is broken, repair the shared primitive before patching every caller.
- If the UI is public-facing, optimize for first impression, trust, and conversion clarity.
- If the UI is operational, optimize for repeat use, scan speed, and error prevention.
- If the UI is admin-only, optimize for control, auditability, and reversible actions.
- If a dependency is optional, prefer native platform or existing project tools first.
- If a change affects routing, verify layout, metadata, loading, and error boundaries.
- If a change affects forms, verify validation, disabled states, async failure, and recovery.
- If a change affects data display, verify empty, partial, loading, stale, and permission states.

## Production Hardening

- Keep copy, labels, and actions specific enough for production users.
- Keep visual choices explainable through product goals.
- Keep component boundaries stable under future requirements.
- Keep failure states as polished as the happy path.
- Keep measurements and alignments consistent across adjacent surfaces.
- Keep final implementation smaller than the design debt it removes.

## Done Means

- The UI solves the requested workflow without hidden instructions.
- The implementation fits the existing architecture.
- The states are present and coherent.
- The layout is stable across realistic content sizes.
- The design uses tokens and consistent variants.
- The accessibility path is intentional.
- The final response names changed files, decisions, checks, validation, and risks.
- The next engineer can extend the work without reverse-engineering taste decisions.
