# AGENTS.md

## Cursor Cloud specific instructions

This repository is a **static Progressive Web App (PWA)** — there is no build step, no
package manager, no dependencies, and no automated tests. It consists of three files:

- `index.html` — full-screen shell that embeds an external Google Apps Script web app
  (the "Sistem BINTANG" livestock-aid system) inside an `<iframe>` and registers the
  service worker.
- `manifest.json` — PWA manifest.
- `sw.js` — pass-through service worker.

### Running the app (development)

The app must be served over HTTP (not opened via `file://`), otherwise the service worker
will not register. `python3` and `node` are pre-installed on the VM. Serve the repo root
with any static server, e.g.:

```
python3 -m http.server 8000
```

Then open `http://localhost:8000/index.html`. A successful start shows the
`BINTANG PWA Ready!` message in the browser console (service worker registered) and the
iframe renders the external BINTANG application.

### Notes / gotchas

- There is nothing to install, lint, build, or unit-test. The update script is effectively
  a no-op.
- The actual application logic lives in the external Google Apps Script deployment
  referenced by the `iframe` `src` in `index.html`; it is not part of this repo and cannot
  be modified here.
- The iframe and PWA icons load from external URLs (`script.google.com`, `i.postimg.cc`),
  so rendering the full UI requires outbound internet access.
