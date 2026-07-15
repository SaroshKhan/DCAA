# DCAA Data Lake microsite deployment

This repository contains the complete source and production build for the Peregrine Advisors DCAA Data Lake microsite. The site is configured for this public path:

`https://www.peregrineadvisors.com/dcaadatalake`

## Production files

The deployable static site is in `dist/public/`. Copy the contents of that directory into the web-server directory mapped to `/dcaadatalake/`.

The production document expects the following URL structure:

```text
/dcaadatalake/index.html
/dcaadatalake/assets/*
/dcaadatalake/dcaadatalake-assets/*
```

The web server should return `/dcaadatalake/index.html` for requests under `/dcaadatalake/` that do not match a physical file. This preserves anchor navigation and future client-side routes.

## Build from source

```bash
corepack enable
pnpm install --frozen-lockfile
pnpm check
pnpm build
```

The build is static and does not require a database, server-side API, secrets, or runtime environment variables.

## Local production-path test

```bash
pnpm exec vite preview --host 127.0.0.1 --port 4174
```

Open `http://127.0.0.1:4174/dcaadatalake/`.

## Web-server requirements

The server must serve WebP, PNG, JavaScript, CSS, HTML, and text files with their correct MIME types. Long-lived cache headers are appropriate for hashed files under `/dcaadatalake/assets/`. Use shorter cache headers for `index.html` so future revisions appear promptly.

## Verification after deployment

Confirm the Peregrine logo, hero visual, P-DSA diagram, email actions, internal section links, external DCAA links, SEC award links, mobile navigation, filters, selectors, quotations, and the Our Understanding of DCAA appendix.
