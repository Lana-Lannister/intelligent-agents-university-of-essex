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

export const project: ProjectDetail = {
  title: "Final Group Project",
  status: "complete",
  summary:
    "Critical evaluation of the final group project, covering both the design phase (Week 7, Group D's project report) and the implemented solution (Week 11, Research Brief Agent).",
  design: {
    title: "Design Phase",
    weekLink: 7,
    status: "complete",
    body: [
      "Group D (Lana Menezes Fidelis, Lara Koller, Sergei Misjura, Dragos Hont) submitted a project report on 7 September 2026 proposing a three-agent, orchestrator-coordinated system for automating academic literature search: a Planning Agent (decomposition), a Retrieval Agent (Semantic Scholar primary, OpenAlex as fallback if access is unavailable), and an Evaluation and Synthesis Agent (relevance scoring, filtering, brief generation), coordinated by a deterministic (non-agent) orchestrator that deduplicates records, validates DOIs against Crossref, and persists the brief to Markdown and JSON.",
      "Autonomy was designed to be bounded by two human checkpoints (sub-question approval before search; evidence approval before synthesis) and two fixed adaptation limits (one automatic query reformulation per sub-question when the Retrieval Agent's record threshold was unmet; one researcher-triggered scope revision per run). Risks identified at design time included topic drift in decomposition, citation fabrication, unfaithful summarisation, and error propagation across agent handoffs, each paired with a specific, code-level mitigation rather than a general intention. See Week 7 for the full report.",
    ],
  },
  implementation: {
    title: "Implemented Solution",
    weekLink: 11,
    status: "complete",
    repoUrl: "https://github.com/Lana-Lannister/research-brief-agent",
    repoLabel: "Research Brief Agent",
    body: [
      "Research Brief Agent: my individual implementation of Group D's design, a deterministic orchestrator coordinating a Planning Agent, a Retrieval Agent, and an Evaluation & Synthesis Agent, bounded by the same two human checkpoints, one automatic reformulation per sub-question, and one scope revision per run, to turn a research question into a grounded, DOI-verified research brief. See Week 11 for the full architecture, autonomy-bounds, and grounding-safeguard writeup.",
      "One deliberate divergence from the design: the design specified OpenAlex as a fallback, queried only if Semantic Scholar access was unavailable. After tutor feedback (reported by Sergei Misjura in the Week 2 forum thread), I changed the Retrieval Agent to query both Semantic Scholar and OpenAlex for every sub-question rather than treating one as a fallback for the other. This was validated in a live run: on 2 October 2026 Semantic Scholar refused every live search, and because OpenAlex was already being queried in parallel rather than only on failure, the run continued and recorded the coverage gap in its output instead of silently returning fewer results or stalling while it detected the outage and switched sources.",
    ],
  },
  criticalEvaluation: [
    "The design-to-implementation gap was smaller than I expected going in, which I read as evidence that bounding autonomy and agent responsibilities clearly at design time (two human checkpoints, two fixed adaptation limits, role separation between planning, retrieval and evaluation/synthesis) does actually constrain the implementation space in a useful way: there was very little left to improvise once the architecture was fixed, which is the point of doing design work at all.",
    "The one substantive divergence, dual-source retrieval instead of a fallback, was not a failure of the design so much as something the design could not have anticipated without the live-run evidence that produced it: the 2 October Semantic Scholar outage. This matches Group D's own risk framing that mitigations 'reduce risks without removing them' (Section 5 of the report); the fallback strategy was a reasonable mitigation for source unavailability at design time, and the dual-source strategy is a stricter version of the same mitigation, adopted once we had a concrete failure case to design against rather than a hypothetical one.",
    "What I would do differently: the design report's Section 5 risk list (topic drift, citation fabrication, unfaithful summarisation, error propagation) does not include retrieval-source unavailability as a named risk, even though the system requirements section already specified OpenAlex as a fallback, implying the risk was anticipated informally but never written down with its own mitigation and acceptance criteria the way the other four risks were. I would add source unavailability as a fifth named risk in any future design document, specifically because it is the one risk from this list that we know actually occurred during the project, which suggests the original risk-identification process was weighted towards risks that are easy to reason about in the abstract (fabrication, drift) over operational risks that only show up once the system is run against live infrastructure.",
    "On individual contribution: I built the implementation from Group D's shared design and wrote the summary/peer-response forum threads analysing it (Weeks 2, 6, 7, 9, 10, 11); the architectural decisions (three-agent separation, bounded checkpoints, deterministic orchestrator) were a genuine group product from the design phase, not something I introduced unilaterally during implementation.",
  ],
};
