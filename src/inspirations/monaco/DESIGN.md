# Monaco design system

Source: https://www.monaco.com/product and https://www.monaco.com/

## Evidence

- Six official product screenshots downloaded from `/pages/product/sections/{1-build-tam,2-overlay-signals,3-execute-sequences,4-capture-activity,5-track-pipeline,6-ask-monaco}.png`.
- Homepage feature posters and product-page structure inspected on September 15, 2026.
- Exact marketing-page tokens were rechecked from Monaco's own CSS and browser computed styles on September 15, 2026: Inter product body, Season Serif marketing display, black canvas, white text, 16/24/32/40px dominant gaps, 6/16/20/42px radii. Firecrawl was not used because this runtime cannot route the stored vault key into shell; the source CSS and full-page screenshots are preserved evidence.

## Color

- Canvas `#080909`; inset surface `#101111`; raised control `#17191a`; modal `#2a2c2e`.
- Hairlines `#202428` to `#303337`; primary text `#ededed`; secondary `#b5b5b5`; muted `#777`.
- Positive pill `#004d2c` / `#bdf0d1`; blue state `#173674` / `#bdd5ff`; magenta category `#701049` / `#ffd2e8`; gold category `#633c05` / `#f4d082`; AI accent violet `#7368ed`.

## Type and spacing

- Dense product UI uses Inter/system sans, 11-14px table and navigation text, 18-28px page headings.
- Table header 40px, data row 48px, 1px dividers. Controls are 31-37px high with 6-9px radii.
- Spacing follows a 4px base: 8, 12, 16, 20, 24, 32.

## Shared product shell

- Near-black top bar, Monaco mark left, six numbered product surfaces centered, search/avatar right.
- Narrow shared workspace rail. The six surfaces remain routes inside one product, not separate visual studies.

## Surface patterns

1. Build TAM: viewport-wide spreadsheet, frozen-feeling headers, logo/account cells, compact status, score and categorical pills, revenue stat strip.
2. Overlay signals: same spreadsheet state, nonselected rows dimmed, anchored reasoning/sources popover, three source cards.
3. Execute sequences: numbered vertical step rail and large editable gift-message form.
4. Capture activity: large meeting stage paired with a meeting-notes/timeline panel.
5. Track pipeline: vertical deal cards, selected-card lightning marker, detail overview, AI re-engage prompt, revenue leaderboard.
6. Ask Monaco: darkened table underneath a compact gray Ask AI dialog with prompt bubble, coaching bullets, citations, follow-up composer.

## Component mapping

- Radix Popover and Tabs for reasoning, sources, notes and timeline.
- dnd-kit for opportunity cards.
- Lucide icons for adaptable controls; CSS only for Monaco's four-square mark and material styling.

## Refero-style detailed record

> A cinematic black revenue workspace where dense evidence stays legible and AI is a restrained layer.

**Theme:** dark product / black editorial marketing

### Refero provenance
Exact Refero match not found in a September 15, 2026 site-scoped check; near-name results were rejected. Primary evidence remains Monaco’s live pages and six official captures.

### Role-based color tokens

| Name | Value | Role |
|---|---|---|
| Canvas | `#080909` | page/table ground |
| Surface | `#101111` | inset areas |
| Raised | `#17191a` | controls/cards |
| Text | `#ededed` | primary copy |
| Muted | `#777777` | metadata |
| AI violet | `#7368ed` | AI actions |

### Typography and type scale
Inter/system 11-14px UI, 18-28px product headings; Season Serif 44-80px marketing display; display tracking -0.03em, line height 1.2-1.5.

### Spacing, sizing, and radii
4px base; 8/12/16/20/24/32/40px; controls 31-37px; radii 6/9px controls, 16/20px panels, 42px pills.

### Layout and responsive behavior
Edge-to-edge product below one six-surface bar; wide tables and split detail. Mobile keeps tables intentionally horizontal and stacks detail.

### Elevation and borders
1px #202428-#303337 rules; tonal depth, almost no soft shadow.

### Component treatments
Tables, categorical pills, source popover, sequence rail, meeting stage, opportunity cards, Ask dialog.

### Imagery and motion
Product evidence and functional states carry the visual story unless the source section above names a distinct media treatment. Motion should clarify state change, never decorate idle surfaces.

### Do
- Keep six surfaces united; reserve violet for AI; preserve evidence density.

### Don't
- Do not split into disconnected demos, brighten the black system, or replace data with decorative cards.

### Inference limits
Role names here normalize the measured implementation and cited source into the shared repo schema. They are not claimed as the source company's internal token names unless the earlier evidence section says so.
