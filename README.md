# Tharindu Kumesh — Portfolio

Personal portfolio built with **React 18, TypeScript, Reactstrap, Bootstrap 5, Vite and Lucide icons**. Content is adapted from the supplied CV.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Deploy to GitHub Pages

1. Create a **public** GitHub repository named `tharindu-portfolio` under `kumesh1997` (or change the Vite base path if using a different repository name).
2. In this project folder, run:

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/kumesh1997/tharindu-portfolio.git
git push -u origin main
```

3. On GitHub, go to **Settings → Pages → Build and deployment → Source → GitHub Actions**.
4. The included workflow automatically builds and publishes on pushes to `main`.
5. Expected site address: `https://kumesh1997.github.io/tharindu-portfolio/` after deployment.

### Customize

- All portfolio content, labels, links, image path and page metadata: `src/data/portfolio.json`
- Theme and layout: `src/styles.css`
- Portrait extracted from the provided CV: `public/profile.jpeg`
- Deployment base path: `vite.config.ts` (currently `/tharindu-portfolio/` for GitHub Pages)

Projects are presented as experience-based case studies; no public demo URLs are invented. The CV does not contain a verified journal-paper URL, so no paper link is fabricated. No contact form backend is required: contact uses `mailto:`.

## Atomic design

```text
src/
  components/
    atoms/       # Icons, links, rich text and technology tags
    molecules/   # Cards, section headings, social links and portrait
    organisms/   # Header, footer and complete page sections
    templates/   # Page shell and layout slots
  pages/         # Composes the portfolio and supplies its data
  data/
    portfolio.json  # Single content source
    index.ts        # Data export and inferred TypeScript types
```

`App.tsx` renders `PortfolioPage`. Reusable components receive content through props;
the page imports the JSON once. `vite.config.ts` also reads that JSON to generate
the HTML title and description at development and build time.

To add a project, add an item to `projects.items` and set its `category` to a filter
ID in `projects.filters` (`engineering` or `research`). `all` displays every item.
Icon names are mapped to Lucide components in `components/atoms/Icon.tsx`.
The portrait keeps the original photo and uses a responsive circular crop with
gradient edging; change `profile.image` to replace the photo.
