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
