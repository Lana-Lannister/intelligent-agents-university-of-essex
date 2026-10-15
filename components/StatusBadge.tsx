import type { WeekStatus } from "@/lib/weeks";

const STATUS_STYLES: Record<WeekStatus, string> = {
  "not-started": "bg-zinc-100 text-zinc-600",
  "in-progress": "bg-amber-100 text-amber-800",
  complete: "bg-emerald-100 text-emerald-800",
};

const STATUS_LABELS: Record<WeekStatus, string> = {
  "not-started": "Not started",
  "in-progress": "In progress",
  complete: "Complete",
};

export default function StatusBadge({ status }: { status: WeekStatus }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${STATUS_STYLES[status]}`}
    >
      {STATUS_LABELS[status]}
    </span>
  );
}
