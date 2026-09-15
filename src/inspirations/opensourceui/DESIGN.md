# OpenSourceUI design system
Source: https://opensourceui.in/components?category=Calender and its five component detail pages. Evidence extracted from the site's own CSS, computed styles, page structure, and full-page screenshot on September 15, 2026 rather than Firecrawl because the stored key cannot be routed into shell.

## Tokens
Geist and Geist Mono, predominantly 13px text with 10px mono labels and serif editorial headings. White canvas; `#111` primary; gray `#777` and `#999`; borders `#e3e3e3`; pink brand `#fb315d`; cyan active underline `#50dfe0`. Nearly square docs chrome (0-8px radius), 12-20px padding, 6/12/16px gaps.

## Full calendar scope
Booking Slot Calendar, Date Range Picker, Event Countdown Card, Month Picker Calendar, Week Strip Calendar. Every surface includes Preview, Setup, and How to use tabs in a shared three-column docs shell. React Day Picker owns range selection; Radix owns tabs; Lucide owns adaptable controls.
