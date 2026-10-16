import { siteConfig } from "./site-config";

export type WeekStatus = "not-started" | "in-progress" | "complete";

export interface WeekItem {
  title: string;
  author?: string;
  description?: string;
  href?: string;
  body?: string[];
  code?: string[];
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
  sections?: AssessmentInfo[];
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
    sections: [{
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
    }],
  },
  2: {
    week: 2,
    title: "Week 2",
    status: "complete",
    summary: "Discussion forum: initial post and peer response.",
    sections: [{
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
    }],
  },
  3: {
    week: 3,
    title: "Week 3",
    status: "complete",
    summary: "Discussion forum: summary post reflecting on peer feedback.",
    sections: [{
      title: "Discussion Forum",
      description:
        "Summary post reflecting on team discussion of my Week 3 thread, revising my position on agent autonomy, coordination and human oversight.",
      items: [
        {
          title: "Summary Post",
          author: "Lana Menezes Fidelis (own thread)",
          description:
            "Reflects on peer feedback (Anne, Ali, Sergei) to revise my position: autonomy is only valuable when matched by effective coordination, semantic alignment and appropriate human oversight.",
          href: courseworkBlobUrl("coursework/week-03/summary-post.md"),
          body: [
            "My post linked the rise of agent-based systems to distributed computing and advances in artificial intelligence. I now see their value as conditional: autonomy enables adaptation, but effective coordination determines whether that adaptation serves organisational goals (Jennings, 2000).",
            "Anne's feedback refined my distinction between objects and agents. The difference concerns control over behaviour: an agent can evaluate requests against its objectives rather than simply execute an invoked operation. Reactive architectures prioritise responses, deliberative architectures use symbolic reasoning, and hybrid architectures combine both (Wooldridge and Jennings, 1995). BDI models organise deliberation around beliefs, desires and intentions, making them relevant where agents must maintain commitments while circumstances change.",
            "However, independent decision-making introduces semantic and strategic difficulties. Anne's vocabulary example illustrates why exchanging valid messages does not establish shared understanding. Payne and Tamma (2014) demonstrate negotiated ontology alignment under incomplete knowledge; this does not establish that commercially competing agents will disclose information honestly. I would therefore require validated terminology mappings and explicit contractual constraints before agents commit organisational resources.",
            "Ali's critique also challenged my assumption that decentralisation automatically improves resilience. Sergei's retrieval example sharpened this distinction: completing a task despite source failure can conceal reduced evidence coverage. I would consequently evaluate service continuity alongside output quality, failure visibility and coordination costs, using simulated disruptions before deployment.",
            "In supply chains, I would automate stock monitoring and routine replenishment within agreed limits, while requiring human approval for unfamiliar suppliers, substantial expenditure or unresolved semantic conflicts. This applies Parasuraman, Sheridan and Wickens' (2000) distinction between automating information acquisition, analysis, decision selection and action implementation.",
            "My revised position is that agent-based systems suit distributed, changing environments with autonomous stakeholders. Their benefits include responsiveness and flexible task allocation, but simpler centralised approaches remain preferable when coordination overhead exceeds those benefits. Autonomy should therefore be justified through organisational outcomes.",
          ],
          references: [
            "Jennings, N.R. (2000) 'On agent-based software engineering', Artificial Intelligence, 117(2), pp. 277–296. Available at: https://doi.org/10.1016/S0004-3702(99)00107-1.",
            "Parasuraman, R., Sheridan, T.B. and Wickens, C.D. (2000) 'A model for types and levels of human interaction with automation', IEEE Transactions on Systems, Man, and Cybernetics – Part A: Systems and Humans, 30(3), pp. 286–297. Available at: https://doi.org/10.1109/3468.844354.",
            "Payne, T.R. and Tamma, V. (2014) 'Negotiating over ontological correspondences with asymmetric and incomplete knowledge', in Proceedings of the 13th International Conference on Autonomous Agents and Multiagent Systems. Paris, France, 5–9 May. International Foundation for Autonomous Agents and Multiagent Systems, pp. 517–524. (Accessed: 16 October 2026).",
            "Wooldridge, M. and Jennings, N.R. (1995) 'Intelligent agents: theory and practice', The Knowledge Engineering Review, 10(2), pp. 115–152. Available at: https://doi.org/10.1017/S0269888900008122.",
          ],
        },
      ],
    }],
  },
  5: {
    week: 5,
    title: "Week 5",
    status: "complete",
    summary: "Discussion forum: Collaborative Discussion 2 - Agent Communication Languages.",
    sections: [{
      title: "Discussion Forum",
      description:
        "Initial post comparing KQML-style Agent Communication Languages with direct method invocation in conventional programming.",
      items: [
        {
          title: "Initial Post",
          description:
            "KQML's performative-based message design versus the semantic weaknesses later evaluation work exposed, contrasted with tightly-coupled method invocation in Python/Java.",
          href: courseworkBlobUrl("coursework/week-05/discussion-post.md"),
          body: [
            "Agent Communication Languages (ACLs) provide a standardised way for autonomous agents to exchange information, requests, and intentions within open, heterogeneous multi-agent systems. KQML, one of the earliest and most influential ACLs, emerged from the ARPA Knowledge Sharing Effort as both a message format and a message-handling protocol intended to support run-time knowledge sharing among agents. Rather than specifying how content is represented, KQML wraps a message in a \"performative\", a speech-act label such as tell, ask-if, or achieve, that makes explicit the sender's communicative intent while remaining agnostic to the underlying content language (Finin, Fritzson, McKay and McEntire, 1994). This layered design, separating message-level intent from content and transport, is arguably KQML's central advantage: agents built on different platforms, in different programming languages, and with different internal knowledge representations can still interoperate provided they share enough vocabulary to interpret the performatives and content exchanged.",
            "This flexibility, however, is also a source of weakness. Later evaluation work found that the practical desiderata for such languages span form, content, semantics, implementation, networking, environment, and reliability, and that KQML fell short on several of these fronts, particularly around a rigorously agreed semantics for its performative set (Mayfield, Labrou and Finin, 1995). Because two implementations could interpret the same performative differently, interoperability guarantees were weaker than the specification suggested, a criticism echoed in later surveys of the field noting that semantic specification issues dominated much of the debate around ACLs (Labrou, Finin and Peng, 1999). ACLs also introduce parsing and protocol overhead that simpler mechanisms avoid entirely.",
            "Method invocation in Python or Java is a fundamentally different model: caller and callee are tightly coupled through a shared interface, type system, and usually a common runtime, and a call carries no negotiable intent, only direct procedural execution. This suits closed, trusted systems well, but is poorly matched to the open, dynamic environments that motivated agent research in the first place, where designers cannot assume shared implementation details in advance. Wooldridge and Jennings frame this distinction in terms of agent theories, architectures, and languages as separate but related concerns, with agent languages existing precisely to embody the autonomy and flexibility that conventional software engineering models do not (Wooldridge and Jennings, 1995). ACLs therefore trade raw efficiency and simplicity for semantic richness and openness.",
          ],
          references: [
            "Finin, T., Fritzson, R., McKay, D. and McEntire, R. (1994) 'KQML as an agent communication language', Proceedings of the Third International Conference on Information and Knowledge Management (CIKM '94). New York: ACM.",
            "Labrou, Y., Finin, T. and Peng, Y. (1999) 'Agent communication languages: the current landscape', IEEE Intelligent Systems, 14(2), pp. 45–52.",
            "Mayfield, J., Labrou, Y. and Finin, T. (1995) 'Evaluation of KQML as an agent communication language', in Intelligent Agents II: Proceedings of the Second International Workshop on Agent Theories, Architectures, and Languages (ATAL-95), LNAI 1037. Montréal: Springer-Verlag.",
            "Wooldridge, M. and Jennings, N.R. (1995) 'Intelligent agents: theory and practice', The Knowledge Engineering Review, 10(2), pp. 115–152.",
          ],
        },
      ],
    }],
  },
  6: {
    week: 6,
    title: "Week 6",
    status: "complete",
    summary: "Exercise: Creating Agent Dialogues (KQML/KIF).",
    sections: [{
      title: "Activity: Creating Agent Dialogues",
      description:
        "A KQML/KIF dialogue between two agents, Alice (procurement) and Bob (warehouse stock control), querying stock levels and HDMI ports for 50-inch televisions.",
      items: [
        {
          title: "Agent Dialogue: Alice and Bob",
          description:
            "Alice asks Bob about the available stock of 50-inch televisions and the number of HDMI ports they have, using ask-one/tell KQML performatives over KIF content.",
          href: courseworkBlobUrl("coursework/week-06/agent-dialogue.md"),
          code: [
            "(ask-one\n  :sender       Alice\n  :receiver     Bob\n  :content      (stock-level TV-50IN ?quantity)\n  :reply-with   q1\n  :language     KIF\n  :ontology     warehouse-inventory\n)",
            "(tell\n  :sender       Bob\n  :receiver     Alice\n  :content      (stock-level TV-50IN 42)\n  :in-reply-to  q1\n  :language     KIF\n  :ontology     warehouse-inventory\n)",
            "(ask-one\n  :sender       Alice\n  :receiver     Bob\n  :content      (hdmi-ports TV-50IN ?count)\n  :reply-with   q2\n  :language     KIF\n  :ontology     warehouse-inventory\n)",
            "(tell\n  :sender       Bob\n  :receiver     Alice\n  :content      (hdmi-ports TV-50IN 4)\n  :in-reply-to  q2\n  :language     KIF\n  :ontology     warehouse-inventory\n)",
          ],
          body: [
            "Why an agent communication language, not a direct call: Genesereth and Ketchpel (1994) frame open, cross-organisation coordination as the core motivation for ACLs - Alice and Bob may be built on different platforms with no shared implementation, so coordination has to happen through messages whose meaning does not depend on either side's internal code. KQML's performative layer also preserves agent autonomy: Bob is not obliged to execute Alice's ask-one the way an object is obliged to execute an invoked method, which is the reactive-but-independent property Wooldridge and Jennings (1995) use to distinguish agents from objects.",
            "Theoretical grounding: KQML's performatives operationalise speech act theory (Austin, 1962; Searle, 1969) - tell is an assertive, ask-one is a directive. Mayfield, Labrou and Finin (1995) observed that KQML left these performatives without a rigorously agreed formal semantics; Cohen and Levesque (1995) addressed this by defining each act via feasibility preconditions and rational effects grounded in a theory of rational action, a semantics FIPA later adopted for FIPA-ACL (FIPA, 2002). KIF itself is grounded in first-order predicate logic (Genesereth and Fikes, 1992), which is what licenses an unbound variable such as ?quantity inside a message: ask-one is defined as finding a binding that makes the open sentence true.",
            "Design notes: ask-one (not ask-all) is used because both questions expect a single determinate value for a specific product, not a set of matching facts. The :reply-with/:in-reply-to pair lets Alice run both questions concurrently without ambiguity about which tell answers which ask-one. Both agents share the warehouse-inventory ontology so that stock-level and hdmi-ports resolve to the same predicates on both sides - KQML's performative layer alone does not guarantee this.",
            "Limitation: this dialogue shows the successful path only. A complete exchange would also need a refusal branch (e.g. Bob replying sorry for an unrecognised product code), which KQML supports but which the activity's single known product does not exercise. Without an agreed precondition for sorry versus a null tell, Alice cannot reliably distinguish \"the product does not exist\" from \"the stock level is zero\" unless the ontology defines both outcomes in advance.",
          ],
          references: [
            "Austin, J.L. (1962) How to Do Things with Words. Oxford: Clarendon Press.",
            "Cohen, P.R. and Levesque, H.J. (1995) 'Communicative actions for artificial agents', Proceedings of the First International Conference on Multiagent Systems (ICMAS-95). San Francisco, CA, 12-14 June. Menlo Park, CA: AAAI Press, pp. 65-72.",
            "FIPA (2002) FIPA ACL Message Structure Specification, SC00061G. Geneva: Foundation for Intelligent Physical Agents.",
            "Finin, T., Fritzson, R., McKay, D. and McEntire, R. (1994) 'KQML as an agent communication language', Proceedings of the Third International Conference on Information and Knowledge Management (CIKM '94). New York: ACM.",
            "Genesereth, M.R. and Fikes, R.E. (1992) Knowledge Interchange Format, Version 3.0 Reference Manual. Technical Report Logic-92-1. Stanford, CA: Stanford University Logic Group.",
            "Genesereth, M.R. and Ketchpel, S.P. (1994) 'Software agents', Communications of the ACM, 37(7), pp. 48-53.",
            "Mayfield, J., Labrou, Y. and Finin, T. (1995) 'Evaluation of KQML as an agent communication language', in Intelligent Agents II: Proceedings of the Second International Workshop on Agent Theories, Architectures, and Languages (ATAL-95), LNAI 1037. Montreal: Springer-Verlag.",
            "Searle, J.R. (1969) Speech Acts: An Essay in the Philosophy of Language. Cambridge: Cambridge University Press.",
            "Wooldridge, M. and Jennings, N.R. (1995) 'Intelligent agents: theory and practice', The Knowledge Engineering Review, 10(2), pp. 115-152.",
          ],
        },
      ],
    }],
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
