# Elba Property Care

Premium property care and home watch service for second homes and villas on the Island of Elba, Italy.

## Project structure

```
/site           Production HTML files
  index.html    Homepage (Three.js + GSAP cinematic experience)
  pricing.html  Pricing page (4 plans + business rules + Stripe architecture)

/seo            SEO implementation files
  seo-master-plan.md    Complete SEO strategy document
  blog-roadmap.md       24-article blog plan
  content-map.md        Site content architecture
  metadata-map.csv      Page-by-page meta tags
  robots.txt            Pre/post-launch configurations
  sitemap.xml           XML sitemap with hreflang

/docs           Project documentation
  audit.md      Gap analysis and rebuild map
```

## Tech stack

- Three.js r128 (CDN) -- narrative 3D villa wireframe + particle system + custom GLSL shaders
- GSAP 3.12.2 + ScrollTrigger -- pinned chapters, scrub animations, horizontal scroll
- Cormorant Garamond + Inter (Google Fonts)
- Stripe Billing (annual subscriptions)
- Schema.org: LocalBusiness, FAQPage, Service, OfferCatalog

## Pricing

| Plan | Price | Payment |
|---|---|---|
| Watch | 1.270 EUR | Annual, VAT included |
| Care | 4.300 EUR | Annual, VAT included |
| Prime | 10.000 EUR | Annual, VAT included |
| Elite | Custom | After survey |

## Status

Pre-launch. All pages carry `noindex, nofollow`.
