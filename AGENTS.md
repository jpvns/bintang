# Sistem BINTANG

A small Progressive Web App (PWA) shell for the "Sistem Bantuan Industri Ternakan" (JPVNS livestock assistance system). It consists of three static files:

- `index.html` — PWA shell that embeds the real app (a Google Apps Script web app) in a full-screen `<iframe>` and registers the service worker.
- `manifest.json` — PWA manifest (name, icons, theme).
- `sw.js` — minimal service worker (network passthrough fetch handler).

The actual application logic lives in the external Google Apps Script web app referenced by the `<iframe src>` in `index.html`; it is not part of this repository.

## Cursor Cloud specific instructions

- This is a dependency-free static site. There is nothing to install or build.
- Serve it over HTTP (not `file://`) so the service worker registers: `python3 -m http.server 8000` from the repo root, then open `http://localhost:8000/index.html`.
- "Working" looks like: the page renders, the console logs `BINTANG PWA Ready!` (service worker activated), and the full-screen iframe loads the external Google Apps Script form. The iframe content requires internet access to `script.google.com`.
- There are no lint/test/build steps; verification is manual (load the page in a browser).
