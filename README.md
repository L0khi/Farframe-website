# Farframe Website — Customized Build

Static multi-page site prepared for GitHub and Netlify.

## Routes

- `/` — Home
- `/products/` — Product portfolio
- `/products/docuforge/` — Dedicated DocuForge page
- `/products/opsfield/` — Dedicated Opsfield page
- `/about/` — About Farframe
- `/contact/` — Netlify contact form
- `/privacy/` — Privacy notice
- `/thanks/` — Form success page
- `/404.html` — Error page

## Brand use

The approved Illustrator source was converted into cropped, lightweight web assets under `assets/brand/`. The header and footer use a restrained symbol + outlined wordmark lockup. No oversized logo is used in the hero or product sections.

## Product demonstrations

Both product pages keep their CSS-based system animation in the hero and carry self-hosted demo videos in a `#demo` section. DocuForge: `assets/docuforge-quick-overview.mp4` and `assets/docuforge-demo-web.mp4`. Opsfield: `assets/opsfield-demo.mp4` (30 seconds), styled by `assets/css/opsfield.css`. Videos must live in `assets/`: the Content-Security-Policy in `netlify.toml` blocks media from other hosts.

## Netlify

- Build command: leave blank
- Publish directory: `.`
- Deploy from `main`
- Confirm the `farframe-contact` form appears in Netlify Forms
- Configure submission email notifications
