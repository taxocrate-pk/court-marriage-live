# SEO DNA 2.05 — Karachi Court Marriage Content Batch
Date: 15 October 2026

## Scope
- Replace only the `/court-marriage-in-karachi/` page's generic long-form body using a dedicated 839-word Karachi-specific editorial module and 20 original FAQs.
- Keep the existing URL, canonical, H1, schema structure, phone number, hero image, navigation and indexed Nikah Nama pages unchanged.
- Use unique introductory and FAQ headings on the Karachi page; avoid exact heading repetition.
- Add two official legal reference links: Sindh Government's Child Marriages Restraint Act (2013) listing and Pakistan Code's Muslim Family Laws Ordinance (1961), section 5.
- Legal language distinguishes Nikah, Nikah Registrar, registration, MRC and NADRA records; it avoids promises about universal embassy NOC rules, fast certificates, automatic protective court orders, or office consultation being free.
- The 20 FAQs in this module are intended to populate the existing FAQPage JSON-LD; verify rendered text/schema in preview.

## Baselines, protections, pending approvals
- Owner's GSC report: 38 indexed URLs; prior on-page crawl found Karachi `/court-marriage-in-karachi/` returned 200/indexable with an existing self-declared canonical and 1 click, 13 impressions in latest 28 settled days. Preserve these signals.
- This replaces 3,700+ crawler-word generic content for this single low-click commercial city page; it is a substantive editorial change, therefore **draft PR only pending owner legal review and approval before merge**.
- Avoid claiming ranking improvements until several comparable settled GSC windows have passed.
- Verify HTML headings/FAQ schema, original canonicals, site navigation, phone CTA and 390px/360px mobile screenshots. A successful Vercel build alone is not mobile QA.
- Existing source uses a placeholder **CM** logo. User confirms an original professionally commissioned CourtMarriage.live logo was created years ago but not carried over in the migration. No verified original asset was found in current GitHub sources or ChatGPT Library. **Do not invent a new logo, reuse another brand's logo, or remove the placeholder until the owner's genuine asset is recovered**. Recovery candidates: former WordPress media library or backup, original designer's master file, or owner upload.
- Approved copyright year is **© 2022** (registered 2022-10-25). That change is staged separately in technical PR #1.
- This editorial PR is separate from technical PR #1: https://github.com/taxocrate-pk/court-marriage-live/pull/1. The two branches should be reconciled/rebased before production merge to preserve both changes.
- **No production deployment performed by this editorial branch**.

## Official references
- https://prosecution.sindh.gov.pk/rules-regulations
- https://pakistancode.gov.pk/pdffiles/administratordf5df7bd70945d88e28f6a85c1a9ef6b.pdf

## Owner QA feedback and second staged correction — 15 Oct 2026
- Owner observed keyword under-coverage in first editorial draft. Revised 10 content sections now contain **912 prose words** with **9 exact instances of “court marriage in Karachi”** and **20 broad “court marriage” occurrences**, while 20 FAQs contain **3 exact city phrases** and **5 broad phrase occurrences**. Together, prose and FAQs contain **25 broad occurrences / 1,486 words ≈ 1.68%**. These are counts of body + FAQs only, not the entire header/footer HTML, and are not a ranking guarantee. Page H1 and unique H2 headings remain unchanged.
- Existing artist-commissioned logo **IS in the repository and header**: `public/court-marriage-live-services-logo.png`, 120×120 square. Prior note saying the original logo was missing is superseded. CSS `app/audit.css` uses this same logo already. No logo artwork modified.
- Existing generic favicon declarations were replaced with metadata for the **original, square branded PNG** in `app/layout.js`; live favicon and SERP appearance remain to be checked after production release and Google recrawl.
- Prior Karachi hero used a low-contrast `/images/court-marriage-karachi.svg`. Staged Karachi hero now uses repository's **existing photographic asset** `/court-marriage-hero.png`; the homepage hero now requests that asset directly, bypassing potential Next Image optimization errors. `.hero-image-wrap` has a direct-image CSS fallback. This is an **interim image correction**, not yet compliant with the unique-WebP-per-page policy.
- A **new 1672×941 WebP professional consultation hero** has also been created as `/mnt/data/court-marriage-karachi-hero.webp` (not committed to this PR; it must not be claimed deployed). It should replace the interim shared PNG after verified asset upload and responsive QA.
- Pre-merge tests pending: direct photo URL 200 and visual visibility, branded favicon HTTP/HTML link, image crop desktop + 390px/360px, font/contrast, unique source WebP placement, title/meta and rendered FAQ schema, preservation of indexed Lahore page.
