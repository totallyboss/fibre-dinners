# Spring Table

A fibre-first meal planner for lunches, dinners, and a school lunchbox, built
around New Zealand seasonal produce. See `spring-table-spec.md` for the
original specification (the app has since evolved beyond it).

A small static site, no build step and no backend:

- `index.html` — home page: browse recipes and school lunch items, add them
  to the weekly planner, and see the resulting shopping list.
- `info.html` — the eating principles and seasonal NZ produce reference,
  linked from the home page.
- `data.js` — shared recipe, principle, and seasonal-produce data.
- `styles.css` — shared styles for both pages.

The weekly plan lives in the browser's `localStorage` (key
`springtable_plan`), per device. The groceries tab and shopping list are
derived from it on the fly, not stored separately.

## Run it locally

Open `index.html` directly in a browser, or serve the folder with any static
file server, for example:

```
python3 -m http.server
```

## Deploy to GitHub Pages

A workflow at `.github/workflows/pages.yml` deploys the site automatically on
every push to `main`.

First-time setup, once per repository:

1. Go to **Settings → Pages**.
2. Under **Build and deployment → Source**, choose **GitHub Actions**.
3. Push to `main` (or run the workflow manually from the **Actions** tab).

The site will then be live at `https://<owner>.github.io/<repo>/`.
