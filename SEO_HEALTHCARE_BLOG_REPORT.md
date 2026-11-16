# Fatima's healthcare AI article — 15 November 2026

## A. Page and intent

| URL | Primary topic and intent | Work |
|---|---|---|
| /blog/how-to-choose-an-ai-healthcare | Choosing an AI healthcare software development company; vendor comparison and shortlisting | Improved evidence requests, risk assessment, EHR integration, evaluation criteria, ownership and cost considerations |

## B. Discovery and files

Fatima's commit `f43df2b` added this article. It already exists in `blogPostsData`, is not excluded by `Blog.jsx` and is already in the sitemap. No missing listing entry or route defect was found. The fresh local build displays it as card 1 of 34 on desktop and mobile. This does not establish what an already-running localhost process is serving.

Added the article URL to `package.json`'s explicit prerender include list. Updated only its record in `src/data/blogPostsData.js`; existing URL, canonical, publication date, images and Mahnoor Fatima attribution retained. Modified date reflects this editorial revision. No CSS or redirect changes.

## C. Content

Changed the unrelated “how to build a healthcare app” keyword to vendor-selection topics. Improved the title and description, workflow definition, clinician approval of draft notes, HIPAA responsibilities, data-flow evidence, model evaluation, FHIR interoperability checks and exit terms. Removed the unsupported promotional endorsement of another vendor. The conclusion gives a practical pilot decision rather than promising compliance or safety.

## D. Links and sources

Contextual internal links: healthcare software service, API development/integration and software requirements checklist. Authoritative external references: [HHS cloud guidance](https://www.hhs.gov/hipaa/for-professionals/special-topics/health-information-technology/cloud-computing/index.html), [HL7 FHIR overview](https://www.hl7.org/fhir/overview.html), [NIST AI RMF](https://www.nist.gov/itl/ai-risk-management-framework). References support specific discussions rather than imply vendor certification.

## E. Validation

Production compilation passed. `scripts/validate-healthcare-post.cjs` verifies card visibility, actual click-through, authorship, single title/description/H1, exact canonical, JSON-LD parsing, official references and contextual internal links. Desktop 1440px and mobile 390px passed with no JavaScript errors or horizontal overflow. Evidence: `seo-healthcare-post-validation.json`. External resources are isolated in the browser checks; source pages were separately checked through browsing.

Focused prerender covers `/blog` and the article. No deployment or push performed.

## F. Local use and next checks

Open `/blog` or `/blog/how-to-choose-an-ai-healthcare` on the running local site. If an older version remains, restart the development server from this checkout (`npm.cmd start`) and hard-refresh. If serving the build directory, serve the newly generated build rather than a previous output. The precise cause of the prior local absence was not reproduced, so stale-process/cache explanations remain possibilities rather than confirmed diagnoses.
