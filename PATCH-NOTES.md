# PATCH NOTES — Tech SEO P0 (2026-03-04)

Scope: **P0 technical SEO fixes only** (encoding/mojibake, canonical, noindex, sitemap hygiene). No content/claim changes.

## Changes made

### 1) Homepage canonical consistency (trailing slash)
- **`index.html`**
  - Updated `<link rel="canonical">` to `https://elanclinic.ee/` (was `https://elanclinic.ee`).
  - Updated `og:url` to `https://elanclinic.ee/`.
  - Updated JSON-LD `url` to `https://elanclinic.ee/`.

### 2) De-index legacy homepage variants (avoid duplicate indexing)
Added `noindex` + canonical pointing to the homepage:
- **`index-v2.html`** — added `<meta name="robots" content="noindex,follow" />` (canonical already `https://elanclinic.ee/`).
- **`index-v3.html`** — added robots `noindex,follow`; updated canonical to `https://elanclinic.ee/`.
- **`index-v4.html`** — added robots `noindex,follow`; updated canonical + `og:url` to `https://elanclinic.ee/`.
- **`index-v5.html`** — added robots `noindex,follow` (canonical already `https://elanclinic.ee/`).
- **`index-old-spa.html`** — added robots `noindex,follow` + canonical `https://elanclinic.ee/`.

### 3) De-index dev/proof page (header proof)
- **`header-proof-2026-03-03.html`**
  - Kept `noindex` (changed from `noindex,nofollow` → `noindex,follow`).
  - Added canonical `https://elanclinic.ee/`.

### 4) Sitemap hygiene
- **`sitemap.xml`** already **does not include** `index-v*.html`, `index-old-spa.html`, or `header-proof-*.html`.
  - No changes needed.

## QA checklist (fast)
1. View source on `https://elanclinic.ee/`:
   - canonical is **exactly** `https://elanclinic.ee/` (with trailing slash)
   - `og:url` matches
   - JSON-LD `url` matches
2. Open each legacy page (`/index-v2.html`, `/index-v3.html`, `/index-v4.html`, `/index-v5.html`, `/index-old-spa.html`):
   - has `<meta name="robots" content="noindex,follow">`
   - canonical points to `https://elanclinic.ee/`
3. Confirm `https://elanclinic.ee/sitemap.xml` contains only intended URLs (no index variants).
4. Spot-check encoding on homepage + structured data:
   - `Élan`, `Lindström`, and `€` render correctly (no mojibake).

