# Brand And Asset Workflows

Load when: Use this for banners, posters, thumbnails, social visuals, brand kits, logo direction, landing hero visuals, exact export sizes, or marketing assets that need visual QA.

## Principle

Treat marketing visuals as designed artifacts with constraints: purpose, audience, platform, size, brand, message, hierarchy, and export quality.

## Brand Package Workflow

1. Capture brand purpose, audience, offer, competitors, tone, and constraints.
2. Define visual language: premium, playful, editorial, technical, luxury, formal, or calm.
3. Choose tokens: color, typography, spacing, radius, imagery, icon style.
4. Define voice: concise, formal, energetic, expert, warm, or luxury.
5. Produce a small system: logo direction, palette, type, buttons, cards, social examples.
6. Verify consistency across light/dark and mobile/social crops.

## Logo Direction Workflow

- Identify industry, audience, tone, and usage size.
- Choose mark type: wordmark, monogram, symbol, badge, abstract, seal.
- Check small-size legibility.
- Avoid over-detailed marks.
- Define clear-space, one-color, dark, and light variants.
- For Persian brands, check Persian letterform balance and RTL lockup.

## Banner Workflow

1. Choose platform and exact size.
2. Define one message and one CTA.
3. Set hierarchy: brand, hook, proof, CTA.
4. Use one visual idea.
5. Keep safe margins.
6. Export at exact dimensions.
7. Verify text is readable at final size.

## Social Post Workflow

- Instagram post: 1080x1080.
- Instagram story: 1080x1920.
- LinkedIn: 1200x627.
- X/Twitter: 1200x675.
- YouTube thumbnail: 1280x720.
- Pinterest: 1000x1500.
- Facebook/OpenGraph: 1200x630.

For every format:

- keep headline short
- keep CTA optional but clear
- preserve logo safe area
- verify crop behavior
- avoid tiny text
- use platform-native density

## Poster Workflow

- Define viewing distance.
- Use one dominant title.
- Put date, location, speaker, or offer in predictable order.
- Use high contrast.
- Keep QR codes and sponsor marks away from crowded regions.
- Export print and digital variants separately.

## Landing Hero Visual Workflow

- Use product, place, object, state, or real workflow as the visual anchor.
- Avoid purely atmospheric blur when users need inspection.
- Match hero media to the design language.
- Verify first viewport has brand/product signal.
- Keep next section hinted when landing-page composition needs scroll invitation.

## Exact Export Size Workflow

1. Create a fixed-size artboard in HTML/CSS or design tool.
2. Use stable dimensions and safe margins.
3. Load fonts before screenshot/export.
4. Export at 1x or 2x as required.
5. Inspect final pixels for clipping, blurry text, and contrast.

## Playwright Screenshot Verification

Use when exportable visuals, landing heroes, or responsive UI need pixel-level QA:

1. Start the local dev server.
2. Open the target route with Playwright or browser tooling.
3. Set viewport to exact export size.
4. Wait for fonts and images.
5. Capture screenshot.
6. Inspect for clipping, overflow, unreadable text, blank images, wrong crop, and layout shift.
7. Fix and recapture until clean.

## Asset Quality Gate

- one message
- one visual direction
- exact dimensions
- readable text
- accessible contrast
- brand consistency
- no accidental crop
- no generic stock feel
- no mixed style language
