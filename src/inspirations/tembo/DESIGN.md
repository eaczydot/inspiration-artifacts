# Tembo design extraction

Source scope: current public marketing site at https://www.tembo.io/ and its embedded Home product preview, inspected September 15, 2026. Marketing uses a large cornflower-blue hero, sparse white navigation, oversized compact grotesk display, an airy product frame, black stack explanation, pale cloud-runtime section, integration matrix, security panel, and centered close. The product recreation follows the embedded control plane: fixed light-gray rail, Home composer, suggested agents, active sessions, session states, automations, and PR review.

## Adaptation
- One shared neutral/blue token family serves marketing and product.
- Lucide supplies interface and integration symbols.
- Responsive layouts are authored for 375px and 390px while preserving Tembo's dense desktop control plane.
- Interactive product navigation, prompt launch, template selection, sessions, agents, and review surfaces are implemented locally without copying private data.

## Refero-style detailed record

> A cloud-blue launchpad that makes parallel coding-agent work calm, observable, and ready for review.

**Theme:** blue marketing / light control plane

### Refero provenance
Exact Refero match not found September 15, 2026; primary evidence is Tembo’s current homepage and embedded control plane.

### Role-based color tokens

| Name | Value | Role |
|---|---|---|
| Cloud Blue | `#3f71aa` | hero/security |
| Mist | `#f7f8f9` | canvas |
| Rail | `#f0f2f4` | navigation |
| Ink | `#26282b` | primary |
| Muted | `#858b90` | metadata |
| Success | `#38a66a` | running |

### Typography and type scale
Inter/system; marketing 42-62px at .98/-0.05em; product 11-16px; body 17-18px/1.5.

### Spacing, sizing, and radii
4px base; 8/12/16/20/28/40px; radii 7-10px controls, 12-15px panels, 24px pills, 27px hero frame.

### Layout and responsive behavior
Wide blue hero and embedded Home; 250px rail with 960px work area. Mobile uses 63px icon rail and horizontal cards.

### Elevation and borders
Cool 1px borders; faint 20-65px blue-gray shadows only on hero frame/terminal.

### Component treatments
Composer, suggested agents, sessions, automations, PR review/diff, terminal, integrations.

### Imagery and motion
Product evidence and functional states carry the visual story unless the source section above names a distinct media treatment. Motion should clarify state change, never decorate idle surfaces.

### Do
- Keep runs observable, human review explicit, and blue confident.

### Don't
- Do not reduce agents to chat, lose repo/session metadata, or crowd the hero.

### Inference limits
Role names here normalize the measured implementation and cited source into the shared repo schema. They are not claimed as the source company's internal token names unless the earlier evidence section says so.
