import type { WeekStatus } from "./weeks";

export interface RolfeSection {
  heading: "What" | "So what" | "Now what";
  body: string[];
}

export interface CaseStudy {
  slug: string;
  theme: string;
  title: string;
  status: WeekStatus;
  sections: RolfeSection[];
  references?: string[];
}

export interface ReflectiveCommentary {
  status: WeekStatus;
  body: string[];
}

const placeholder = (prompt: string) => [prompt];

export const reflectiveCommentary: ReflectiveCommentary = {
  status: "not-started",
  body: placeholder(
    "TODO (~1000 words for the final Turnitin submission): reflective commentary on the skills, knowledge and understanding developed across the module - what changed in how I think about agent architectures, autonomy and coordination, and how that shows up in the forum contributions and project work above."
  ),
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "bias",
    theme: "Bias in autonomous decision-making",
    title: "Case Study 1 - Bias in Autonomous Decision-Making",
    status: "not-started",
    sections: [
      {
        heading: "What",
        body: placeholder(
          "TODO: describe a specific decision, design choice or incident on the project (or in the module exercises) where bias in agent behaviour or training/retrieval data was a real risk."
        ),
      },
      {
        heading: "So what",
        body: placeholder(
          "TODO: analyse why this mattered - technical, ethical and professional implications - and connect it to the literature on bias in autonomous/agentic systems."
        ),
      },
      {
        heading: "Now what",
        body: placeholder(
          "TODO: how this will change future practice when designing or validating agent-based systems."
        ),
      },
    ],
  },
  {
    slug: "ai-safety",
    theme: "AI safety constraints",
    title: "Case Study 2 - AI Safety Constraints",
    status: "not-started",
    sections: [
      {
        heading: "What",
        body: placeholder(
          "TODO: describe a decision or incident related to bounding agent autonomy - e.g. kill switches, action limits, approval gates, safe exploration - from the project design (week 7) or implementation (week 11)."
        ),
      },
      {
        heading: "So what",
        body: placeholder(
          "TODO: analyse the significance of the safeguard (or its absence), referencing relevant AI safety literature."
        ),
      },
      {
        heading: "Now what",
        body: placeholder(
          "TODO: how this will inform future design of autonomy boundaries and human-in-the-loop controls."
        ),
      },
    ],
  },
  {
    slug: "xai",
    theme: "Explainable decisions in agents (XAI)",
    title: "Case Study 3 - Explainable Decisions in Agents (XAI)",
    status: "not-started",
    sections: [
      {
        heading: "What",
        body: placeholder(
          "TODO: describe a moment where an agent's decision or reasoning needed to be interpretable - to teammates, users, or for debugging - during the project or exercises."
        ),
      },
      {
        heading: "So what",
        body: placeholder(
          "TODO: analyse why explainability mattered here, referencing XAI literature, and any trade-offs with performance or autonomy."
        ),
      },
      {
        heading: "Now what",
        body: placeholder(
          "TODO: how this will shape future choices around transparency and explainability in agent design."
        ),
      },
    ],
  },
];
