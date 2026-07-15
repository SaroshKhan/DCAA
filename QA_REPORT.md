# Final QA report

**Validation date:** July 15, 2026  
**Build type:** Production, prerendered static React SPA  
**Result:** All automated functional, responsive, asset, link, TypeScript, and production-build checks passed. Lighthouse accessibility, best-practice, and SEO targets passed. The local mobile performance score remains documented below.

## Automated viewport and interaction results

| Width | Layout and overflow | Mobile or desktop interaction suite | Result |
|---:|---|---|---|
| 320 px | No horizontal overflow; mobile matrix; body text at least 16 px; touch targets at least 44 by 44 px | Menu open, scroll lock, Escape close, focus restoration, and capability disclosure | Pass |
| 375 px | No horizontal overflow; mobile matrix; long labels wrap | Mobile interaction suite | Pass |
| 390 px | No horizontal overflow; representative mobile visual review | Mobile interaction suite | Pass |
| 430 px | No horizontal overflow; mobile matrix and past-performance folios | Mobile interaction suite | Pass |
| 768 px | No horizontal overflow; tablet transformation | Mobile navigation and disclosure suite | Pass |
| 1024 px | No horizontal overflow; desktop matrix and evidence selectors | Product, foundation, capability, SEC, and team selectors | Pass |
| 1280 px | No horizontal overflow after evidence-motif correction | Desktop selector suite | Pass |
| 1440 px | No horizontal overflow; complete desktop composition | Desktop selector suite | Pass |

The complete machine-readable result is stored in `qa-results.json`.

## Production Lighthouse results

| Category or metric | Result | Project target | Status |
|---|---:|---:|---|
| Performance | 81 | 90 where the hosting environment permits | Documented local exception |
| Accessibility | 100 | 95 | Pass |
| Best Practices | 100 | 95 | Pass |
| SEO | 100 | 90 | Pass |
| First Contentful Paint | 3.4 seconds | Representative mobile measure | Recorded |
| Largest Contentful Paint | 3.9 seconds | Below 2.5 seconds where hosting permits | Documented local exception |
| Cumulative Layout Shift | 0 | Below 0.1 | Pass |
| Total Blocking Time | 20 milliseconds | Low main-thread blocking | Pass |

The mobile performance audit ran against an uncompressed local Express server under Lighthouse throttling. The production build removes development instrumentation, prerenders the complete page, hydrates interactions, inlines the Evidence Cartography stylesheet, eliminates third-party fonts, and compresses the hero visual. The final page contains substantially more approved management-review content, including additional client-value detail and a long PCAOB quotation. Integrated hosting compression and edge delivery remain outside this local harness, so the environment-qualified Performance and LCP targets remain documented rather than claimed as passed.

## Accessibility review

The public experience includes one `h1`, logical section headings, semantic `header`, `nav`, `main`, `section`, table, figure, and footer structures, a functional skip link, descriptive external links, visible focus, reduced-motion behavior, meaningful alternative text, decorative-image suppression, and screen-reader state announcements. Desktop and mobile selectors use standard buttons with exposed pressed state. Mobile capability disclosures use native details and summary behavior. The modal mobile navigation traps focus, closes with Escape, restores focus to the trigger, and locks background scrolling.

Automated contrast findings were corrected by deepening teal and orange text tones, removing opacity from section indices, using dark teal on light information surfaces, and using light teal on dark institutional sections. Lighthouse accessibility now scores 100. The viewport no longer limits zoom. External links use `noreferrer`. The production console no longer reports failed generated assets or debug-collector requests.

Contextual past performance and quotation tooltips passed hover, focus, touch, Escape, accessible-name, expanded-state, visibility, and horizontal-overflow checks at every required viewport. Desktop panels anchor inward above their triggers. Mobile panels become fixed bottom context sheets that remain within the viewport.

Artifact-category filters passed selection, multi-category intersection, live result count, empty-state, reset, keyboard, touch-target, and horizontal-overflow checks at 320, 375, 390, 430, 768, 1024, 1280, and 1440 pixels. Every filterable folio links to the corresponding location in the existing evidence map.

The consolidated management-review regression suite also verifies both opportunity email actions, all three hero decision explanations, exact past-performance destinations and focus, the new three-part narrative, all nine Substantially exceeds assessments, the approved PCAOB quotation and title, GSA contract and SIN, SAM registration identifiers, Maryland benefit-corporation wording, removal of internal-context tooltips from client-value sections, and absence of prohibited legacy department terminology from the rendered public experience.

The procurement-readiness regression verifies **CMMC Status: Final Level 2 (C3PAO)**, State of Maryland Benefit Corporation language, the supporting-documentation tooltip, hover and touch opening, keyboard focus, Escape closing, accessible expanded state, and viewport-safe presentation.

The final management-review regression confirms that rendered and authored language contains no standalone use of the prohibited sales term, public copy contains no controlled-requirements acronym, every SEC workstream exposes its full federal award identifier and announcement link, all six Peregrine profiles include education and a labeled DCAA focus statement, the opportunity email subject is prepopulated correctly, and the footer uses the approved client leave-behind.

Responsive visual inspection on the expanded revision covered 1440 by 810 desktop, 1024 by 768 iPad, and 390 by 844 phone viewports. The hero and major section display scales were reduced, section padding was tightened, and the phone hero now presents the headline, supporting paragraph, and actions without clipped text or oversized type. The live browser confirmed that the Peregrine introduction, expanded three-part approach, P-DSA method, Lido quotation, Ceebit quotation, and DCAA appendix are present in the rendered document.

Direct in-place inspection of Section 2 confirmed that all three action cards contain a conclusion, operating explanation, and implementation detail; the cards use their available height without large empty lower regions; and the adjacent DCAA requirements panel remains aligned with the selected action. The Lido quotation follows the three-part method as a separate evidence-led statement rather than being compressed into a card.

The independent `/dcaadatalake` production package passed the same eight-viewport interaction suite. Direct HTTP checks returned 200 for the page, hashed JavaScript, hero image, P-DSA diagram, and logo at the intended subpath. Lighthouse measured 99 Performance, 100 Accessibility, 100 Best Practices, and 100 SEO, with 1.4-second First Contentful Paint, 2.0-second Largest Contentful Paint, zero layout shift, and 20 milliseconds of Total Blocking Time.

The validated handoff was pushed to `https://github.com/SaroshKhan/DCAA` on branch `main`. The initial published package commit is `bd6de9846b874b87072b3683ba44ed54095c2c19`.

All four DCAA reference URLs and all three SEC award-announcement URLs were opened successfully through browser or page extraction during source validation. Automated DOM checks confirm that each public link has a complete HTTPS destination and every internal past-performance link lands on and focuses its exact section. Direct command-line requests received WAF responses from both public domains, so command-line status codes were not used as the usability determination.

The PCAOB quotation regression verifies the complete user-approved Pooja Sangwan and Ahmed Aboulnaga statements and their public attributions. Ahmed Aboulnaga is attributed to PCAOB without an unverified title.

## Factual and editorial controls

| Control | Result |
|---|---|
| Exact approved hero system | Pass |
| Exactly three organizing messages | Pass |
| Exactly nine approved capability names | Pass |
| Approved Exceeds and Substantially exceeds assessments | Pass |
| SEC prime past performance leads the portfolio | Pass |
| SEC prime and subcontract continuity remain distinct | Pass |
| PCAOB and DDOT receive co-primary Azure past performance treatment | Pass |
| Ceebit remains optional, governed, at cost, tool-agnostic, and under DCAA control | Pass |
| Peregrine profiles appear first and in the approved order | Pass |
| Inadev profiles remain clearly optional | Pass |
| Five approved quotations preserve wording and attribution | Pass |
| No Peregrine contract values or contract sizes | Pass |
| No internal evidence labels, proposal filenames, or confidential DCAA work-definition language | Pass |
| No placeholders, lorem ipsum, TODO markers, legacy 14-capability language, or unsupported ratings | Pass |
| No contractions or ampersands in public client copy | Pass |

## Engineering results

`pnpm check` passes. `pnpm build` passes and produces the final static package. The final client bundle is approximately 290 kilobytes before transfer compression. The custom stylesheet is approximately 51 kilobytes and is inlined at build time to remove a render-blocking request. The generated hero is served as a 66-kilobyte WebP. All public images loaded successfully in the viewport suite.

## Release conclusion

The new microsite is ready for review as a separate project. Functional, factual-control, mobile, accessibility, link-security, production-build, and visual checks pass. The local Lighthouse performance result is transparently documented and reflects the local uncompressed test server rather than the integrated hosting edge.
