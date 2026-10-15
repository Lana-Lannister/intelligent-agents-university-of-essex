export type WeekStatus = "not-started" | "in-progress" | "complete";

export interface WeekSummary {
  week: number;
  title: string;
  status: WeekStatus;
  summary: string;
}

export function getAllWeeks(): WeekSummary[] {
  return Array.from({ length: 12 }, (_, i) => {
    const week = i + 1;
    return {
      week,
      title: `Week ${week}`,
      status: "not-started",
      summary: "Content coming soon.",
    };
  });
}
