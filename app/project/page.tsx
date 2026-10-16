import Link from "next/link";
import StatusBadge from "@/components/StatusBadge";
import { project } from "@/lib/project";

function Phase({
  title,
  weekLink,
  status,
  body,
}: {
  title: string;
  weekLink: number;
  status: typeof project.design.status;
  body: string[];
}) {
  return (
    <section className="flex flex-col gap-3 rounded-xl border border-zinc-200 p-5">
      <div className="flex items-center justify-between gap-2">
        <h2 className="text-lg font-semibold text-zinc-900">{title}</h2>
        <StatusBadge status={status} />
      </div>
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
