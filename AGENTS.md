# AGENTS.md

## Cursor Cloud specific instructions

### What this project is
This repo is a small static Progressive Web App ("Sistem BINTANG") consisting of only three files: `index.html`, `manifest.json`, and `sw.js`. There is no package manager, build system, test suite, or lint config. `index.html` is a thin shell that loads an external Google Apps Script web app inside a full-screen iframe; `sw.js` is a minimal pass-through service worker.

### Running it (dev)
Serve the repo root over HTTP (a plain file:// open will not register the service worker). Both Python 3 and Node are available on the VM. Simplest option:

```
python3 -m http.server 8000
```

Then open `http://localhost:8000/index.html`.

### Notes / gotchas
- There are no dependencies to install and nothing to build, lint, or test. The startup update script is effectively a no-op.
- The main app UI is served from an external Google Apps Script URL inside the iframe, so the page requires network access to render its content. If the iframe is blank, check outbound connectivity rather than the local files.
- A `favicon.ico` 404 and deprecated `apple-mobile-web-app-capable` meta warnings appear in the console; these are cosmetic and do not affect functionality.
- Successful load logs `BINTANG PWA Ready!` in the browser console (service worker registered).
