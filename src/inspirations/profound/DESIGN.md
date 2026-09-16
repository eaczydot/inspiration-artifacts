# Profound design extraction

Requested provenance: Evan supplied Instagram reel `Db2FJERS0N_` and post `DclwGgrgKAs` as the Profound reference. Instagram exposed no usable post content in the public fetch, so the recreation was grounded in Profound's own current public assets instead: https://www.tryprofound.com/, https://www.tryprofound.com/features/answer-engine-insights, the canonical https://www.tryprofound.com/ai-instructions, and the public product/help descriptions at https://help.tryprofound.com/articles/3443229936-answer-engine-insights-overview and https://help.tryprofound.com/articles/9762251986-agents-overview. Inspected September 15, 2026.

## Extracted system
- Near-black shell, fine gray rules, white compact grotesk display, high-chroma mint accent.
- Marketing hierarchy: narrow nav, funding banner, centered AI-platform hero, dark embedded AI Marketer, enterprise logo rail, grid-backed Answer Engine Insights, platform cards, light AI Marketer section, dark close.
- Product: fixed black workspace rail, AI Marketer / Analytics switch, Recents rail, chat/work output, visibility metrics, multi-engine trend chart, tracked prompt table.
- Lucide is used for interface primitives. Product interactions switch surfaces and send a local AI Marketer prompt.

## Refero-style detailed record

> An obsidian AI-marketing command room where answer-engine evidence is sparse and punctuated by one mint signal.

**Theme:** dark with one light section

### Refero provenance
Exact Refero match not found September 15, 2026; primary evidence is tryprofound.com and its public product/help pages.

### Role-based color tokens

| Name | Value | Role |
|---|---|---|
| Obsidian | `#050505` | ground |
| Panel | `#0d0d0d` | surfaces |
| Rule | `#292929` | grid |
| Text | `#f7f7f7` | primary |
| Muted | `#929292` | secondary |
| Mint | `#16f2b3` | AI/insight |

### Typography and type scale
Compact grotesk/system; marketing 42-61px at -0.05em/1.0; product 11-16px; analytic display 25-28px.

### Spacing, sizing, and radii
4px base; 8/12/16/20/25/35/60px; radii 7-11px controls/cards, 14px frame.

### Layout and responsive behavior
Centered hero and embedded product; 4-column insight grid; product 230px workspace + optional 220px recents. Mobile collapses to 62px rail.

### Elevation and borders
Near-black layers and 1px rules; no glow; restrained shadow only in light section.

### Component treatments
AI thread, recents, recommendation, visibility metrics, multi-engine chart, prompt table.

### Imagery and motion
Product evidence and functional states carry the visual story unless the source section above names a distinct media treatment. Motion should clarify state change, never decorate idle surfaces.

### Do
- Use mint only for evidence; preserve black space and metric rigor.

### Don't
- Do not use neon gradients, invent Instagram evidence, or confuse profound.com with tryprofound.com.

### Inference limits
Role names here normalize the measured implementation and cited source into the shared repo schema. They are not claimed as the source company's internal token names unless the earlier evidence section says so.
