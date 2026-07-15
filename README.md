# Peregrine for DCAA

This project contains the mobile-first DCAA Data Lake microsite for Peregrine Advisors. The public experience positions Peregrine as the SBA 8(a) prime for a potential DCAA opportunity through one decision map: **Use the data → Extract the intelligence → Enable delivery**.

## Project structure

| Location | Purpose |
|---|---|
| `client/src/pages/Home.tsx` | Complete single-page experience and accessible interaction behavior |
| `client/src/data/siteContent.ts` | Verified public content, claims, quotations, profiles, past performance, and official links |
| `client/src/index.css` | Evidence Cartography design system, responsive rules, reduced-motion behavior, and print styles |
| `client/src/entry-server.tsx` | Build-time static prerender entry |
| `scripts/prerender.mjs` | Injects server-rendered markup and the production stylesheet into the final HTML |
| `scripts/qa.mjs` | Automated viewport, interaction, asset, link, typography, and overflow validation |
| `QA_REPORT.md` | Final build, viewport, accessibility, performance, and factual-control results |
| `DEPLOYMENT.md` | Production path, build, server, and post-deployment instructions |

## Local operation

Install dependencies with `pnpm install`, then run `pnpm dev`. The development server uses port 3000 when available. The project is a static React application and requires no database, authentication system, or runtime API.

## Production build

Run `pnpm check` for TypeScript validation and `pnpm build` for the deployable package. The build produces a prerendered application in `dist/public` and a small static-serving entry in `dist/index.js`. Build-time prerendering provides immediate HTML content, and the client hydrates the page to activate navigation, selectors, mobile disclosures, focus management, and state announcements.

## Quality validation

Run `pnpm qa` while the development server is active. The deterministic browser suite checks 320, 375, 390, 430, 768, 1024, 1280, and 1440 pixel widths. It verifies horizontal overflow, mobile typography, touch targets, section presence, image loading, external-link security attributes, mobile navigation, focus restoration, matrix transformation, capability disclosures, and desktop selector states.

The same suite validates contextual past performance tooltips on hover, keyboard focus, and touch. Tooltip triggers expose descriptive accessible names and expanded state, open panels are connected through `aria-describedby`, and Escape closes the active panel.

The Evidence Cartography index also provides optional artifact-category filters for evaluations, case evidence, delivery artifacts, governance and security, leadership testimony, and acquisition qualifications. Multiple selected categories use intersection logic, the live result count announces changes, and reset and empty-state controls preserve a complete path back to all verified artifacts.

The expanded experience includes a concise Peregrine introduction, the source-controlled Design + Systems + Agile method and diagram, the verified Lido Ramadan statement, the user-approved Mitchell D. Winans statement, the alternate Austin Gerig recommendation, and an **Our Understanding of DCAA** appendix covering agency scale, strategy, structure, operating context, data, technology, workforce, and official public sources.

Responsive density is tuned separately for 16:9 desktop, iPad, and phone layouts. Display type, section padding, three-part approach cards, P-DSA content, quotations, appendix metrics, and technology folios adapt without horizontal overflow or empty lower card regions.

Lighthouse can be run against a production server with:

```bash
PORT=4173 NODE_ENV=production node dist/index.js
pnpm exec lighthouse http://127.0.0.1:4173 \
  --chrome-path=/usr/bin/chromium \
  --chrome-flags='--headless --no-sandbox --disable-dev-shm-usage' \
  --only-categories=performance,accessibility,best-practices,seo
```

## Content controls

The Phase 5 Reference Research Document controls public meaning. The Phase 5 Content Map controls section sequence, interaction, responsive transformation, and intended reader conclusions. The Phase 5 Acceptance Checklist controls completion. Project artifacts verify and qualify approved claims, and official DCAA sources support current agency facts and selected public links.

The public copy excludes confidential DCAA work-definition language, internal evidence registers, source-selection-sensitive proposal text, proposal filenames, company contract values, internal skills scores, guessed identifiers, personal contact information, restricted system details, and proposed work presented as completed. SEC prime and subcontract work remain distinct. Collaborative outcomes retain team attribution. Quotations preserve approved wording and attribution.

## Visual assets

The repository includes the Peregrine Advisors logo, compressed Evidence Cartography hero, and the source-controlled P-DSA diagram under `client/public/dcaadatalake-assets/`. The SEC, Azure, cloud, appendix, and three-node path visuals use deterministic CSS and semantic HTML. They contain no invented metrics, fake dashboards, or decorative charts.

## Deployment

The deployable static application is contained in `dist/public` and is configured for `https://www.peregrineadvisors.com/dcaadatalake`. See `DEPLOYMENT.md` for the exact directory structure, build commands, web-server requirements, and post-deployment checks.

## Public links

The site links only to selected official DCAA sources, SEC award announcements, and the Peregrine Advisors website. External links open in a new context with descriptive labels and safe relationship attributes. Internal project artifacts, CPARS files, proposals, resumes, and confidential sources are never exposed through the public interface.
