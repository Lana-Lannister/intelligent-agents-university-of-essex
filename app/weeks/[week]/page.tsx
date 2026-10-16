import Link from "next/link";
import { notFound } from "next/navigation";
import StatusBadge from "@/components/StatusBadge";
import { getWeek, getWeekNumbers } from "@/lib/weeks";

export function generateStaticParams() {
  return getWeekNumbers().map((week) => ({ week: String(week) }));
}

export default async function WeekPage({
  params,
}: {
  params: Promise<{ week: string }>;
}) {
  const { week: weekParam } = await params;
  const week = getWeek(Number(weekParam));

  if (!week) notFound();

  return (
    <main className="mx-auto flex max-w-4xl flex-col gap-8 px-6 py-10">
      <Link href="/" className="text-sm text-zinc-500 hover:text-zinc-900">
        ← Back to all weeks
      </Link>

      <div className="flex items-center justify-between gap-2">
        <h1 className="text-2xl font-semibold text-zinc-900">{week.title}</h1>
        <StatusBadge status={week.status} />
      </div>

      <p className="text-zinc-600">{week.summary}</p>

      {week.assessment ? (
        <section className="flex flex-col gap-4 rounded-xl border border-zinc-200 p-5">
          <div>
            <h2 className="text-lg font-semibold text-zinc-900">
              {week.assessment.title}
            </h2>
            <p className="text-sm text-zinc-600">
              {week.assessment.description}
            </p>
          </div>
          <ul className="flex flex-col gap-5">
            {week.assessment.items.map((item) => (
              <li
                key={item.title}
                className="rounded-lg border border-zinc-100 bg-zinc-50 p-4"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <span className="font-medium text-zinc-900">
                    {item.title}
                  </span>
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs text-zinc-500 underline hover:text-zinc-900"
                    >
                      View source on GitHub
                    </a>
                  ) : null}
                </div>
                {item.description ? (
                  <p className="mt-1 text-sm text-zinc-600">
                    {item.description}
                  </p>
                ) : null}
                {item.body ? (
                  <div className="mt-4 flex flex-col gap-3 border-t border-zinc-200 pt-4">
                    {item.body.map((paragraph, index) => (
                      <p key={index} className="text-sm leading-relaxed text-zinc-800">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                ) : null}
                {item.references && item.references.length > 0 ? (
                  <div className="mt-4 border-t border-zinc-200 pt-4">
                    <h3 className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                      References
                    </h3>
                    <ul className="mt-2 flex flex-col gap-1.5">
                      {item.references.map((reference) => (
                        <li key={reference} className="text-xs text-zinc-600">
                          {reference}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </li>
            ))}
          </ul>
        </section>
      ) : (
        <p className="text-sm text-zinc-500">No assessment content yet.</p>
      )}
    </main>
  );
}
