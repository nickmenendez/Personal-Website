# Site TODO

Future additions to the site, roughly in priority order.

## 1. Writing section — short essays on AI Product Management

- A "Notes" or "Writing" nav item with a simple index page linking to individual essay pages (plain HTML, matching the site's design — no CMS needed at this scale).
- Candidate topics from real work: shipping an MCP server for a revenue platform, building AI evals before trusting agentic features, what a Team OS in Claude Code looks like across Product/Engineering/Support/QA.
- Each essay page needs its own title, meta description, and og tags.

## 2. Resume PDF link on the experience page

- Host the resume PDF in the repo (e.g. `resources/Nick-Menendez-Resume.pdf`).
- Link it near the bottom of `professional-experience.html`, alongside a pointer to LinkedIn.
- Keep the PDF in sync with the page content when roles change.

## 3. Photos for the lifestyle page

Layout is in place: each section on `lifestyle.html` has an arrow-button photo gallery (`resources/js/gallery.js`) showing three photos at a time, currently filled with four generated placeholder images per section in `resources/img/lifestyle/`. Remaining:

- Replace the placeholders with real photos, keeping the same filenames (`skiing-1.jpg` … `coffee-4.jpg`). Compress for the web, target < 300 KB each.
- Tailor each photo's `alt` text in `lifestyle.html` to the actual image.
- To add or remove photos, add or delete `.gallery-slide` figures in the section's `.gallery-track` — the gallery handles any count.

## Other ideas (not yet committed to)

- Deploy the site to nickmenendez.com (GitHub Pages is a natural fit for this repo); social preview tags activate once live.
- Link the Coffee section on the lifestyle page to the roasting company site once it has a name and URL.
- Add specific destinations to the Traveling section (the 2025 world trip has good material).
