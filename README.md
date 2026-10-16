# Intelligent Agents E-Portfolio

E-portfolio for the **Intelligent Agents** module of the **MSc Artificial Intelligence** programme at the **University of Essex**.

Live site: https://intelligent-agents-university-of-essex.vercel.app/

## Tech stack

- [Next.js](https://nextjs.org/) (App Router) + React + TypeScript
- [Tailwind CSS](https://tailwindcss.com/) v4
- Deployed on [Vercel](https://vercel.com/)

## Repository structure

```
app/                  Next.js routes (home page, /weeks/[week] detail pages)
components/           Shared React components (Header, Hero, Footer, WeekCard)
lib/                  Site config and weekly content data (lib/weeks.ts)
public/               Static assets
coursework/           Per-week source files (discussion posts, notebooks, datasets, scripts)
```

## Finding a week's work

Each week has its own folder under [`coursework/week-NN/`](coursework/), with a `README.md` listing its files and status. [`coursework/README.md`](coursework/README.md) is the index of all 12 weeks — start there to see what's been submitted and what's outstanding. The same content also renders on the live site at `/weeks/NN`.

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
npm run lint
npm run build     # production build check, mirrors what Vercel runs
npm run start     # serve the production build locally
```

## Deployment

The project deploys to [Vercel](https://vercel.com/) with zero extra configuration: import this GitHub repository, keep the default root directory, and every push to `main` produces a production deployment (branches/PRs get preview deployments).
