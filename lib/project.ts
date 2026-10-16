import type { WeekStatus } from "./weeks";

export interface ProjectPhase {
  title: string;
  weekLink: number;
  status: WeekStatus;
  body: string[];
}

export interface ProjectDetail {
  title: string;
  status: WeekStatus;
  summary: string;
  design: ProjectPhase;
  implementation: ProjectPhase;
  criticalEvaluation: string[];
}

const placeholder = (prompt: string) => [prompt];

export const project: ProjectDetail = {
  title: "Final Group Project",
  status: "not-started",
  summary:
    "Critical evaluation of the final group project, covering both the design phase (Week 7) and the implemented solution (Week 11).",
  design: {
    title: "Design Phase",
    weekLink: 7,
    status: "not-started",
    body: placeholder(
      "TODO: summary of the system design produced in Week 7 - architecture, agent roles, communication protocols, and key design decisions."
    ),
  },
  implementation: {
    title: "Implemented Solution",
    weekLink: 11,
    status: "not-started",
    body: placeholder(
      "TODO: summary of the implemented solution from Week 11 - what was built, how it diverged from the Week 7 design, and why."
    ),
  },
  criticalEvaluation: placeholder(
    "TODO: critical evaluation comparing the design and implementation phases - what worked, what didn't, individual contribution to the group effort, and what would be done differently."
  ),
};
