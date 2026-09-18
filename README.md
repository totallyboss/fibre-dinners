# Spring Table

A fibre-first meal planner for lunches, dinners, and a school lunchbox, built
around New Zealand seasonal produce. See `spring-table-spec.md` for the full
specification.

The app is a single static file (`index.html`) with no build step and no
backend. All state (the weekly plan and the lunchbox contents) lives in the
browser's `localStorage`, per device.

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
