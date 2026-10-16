import type { WeekStatus } from "./weeks";

export interface ProjectPhase {
  title: string;
  weekLink: number;
  status: WeekStatus;
  body: string[];
  repoUrl?: string;
  repoLabel?: string;
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
    status: "complete",
    repoUrl: "https://github.com/Lana-Lannister/research-brief-agent",
    repoLabel: "Research Brief Agent",
    body: [
      "Research Brief Agent: an individual implementation of the group's design, a deterministic orchestrator coordinating a Planning Agent, a Retrieval Agent (Semantic Scholar, falling back to OpenAlex, with Crossref DOI validation) and an Evaluation & Synthesis Agent, bounded by two human checkpoints, one automatic reformulation per sub-question, and one scope revision per run, to turn a research question into a grounded, DOI-verified research brief. See Week 11 for the full architecture, autonomy-bounds, and grounding-safeguard writeup.",
      "TODO: how this diverged from the Week 7 group design, and why (what was simplified, what was added, what the individual-vs-group scope boundary was).",
    ],
  },
  criticalEvaluation: placeholder(
    "TODO: critical evaluation comparing the design and implementation phases - what worked, what didn't, individual contribution to the group effort, and what would be done differently."
  ),
};
