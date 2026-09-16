# OpenSourceUI design system
Source: https://opensourceui.in/components?category=Calender and its five component detail pages. Evidence extracted from the site's own CSS, computed styles, page structure, and full-page screenshot on September 15, 2026 rather than Firecrawl because the stored key cannot be routed into shell.

## Tokens
Geist and Geist Mono, predominantly 13px text with 10px mono labels and serif editorial headings. White canvas; `#111` primary; gray `#777` and `#999`; borders `#e3e3e3`; pink brand `#fb315d`; cyan active underline `#50dfe0`. Nearly square docs chrome (0-8px radius), 12-20px padding, 6/12/16px gaps.

## Full calendar scope
Booking Slot Calendar, Date Range Picker, Event Countdown Card, Month Picker Calendar, Week Strip Calendar. Every surface includes Preview, Setup, and How to use tabs in a shared three-column docs shell. React Day Picker owns range selection; Radix owns tabs; Lucide owns adaptable controls.

## Marketing scope
The marketing recreation follows the live homepage's narrow masthead and editorial hero, launch metrics, white docs-library canvas, category rail, component cards, and open-license close. Mobile turns metrics into a deliberate horizontal strip and stacks all five calendar cards.

## Refero-style detailed record

> A narrow editorial component notebook: white paper, quiet serif hierarchy, copy-paste calendars without package theater.

**Theme:** light editorial docs

### Refero provenance
Exact Refero match not found September 15, 2026; primary evidence is the linked calendar category and detail pages.

### Role-based color tokens

| Name | Value | Role |
|---|---|---|
| Paper | `#ffffff` | canvas |
| Ink | `#111111` | primary |
| Body | `#777777` | secondary |
| Border | `#e3e3e3` | docs chrome |
| Pink | `#fb315d` | brand |
| Cyan | `#50dfe0` | active |

### Typography and type scale
Geist/Geist Mono 10/13/16px UI; Georgia-like 33-50px headings; body line height 1.55.

### Spacing, sizing, and radii
6px base; 6/12/16/20/30/60px; radii 6-8px controls, 12-16px cards.

### Layout and responsive behavior
Three-column docs shell; narrow 580px marketing column opening to wide cards. Mobile collapses rails and stacks examples.

### Elevation and borders
1px gray borders, no decorative shadow; white/#fafafa tonal separation.

### Component treatments
Preview/Setup/How-to tabs, five calendar patterns, category rail, metric cards.

### Imagery and motion
Product evidence and functional states carry the visual story unless the source section above names a distinct media treatment. Motion should clarify state change, never decorate idle surfaces.

### Do
- Keep code ownership/MIT clear and show all five exact patterns.

### Don't
- Do not turn it into CRM, use heavy shadows, or hide setup/how-to.

### Inference limits
Role names here normalize the measured implementation and cited source into the shared repo schema. They are not claimed as the source company's internal token names unless the earlier evidence section says so.
