# Commercial content batch 3

Date: 2026-11-14. Branch: `seo/core-services-batch-1`. Prior batches and CTR
refinements remain intact. No push, deployment, CSS, indexed URL, canonical target,
redirect, sitemap, robots, publication-date, or dependency changes were made.

## A. Pages improved

| Page URL | Primary intent | Target keyword | Content changes | Internal links added |
| --- | --- | --- | --- | --- |
| https://qllmsoft.com/mobile-app-development | Commission a mobile product for customers or staff | mobile app development services | Specific title/H1 and introduction; platform trade-offs; cost and timeline factors; device testing, offline sync, release and maintenance responsibilities | Cost-factors article; clearer existing API-service anchor |
| https://qllmsoft.com/ecommerce-development-services | Commission a custom storefront or commerce integration | custom ecommerce development services | Balanced platform comparison; checkout, stock/order integration and migration guidance; total operating costs; maintenance scope; relevant CTAs | Requirements checklist; retained three relevant articles using router links |

Keywords reflect editorial search-intent judgment, not verified search volume or
Search Console performance. The mobile page sells app delivery; the ecommerce
page sells workflow-specific commerce development and integrations. Neither was
expanded into keyword/location variations or a replacement platform page.

## B. Files modified

- `src/pages/MobileAppDevelopment.jsx`
- `src/pages/EcommerceDevelopmentServices.jsx`
- `scripts/validate-seo-batch.cjs`: added the `--batch-3` selection.
- `seo-audit-inventory.json`: regenerated source inventory.
- `SEO_BATCH_3_REPORT.md`: this report.

## C. Content improvements

The mobile page previously opened with vague engineering terminology. It now
describes real tasks such as bookings, field visits, order tracking and access to
business information. Requirements explain device capabilities, notifications,
background work, permissions, retry behavior and synchronization after a lost
connection. These are use-case examples, not claims about completed client work.

Native and cross-platform choices are explained without classifying Flutter and
React Native as generic hybrid web apps or promising identical behavior. Removed
the unsupported 40% time/cost saving, first-attempt store-approval promise, user
abandonment statistic, sub-second response promise, and 10x growth claim from the
edited areas. Release guidance distinguishes submission preparation from platform
review decisions. App cost and timeline answers now identify actual dependencies
and information needed for a proposal.

The mobile service's generic `SoftwareApplication` block offered an unspecified
app at $1,200. The page sells development services rather than that product. It
now uses `WebPage` linked to its existing `Service`, without that invented product
offer. Corrected the truncated iOS service name. No rating schema was added.

The ecommerce introduction starts with pricing, checkout, inventory and order
workflows. It asks whether configuration or a focused integration can meet the
need before recommending a rebuild. The comparison no longer calls WooCommerce
a hosted SaaS product or presents custom software as automatically cheaper,
faster or free of ongoing platform-related costs. It covers operating costs,
data exports, source-code rights, provider limits and maintenance obligations.

The buyer FAQs explain record ownership, identifiers, stock reservation, retries,
data reconciliation and migration rehearsal. They avoid guaranteed SEO retention
and zero-downtime migration. Payment copy distinguishes a provider integration
from the merchant's broader responsibilities. Process and caption wording match
that more cautious migration guidance. The modification date records this actual
edit; the original publication date is unchanged.

Useful existing capability, process, portfolio and contact sections remain.
This is not an independent verification of every existing company metric,
testimonial, certification implication, ownership term or support promise. Owner
evidence is still needed for the remaining claims. Shared reviews, design and
other pages were not rewritten.

## D. Internal linking changes

All paths below use `https://qllmsoft.com`.

| Source URL | Anchor text | Destination URL | Reason |
| --- | --- | --- | --- |
| `/mobile-app-development` | API development and integration services | `/api-development-services` | Clarifies the existing link's backend-delivery scope. |
| `/mobile-app-development` | guide to mobile app development cost factors | `/blog/mobile-app-development-cost-in-pakistan` | Helps buyers prepare a realistic brief and estimate discussion. |
| `/ecommerce-development-services` | software project requirements checklist | `/software-project-requirements-checklist` | Helps document catalog rules and integration needs. |
| `/ecommerce-development-services` | Shopify isn't scaling — what companies do next | `/blog/shopify-isnt-scaling-what-companies-do-next` | Existing relevant article link retained; router navigation now matches the site. |
| `/ecommerce-development-services` | custom vs. SaaS e-commerce for growing SMBs | `/blog/custom-vs-saas-ecommerce-for-growing-smbs` | Existing platform-comparison reading retained with router navigation. |
| `/ecommerce-development-services` | scalable e-commerce development for SMBs | `/blog/scalable-ecommerce-development-for-smbs` | Existing scaling guidance retained with router navigation. |

The homepage, service and contact links were preserved. Source inventory reports
no unresolved literal destinations for these two pages; active inventoried IIS
redirect rules were also checked. Live production responses were not certified.

## E. Validation

- JSX parsing and `git diff --check` passed.
- Existing class, inline-style, SVG viewBox, path and point attribute sequences
  match `HEAD` for both page components. No CSS or responsive rules changed.
- Each source page has one H1 and its existing canonical target.
- Mobile title, description and social previews now share page constants;
  ecommerce already uses the same pattern. New metadata is specific to each page.
- No standalone lint command exists. Compilation and browser results are recorded
  below after execution.
- Browser command: `node scripts/validate-seo-batch.cjs --batch-3`. Artifacts are
  saved under `build/seo-validation-batch3/` in the ignored build directory.
- Browser checks use local CSS and fallback fonts; external stylesheets are
  stubbed and external images may be blocked. No before-screenshot baseline was
  captured, so pixel-equivalent visual output is not claimed.
- The shared duplicate-title/hydration problem from earlier batches is outside
  these content edits and remains a deployment blocker until resolved.

Final results: `npm.cmd run build --ignore-scripts` compiled successfully; sitemap
generation and react-snap lifecycle scripts were deliberately skipped. Both pages
rendered at 1440, 768 and 390 pixels with one H1, one description, the intended
canonical, parseable Service JSON-LD, no horizontal overflow and no JavaScript
errors. All four tested supporting destinations rendered their expected H1 and
canonical without redirecting. The validator exited nonzero because both pages
still contain two title elements, including the shared generic fallback.

Mobile main-content images loaded in this restricted check. The externally hosted
ecommerce hero image was blocked at all three widths, so its production availability
is unverified. The inspected tablet ecommerce hero also places its badge behind
the fixed header; spacing and header styles were not changed. Compare the baseline
before any separately reviewed design adjustment. No pixel-equivalence claim or
deployment approval follows from these checks.

## F. Next batch

Review `/legacy-system-modernization-services` and `/ai-powered-software-solutions`
next. Both need a clear buyer decision path: what to assess before committing,
what delivery depends on, how integrations/data affect risk, and who maintains
the result. Keep hypothetical applications distinct from documented case studies.
Then address hiring/outsourcing pages in their own engagement-focused batch.

## Primary references checked

- [Apple App Review Guidelines](https://developer.apple.com/app-store/review/guidelines/)
- [React Native platform-specific code](https://reactnative.dev/docs/platform-specific-code)
- [Flutter architecture](https://docs.flutter.dev/resources/architectural-overview)
- [Stripe integration security and shared responsibilities](https://docs.stripe.com/security/guide)

These support the technical distinctions and qualified release/security wording;
they do not verify QllmSoft's commercial claims or promise project outcomes.
