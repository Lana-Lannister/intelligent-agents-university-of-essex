import { siteConfig } from "./site-config";

export type WeekStatus = "not-started" | "in-progress" | "complete";

export interface WeekItem {
  title: string;
  author?: string;
  description?: string;
  href?: string;
  body?: string[];
  references?: string[];
}

export interface AssessmentInfo {
  title: string;
  description: string;
  items: WeekItem[];
}

export interface WeekSummary {
  week: number;
  title: string;
  status: WeekStatus;
  summary: string;
}

export interface WeekDetail extends WeekSummary {
  assessment?: AssessmentInfo;
}

const TOTAL_WEEKS = 12;

function courseworkBlobUrl(path: string): string {
  return `${siteConfig.githubRepo}/blob/main/${path}`;
}

const weekDetails: Partial<Record<number, WeekDetail>> = {
  1: {
    week: 1,
    title: "Week 1",
    status: "complete",
    summary: "Discussion forum: why agent-based systems emerged.",
    assessment: {
      title: "Discussion Forum",
      description:
        "Initial post on why agent-based computing emerged and how it benefits organisations.",
      items: [
        {
          title: "Initial Post",
          description:
            "Agent-based systems as a response to distributed computing complexity, drawing on Wooldridge & Jennings (1995) and the BDI/organisational benefits literature.",
          href: courseworkBlobUrl("coursework/week-01/discussion-post.md"),
          body: [
            "Agent-based systems didn't appear out of nowhere; they're really a response to how messy and distributed computing environments have become. Think about the internet, sensor networks, or any large-scale system today: there's no way a human can sit and manage every moving part in real time. What was needed was software that could act on its own, notice changes in its environment, and respond to them without someone constantly checking in. Wooldridge and Jennings (1995) capture this well when they describe agents as autonomous, reactive, pro-active, and socially capable, properties that set them apart from the more passive software objects we were used to. That shift, from objects that simply respond when called upon to agents that actively pursue goals, is arguably the conceptual leap that made the whole field possible.",
            "At the same time, AI research was maturing in ways that made this practically achievable. Work on belief-desire-intention (BDI) architectures, planning, and negotiation gave agents an actual basis for making sensible decisions when things are uncertain or constantly changing (Russell and Norvig, 2020). Without these developments, agent-based computing would have stayed a nice idea on paper rather than something organisations could actually deploy in production systems.",
            "And that's really where the benefit comes in for organisations. Instead of one monolithic system trying to do everything, tasks can be broken down and handed to specialised agents working alongside each other, which makes the whole setup more scalable and harder to bring down entirely if one part fails (Jennings, Sycara and Wooldridge, 1998). We see this play out in supply chains, e-commerce negotiation, and network management, where agents essentially act on behalf of different stakeholders, sometimes cooperating, sometimes competing (Wooldridge, 2009). The result is less manual oversight, faster adaptation to change, and generally better decision-making across the organisation as a whole.",
          ],
          references: [
            "Jennings, N.R., Sycara, K. and Wooldridge, M. (1998) 'A roadmap of agent research and development', Autonomous Agents and Multi-Agent Systems, 1(1), pp. 7–38.",
            "Russell, S. and Norvig, P. (2020) Artificial Intelligence: A Modern Approach. 4th edn. Harlow: Pearson.",
            "Wooldridge, M. (2009) An Introduction to MultiAgent Systems. 2nd edn. Chichester: Wiley.",
            "Wooldridge, M. and Jennings, N.R. (1995) 'Intelligent agents: theory and practice', The Knowledge Engineering Review, 10(2), pp. 115–152.",
          ],
        },
      ],
    },
  },
  2: {
    week: 2,
    title: "Week 2",
    status: "complete",
    summary: "Discussion forum: initial post and peer response.",
    assessment: {
      title: "Discussion Forum",
      description:
        "Peer's initial post on agent-based systems and LLM-powered research agents, plus my response.",
      items: [
        {
          title: "Initial Post",
          author: "Lara Koller",
          description:
            "Agent-based systems as a response to organisational complexity and LLM advances, with an additional task on STORM/PaSa-style research agent design.",
          href: courseworkBlobUrl("coursework/week-02/discussion-post.md"),
          body: [
            "The growing use of agent-based systems reflects both the increasing complexity of organisational processes and continued advances in artificial intelligence. Many modern tasks are distributed, constantly changing and difficult to manage through a single centralised system. Multi-agent systems respond to this challenge by dividing work among autonomous, specialised agents that can interpret their environment, make decisions and coordinate their actions. More recently, large language models have accelerated this development by improving agents' ability to communicate in natural language, reason, plan, retain information and access external knowledge (Li et al., 2024).",
            "Agent-based computing also builds on established AI research. For example, the Belief-Desire-Intention architecture represents what an agent knows, what it aims to achieve and the plans it chooses to follow. This allows agents to act purposefully in changing environments. However, Archibald et al. (2024) show that performance is strongly influenced by how agents prioritise competing intentions, indicating that autonomy alone does not guarantee effective decision-making.",
            "For organisations, agent-based systems can support the division of tasks, parallel problem-solving and decentralised decision-making. Organisational models can also define roles and communication protocols to structure how agents interact. However, these advantages can come with trade-offs. Bouslimi (2024) found that an organisation-based multi-agent system remained highly efficient as task complexity increased, although specialised roles and rigid communication protocols limited its flexibility and robustness. Overall, agent-based systems can provide considerable value for organisations managing complex and distributed work, but their effectiveness depends on strong coordination, appropriate validation and resilient system design.",
            "Additional Task: Research into STORM and PaSa suggests that LLM-powered research systems should separate planning, retrieval and evaluation rather than respond immediately using only the language model's existing knowledge.",
            "STORM decomposes a broad topic into several research perspectives, generates follow-up questions, retrieves information from external sources and organises the collected evidence into an outline before producing a long-form response (Shao et al., 2024). PaSa focuses specifically on academic paper search. It uses a Crawler to generate search queries, retrieve papers and follow citation links, while a Selector assesses whether each paper satisfies the user's requirements (He et al., 2025).",
            "Both systems demonstrate the value of task decomposition, iterative searching and evaluating retrieved information before it is used in the final research output. These principles could inform our group's agent design by enabling the system to expand or redirect its search when the initial results are insufficient or irrelevant. One design option to consider is a single coordinating planning agent that converts the user's goal into focused subquestions and manages separate stages for retrieval, relevance assessment, evidence extraction and synthesis. This architecture could help maintain alignment with the overall research goal while supporting a modular, transparent and traceable workflow.",
          ],
          references: [
            "Archibald, B. et al. (2024) 'Quantitative modelling and analysis of BDI agents', Software and Systems Modeling, 23, pp. 343–367. Available at: https://doi.org/10.1007/s10270-023-01121-5",
            "Bouslimi, I. (2024) 'The scalability impact on organization-based multi-agent systems', 28th International Conference on Knowledge-Based and Intelligent Information & Engineering Systems (KES 2024), Seville, Spain, 11–13 September. Amsterdam: Elsevier B.V. Pp. 991–1000. Available at: https://doi.org/10.1016/j.procs.2024.09.518",
            "He, Y. et al. (2025) 'PaSa: An LLM agent for comprehensive academic paper search', 63rd Annual Meeting of the Association for Computational Linguistics, Vienna, Austria, 27 July–1 August. Association for Computational Linguistics. Pp. 11663–11679. Available at: https://doi.org/10.18653/v1/2025.acl-long.572",
            "Li, X. et al. (2024) 'A survey on LLM-based multi-agent systems: workflow, infrastructure, and challenges', Vicinagearth, 1, article 9. Available at: https://doi.org/10.1007/s44336-024-00009-2",
            "Shao, Y. et al. (2024) 'Assisting in writing Wikipedia-like articles from scratch with large language models', 2024 Conference of the North American Chapter of the Association for Computational Linguistics: Human Language Technologies, Mexico City, Mexico, 16–21 June. Association for Computational Linguistics. Pp. 6252–6278. Available at: https://doi.org/10.18653/v1/2024.naacl-long.347",
          ],
        },
        {
          title: "Peer Response",
          author: "Lana Menezes Fidelis (in reply to Lara Koller)",
          description:
            "Response discussing adaptive role allocation and replanning as safeguards against the rigidity Lara identified in organisation-based MAS and single-coordinator research-agent designs.",
          href: courseworkBlobUrl("coursework/week-02/peer-response.md"),
          body: [
            "Hi Lara,",
            "I really liked how you tied BDI theory to the practical coordination challenges in your post. Your point about rigid communication protocols limiting flexibility and robustness stood out to me, since it suggests a fairly common failure mode in organisation-based MAS: systems that are efficient under expected conditions can struggle when task complexity shifts unexpectedly.",
            "One measure that could mitigate this is designing for adaptive role allocation rather than fixed roles. Dorri, Kanhere and Jurdak (2018) note that many MAS architectures sit on a spectrum between fully centralised and fully decentralised control, and that hybrid designs can dynamically reassign coordination responsibilities depending on load or failure conditions. Applying this idea to your discussion, a system could retain organisational structure for routine tasks while allowing agents to renegotiate roles or escalate to a coordinator when rigid protocols would otherwise create a bottleneck. This kind of flexibility is consistent with Wooldridge and Jennings' (1995) original characterisation of agents as reactive and proactive, not just autonomous; an agent's value lies partly in its ability to adapt behaviour to environmental change, not simply follow a predefined plan.",
            "This also connects to your research-agent design. A single coordinating planning agent is efficient, but if it becomes a single point of failure, it risks reproducing the same rigidity you identified. Wang et al. (2024) discuss LLM-agent planning modules that support replanning when retrieval or evaluation stages return insufficient results; this could be a useful safeguard, letting your coordinator revise its subquestion strategy rather than proceeding with poor evidence.",
            "Overall, I think building in some capacity for agents to renegotiate roles or replan is what would most improve the resilience you flagged.",
          ],
          references: [
            "Dorri, A., Kanhere, S.S. and Jurdak, R. (2018) 'Multi-agent systems: a survey', IEEE Access, 6, pp. 28573–28593. Available at: https://doi.org/10.1109/ACCESS.2018.2831228",
            "Wang, L. et al. (2024) 'A survey on large language model based autonomous agents', Frontiers of Computer Science, 18, article 186345. Available at: https://doi.org/10.1007/s11704-024-40231-1",
            "Wooldridge, M. and Jennings, N.R. (1995) 'Intelligent agents: theory and practice', The Knowledge Engineering Review, 10(2), pp. 115–152. Available at: https://doi.org/10.1017/S0269888900008122",
          ],
        },
      ],
    },
  },
};

function defaultWeek(week: number): WeekDetail {
  return {
    week,
    title: `Week ${week}`,
    status: "not-started",
    summary: "Content coming soon.",
  };
}

export function getAllWeeks(): WeekSummary[] {
  return Array.from({ length: TOTAL_WEEKS }, (_, i) => {
    const week = i + 1;
    return weekDetails[week] ?? defaultWeek(week);
  });
}

export function getWeek(week: number): WeekDetail | undefined {
  if (week < 1 || week > TOTAL_WEEKS) return undefined;
  return weekDetails[week] ?? defaultWeek(week);
}

export function getWeekNumbers(): number[] {
  return Array.from({ length: TOTAL_WEEKS }, (_, i) => i + 1);
}
