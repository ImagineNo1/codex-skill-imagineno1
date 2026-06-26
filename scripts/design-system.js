#!/usr/bin/env node
const { search } = require("./search.js");

function pick(query, domain, extra = {}) {
  return search(query, { domain, max: 1, ...extra })[0] || null;
}

function list(query, domain, max = 3, extra = {}) {
  return search(query, { domain, max, ...extra });
}

function uniqueByGuidance(items) {
  const seen = new Set();
  return items.filter((item) => {
    const key = item.guidance || item.name;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function hasRTL(query) {
  return /persian|rtl|farsi|فارسی|ایران|legal|law/i.test(query);
}

function recommendation(query) {
  const product = pick(query, "product") || pick(query, "products");
  const rtl = hasRTL(query);
  const style = pick(`${query} ${rtl ? "persian rtl luxury" : ""}`, rtl ? "design-language" : "style");
  const language = pick(`${query} ${style ? style.name : ""}`, "design-language") || style;
  const color = pick(`${query} ${language ? language.name : ""}`, "color");
  const type = pick(`${query} ${rtl ? "persian rtl" : ""}`, "typography");
  const chart = pick(`${query} dashboard analytics`, "chart");
  const ux = uniqueByGuidance(list(query, "ux", 10)).slice(0, 5);
  const stack = list(query, "stack", 4);
  const rtlNotes = rtl ? list(query, "persian", 5) : [];

  return {
    query,
    designLanguage: language && { name: language.name, guidance: language.guidance, tags: language.tags },
    product: product && { name: product.name, guidance: product.guidance, tags: product.tags },
    colorPalette: color && { name: color.name, colors: color.colors, guidance: color.guidance },
    typography: type && { name: type.name, heading: type.heading, body: type.body, guidance: type.guidance },
    spacingRhythm: rtl ? "8px base, 24px card padding, 40px section rhythm, wider line-height for Persian text" : "8px base, 16/24px component rhythm, 48/72px section rhythm",
    radiusElevation: "Use existing tokens first; default to 8px radius, subtle borders, shadow only for elevated overlays.",
    componentTone: "Reuse existing components; add variants only for reusable differences; keep states complete.",
    chartStyle: chart && { name: chart.name, guidance: chart.guidance },
    recommendations: {
      landing: "Hero should state audience, value, proof, and one primary CTA. Use trust near claims.",
      dashboard: "Start with KPIs in decision order, then filters, charts, and tables with empty/loading/error states.",
      uxGuidelines: ux.map((item) => item.guidance),
      stackGuidance: stack.map((item) => `${item.name}: ${item.guidance}`),
    },
    rtlNotes: rtlNotes.map((item) => item.guidance),
    implementationChecklist: [
      "Choose one visual language and do not mix unrelated styles.",
      "Use project design tokens before introducing new values.",
      "Verify responsive, dark mode, keyboard, loading, empty, and error states.",
      "Run the Design Critique Gate before final delivery.",
      rtl ? "Verify RTL direction, Persian typography, Jalali/currency formatting, and mixed LTR isolation." : "Check whether RTL is out of scope or needs defensive layout choices."
    ]
  };
}

function markdown(rec) {
  const lines = [
    `# Design System Recommendation`,
    "",
    `Query: ${rec.query}`,
    "",
    `## Design Language`,
    rec.designLanguage ? `- ${rec.designLanguage.name}: ${rec.designLanguage.guidance}` : "- No direct match; inspect product context.",
    "",
    `## Product Match`,
    rec.product ? `- ${rec.product.name}: ${rec.product.guidance}` : "- No direct match; define product type first.",
    "",
    `## Color Palette`,
    rec.colorPalette ? `- ${rec.colorPalette.name}: ${rec.colorPalette.colors.join(", ")}\n- ${rec.colorPalette.guidance}` : "- Use existing project tokens.",
    "",
    `## Typography`,
    rec.typography ? `- ${rec.typography.name}: heading ${rec.typography.heading}; body ${rec.typography.body}\n- ${rec.typography.guidance}` : "- Use existing font system.",
    "",
    `## Spacing / Radius / Elevation`,
    `- ${rec.spacingRhythm}`,
    `- ${rec.radiusElevation}`,
    "",
    `## Components`,
    `- ${rec.componentTone}`,
    "",
    `## Chart Style`,
    rec.chartStyle ? `- ${rec.chartStyle.name}: ${rec.chartStyle.guidance}` : "- Choose charts only after identifying the decision.",
    "",
    `## Landing / Dashboard Guidance`,
    `- ${rec.recommendations.landing}`,
    `- ${rec.recommendations.dashboard}`,
    "",
    `## UX Guidelines`,
    ...rec.recommendations.uxGuidelines.map((item) => `- ${item}`),
    "",
    `## Stack Guidance`,
    ...rec.recommendations.stackGuidance.map((item) => `- ${item}`),
    "",
    `## RTL Notes`,
    ...(rec.rtlNotes.length ? rec.rtlNotes.map((item) => `- ${item}`) : ["- No RTL-specific match detected."]),
    "",
    `## Implementation Checklist`,
    ...rec.implementationChecklist.map((item) => `- ${item}`),
  ];
  return lines.join("\n");
}

if (require.main === module) {
  const query = process.argv.slice(2).filter((arg) => arg !== "--").join(" ").trim();
  if (!query) {
    console.error('Usage: node scripts/design-system.js "product query"');
    process.exit(1);
  }
  console.log(markdown(recommendation(query)));
}

module.exports = { recommendation, markdown };
