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
