import Link from "next/link";
import { notFound } from "next/navigation";
import ContentSection from "@/components/ContentSection";
import StatusBadge from "@/components/StatusBadge";
import { getWeek, getWeekItemCount, getWeekNumbers, slugify } from "@/lib/weeks";

export const instant = false;

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

      {getWeekItemCount(week) > 1 ? (
        <nav className="rounded-xl border border-zinc-200 bg-zinc-50 p-4">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
            On this page
          </h2>
          <ul className="mt-2 flex flex-col gap-1.5">
            {(week.sections ?? []).flatMap((section) =>
              section.items.map((item) => (
                <li key={item.title} className="text-sm">
                  <a
                    href={`#${slugify(item.title)}`}
                    className="text-zinc-700 underline hover:text-zinc-900"
                  >
                    {item.title}
                  </a>
                  {item.author ? (
                    <span className="text-zinc-500"> - {item.author}</span>
                  ) : null}
                </li>
              )),
            )}
          </ul>
        </nav>
      ) : null}

      {week.sections && week.sections.length > 0 ? (
        week.sections.map((section) => (
          <ContentSection key={section.title} section={section} />
        ))
      ) : (
        <p className="text-sm text-zinc-500">No content yet.</p>
      )}

      <nav className="flex items-center justify-between gap-4 border-t border-zinc-200 pt-6 text-sm">
        {week.week > 1 ? (
          <Link
            href={`/weeks/${week.week - 1}`}
            className="text-zinc-600 hover:text-zinc-900"
          >
            ← Week {week.week - 1}
          </Link>
        ) : (
          <span />
        )}
        {week.week < 12 ? (
          <Link
            href={`/weeks/${week.week + 1}`}
            className="text-zinc-600 hover:text-zinc-900"
          >
            Week {week.week + 1} →
          </Link>
        ) : (
          <span />
        )}
      </nav>
    </main>
  );
}
