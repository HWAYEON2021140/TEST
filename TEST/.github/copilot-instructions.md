# Copilot instructions for TEST repository

Repository snapshot:

- Static site / teaching examples containing plain HTML, CSS, JS and assets.
- Key folders: `free-source/` (sample site), `gsap-public/` and `minified/` (GSAP libs), `images/`, `src/`.

Goals for AI coding agents

- Help author fix and modernize static HTML/CSS/JS pages.
- Follow repository conventions for asset paths and minimal invasive edits.

What to know before editing

- This repo contains many standalone example HTML files (top-level .html files in repo root and under `TEST/html_css/javascript`).
- Do not assume a build step; most files are static and should work by opening in a browser.
- Asset path conventions: images referenced with relative paths like `../images/photo1.jpg` or `../html_css/images/photo1.jpg` depending on file location. Preserve existing relative paths when editing unless explicitly correcting them.

Where to look

- `free-source/index.html` — a representative small site structure (assets/css, assets/js, images).
- `gsap-public/` and `minified/` — GSAP library copies. Prefer using `minified/gsap.min.js` when injecting or updating script tags.
- `src/` may contain non-minified library sources.
- `TEST/html_css/javascript/` — many practice pages; fix JS bugs here (typos, incorrect DOM selectors, redeclared variables).

Coding patterns and pitfalls observed

- Many pages use `document.write(...)` and inline `<script>` blocks. Prefer minimally invasive fixes (typo fixes, correct method names) rather than large refactors.
- Common JS issues to check and fix:
  - Typos in method/property names (e.g., `e.preventDefalt()` → `e.preventDefault()`; `photoImg.Src` → `photoImg.src`).
  - Incorrect variable declarations/usage (e.g., `let imgSrc` vs `let.imgSrc`, `K` vs `k`).
  - Redeclaration of block-scoped variables across scripts. Search for `let photo` or `const photo` duplicates.
  - Mixing `text` nodes vs JS expressions; ensure JS is inside `<script>`.
- When updating JS, test by opening the file in a browser (no build tooling present).

Recommended small edits only

- Fix typos, correct DOM APIs, ensure event handlers call `preventDefault()` properly.
- When adding or changing script includes, prefer existing `minified/gsap.min.js` and keep relative paths.

Testing and verification

- Manual smoke test: open edited HTML file in browser and check console for errors.
- Use VS Code search to find repeated issues: search terms `preventDefalt`, `Src`, `let.`, `Cannot redeclare`, `document.write`.

When to ask the human

- If a change would require reworking the folder structure or moving assets, confirm before applying.
- If multiple files appear to be copies that should be consolidated (many similar practice pages), ask whether consolidation is desired.

Example fixes (concrete)

- In `TEST/html_css/javascript/20251028_01_java.html` fix common issues:
  - `e.preventDefalt()` → `e.preventDefault()`
  - `photoImg.Src` → `photoImg.src`
  - `let.imgSrc` → `let imgSrc`
  - `K` → `k`
  - Ensure `photo` NodeList is defined once. If missing, add `const photo = document.querySelectorAll('ul li a'); const photoImg = document.querySelector('p img');`

Commit message guidance

- Use clear, atomic messages: `fix(js): correct preventDefault typo in 20251028_01_java.html` or `fix(path): use minified gsap in free-source index`.

If you modify many files

- Keep changes limited to the smallest scope to validate easily. Notify human to run broader tests.

Questions for maintainers

- Is there any preferred base URL or server when testing (e.g., local server path)?
- Do you want to replace local GSAP copies with CDN links, or keep the repo copies?

---

Please review this guidance and tell me any missing project-specific rules or preferred workflows to incorporate.
