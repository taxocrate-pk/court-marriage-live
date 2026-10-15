# CourtMarriage.live — SEO DNA 2.05 Recovery Register (15 October 2026)

Source of truth: GSC Wizard (property `sc-domain:courtmarriage.live`), owner-supplied GSC indexing report, live on-page crawl, GitHub/Vercel project metadata. This is a staged, non-production recovery batch.

## Protected baseline
- 38 indexed and 65 not-indexed URLs (owner's GSC report last updated 9 Oct 2026).
- 28 settled days through 12 Oct 2026: 7 clicks, 648 impressions, 1.08% CTR, avg position 29.41. Prior 28 days: 6 clicks, 923 impressions.
- 90 settled days: 16 clicks, 2,280 impressions. 180 days: 23 clicks, 4,207 impressions. GSC Wizard daily records start 5 Mar 2026; any older performance remains unverified.
- Highest-performing Nikah Nama Lahore URL: `/nikah-nama-english-urdu-lahore/` (4 clicks, 269 impressions last 28 days), indexed and canonical verified. Preserve successful page content, URL and canonical.
- Indexable 200 service pages already retain original migrated permalinks. The crawler observes a 308 from trailing-slash form to no-slash presentation, but canonical remains slash-form; Google inspection of sampled indexed URLs confirmed the intended canonical. Do not broadly modify slash behavior without a full migration review.

## 14-page on-page audit: actionable outcomes
1. Homepage `/`: 200/indexable, one H1, 2 images with ALT, LegalService/FAQ/Breadcrumb schema. **LocalBusiness JSON-LD missing address**; addressed in staging based on the site's own visible Karachi Johar office.
2. `/court-marriage-in-karachipakistan/`: **404**, but GSC records 1 click, 27 impressions in last 28 days. Staged 308 legacy redirect to live `/court-marriage-in-karachi/`, pending owner merge approval.
3. `/nikah-nama-services-in-karachi/`: **404** and owner GSC "Crawled — currently not indexed". Staged 308 legacy redirect to live `/nikah-nama-english-urdu-karachi/`, pending owner merge approval.
4. `/nikah-nama-services-in-lahore/`: **404** and owner GSC "Crawled — currently not indexed". Staged 308 legacy redirect to protected, indexed `/nikah-nama-english-urdu-lahore/`, pending owner merge approval.
5. `/nikah-nama-english-urdu-lahore/`: 200/indexable, 1 H1, 1 image, 0 missing ALT, FAQ/Breadcrumb schema. 84-char title; **preserve first**, CTR testing only after search-intent review.
6. `/nikah-nama-english-urdu-islamabad/`: 200/indexable, ~87-char title, 1 image.
7. `/nikah-nama-english-urdu-karachi/`: 200/indexable, ~85-char title, 1 image.
8. `/nikah-nama-english-urdu-rawalpindi/`: 200/indexable, ~88-char title, 1 image.
9. `/court-marriage-in-karachi/`: 200/indexable, 1 H1, 1 image, FAQ/Breadcrumb schema. Preserve ranking evidence.
10. `/court-marriage-in-islamabad/`: 200/indexable; 1 image.
11. `/court-marriage-in-lahore/`: 200/indexable; 1 image.
12. `/online-nikah-has-gained-popularity/`: 200/indexable; 1 image.
13. `/nadra-marriage-certificate-in-pakistan/`: 200/indexable; 1 image; title length 66.
14. `/nikah-khawan-services-and-fees/`: 200/indexable; 1 image.
15. All other legacy pages are NOT declared audited or passed (this is a scope note, not an audited page).

## Indexing triage from owner GSC
- Crawled, not indexed: 36 (17 actual content/service URLs, 12 RSS/feed URLs, 6 category archives, 1 JS asset).
- Not found: 13; alternate canonical: 7; noindex: 5; redirected: 3; robots blocked: 1.
- Do not try to index RSS/feed or JavaScript URLs. Category/noindex/canonical/redirect groups need deliberate intent checks. The 404 report must be reconciled against the original WordPress permalink list before further migrations/redirects.
- Sitemap reported 19 submitted and zero indexed in one GSC sitemap source; independent Google URL inspections **confirmed two key URLs indexed**. Do not conflate these different reporting scopes.

## DNA 2.05 — pending safe improvements
- Commercial city pages currently ~3,600–3,800 crawler words: review whether repetitive long-form expansion dilutes city search intent. Do not slash words mechanically or repeat mass SEO rewrites.
- Several Nikah Nama titles are 84–88 characters; test concise titles **one low-risk page at a time** and track CTR/position before touching Lahore.
- Dynamic city templates have only one image per page. Audit image uniqueness, relevant professional WebP assets, ALT/title/caption and mobile rendering at 390px/360px before adding a second/third image.
- Dynamic service pages show BreadcrumbList/FAQPage but do not expose a separate LegalService/LocalBusiness JSON-LD on sampled pages; scope schema to actual verified office/service locations without inventing local offices.
- Owner branding policy: use **original domain registration year**, NOT current clock year. Footer source uses `new Date().getFullYear()`. **Do not guess or change CourtMarriage.live copyright year** until registrar-created date is provided.
- Review internal linking, verified lawyer EEAT, jurisdiction-specific legal ages, office details, menus and mobile usability in the next batches. No auto-index requests, automated rewrites or ranking claims.

## Implementation boundary / verification gates
- All changes in branch `seo-dna-205-recovery-20261015` and draft PR. No merge, no live deployment, no live redirect claim.
- Branch changes: add verified Karachi Johar PostalAddress to homepage LegalService and LocalBusiness JSON-LD; stage 3 migration-URL 308 redirects.
- QA pending: build check, preview response tests old URL -> correct destination, current live 200/canonical unchanged, structured data valid, 390px and 360px screenshot tests, GSC monitoring after approval.
- Approval required before merging migration redirects, substantial legal content changes, URL canonical changes or domain renewal.
