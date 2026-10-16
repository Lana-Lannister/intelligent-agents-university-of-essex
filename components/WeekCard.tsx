import Link from "next/link";
import type { WeekSummary } from "@/lib/weeks";
import StatusBadge from "./StatusBadge";

export default function WeekCard({ week }: { week: WeekSummary }) {
  return (
    <Link
      href={`/weeks/${week.week}`}
      className="flex flex-col gap-3 rounded-xl border border-zinc-200 p-5 transition hover:border-zinc-400"
    >
      <div className="flex items-center justify-between gap-2">
        <span className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
          Week {week.week}
        </span>
        <StatusBadge status={week.status} />
      </div>
      <h3 className="text-lg font-semibold text-zinc-900">{week.title}</h3>
      <p className="text-sm text-zinc-600">{week.summary}</p>
    </Link>
  );
}
