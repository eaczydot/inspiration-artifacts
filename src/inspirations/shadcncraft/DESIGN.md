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
