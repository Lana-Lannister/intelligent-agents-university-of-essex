# Intelligent Agents E-Portfolio

E-portfolio for the **Intelligent Agents** module of the **MSc Artificial Intelligence** programme at the **University of Essex**.

Live site: https://intelligent-agents-university-of-essex.vercel.app/

## Tech stack

- [Next.js](https://nextjs.org/) (App Router) + React + TypeScript
- [Tailwind CSS](https://tailwindcss.com/) v4
- Deployed on [Vercel](https://vercel.com/)

## Repository structure

```
app/                  Next.js routes (home page)
components/           Shared React components (Header, Hero, Footer)
lib/                  Site config
public/               Static assets
coursework/           Raw working files (notebooks, datasets, scripts)
```

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
