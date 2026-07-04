# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Nick Menendez's personal website: a static HTML/CSS site with no build process, package manager, or test suite. There is no `package.json` — files are meant to be opened/served directly as static assets.

## Roadmap

Planned additions to the site live in `TODO.md` at the repo root — check it when the user asks to work on the next site task, and keep it updated as items are completed or added.

## Development

There is no build, lint, or test tooling in this repo. To preview changes, open `index.html` directly in a browser or serve the directory with any static file server (e.g. `python3 -m http.server`).

## Architecture

- Pages: `index.html` (homepage hero), `professional-experience.html`, `lifestyle.html`, and `contact.html`. All pages share the same nav (with an `active` class marking the current page) and footer, duplicated per page since there is no templating.
- `resources/css/style.css` — site-specific styles (header/hero, nav, layout). Background images referenced here (e.g. `img/Nick.jpeg`) are resolved relative to `resources/css/`, so images live in `resources/css/img/`.
- `resources/js/nav.js` — small vanilla script (loaded with `defer` by every page) for the mobile hamburger nav. It tags `<html>` with a `js` class; the CSS only collapses the nav behind the hamburger at ≤600px when that class is present, so no-JS visitors get a wrapped link row instead.
- `vendors/css/` — third-party CSS vendored directly into the repo (`normalize.css`, `grid.css`). Treat these as external code; don't hand-edit unless intentionally patching a vendor file.
- Grid layout follows the vendored `grid.css` convention: wrap rows in `.row` and columns in `.col` (percentage-based float grid, not CSS Grid/Flexbox).
