# Farframe Website — Customized Build

Static multi-page site prepared for GitHub and Netlify.

## Routes

- `/` — Home
- `/products/` — Product portfolio
- `/products/docuforge/` — Dedicated DocuForge page
- `/products/floorsight/` — Dedicated FloorSight page
- `/about/` — About Farframe
- `/contact/` — Netlify contact form
- `/privacy/` — Privacy notice
- `/thanks/` — Form success page
- `/404.html` — Error page

## Brand use

The approved Illustrator source was converted into cropped, lightweight web assets under `assets/brand/`. The header and footer use a restrained symbol + outlined wordmark lockup. No oversized logo is used in the hero or product sections.

## Product demonstrations

Each product has its own page:

- `/products/docuforge/`: narrated DocuForge video, chapter controls and written summary.
- `/products/floorsight/`: proposed FloorSight architecture and pilot scope, explicitly labelled as concept-stage.
- Legacy DocuExcel and Inventory Sentinel URLs redirect permanently to these routes through Netlify. Small HTML redirect pages provide a fallback for other static hosts.

### Required before publishing this change

The finished MP4 is NOT included. Add `DocuForge_Combined_Demo.mp4` at `assets/media/DocuForge_Combined_Demo.mp4` on this branch using a Git client. The expected video is 326.1 seconds, H.264/AAC, 1920×1080, 26,547,442 bytes. A Git client avoids browser-upload size constraints.

Do not merge or share a production demo link until the video has been added and playback verified. If Netlify deploy previews are enabled, review both new product URLs there. Check mobile/desktop layout, audio, seeking, chapters, menu, contact links, redirects and SVG blueprint. This editing session had no browser/runtime, so rendered layout and playback have not been verified. The player uses a local source and respects the existing CSP. It does not autoplay. A written summary is provided; synchronized captions remain to be added.

## Netlify

- Build command: leave blank
- Publish directory: `.`
- Deploy from `main`
- Confirm the `farframe-contact` form appears in Netlify Forms
- Configure submission email notifications
