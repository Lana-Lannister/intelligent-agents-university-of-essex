import Link from "next/link";
import StatusBadge from "@/components/StatusBadge";
import { project } from "@/lib/project";

function Phase({
  title,
  weekLink,
  status,
  body,
  repoUrl,
  repoLabel,
}: {
  title: string;
  weekLink: number;
  status: typeof project.design.status;
  body: string[];
  repoUrl?: string;
  repoLabel?: string;
}) {
  return (
    <section className="flex flex-col gap-3 rounded-xl border border-zinc-200 p-5">
      <div className="flex items-center justify-between gap-2">
        <h2 className="text-lg font-semibold text-zinc-900">{title}</h2>
        <StatusBadge status={status} />
      </div>
      {repoUrl ? (
        <a
          href={repoUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 self-start rounded-lg bg-zinc-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-zinc-700"
        >
          <svg
            viewBox="0 0 16 16"
            width="16"
            height="16"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
          </svg>
          View {repoLabel ?? "repository"} on GitHub
        </a>
      ) : null}
      {body.map((paragraph, index) => (
        <p key={index} className="text-sm leading-relaxed text-zinc-800">
          {paragraph}
        </p>
      ))}
      <Link
        href={`/weeks/${weekLink}`}
        className="text-xs text-zinc-500 underline hover:text-zinc-900"
      >
        See Week {weekLink} for full detail →
      </Link>
    </section>
  );
}

export default function ProjectPage() {
  return (
    <main className="mx-auto flex max-w-4xl flex-col gap-8 px-6 py-10">
      <Link href="/" className="text-sm text-zinc-500 hover:text-zinc-900">
        ← Back to all weeks
      </Link>

      <div className="flex items-center justify-between gap-2">
        <h1 className="text-2xl font-semibold text-zinc-900">
          {project.title}
        </h1>
        <StatusBadge status={project.status} />
      </div>

      <p className="text-zinc-600">{project.summary}</p>

      <Phase
        title={project.design.title}
        weekLink={project.design.weekLink}
        status={project.design.status}
        body={project.design.body}
      />

      <Phase
        title={project.implementation.title}
        weekLink={project.implementation.weekLink}
        status={project.implementation.status}
        body={project.implementation.body}
        repoUrl={project.implementation.repoUrl}
        repoLabel={project.implementation.repoLabel}
      />

      <section className="flex flex-col gap-3 rounded-xl border border-zinc-200 p-5">
        <h2 className="text-lg font-semibold text-zinc-900">
          Critical Evaluation
        </h2>
        {project.criticalEvaluation.map((paragraph, index) => (
          <p key={index} className="text-sm leading-relaxed text-zinc-800">
            {paragraph}
          </p>
        ))}
      </section>
    </main>
  );
}
