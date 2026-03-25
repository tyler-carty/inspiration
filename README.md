# Inspiration

A slide-based presentation app built for a primary school careers & inspiration day.

## What it is

A full-screen, keyboard-navigated presentation that Tyler Cartwright (Machine Learning Engineer at Lloyds Banking Group) uses to talk to kids aged 7–11 about his career path, what ML actually is, and why it's OK not to have everything figured out.

It's designed to look like a retro arcade game — neon-on-dark, pixel fonts, glowing borders — because that's the aesthetic kids respond to. It's not a website you browse; it's a projector tool the presenter clicks through.

## What it does

- 17 slides covering Tyler's story: from wanting to be a pilot, to discovering computer science, to accidentally stumbling into machine learning
- An interactive fraud detection activity (slides 11–13) where the audience spots suspicious bank transactions before the reveal
- Smooth slide transitions and staggered element animations throughout
- A slide counter in the bottom-right corner (visible to the presenter, unobtrusive to the audience)

## Tech stack

- **Vite + React** — lightweight, fast builds
- **Tailwind CSS v4** — utility-first styling
- **Framer Motion** — slide transitions and element animations
- **Press Start 2P** — pixel font for headings (Google Fonts)
- **Space Mono** — monospace font for body text (Google Fonts)

## Running locally

```bash
npm install
npm run dev
```

## Presenter controls

| Key | Action |
|-----|--------|
| `→` or `Space` | Next slide |
| `←` | Previous slide |
| `Enter` or `R` | Reveal fraud answers (slides 11–13 only) |

## Deployment

Deployed to GitHub Pages via GitHub Actions on push to `main`.

Live at: `tyler-carty.github.io/inspiration`

Vite is configured with `base: '/inspiration/'` for the subdirectory path.
