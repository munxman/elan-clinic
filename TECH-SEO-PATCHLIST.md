# Élan Clinic (elan.clinic) — Technical SEO Patchlist + Checklist

Scope: GitHub Pages static site (`elan-clinic-ghpages/`).

Principles:
- **Prefer template fixes** (shared `<head>` / shared footer) so changes propagate across pages.
- **One source of truth for NAP** (Name/Address/Phone) used in: footer, Contact section, schema JSON-LD, Google Business Profile.
- **Validate everything** with Google tooling (Search Console, Rich Results Test, Lighthouse).

Legend:
- **P0** = must-fix / blocking indexation or causes major duplication/compliance risk
- **P1** = strong SEO uplift / reduces confusion, improves SERP appearance
- **P2** = polish / incremental gains

---

## Quick inventory (what’s already present)
From spot checks (`index.html`, `et.html`):
- Canonical tags: **present**
- Hreflang: **present** for core language pages
- OpenGraph/Twitter: **present**
- robots.txt + sitemap.xml: **present**
- JSON-LD: **present** (`MedicalBusiness`), includes address + phone + contactPoint

So this is mostly about **consistency + completeness**, and ensuring **all pages** follow the same rules.

---

## P0 — Must fix

### P0.1 Canonicals + hreflang must be consistent on *every* indexable page
**Why:** Avoid duplicate content / wrong language ranking / split signals.

**Do:**
1. Create a checklist of all public HTML pages (top-level + `/blog/*` + `/artiklid/*`).
2. For each page, ensure:
   - `<link rel="canonical" href="https://elan.clinic/<exact-path>" />` (choose one canonical format: with trailing slash only for `/`)
   - Full hreflang cluster present (en/et/fi/ru/x-default) **when equivalents exist**.
3. For pages that **do not have translations** (most blog posts), decide one of:
   - Option A: **No hreflang** (acceptable), OR
   - Option B: hreflang only for itself + x-default (avoid pointing to non-equivalent pages).

**Acceptance tests:**
- Pick 10 URLs at random → View Source → canonical + hreflang correct.
- In Search Console → International Targeting (legacy) not available anymore, so instead check:
  - Indexing → Pages → no explosion of “Duplicate, Google chose different canonical”.


### P0.2 Sitemap.xml must include *all* indexable pages and stay accurate
**Why:** Discovery + faster indexing. Wrong `lastmod` reduces trust.

**Do:**
1. Compare `sitemap.xml` vs actual files under:
   - `/` (root)
   - `/blog/`
   - `/artiklid/`
2. Add any missing pages (including new articles).
3. Standardize `<lastmod>`:
   - If manual: update when content changes.
   - If generated: ensure generator updates automatically in build process.

**Acceptance tests:**
- Validate sitemap in Search Console (Sitemaps) → status “Success”.
- Spot-check that newest article URL exists in sitemap.


### P0.3 Schema: upgrade from generic `MedicalBusiness` to a clean entity graph
**Why:** Local SEO + knowledge panel consistency + “clinic + doctor” clarity.

Right now schema is present, but should be more specific and linked with `@id`.

**Do (recommended model):**
Implement JSON-LD graph with stable IDs:
- `MedicalClinic` (or `MedicalBusiness` if you must, but prefer `MedicalClinic`)
- `Physician` for Dr. Ingmar Lindström
- `Organization` (the legal entity) if needed

**Fields to add/standardize:**
- `@id` for each entity (e.g. `https://elan.clinic/#clinic`, `https://elan.clinic/#physician`)
- `image` (clinic/doctor photo if available)
- `geo` (lat/long)
- `hasMap` (Google Maps URL)
- `sameAs`:
  - Google Business Profile “share” link
  - Social profiles (if any)
- `telephone` formatted consistently (E.164: `+3725299939`)
- `address` exactly matching GBP
- `founder` or `employee` linking physician entity via `@id`

**Page placement strategy:**
- On **homepage**: publish the clinic entity + physician entity.
- On **doctor page** (`fi-laakarit.html` and any future “Arstid/Doctors” page): publish the physician schema again (same `@id`) + `mainEntityOfPage`.

**Acceptance tests:**
- Run homepage through Google Rich Results Test (won’t always show “eligible” features, but should parse cleanly).
- Validate JSON-LD with Schema.org validator → no critical errors.


### P0.4 NAP consistency across site + GBP + legal pages
**Why:** Local ranking + trust. Inconsistencies fragment citations.

**Do:**
1. Define canonical NAP block (copy/paste exact string):
   - **Name:** Élan Clinic (and decide if “Élan Kliinik” is alternate or separate display name)
   - **Address:** Sepapaja 12/1, Tallinn 11415, Estonia
   - **Phone:** +372 52 99939 (display) / `+3725299939` (machine/schema)
2. Ensure the same NAP appears in:
   - Footer on every page
   - Contact section
   - Privacy Policy (`privacy.html`) and Consent/Cookies (`consent.html`)
   - JSON-LD
3. Ensure the same NAP appears on Google Business Profile.

**Acceptance tests:**
- Site-wide search for phone/address string variants; reduce to one.


### P0.5 GDPR/compliance essentials must be discoverable and complete
**Why:** Legal risk + trust + ad platform compliance.

You already have `privacy.html` and `consent.html`. Ensure they meet “minimum viable clinic website” expectations.

**Do:**
1. Ensure there is a prominent footer link to:
   - Privacy Policy
   - Cookie/Consent Policy
   - Contact
2. On Privacy Policy include (explicitly):
   - Data controller legal entity name + registry code + address (if applicable)
   - Contact email
   - Purpose of processing
   - Retention period
   - Data subject rights
   - Supervisory authority (EE: Andmekaitse Inspektsioon)
3. If any analytics/marketing scripts are added later (GA4, Meta, etc.), ensure:
   - Prior consent before setting non-essential cookies
   - Documented cookie list

**Acceptance tests:**
- From any page → reach Privacy/Consent in 1 click.

---

## P1 — Strong improvements

### P1.1 Add `og:locale:alternate` and complete Twitter tags
**Why:** Better share previews across languages.

**Do:**
- On each language page, add `og:locale:alternate` for the other supported locales.
- Add missing Twitter fields:
  - `twitter:image` (you have OG image; Twitter may not always infer)
  - `twitter:site` / `twitter:creator` if there is an account

**Acceptance tests:**
- Use Facebook Sharing Debugger + Twitter Card Validator equivalents (Twitter’s tooling is limited now; rely on “preview” via share).


### P1.2 Titles/meta descriptions: enforce a repeatable pattern (and uniqueness)
**Why:** CTR + avoids cannibalization.

**Do:**
1. Define title template per page type:
   - Homepage: “Élan Clinic — [primary promise], Tallinn”
   - Service pages: “Regain Shield — [benefit] | Élan Clinic”
   - Blog: “{Post title} | Élan Clinic Blog”
2. Ensure:
   - 1 unique `<title>` per page
   - 1 unique meta description per page (not empty)

**Acceptance tests:**
- Crawl via a simple script/tool (or manual sampling) to confirm uniqueness.


### P1.3 Internal linking + language switcher correctness
**Why:** Crawlability + reduces orphan pages.

**Do:**
- Ensure every blog article links back to:
  - Blog index (`/blog.html`)
  - Relevant core service page
- Ensure language switcher (if present) points to correct translated URL, not just home.


### P1.4 Add `FAQPage` schema on FAQ pages (only where content is true Q/A)
**Why:** Potential SERP enhancements; also clarifies page structure.

**Do:**
- On `faq.html`, `kkk.html`, `ukk.html`, `voprosy.html` add JSON-LD `FAQPage` with `mainEntity` questions/answers.
- Ensure answers match visible content exactly.


### P1.5 Add `Organization`/`LocalBusiness` “sameAs” citations
**Why:** Entity reconciliation.

**Do:**
- Add `sameAs` URLs:
  - Google Business Profile link
  - LinkedIn/Instagram/Facebook (only if real and maintained)


### P1.6 Google Business Profile (GBP) linkage + on-site signals
**Why:** Local pack.

**Do:**
- Add a “Find us on Google Maps” link near the address (and in schema `hasMap`).
- Ensure GBP category selection matches clinic reality (e.g., “Medical clinic”, “Weight loss service” if appropriate).
- Add services in GBP that match the site page names.

---

## P2 — Polish / nice-to-have

### P2.1 Accessibility basics
**Why:** UX, trust, some SEO correlation.

**Do:**
- Ensure exactly one `<h1>` per page.
- Add `alt` text for meaningful images (decorative images: empty `alt=""`).
- Color contrast check for text on dark backgrounds.
- Ensure focus states visible for keyboard navigation.

**Acceptance tests:**
- Lighthouse Accessibility ≥ 90 on key pages.


### P2.2 Performance hygiene
**Why:** Core Web Vitals + conversion.

**Do:**
- Serve images as properly sized assets (avoid shipping huge images).
- Consider WebP/AVIF for large background textures.
- Add `width`/`height` attributes for images to reduce layout shift.
- Defer non-critical JS.

**Acceptance tests:**
- Lighthouse Performance ≥ 90 on homepage on mobile preset (best-effort).


### P2.3 robots.txt refinements
**Why:** Reduce noise; keep bots under control.

**Do:**
- Confirm no sensitive URLs exist.
- If needed, disallow any staging/old pages (e.g. `index-old-spa.html`, `index-v2.html`, etc.) **if they are publicly reachable** and not intended for indexing.
  - Better: remove or noindex those pages.

---

## Implementation checklist (doer-friendly)

### Step 1 — Crawl and inventory
- [ ] List all `.html` files in repo root
- [ ] List all pages under `/blog/` and `/artiklid/`
- [ ] Decide which are **indexable** vs should be **noindex** (old versions, experiments)

### Step 2 — Head template standardization
- [ ] Ensure every indexable page has: charset, viewport, title, meta description
- [ ] Add canonical
- [ ] Add hreflang (only where valid)
- [ ] Add OG/Twitter tags incl. image

### Step 3 — Schema graph
- [ ] Implement `@graph` with `MedicalClinic` + `Physician` + `PostalAddress`
- [ ] Add `@id` and link entities
- [ ] Add geo + hasMap + sameAs

### Step 4 — Legal/GDPR surface area
- [ ] Footer links to privacy + consent/cookies + contact
- [ ] Verify privacy policy completeness for Estonia

### Step 5 — Search Console + indexing
- [ ] Verify domain property in Google Search Console
- [ ] Submit sitemap
- [ ] Request indexing for homepage + top service pages

### Step 6 — GBP
- [ ] Add website URL to GBP
- [ ] Ensure NAP exact match
- [ ] Add services + description aligned with site

---

## Notes / risks to watch
- **Old index versions in repo** (`index-old-spa.html`, `index-v2.html`, `index-v3.html`, `index-v4.html`): if reachable, they can be indexed and create duplication. Either remove them from deployment, or add `noindex`.
- **Language locale values:** You currently use `en_GB`, `et_EE`. Ensure FI and RU pages use correct locales (`fi_FI`, `ru_RU`).
- **Medical claims in meta/OG:** Keep claims supportable; avoid “guarantees”. SEO risk is lower than ad/medical compliance risk, but still worth policing.
