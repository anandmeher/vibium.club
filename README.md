# Vibium.club

An unofficial **static community site** for [Vibium](https://github.com/VibiumDev/vibium) — *the verification layer for coding agents*. It collects tutorials, YouTube video walkthroughs, blogs, and release updates in one place.

> Not affiliated with VibiumDev. Vibium is open source under the Apache 2.0 license.

## Pages

| Page | File | Contents |
|------|------|----------|
| Home | `index.html` | What Vibium is, features, quick-start preview |
| Tutorial | `tutorial.html` | Step-by-step setup, CLI cheat sheet, JS/Python/Java examples, MCP setup |
| Videos | `videos.html` | Embedded YouTube tutorials |
| Blogs | `blog.html` | Curated articles and discussions |
| Updates | `updates.html` | Release highlights and roadmap |

## Tech

Plain static HTML + CSS + a tiny vanilla JS file — **no build step, no dependencies**.

```
.
├── index.html
├── tutorial.html
├── videos.html
├── blog.html
├── updates.html
└── assets/
    ├── styles.css
    └── main.js
```

`assets/main.js` powers the mobile nav, code-block "copy" buttons, the language tabs on the tutorial page, and active-link highlighting.

## Run locally

Any static file server works:

```bash
# Python
python3 -m http.server 8000

# or Node
npx serve .
```

Then open <http://localhost:8000>.

## Deploy

Drop the folder onto any static host — **Vercel**, GitHub Pages, Netlify, Cloudflare Pages, etc. No configuration required.

```bash
# Vercel (after `npm i -g vercel`)
vercel deploy
```

## Updating content

- **Videos** — edit the `<iframe>` embeds and metadata in `videos.html`.
- **Blogs** — add a `.blog-item` block in `blog.html`.
- **Updates** — add a `.release` entry to the timeline in `updates.html`.

Release versions and dates are point-in-time snapshots; the
[GitHub Releases page](https://github.com/VibiumDev/vibium/releases) is the source of truth.
