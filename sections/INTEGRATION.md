# Integration Instructions — social-proof-section.html

## Where to place it in index.html

Recommended position: **after `#method` section, before `#pricing` section**.

The narrative arc should be:
1. Problem (regain statistics) 
2. Method (how we solve it) 
3. **Social Proof / Founder Story ← insert here** 
4. Pricing
5. FAQ / Contact

---

## Step 1 — Add the CSS

Copy everything between the `<style id="social-proof-styles--paste-into-main">` and `</style>` tags from `social-proof-section.html`.

Paste it into the main `<style>` block in `index.html`, before the closing `</style>` tag.

---

## Step 2 — Add the HTML

Copy everything from `<section id="proof"` down to and including `</section>` (the closing tag of the proof section).

Paste it into `index.html` at the desired location (see above).

Remove the `<style id="social-proof-styles--paste-into-main">` block from the HTML if you're pasting it separately into `<style>`.

---

## Step 3 — Add nav link (optional)

If the site has a nav with anchor links, add:

```html
<a href="#proof" class="nav__link">Our Story</a>
```

---

## Pull Quotes — replace with real LinkedIn post text

The two pull quotes in the founder narrative section are placeholder text written in Ingmar's voice. Before going live, replace them with actual verbatim quotes from his LinkedIn posts.

Look for posts on topics:
- "maintenance research" vs "weight loss research"  
- GLP-1 regain statistics (the 67% stat)
- His personal weight loss journey
- "physician who walks the talk"

Search LinkedIn for: `ingmar lindstrom site:linkedin.com`

---

## Patient Testimonials — GDPR Workflow

When ready to collect real testimonials:

1. **Create a testimonial consent form** covering:
   - GDPR Article 9 explicit consent (special category health data)
   - What information will be published (quote, first name/initials, programme type)
   - Right to withdraw consent at any time
   - How long the testimonial will be retained

2. **Replace a placeholder card** with a real testimonial card:

```html
<div class="testimonial-card">
  <div class="testimonial-card__stars">★★★★★</div>
  <div class="testimonial-card__quote">
    "Your patient's quote here."
  </div>
  <div class="testimonial-card__author">
    <div class="testimonial-card__avatar">
      <!-- Either: <img src="/testimonials/patient-initials.jpg" alt=""> -->
      <!-- Or: initials text, e.g. MK -->
      MK
    </div>
    <div>
      <div class="testimonial-card__name">M.K., 41</div>
      <div class="testimonial-card__meta">Regain Shield · 8 months</div>
    </div>
  </div>
</div>
```

3. **Store consent documents** in a GDPR-compliant records system (not in the repo).

4. **Create `/consent` and `/privacy` pages** — the GDPR note links to these.

---

## Design System Reference

| Token | Value |
|---|---|
| Background (dark) | `#0D1B2A` |
| Background (card) | `#111D2E` |
| Gold accent | `#C5A55A` |
| Text primary | `#E8E4DE` |
| Text muted | `rgba(232, 228, 222, 0.55)` |
| Heading font | Playfair Display |
| Body font | Inter |
| Section padding | `120px 0` |
| Container max-width | `1200px` |

---

## Optional Enhancements (future)

- Add a real photo of Ingmar (before/after if comfortable) in the transformation stats column
- Add a video embed (short 60-sec "why I built this" clip from HÄK shoot) in the why-built block
- Animate the stat numbers counting up on scroll (IntersectionObserver)
- Add a "Share your story" CTA button linking to the testimonial consent form once live
