# Internal agentic sales prototype - sourced component map

Request provenance: Yogi Suria's X post https://x.com/suriadesign/status/2099963201823920273 lists nine UI resources. X's page fetch was blocked, so the post text and expanded links were resolved through X's official oEmbed response and the linked public video, then each resource was checked on its own site.

Resources: https://uimaxx.ing, https://bencho.dev, https://ui.halaska.com, https://libraries.dev, https://aicss.dev, https://beui.dev, https://builtbydesigners.com, https://beautifului.dev, and https://kobra.systems.

## Components selected
- AI product sidebar and dark neutral shell: UI by Halaska.
- Ask-anything / agent prompt bar: UImaxxing and Beautiful UI.
- Agent thinking steps, tool state, and structured data: AICSS.
- Human approval, recommendation, records table, flowchart, insight cards: Beautiful UI.
- Live configurable block composition: Bencho.
- Motion grammar: beUI.
- Form-control finish: Kobra.
- Libraries.dev and Built by Designers remain discovery sources in the in-product resource catalog.

The code adapts these public patterns into the repository's React, Lucide, Recharts-ready, shared Tailwind/token stack rather than importing opaque dependencies. Product capabilities include a command composer, agent-run steps, priority records, activity, human approval, analytics, workflow, and source library.

## Refero-style detailed record

> A calm operator console where sales agents expose evidence, progress, and proposed actions before a human commits.

**Theme:** light operational UI / dark command rail

### Refero provenance
Refero exact product match is not applicable to this original internal prototype. Search Refero for workflow references before future expansion.

### Role-based color tokens

| Name | Value | Role |
|---|---|---|
| Canvas | `#f5f5f3` | workspace |
| Panel | `#ffffff` | data |
| Ink | `#191a18` | primary |
| Rail | `#111210` | nav/prompt |
| Line | `#e3e4df` | structure |
| Acid | `#c8ff3e` | run |
| Success | `#0aa56e` | evidence |

### Typography and type scale
Inter/system; 10-14px dense product; 18px prompt; 24-30px data headings; line height 1.4-1.5.

### Spacing, sizing, and radii
4px base; 8/12/14/16/20/24/34px; radii 7-9px controls, 12px cards, 15px composer.

### Layout and responsive behavior
230px rail and max-1120px canvas; priority/activity split; full-width approval. Mobile uses 62px rail and stacked cards.

### Elevation and borders
1px warm-gray borders; faint 20-50px command shadow; tonal hierarchy elsewhere.

### Component treatments
Prompt bar, thinking steps, records, timeline, approval, KPIs, workflow, source library.

### Imagery and motion
Product evidence and functional states carry the visual story unless the source section above names a distinct media treatment. Motion should clarify state change, never decorate idle surfaces.

### Do
- Show agent state/sources, require approval, attribute every borrowed pattern.

### Don't
- Do not auto-send outreach, hide failures, or make the prompt the whole product.

### Inference limits
Role names here normalize the measured implementation and cited source into the shared repo schema. They are not claimed as the source company's internal token names unless the earlier evidence section says so.
