# shadcncraft Sales & Marketing design system

Sources: https://shadcncraft.com/, https://shadcncraft.com/apps/sales-marketing-dashboard, and https://shadcncraft-sales-marketing-dashboard.vercel.app/

Evidence was extracted September 15, 2026 from the sites' own CSS, browser computed styles, page structure, and full-page screenshots rather than Firecrawl because this runtime cannot route the stored key into a shell process.

## Exact tokens
- Geist with Geist Mono accents; 12, 14, 16px product type.
- Canvas `#0a0a0a`; sidebar/cards `#171717`/`#181818`; dividers `#292929`/`#333`; text `#f5f5f5`; muted `#999`; blue `#2476ff`; positive `#5de69a`; negative `#ff6868`.
- Common gaps 4, 6, 8, 12, 24, 36px. App cards use 10-15px radii; controls 7-10px.

## Full product scope
Shared sidebar and filter bar across Overview, Analytics, Campaigns, Deals, Leads, Customers, Settings. Overview includes four metrics, leads comparison, attribution, revenue target, goals, and leaderboard. Analytics includes traffic, channels, and funnel. Campaigns includes performance table, media allocation, send-time heatmap, and growth simulator. Deals has kanban and table. Leads has metrics, trend, funnel, and table. Customers has health, leaderboard, and table. Settings has profile tabs and form.

## Library mapping
Recharts for charts, dnd-kit for cards, Lucide for controls, semantic tables/forms, Next Link routing.

## Marketing scope
The marketing recreation follows the live homepage's announcement rail, dense floating navigation, creator proof, centered AI-workflow hero, dashboard showcase, 282-block catalog, and agent-skills section. Mobile collapses the navigation while preserving its dense product proof and stacks block specimens.

## Refero-style detailed record

> A production-minded black component workshop where blocks and a complete sales app share one precise system.

**Theme:** dark neutral

### Refero provenance
Exact Refero match not found September 15, 2026. A shadcn/ui entry exists but is not shadcncraft and was not substituted.

### Role-based color tokens

| Name | Value | Role |
|---|---|---|
| Canvas | `#0a0a0a` | ground |
| Card | `#181818` | panels |
| Border | `#292929` | rules |
| Text | `#f5f5f5` | primary |
| Muted | `#999999` | secondary |
| Blue | `#2476ff` | action/chart |
| Positive | `#5de69a` | growth |

### Typography and type scale
Geist/Geist Mono; product 12/14/16px; marketing 38-52px, -0.04em display tracking.

### Spacing, sizing, and radii
4px base; 6/8/12/24/36px; 7-10px control radii; 10-15px card radii.

### Layout and responsive behavior
Sticky rail across seven routes; dense dashboard grids. Mobile stacks cards and makes kanban swipeable.

### Elevation and borders
Fine gray borders and black tonal shifts; subtle shadow only on framed proof.

### Component treatments
Filters, KPI cards, charts, deal board, heatmap, data tables, settings forms, block specimens.

### Imagery and motion
Product evidence and functional states carry the visual story unless the source section above names a distinct media treatment. Motion should clarify state change, never decorate idle surfaces.

### Do
- Use shadcn/Radix primitives; retain information density and Figma/React parity.

### Don't
- Do not soften into pastel SaaS, invent routes, or over-round.

### Inference limits
Role names here normalize the measured implementation and cited source into the shared repo schema. They are not claimed as the source company's internal token names unless the earlier evidence section says so.
