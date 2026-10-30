Qanoon Group, Taxocrate and affiliated websites

SEO DNA 2.07C — Owner Amendments

Version: 2.07C  ·  Owner-directed amendments: 29 October 2026  ·  Amends: SEO DNA 2.07 Consolidated Master with 2.07B amendments (24 October 2026)

Read with the 2.07 master and the 2.07B addendum. Where a rule below conflicts with an earlier rule, this amendment prevails because it is the later explicit owner instruction. Each rule states which earlier rule it adds to or changes.

C1  City Key Phrase in Headings and Body (amends rule 835)

On every city page, the full key phrase — the service plus the city, for example "Family Lawyers in Karachi", "Family Lawyers in Lahore", "Property Lawyers in Faisalabad" — must appear:

in at least 5 to 7 H2 or H3 headings; and

about 8 to 12 times in the body text (paragraphs, tables and FAQ answers; navigation and sidebar links do not count).

Placement must be natural. The phrase may sit at the start, in the middle or at the end of a heading. It must not be placed mechanically at the start of every H2; the owner described that pattern as ugly. A heading may run to two or three lines.

Good: "Child Custody and Guardianship Cases Taken by Family Lawyers in Karachi"; "Hyderabad or a Neighbouring District? Family Lawyers in Hyderabad Check the Court First"; "Where to Meet Our Family Lawyers in Islamabad".

Bad: "Family Lawyers in Karachi: …" repeated as the opening words of every H2.

Owner’s reason: without the full phrase in the H2s, city pages do not reach the top results. Rule 835’s warning against keyword-stuffed lists still applies to the wording around the phrase.

C2  National Phrases on the Homepage and Pakistan Pages

A site’s homepage or national (Pakistan-wide) page must target the national phrases for that site’s main services, not only city names. For a general law-firm site such as RightLaw.pk:

The same natural-placement rule as C1 applies. City phrases belong on the city pages; the homepage links to them.

C3  One Heading Scale Across the Whole Site (adds to rule 175)

Each site uses one standard font size per heading level on every page; templates must not set their own sizes. The H1 must not be oversized. The scale adopted on RightLaw.pk, and the default for other Next.js sites:

C4  Page Images Must Be Genuinely Different (strengthens rules 051, 053 and 695)

Every page’s court, office or service image must be visibly different from every other page’s image on the same site.

Near-identical AI images — the same faces in slightly different seating, or the same office scene repeated — count as duplicates and are not acceptable. This was the defect in ChatGPT’s familylawyers.com.pk images.

Do not use AI-generated images of people as if they were the firm’s lawyers or clients. Prefer real photographs of courts and offices supplied by the owner; otherwise use clearly graphic, people-free designs that differ by page.

Images stay small WebP (rule 053).

C5  Lawyer Photos: At Least Two, Side by Side

Every page that shows lawyer profiles should show at least two lawyer photos side by side.

One photo alone looks bad. Three photos (two above, one below) looked worse and must be avoided.

Where a page has extra lawyers without photos, show the two photo cards side by side first and the text-only profiles in their own row below.

Use only real, owner-supplied photographs of the named advocate (rule 695: no fabricated portraits).

C6  Which Lawyer Appears on Which City Page (adds to rule 867)

The "Reviewed by" line on a city page names an advocate who practises in that city.

C7  Sidebars: Checklists and Links Must Look Different

A checklist (items to bring, steps to prepare) and a list of links must never run together in one undifferentiated list. The checklist gets a bold heading and tick marks and is not linked; page links go in a separate, clearly labelled box ("On This Page") as underlined links.

C8  Confirmed Office Facts (adds to rules 409 and 921)

Karachi, Supreme Corner unit: T-219, 2nd Floor (not A-220).

Rawalpindi office: Al-Hameed Plaza, Marir Hassan Chowk, Rashid Minhas Road, Off Murree Road, Rawalpindi 46000.

C9  No Text Inside Images That May Be Cropped

Never put headings, key phrases or other words inside an image that the layout crops (any image shown with object-fit: cover, a hero, a split section or a card). On RightLaw.pk the homepage banner reading "Property Lawyers in Pakistan" was cropped to "erty Lawyers … kistan".

Key phrases belong in the HTML heading and alt text, where Google reads them, not in the picture.

Text inside an image is allowed only where the image is shown whole (object-fit: contain or a fixed aspect ratio matching the file), and it must be checked at desktop and mobile widths.

C10  Card and Photo Grids Must Fill Complete Rows

Applies to every grid: service boxes, city cards, blog cards, guide cards, lawyer photos and any other pictures. If three fit in a row, use exactly 3, 6 or 9: one, two or three full rows. Never put a fourth picture or box alone underneath.

The rule must hold at every screen width. Where a grid changes its column count on tablets, set the columns so the count still divides evenly (for example 4 cards: 4 across, then 2 × 2, never 3 + 1).

A grid of service, city or lawyer cards must end on a full row: with three columns use 3, 6 or 9 cards; with two columns an even number; never one card left alone on the last row. On RightLaw.pk the homepage had 7 service cards (3 + 3 + 1); it now has 9.

To fix an odd count, either merge cards or add genuine services that already have a page. Do not add a card without a real destination page.

Icons on cards in the same grid must not repeat.

C11  Technical Checks Before Any Page Goes Live

URL format: internal links, menus, sitemap and canonical tags use the same URL form as the server (on Next.js sites: trailing slash with trailingSlash: true). Mismatch causes redirects, which Pingdom reports as errors. Every internal link must return 200 directly.

Image weight: no image over 150 KB; heroes and banners in WebP; logo under 25 KB.

One image, one page: the same content image must not appear on more than one page, nor twice on the same page.

Visual check: each new or changed page is looked at in a browser at desktop and mobile widths before the pull request is opened: cropped text, lonely cards, oversized headings and broken images are caught here.

C12  Linking Checklist for Every New or Rewritten Page (applies rules 072, 073 and 154)

Rules 072 (no orphans), 073 (two-way cluster linking) and 154 (contextual links to verified existing pages) remain in force. The owner’s linking checklist is a permanent part of DNA execution, and no page passes until every line below is ticked:

Implementation Status on RightLaw.pk (29 October 2026)

C1, C3, C5, C6, C7 and C8 are live on https://rightlaw.pk/ through pull requests #11 to #16. C2 (homepage) went live with pull request #17. C3 site-wide, C4 for guide pages, and C11 (trailing slash and image weight) went live with pull request #18. C9 and C10 (homepage) went live with pull request #19; C10 for the blog, Family Law page and homepage guide cards is in pull request #21, and the clearer property image is in pull request #20. C12: on RightLaw.pk all 12 family and property city pages are in the menu and the sitemap, are linked from the homepage, link to each other and link to the national guides; all 82 links on the Lahore page return 200.

Phrase | Headings (H1/H2/H3) | Body
Family Lawyers in Pakistan | 7–8, including the H1 where it fits | about 8
Property Lawyers in Pakistan | about 5 | about 5
Corporate lawyers / tax lawyers (where the site offers them) | 1–2 each | 1–2 each

Level | Size | Notes
H1 | 28–42px (responsive) | Previously up to 62px — too large
H2 | 22–30px | 
H3 | 18–21px | 
H4 | 17px | 
Sidebar boxes | Own compact sizes | Kept smaller so the sidebar does not compete with the article

Advocate | Pages | Owner instruction
S. M. Akhtar Rizvi, ASC | Karachi only | Practises in Karachi only; will not travel even to Hyderabad. Never on Punjab, Islamabad or Hyderabad pages. Still never on court-marriage sites.
Sobia Mohsin | Karachi only | Practises in Karachi only. Not on Punjab, Islamabad or Hyderabad pages, and not as their reviewer.
Fiaz Ahmed Khakh, ASC | Lahore, Islamabad, Rawalpindi, Faisalabad, Multan | Senior counsel for all of Punjab and Islamabad; appears at the Lahore High Court and its benches and at the Islamabad High Court.
Kashif Mumtaz, AHC | Islamabad (resident), Rawalpindi, Multan | Resident advocate at the Islamabad office; Islamabad clients can meet him by appointment until 10 pm.
Muhammad Usman Bhatti, AHC | Rawalpindi, Islamabad | 
Muhammad Junaid Kahloon, Senior Advocate | Lahore | 
Rana Shafqat Rasool, AHC | Faisalabad (partner) | Rule 913
Akhtar Bhatti, AHC | Hyderabad (partner) | Rule 913

Check | What it means in practice
Menu | The page appears in the correct header menu (e.g. every family city page under Family Law).
Sitemap | The URL is in the sitemap, in the same trailing-slash form as the canonical (C11).
Incoming links | At least the national page, the homepage section for that service and the sibling city pages link to it. No page is left orphaned.
Outgoing links | The page links up to its national guide (e.g. Family Law in Pakistan) and across to its sibling city pages and related service pages.
Homepage | The homepage links to every city page of each main service (on RightLaw.pk: 6 family and 6 property city pages).
Anchor text | Natural, keyword-relevant anchors such as "Family Lawyers in Karachi". Not "click here", and not the same exact anchor repeated many times on one page.
Owned network sites | Where relevant, link to the owned site that serves that topic best, with a natural anchor; reciprocal where it helps the reader.
Outbound and official links | Placed low on the page (Sources section), never as prominent exits mid-content.
Sidebar links | Jump links in their own "On This Page" box, separate from the checklist (C7).
Status | Every internal link returns 200 directly, with no redirect and no 404 (C11).