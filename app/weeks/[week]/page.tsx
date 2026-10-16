import Link from "next/link";
import { notFound } from "next/navigation";
import ContentSection from "@/components/ContentSection";
import StatusBadge from "@/components/StatusBadge";
import { getWeek, getWeekNumbers } from "@/lib/weeks";

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

      {week.sections && week.sections.length > 0 ? (
        week.sections.map((section) => (
          <ContentSection key={section.title} section={section} />
        ))
      ) : (
        <p className="text-sm text-zinc-500">No content yet.</p>
      )}
    </main>
  );
}
