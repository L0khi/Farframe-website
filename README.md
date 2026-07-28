# Farframe Website — Customized Build

Static multi-page site prepared for GitHub and Netlify.

## Routes

- `/` — Home
- `/products/` — Product portfolio
- `/products/docuexcel/` — Dedicated DocuExcel page
- `/products/inventory-sentinel/` — Dedicated Inventory Sentinel page
- `/about/` — About Farframe
- `/contact/` — Netlify contact form
- `/privacy/` — Privacy notice
- `/thanks/` — Form success page
- `/404.html` — Error page

## Brand use

The approved Illustrator source was converted into cropped, lightweight web assets under `assets/brand/`. The header and footer use a restrained symbol + outlined wordmark lockup. No oversized logo is used in the hero or product sections.

## Product demonstrations

DocuExcel and Inventory Sentinel currently use CSS-based system animations. Each dedicated product page contains an HTML comment identifying the exact animation block that can later be replaced with a self-hosted video, GIF, or interactive demo.

## Netlify

- Build command: leave blank
- Publish directory: `.`
- Deploy from `main`
- Confirm the `farframe-contact` form appears in Netlify Forms
- Configure submission email notifications
