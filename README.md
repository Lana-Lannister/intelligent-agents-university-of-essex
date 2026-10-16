# Intelligent Agents E-Portfolio

E-portfolio for the **Intelligent Agents** module of the **MSc Artificial Intelligence** programme at the **University of Essex**.

Live site: https://intelligent-agents-university-of-essex.vercel.app/

## Tech stack

- [Next.js](https://nextjs.org/) (App Router) + React + TypeScript
- [Tailwind CSS](https://tailwindcss.com/) v4
- Deployed on [Vercel](https://vercel.com/)

## Repository structure

```
app/                  Next.js routes: home page, /weeks/[week], /project, /reflections
components/           Shared React components (Header, Hero, Footer, WeekCard, ContentSection)
lib/                  Site config and content data (weeks.ts, project.ts, reflections.ts)
public/               Static assets
coursework/           Per-week source files, plus project/ and reflections/
```

## Finding a week's work

Each week has its own folder under [`coursework/week-NN/`](coursework/), with a `README.md` listing its files and status. [`coursework/README.md`](coursework/README.md) is the index of all 12 weeks plus the two cross-cutting sections below - start there to see what's been submitted and what's outstanding. The same content also renders on the live site.

## Module requirements mapping

This e-portfolio is built to satisfy the Unit 12 individual e-portfolio brief:

| Requirement | Where it lives |
| ----------- | --------------- |
| Exercise outputs (scripts, agent implementations, system designs) | `coursework/week-NN/`, rendered at `/weeks/NN` |
| Forum analysis and contributions | `coursework/week-NN/*-post.md`, rendered at `/weeks/NN` |
| Critical evaluation of the final project (design week 7, implementation week 11) | [`coursework/project/`](coursework/project/), rendered at `/project` |
| Reflective commentary + 3 case studies (bias, AI safety, XAI) | [`coursework/reflections/`](coursework/reflections/), rendered at `/reflections` |

The separate Turnitin submission (a single document with this site's URL in the header) draws its word-capped reflective section and case studies from `/reflections`, and its critical evaluation from `/project`.

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
