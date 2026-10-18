import { siteConfig } from "./site-config";

export type WeekStatus = "not-started" | "in-progress" | "complete";

export interface WeekImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
}

export interface WeekItem {
  title: string;
  author?: string;
  description?: string;
  href?: string;
  highlightHref?: boolean;
  body?: string[];
  code?: string[];
  images?: WeekImage[];
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

export function slugify(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function getWeekItemCount(week: WeekDetail): number {
  return (week.sections ?? []).reduce((count, section) => count + section.items.length, 0);
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
    summary: "Collaborative Discussion 1: two peer threads on agent-based systems and research agents.",
    sections: [{
      title: "Discussion Forum: Collaborative Discussion 1",
      description:
        "Two peer threads on agent-based systems and LLM-powered research agents, plus my responses.",
      items: [
        {
          title: "Initial Post (Thread 1)",
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
          title: "Peer Response (Thread 1)",
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
        {
          title: "Initial Post (Thread 2)",
          author: "Sergei Misjura",
          description:
            "Reflects on the group's deterministic orchestrator with three agents (Planning, Retrieval, Evaluation and Synthesis) after it was built and tested, including a live Semantic Scholar outage the dual-source retrieval design absorbed without hiding the coverage gap.",
          href: courseworkBlobUrl("coursework/week-02/discussion-post-sergei.md"),
          body: [
            "I am posting this later than planned. The advantage is that the research agent our team designed has now been built and tested, so I can write about what actually happened and not only about the design.",
            "Agent-based systems became popular because computing itself changed. Work is now spread across networks, services and organisations, and one program cannot see or control all of it. Wooldridge and Jennings (1995) describe an agent as autonomous, reactive, pro-active and social, and this definition is still useful today. Jennings (2000) argues that breaking a complex system into interacting agents is a natural way to build it, because each agent can take responsibility for one part of the problem. More recently, large language models have given agents a general way to plan, read and write. Wang et al. (2024) describe LLM-based agents in terms of profile, memory, planning and action modules.",
            "For organisations, I think the main benefit is not autonomy itself but delegation with clear limits. Coming from logistics, I see this as similar to delegating to a warehouse team. Routine decisions are handed over, but there are checkpoints where a person signs off. Parasuraman, Sheridan and Wickens (2000) make the same point in a more formal way. Automation is not all or nothing, and its level can be set separately for gathering information, analysing it, deciding and acting.",
            "Additional Task: STORM breaks a topic into perspectives and questions before it searches and builds an outline (Shao et al., 2024). PaSa separates a Crawler that searches from a Selector that judges each paper against the request (He et al., 2025). In both cases the model does not simply answer from memory. This is important, because a model answering from memory can invent sources. Walters and Wilder (2023) found that 55% of the citations produced by GPT-3.5 and 18% of those produced by GPT-4 were fabricated.",
            "The design decision our team made, and I then built, was a deterministic orchestrator with three agents. A Planning Agent (language model) breaks the question into sub-questions, a Retrieval Agent with no language model searches for papers, and an Evaluation and Synthesis Agent (language model) scores and summarises them. A researcher approves the plan before any search and the evidence before any writing, and every DOI is checked against Crossref. After our tutor's feedback, I changed the Retrieval Agent to search both OpenAlex and Semantic Scholar for every sub-question instead of using one as a fallback. This proved useful in the live runs. On 2 October Semantic Scholar refused every live search, and each run continued with OpenAlex and recorded the gap in its output instead of hiding it.",
          ],
          references: [
            "He, Y. et al. (2025) 'PaSa: an LLM agent for comprehensive academic paper search', Proceedings of the 63rd Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers). Vienna: Association for Computational Linguistics, pp. 11663-11679. Available at: https://doi.org/10.18653/v1/2025.acl-long.572",
            "Jennings, N.R. (2000) 'On agent-based software engineering', Artificial Intelligence, 117(2), pp. 277-296. Available at: https://doi.org/10.1016/S0004-3702(99)00107-1",
            "Parasuraman, R., Sheridan, T.B. and Wickens, C.D. (2000) 'A model for types and levels of human interaction with automation', IEEE Transactions on Systems, Man, and Cybernetics - Part A: Systems and Humans, 30(3), pp. 286-297. Available at: https://doi.org/10.1109/3468.844354",
            "Shao, Y. et al. (2024) 'Assisting in writing Wikipedia-like articles from scratch with large language models', Proceedings of the 2024 Conference of the North American Chapter of the Association for Computational Linguistics: Human Language Technologies (Volume 1: Long Papers). Mexico City: Association for Computational Linguistics, pp. 6252-6278. Available at: https://doi.org/10.18653/v1/2024.naacl-long.347",
            "Walters, W.H. and Wilder, E.I. (2023) 'Fabrication and errors in the bibliographic citations generated by ChatGPT', Scientific Reports, 13, article 14045. Available at: https://doi.org/10.1038/s41598-023-41032-5",
            "Wang, L. et al. (2024) 'A survey on large language model based autonomous agents', Frontiers of Computer Science, 18(6), article 186345. Available at: https://doi.org/10.1007/s11704-024-40231-1",
            "Wooldridge, M. and Jennings, N.R. (1995) 'Intelligent agents: theory and practice', The Knowledge Engineering Review, 10(2), pp. 115-152. Available at: https://doi.org/10.1017/S0269888900008122",
          ],
        },
        {
          title: "Peer Response (Thread 2)",
          author: "Lana Menezes Fidelis (in reply to Sergei Misjura)",
          description:
            "Response questioning whether a language-model-free Retrieval component qualifies as an agent, proposing claim-level source verification and structured review against automation bias, and asking what evidence threshold should trigger suspension during a retrieval-source outage.",
          href: courseworkBlobUrl("coursework/week-02/peer-response-sergei.md"),
          body: [
            "Hello Sergei! Your distinction between autonomy and delegation with clear limits is particularly useful for organisations adopting research agents. Your reported Semantic Scholar failure also exposes an important trade-off: continuing with OpenAlex preserves availability, but does not establish that the resulting evidence base is sufficiently comprehensive.",
            "One architectural question concerns whether all three components qualify as agents. Wooldridge and Jennings (1995) characterise agents through autonomy, reactivity, proactivity and social ability. A retrieval component does not require a language model to demonstrate these properties; however, if it simply executes prescribed searches, describing it as a service within an agent-based workflow may be more precise. This distinction helps organisations assess whether additional autonomy offers benefits that justify its complexity.",
            "I would strengthen your safeguards in two ways. First, Crossref verification should be complemented by checking whether each source supports the associated claim. Walters and Wilder (2023) identified substantive bibliographic errors even among genuine references; consequently, confirming that a DOI exists cannot establish citation accuracy or evidential relevance. I would require the synthesis component to retain supporting passages and flag claims for which only abstracts were available.",
            "Second, human approval should involve structured scrutiny. Parasuraman and Manzey (2010) show that automation bias can affect experienced users, making approval checkpoints insufficient by themselves. Presenting contradictory findings, retrieval gaps and supporting evidence alongside each recommendation could help reviewers make informed decisions.",
            "To assess organisational value, I would compare your system against a simpler retrieval-and-synthesis workflow using an expert-reviewed set of questions. Relevant measures include missed relevant papers, unsupported claims, reviewer time and cost. During database outages, I would also require explicit acceptance of reduced coverage before synthesis proceeds.",
            "What evidence threshold would trigger suspension rather than continued operation when a retrieval source becomes unavailable?",
          ],
          references: [
            "Parasuraman, R. and Manzey, D.H. (2010) 'Complacency and bias in human use of automation: An attentional integration', Human Factors, 52(3), pp. 381-410. Available at: https://doi.org/10.1177/0018720810376055",
            "Walters, W.H. and Wilder, E.I. (2023) 'Fabrication and errors in the bibliographic citations generated by ChatGPT', Scientific Reports, 13, article 14045. Available at: https://doi.org/10.1038/s41598-023-41032-5",
            "Wooldridge, M. and Jennings, N.R. (1995) 'Intelligent agents: Theory and practice', The Knowledge Engineering Review, 10(2), pp. 115-152. Available at: https://doi.org/10.1017/S0269888900008122",
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
  4: {
    week: 4,
    title: "Week 4",
    status: "complete",
    summary: "Team meet-up and alignment for Group D's final project delivery.",
    sections: [{
      title: "Team Note",
      description:
        "Group D met to align on direction and responsibilities ahead of the Week 7 design phase.",
      items: [
        {
          title: "Team Meet-up and Alignment",
          author: "Group D: Lana Menezes Fidelis, Lara Koller, Sergei Misjura, Dragos Hont",
          description:
            "Group D met to align on direction and responsibilities for the final project delivery (Research Brief Agent) ahead of the Week 7 design phase.",
          href: courseworkBlobUrl("coursework/week-04/team-alignment-note.md"),
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
    summary: "Discussion forum and exercise: Creating Agent Dialogues (KQML/KIF).",
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
    }, {
      title: "Discussion Forum",
      description:
        "Two peer threads on where to draw the line between deterministic method calls and KQML-style agent messaging, plus my responses on KQML's weak formal semantics, FIPA-ACL, and the control-versus-autonomy trade-off.",
      items: [
        {
          title: "Initial Post (Thread 1)",
          author: "Dragos Hont",
          description:
            "A practical boundary between deterministic internal operations (plain method calls) and autonomous goal interpretation (KQML-style messaging), grounded in Searle's (1969) speech act theory.",
          href: courseworkBlobUrl("coursework/week-06/discussion-post-dragos.md"),
          body: [
            "A method call invokes a known operation through an agreed interface, so its purpose is already defined by the code. An agent message may need to express both its content and how the receiver should treat it. Searle (1969) separates propositional content from acts such as stating, questioning or commanding. KQML applies this distinction through a performative that makes the sender's intent explicit (Finin et al., 1994).",
            "I would keep DOI deduplication as an ordinary Python method called by the orchestrator. It is deterministic within one controlled application, so KQML would add message handling and ontology agreement where no autonomous interpretation is needed.",
            "I would use KQML-style messaging (Finin et al., 1994) when the Retrieval Agent asks the Planning Agent to reformulate a query. The performative perform marks reformulation as a requested action rather than a report of insufficient evidence, but different ontologies could still give that evidence different meanings (Payne and Tamma, 2014).",
            "My boundary is practical. I would keep deterministic internal operations as method calls because their interfaces already define what should happen. I would use KQML-style messages where an autonomous agent must interpret a requested goal. This flexibility requires agreement on ontology and semantics, and the same terms may still be understood differently, so interoperability cannot be assumed (Payne and Tamma, 2014).",
          ],
          references: [
            "Finin, T., Fritzson, R., McKay, D. and McEntire, R. (1994) 'KQML as an agent communication language', in Proceedings of the Third International Conference on Information and Knowledge Management. New York: ACM, pp. 456-463. doi:10.1145/191246.191322.",
            "Payne, T.R. and Tamma, V. (2014) 'Negotiating over ontological correspondences with asymmetric and incomplete knowledge', in Proceedings of the 13th International Conference on Autonomous Agents and Multiagent Systems. Richland, SC: International Foundation for Autonomous Agents and Multiagent Systems, pp. 517-524.",
            "Searle, J.R. (1969) Speech Acts: An Essay in the Philosophy of Language. Cambridge: Cambridge University Press.",
          ],
        },
        {
          title: "Peer Response (Thread 1)",
          author: "Lana Menezes Fidelis (in reply to Dragos Hont)",
          description:
            "Response noting KQML's lack of rigorous formal semantics (Cohen and Levesque, 1995), FIPA-ACL as a more formally grounded successor, and Payne and Tamma's (2014) negotiation protocol as a more realistic safeguard than assuming a shared ontology upfront.",
          href: courseworkBlobUrl("coursework/week-06/peer-response-dragos.md"),
          body: [
            "Thanks for a well-structured post, Dragos, the boundary you draw between deterministic operations and autonomous goal interpretation is a useful practical heuristic, and grounding it in Searle's (1969) speech act theory gives it theoretical weight rather than just being a coding convention.",
            "One thing worth adding is that KQML's performatives, while making intent explicit, were criticised early on for lacking a rigorous formal semantics. Cohen and Levesque (1995) argued that KQML defined its speech acts largely through informal English descriptions, which meant two implementations could interpret the same performative (e.g. achieve or tell) inconsistently, essentially the same interoperability risk you flag via Payne and Tamma (2014), but occurring at the level of the language itself rather than just the ontology.",
            "This is partly why FIPA-ACL (FIPA, 2002) followed, replacing KQML's ad hoc semantics with a semantic language grounded more formally in agents' beliefs and intentions. So a possible refinement to your practical boundary: even where you'd choose KQML-style messaging for the Retrieval-Planning Agent exchange, the specific dialect matters. FIPA-ACL's more constrained semantics would reduce (though not eliminate) the ambiguity you're already anticipating.",
            "As a mitigation for the ontology mismatch you raise, Payne and Tamma's (2014) own negotiation protocol is instructive here: rather than assuming a shared ontology upfront, agents iteratively exchange candidate mappings and refine correspondences. That seems like a more realistic safeguard than a single agreed ontology, especially in an open multi-agent setting.",
          ],
          references: [
            "Cohen, P.R. and Levesque, H.J. (1995) 'Communicative actions for artificial agents', in Proceedings of the First International Conference on Multi-Agent Systems (ICMAS-95). Cambridge, MA: AAAI Press/MIT Press, pp. 65-72.",
            "FIPA (2002) FIPA ACL Message Structure Specification. Geneva: Foundation for Intelligent Physical Agents.",
          ],
        },
        {
          title: "Initial Post (Thread 2)",
          author: "Yasmin Almeida Ferrera",
          description:
            "Frames the KQML-versus-method-invocation question as control versus autonomy, connecting ACLs to MCP and multi-agent LLM debate research.",
          href: courseworkBlobUrl("coursework/week-06/discussion-post-yasmin.md"),
          body: [
            "Agent Communication Languages (ACLs), such as KQML, were developed to allow autonomous agents to communicate through messages representing actions such as requests, questions and information sharing (Labrou and Finin, 2000). This is fundamentally different from method invocation in Python or Java. When a Python or Java programme calls a method, the developer normally knows exactly which operation is being requested, what inputs it requires and what type of result should be returned. With KQML, the focus is instead on communicating an intention, allowing the receiving agent to decide how to respond.",
            "This is where I see both the main strength and weakness of ACLs. They can make a system much more flexible because agents do not need to know the internal implementation of other agents. This is particularly useful when agents are independent or distributed. However, the same autonomy can make the system harder to control. Communication requires additional processing, and the outcome may not be as predictable as a direct method call.",
            "Python and Java therefore have an important advantage in terms of control and reliability. A method has a defined interface, making it easier to test, debug and predict its behaviour. The limitation is that the components become more dependent on each other. If the method changes, the code relying on it may also need to change. For a multi-agent system where components need to operate independently, this type of dependency can become a limitation.",
            "There is also a deeper problem: communication does not necessarily equal understanding. Two agents can follow the same protocol and still interpret information differently. This is why semantic interoperability is important in systems where agents need to share knowledge, not just exchange messages (Malik and Malik, 2018).",
            "I find this particularly relevant to current AI agents. MCP provides a standardised way for AI applications to connect with tools and external resources (Anthropic, 2024), while multi-agent LLM research shows that agents can communicate to challenge and improve each other's reasoning (Du et al., 2024). In this sense, the idea behind ACLs is still relevant, even if the technology has changed.",
            "For me, the interesting trade-off is therefore not simply KQML versus Python or Java. It is control versus autonomy. Method invocation gives us predictable behaviour, while agent communication gives agents more freedom to cooperate and adapt. The question is whether that additional autonomy actually produces better results, or whether the loss of predictability becomes too high a price to pay.",
          ],
          references: [
            "Anthropic (2024) Model Context Protocol specification. Available at: https://modelcontextprotocol.io/introduction (Accessed: 25 August 2026).",
            "Du, Y., Li, S., Torralba, A., Tenenbaum, J.B. and Mordatch, I. (2024) 'Improving factuality and reasoning in language models through multiagent debate', Proceedings of the 41st International Conference on Machine Learning, 235. Available at: https://openreview.net/pdf?id=zj7YuTE4t8N (Accessed: 25 August 2026).",
            "Labrou, Y. and Finin, T. (2000) Agent Communication Languages: Past, Present and Future. Tutorial presented at ICMAS 2000, Boston, July 2000. Available at: https://userpages.cs.umbc.edu/finin/talks/icmas00.pdf (Accessed: 28 August 2026).",
            "Malik, M. and Malik, S.K. (2018) 'Semantic web as the next generation smart web', Journal of Emerging Technologies and Innovative Research, 5(6), pp. 580-594. Available at: https://www.jetir.org/papers/JETIR1806326.pdf (Accessed: 28 August 2026).",
          ],
        },
        {
          title: "Peer Response (Thread 2)",
          author: "Lana Menezes Fidelis (in reply to Yasmin Almeida Ferrera)",
          description:
            "Response linking Yasmin's control-versus-autonomy framing to the symbol grounding problem, FIPA-ACL's explicit ontology requirement, Jennings' (2000) flexibility/predictability trade-off, and the blurring of message/method-call boundaries in LLM-based agents.",
          href: courseworkBlobUrl("coursework/week-06/peer-response-yasmin.md"),
          body: [
            "Hello Yasmin! Framing the trade-off as control versus autonomy is a clear way to cut through the KQML-versus-method-call comparison, and connecting it to MCP and multi-agent debate research (Du et al., 2024) makes a strong case that the underlying design question has outlived the original ACL technology.",
            "I would push a little further on the \"communication does not equal understanding\" point. This is essentially the symbol grounding problem in a distributed setting: even with a shared protocol like KQML, performatives only specify the type of speech act, not the meaning of the terms inside the message content (Chaib-draa and Dignum, 2002). FIPA-ACL tried to address part of this by requiring agents to share content languages and ontologies explicitly rather than assuming them, though as your Malik and Malik (2018) reference suggests, semantic web style ontology alignment does not fully eliminate the risk of divergent interpretation. Wooldridge (2009) makes a related point that agent communication only works reliably when agents share a common mental model of the world, something that cannot be guaranteed simply by agreeing on a message syntax.",
            "On the reliability point, I think there is a useful middle ground worth naming: many practical multi-agent systems, and MCP-based tool use is a good example, keep the transport and message structure standardised and machine-checkable (closer to a method call's defined interface) while leaving the content of the request open to interpretation by the receiving model. This partially recovers some of the testability you attribute to Python or Java, while still preserving the flexibility ACLs were designed for. It suggests the real design choice is not fully autonomous versus fully deterministic, but where along that spectrum the interface boundary is drawn.",
            "This links to Jennings' (2000) argument that coordination in multi-agent systems requires an explicit trade-off between the flexibility of negotiation-based interaction and the predictability needed for dependable engineering, a tension that maps closely onto your control-versus-autonomy framing. More recent work on LLM-based agents (Guo et al., 2024) also suggests that as natural language itself becomes the communication medium, the boundary between \"message\" and \"method call\" is blurring further, since a natural language request can carry both structured intent and open-ended content within a single exchange.",
          ],
          references: [
            "Guo, T., Chen, X., Wang, Y., Chang, R., Pei, S., Chawla, N.V., Wiest, O. and Zhang, X. (2024) 'Large language model based multi-agents: a survey of progress and challenges', in Proceedings of the Thirty-Third International Joint Conference on Artificial Intelligence (IJCAI-24), pp. 8048-8057.",
            "Jennings, N.R. (2000) 'On agent-based software engineering', Artificial Intelligence, 117(2), pp. 277-296.",
            "Wooldridge, M. (2009) An Introduction to MultiAgent Systems. 2nd edn. Chichester: Wiley.",
          ],
        },
      ],
    }],
  },
  7: {
    week: 7,
    title: "Week 7",
    status: "complete",
    summary: "Final project design phase (Group D); discussion forum summary post; Group D delivery outcome.",
    sections: [{
      title: "Final Project: Design Phase (Group D Project Report)",
      description:
        "Group D's design report for Research Brief Agent: system scope, three-agent architecture (Planning, Retrieval, Evaluation and Synthesis) coordinated by a deterministic orchestrator, bounded autonomy via two human checkpoints and fixed revision limits, risk mitigations, and a risk-first incremental development plan.",
      items: [
        {
          title: "Project Report: Group D",
          author: "Group D: Lana Menezes Fidelis, Lara Koller, Sergei Misjura, Dragos Hont",
          description:
            "Submitted 7 September 2026. Proposes a three-agent, orchestrator-coordinated system for automating academic literature search, with scope deliberately bounded (abstract-level data, one primary search source, local output, limited refinement) to favour controllable, auditable behaviour over broader but unpredictable capability.",
          href: courseworkBlobUrl("coursework/week-07/project-report.md"),
          images: [
            {
              src: "/weeks/week-07/diagrams/diagram-1-class.png",
              width: 1252,
              height: 1181,
              alt: "UML Class Diagram: ResearcherInterface, Orchestrator, PlanningAgent, RetrievalAgent, EvaluationSynthesisAgent, Brief, Assessment, Paper and SubQuestion classes and their relationships.",
              caption: "Diagram 1: UML Class Diagram (Static View)",
            },
            {
              src: "/weeks/week-07/diagrams/diagram-2-sequence.png",
              width: 2331,
              height: 2305,
              alt: "UML Sequence Diagram showing a full run: question submission, sub-question planning and Human Review 1, retrieval with conditional reformulation, validation, evaluation, Human Review 2 (approve/refine/reject-scope), synthesis and brief saving.",
              caption: "Diagram 2: UML Sequence Diagram (Dynamic View)",
            },
            {
              src: "/weeks/week-07/diagrams/diagram-3-activity.png",
              width: 1292,
              height: 1355,
              alt: "UML Activity Diagram showing the retry/reformulation decision logic and the Human Review 2 approve/refine/reject-scope branching with capped scope revision.",
              caption: "Diagram 3: UML Activity Diagram (Decision Logic)",
            },
          ],
          body: [
            "System overview and scope: the user submits a high-level research question; three coordinated agents plan the search, retrieve scholarly literature, evaluate the evidence, and generate a research brief (Markdown and JSON) listing selected papers with DOIs, summaries, themes, gaps and the search's stated limitations, for students and researchers beginning a search rather than seeking a finished paper.",
            "Architecture: a Planning Agent decomposes the question into sub-questions and search queries; a Retrieval Agent queries the Semantic Scholar API (OpenAlex as fallback if access is unavailable) and judges whether a predefined record threshold was met; an Evaluation and Synthesis Agent scores relevance, filters results and produces the brief. A deterministic orchestrator, not itself an agent, sequences the three agents, deduplicates records, validates DOIs against Crossref, and writes the brief to local storage. Dividing responsibility by role, rather than one general-purpose agent, isolates failures and lets retrieval outcomes be judged independently of planning (Hong et al., 2024), and Kim et al. (2026) motivate the central orchestrator: multi-agent gains are task- and architecture-dependent, and architectures without centralised verification propagate errors more strongly.",
            "Bounded autonomy (as designed): two human checkpoints, sub-question approval before any search, and evidence approval before synthesis, bound the exchange. Between them, the original design allowed exactly one automatic path for adaptation: the Retrieval Agent could request, via the orchestrator, that the Planning Agent reformulate a query when its threshold was unmet. A researcher-triggered scope revision after evidence review was allowed once per run. This allocation of control was grounded in Bolanos et al. (2024) on final user decision-making in semi-automated review tools and Zhu et al.'s (2026) distinction between AI operative and human evaluative agency.",
            "Risk mitigations: topic drift in decomposition (mitigated by sub-question review, though an approved decomposition can still misdirect the search, per Wang et al., 2024); citation fabrication (mitigated by DOI deduplication and independent Crossref metadata verification, per Walters and Wilder, 2023, though this cannot establish relevance or summary accuracy); unfaithful summarisation (mitigated by grounding synthesis only in approved abstracts, per Maynez et al., 2020); and error propagation across agent handoffs (mitigated by routing all interactions through the orchestrator with typed messages and logged transitions).",
            "Development approach: incremental and risk-first rather than following runtime order, retrieval first, then deterministic DOI validation, then storage, with LLM-dependent stages added only once that deterministic foundation worked. Role-based decomposition followed the Gaia methodology (Wooldridge, Jennings and Kinny, 2000). Unit tests replay recorded API responses for determinism; end-to-end tests use a fixed set of questions chosen for variety; success was measured by retrieval relevance, citation accuracy, goal preservation and successful storage.",
          ],
          references: [
            "Bolanos, F. et al. (2024) 'Artificial intelligence for literature reviews: opportunities and challenges', Artificial Intelligence Review, 57, article 259. Available at: https://doi.org/10.1007/s10462-024-10902-3",
            "Hong, S. et al. (2024) 'MetaGPT: meta programming for a multi-agent collaborative framework', The Twelfth International Conference on Learning Representations, Vienna, Austria, 7-11 May 2024. OpenReview.net. Available at: https://openreview.net/forum?id=VtmBAGCN7o (Accessed: 24 August 2026).",
            "Kim, Y. et al. (2026) 'Capable language models can outgrow the benefits of collaboration', Nature Machine Intelligence, 8, pp. 1157-1172. Available at: https://doi.org/10.1038/s42256-026-01268-y",
            "Maynez, J. et al. (2020) 'On faithfulness and factuality in abstractive summarization', Proceedings of the 58th Annual Meeting of the Association for Computational Linguistics, Online. Association for Computational Linguistics, pp. 1906-1919. Available at: https://doi.org/10.18653/v1/2020.acl-main.173",
            "Walters, W.H. and Wilder, E.I. (2023) 'Fabrication and errors in the bibliographic citations generated by ChatGPT', Scientific Reports, 13, article 14045. Available at: https://doi.org/10.1038/s41598-023-41032-5",
            "Wang, L. et al. (2024) 'A survey on large language model based autonomous agents', Frontiers of Computer Science, 18, article 186345. Available at: https://doi.org/10.1007/s11704-024-40231-1",
            "Wooldridge, M., Jennings, N.R. and Kinny, D. (2000) 'The Gaia methodology for agent-oriented analysis and design', Autonomous Agents and Multi-Agent Systems, 3, pp. 285-312. Available at: https://doi.org/10.1023/A:1010071910869",
            "Zhu, L. et al. (2026) 'Designing meaningful human oversight in AI', AI and Ethics, 6, article 286. Available at: https://doi.org/10.1007/s43681-026-01147-7",
          ],
        },
      ],
    }, {
      title: "Discussion Forum",
      description:
        "Summary post reflecting on peer responses (Dragos, Yasmin) to my Week 6 initial post on KQML's performative/content separation and its semantic weaknesses.",
      items: [
        {
          title: "Summary Post",
          author: "Lana Menezes Fidelis (own thread)",
          description:
            "Revises where to draw the line between ACL messaging and method calls (wherever a receiving agent can legitimately reject, reinterpret, or renegotiate a request), and connects this to FIPA-ACL's mental-state semantics and ontology-negotiation work.",
          href: courseworkBlobUrl("coursework/week-07/summary-post.md"),
          body: [
            "My initial post argued that KQML's separation of communicative intent (the performative) from content is its central strength, enabling interoperability across heterogeneous, independently built agents, but that this same flexibility exposes a weakness: without a rigorously agreed-upon semantics, two implementations can interpret the same performative differently (Mayfield, Labrou and Finin, 1995). Method invocation in Python or Java, by contrast, offers efficiency and type safety in closed systems but carries no negotiable intent (Wooldridge and Jennings, 1995).",
            "Both peer responses pushed this further in useful ways. Dragos questioned how much interoperability a shared performative set really buys if agents still rely on incompatible ontologies, and asked where, in practice, the line between ACL messaging and ordinary method calls should be drawn. Reflecting on this, I would place that line wherever a receiving agent can legitimately reject, reinterpret, or renegotiate a request rather than execute it; that is precisely where autonomy, not just distribution across processes, becomes relevant. Yasmin's response reinforced this by proposing that ontology-alignment mechanisms could preserve ACL flexibility while reducing semantic ambiguity, drawing on Santos et al.'s (2016) dialogue-based negotiation mechanism for agents with incomplete or asymmetric ontological knowledge.",
            "This connects to how the field actually responded to KQML's semantic gaps. FIPA-ACL retained KQML's performative structure but grounded semantics in the mental states (beliefs, intentions) of communicating agents, an attempt at a more rigorous, verifiable specification (Pitt and Mamdani, 1999). This suggests the debate was never really \"ACL versus method call\" but rather how much semantic commitment a given interaction needs.",
            "Overall, the discussion sharpened my original position: ACLs justify their overhead specifically when agents may respond to a request with genuine discretion, and ongoing work on ontology negotiation and formal semantics is what makes that discretion tractable rather than chaotic.",
          ],
          references: [
            "Finin, T., Fritzson, R., McKay, D. and McEntire, R. (1994) 'KQML as an agent communication language', Proceedings of the Third International Conference on Information and Knowledge Management (CIKM '94). New York: ACM.",
            "Mayfield, J., Labrou, Y. and Finin, T. (1995) 'Evaluation of KQML as an agent communication language', in Intelligent Agents II: Proceedings of the Second International Workshop on Agent Theories, Architectures, and Languages (ATAL-95), LNAI 1037. Montreal: Springer-Verlag.",
            "Pitt, J. and Mamdani, A. (1999) 'Some remarks on the semantics of FIPA's agent communication language', Autonomous Agents and Multi-Agent Systems, 2(4), pp. 333-356. Available at: https://doi.org/10.1023/A:1010016503852.",
            "Santos, G., Payne, T.R., Tamma, V. and Grasso, F. (2016) 'Discovering ontological correspondences through dialogue', in Knowledge Engineering and Knowledge Management: EKAW 2016, Lecture Notes in Computer Science, vol. 10024. Cham: Springer, pp. 543-560. Available at: https://doi.org/10.1007/978-3-319-49004-5_35.",
            "Wooldridge, M. and Jennings, N.R. (1995) 'Intelligent agents: theory and practice', The Knowledge Engineering Review, 10(2), pp. 115-152.",
          ],
        },
      ],
    }, {
      title: "Team Note",
      description:
        "Reflection on how the Group D delivery project went.",
      items: [
        {
          title: "Group D Delivery Outcome",
          author: "Group D: Lana Menezes Fidelis, Lara Koller, Sergei Misjura, Dragos Hont",
          description:
            "The Group D delivery project went well, and the team received positive feedback on working with the group.",
          href: courseworkBlobUrl("coursework/week-07/team-note.md"),
        },
      ],
    }],
  },
  8: {
    week: 8,
    title: "Week 8",
    status: "complete",
    summary: "Exercise: Constituency-Based Parse Trees.",
    sections: [{
      title: "Activity: Creating Constituency-Based Parse Trees",
      description:
        "Constituency parse trees for three sentences, including both readings of the classic PP-attachment ambiguity in 'The man saw the dog with the telescope.'",
      items: [
        {
          title: "Parse Trees",
          description:
            "Trees for all three sentences in Penn Treebank bracket notation and as indented constituency diagrams, grammar: S -> NP VP; NP -> Det N | Det N N | N | NP PP; VP -> V NP | V NP NP | V NP PP; PP -> P NP.",
          href: courseworkBlobUrl("coursework/week-08/parse-trees.md"),
          code: [
            "1. \"The government raised interest rates.\"\n\n(S\n  (NP (Det The) (N government))\n  (VP (V raised)\n      (NP (N interest) (N rates))))\n\nS\n├── NP\n│   ├── Det: The\n│   └── N: government\n└── VP\n    ├── V: raised\n    └── NP\n        ├── N: interest\n        └── N: rates",
            "2. \"The internet gives everyone a voice.\"\n\n(S\n  (NP (Det The) (N internet))\n  (VP (V gives)\n      (NP (N everyone))\n      (NP (Det a) (N voice))))\n\nS\n├── NP\n│   ├── Det: The\n│   └── N: internet\n└── VP\n    ├── V: gives\n    ├── NP\n    │   └── N: everyone\n    └── NP\n        ├── Det: a\n        └── N: voice",
            "3a. \"The man saw the dog with the telescope.\" - Reading A (instrumental: PP attaches to VP)\n\n(S\n  (NP (Det The) (N man))\n  (VP (V saw)\n      (NP (Det the) (N dog))\n      (PP (P with) (NP (Det the) (N telescope)))))\n\nS\n├── NP\n│   ├── Det: The\n│   └── N: man\n└── VP\n    ├── V: saw\n    ├── NP\n    │   ├── Det: the\n    │   └── N: dog\n    └── PP\n        ├── P: with\n        └── NP\n            ├── Det: the\n            └── N: telescope",
            "3b. \"The man saw the dog with the telescope.\" - Reading B (descriptive: PP attaches to NP)\n\n(S\n  (NP (Det The) (N man))\n  (VP (V saw)\n      (NP (Det the) (N dog)\n          (PP (P with) (NP (Det the) (N telescope))))))\n\nS\n├── NP\n│   ├── Det: The\n│   └── N: man\n└── VP\n    ├── V: saw\n    └── NP\n        ├── Det: the\n        ├── N: dog\n        └── PP\n            ├── P: with\n            └── NP\n                ├── Det: the\n                └── N: telescope",
          ],
          body: [
            "Sentence 3 is the classic case of prepositional-phrase attachment ambiguity: the grammar permits the PP 'with the telescope' to attach either under VP (the man used the telescope to see) or under the object NP (the dog has the telescope), and both derivations are equally well-formed, so the context-free grammar alone cannot disambiguate them.",
            "Frazier's (1978) Minimal Attachment heuristic would favour Reading A, since it adds the PP at a shallower tree depth than Reading B. However, Hindle and Rooth (1993) showed disambiguation is better modelled lexically than structurally: attachment preference correlates with statistical association between the verb/noun and the preposition, which is the same principle later used by neural dependency parsers that score attachment from learned contextual representations rather than hand-written heuristics (Dozat and Manning, 2017).",
            "This matters for intelligent agents directly: an agent instructed to 'identify the dog with the telescope' cannot act correctly without resolving this ambiguity, and a constituency parser only exposes it rather than resolving it. This is the same class of problem as the Week 7 discussion on semantic interoperability, communication does not equal understanding (Malik and Malik, 2018), and the symbol-grounding concern that shared syntax does not guarantee shared interpretation (Chaib-draa and Dignum, 2002).",
          ],
          references: [
            "Chaib-draa, B. and Dignum, F. (2002) 'Trends in agent communication language', Computational Intelligence, 18(2), pp. 89-101.",
            "Chomsky, N. (1957) Syntactic Structures. The Hague: Mouton.",
            "Dozat, T. and Manning, C.D. (2017) 'Deep biaffine attention for neural dependency parsing', 5th International Conference on Learning Representations (ICLR 2017). Toulon, France, 24-26 April.",
            "Frazier, L. (1978) On Comprehending Sentences: Syntactic Parsing Strategies. PhD thesis. University of Connecticut.",
            "Hindle, D. and Rooth, M. (1993) 'Structural ambiguity and lexical relations', Computational Linguistics, 19(1), pp. 103-120.",
            "Jurafsky, D. and Martin, J.H. (2009) Speech and Language Processing. 2nd edn. Upper Saddle River, NJ: Pearson Prentice Hall.",
            "Malik, M. and Malik, S.K. (2018) 'Semantic web as the next generation smart web', Journal of Emerging Technologies and Innovative Research, 5(6), pp. 580-594.",
          ],
        },
      ],
    }],
  },
  9: {
    week: 9,
    title: "Week 9",
    status: "complete",
    summary: "Discussion forum: ethical issues in generative deep learning.",
    sections: [{
      title: "Discussion Forum",
      description:
        "Initial post surveying the ethical issues raised by generative deep learning (bias, copyright, privacy/memorisation, environmental cost, malicious use).",
      items: [
        {
          title: "Initial Post",
          description:
            "Generative models such as DALL-E and ChatGPT raise five distinct ethical concerns: algorithmic bias, copyright/authorship, data privacy and memorisation, environmental cost, and malicious use.",
          href: courseworkBlobUrl("coursework/week-09/discussion-post.md"),
          body: [
            "The advent of generative deep learning models such as DALL-E and ChatGPT represents a paradigm shift in content creation, but it simultaneously raises profound ethical concerns that demand urgent consideration. The ability of these systems to generate novel text and imagery is built upon vast training corpora, and this foundational reliance on external data creates a complex web of ethical challenges.",
            "A primary concern is algorithmic bias. Generative models do not create in a vacuum; they reflect and amplify the biases present in their training data. As Hagendorff (2024) notes, generative AI risks perpetuating biases like racism and sexism, leading to unequal access and marginalisation. Without active mitigation, these systems can reinforce societal inequalities, making robust bias auditing essential.",
            "A second major issue is the challenge to copyright and authorship. The legal landscape surrounding generative AI is highly contested. Moore and Frankel (2024) explore the 'problem of the inputs', whether artists' works can be rightfully used to train these systems, and the 'problem of the outputs', whether AI-generated images can be credited to the user who prompted them. This ambiguity threatens the economic livelihoods of human creators and challenges our fundamental notions of creativity.",
            "A third significant ethical dimension is data privacy and memorisation. Diffusion models can inadvertently reproduce training images, raising serious concerns about privacy and intellectual property. Research indicates that these models can memorise and later reproduce potentially sensitive or copyrighted training images at inference time (Zhang et al., 2024). This capability underscores the inadequacy of current technical safeguards.",
            "Furthermore, the environmental cost of training and deploying these computationally intensive models is frequently overlooked. The energy and water consumption associated with large-scale deep learning contributes to carbon emissions, positioning generative AI not as a solution to climate change but as a contributor to it (Luccioni et al., 2023). This ecological impact must be factored into any comprehensive ethical assessment.",
            "Finally, the potential for malicious use is substantial. Sivagnanam et al. (2024) highlight that generative AI can create harmful content, including disinformation, deepfakes, and violent material. The ease with which these systems can produce convincing but false information poses a direct threat to democratic discourse and individual safety.",
            "In conclusion, the ethical issues surrounding generative deep learning are not speculative but immediate and multifaceted. They span bias, copyright, privacy, environmental sustainability, and misuse. Addressing them requires a holistic approach that combines technical innovation, ethical foresight, and robust governance, rather than relying on fragmented technical fixes alone.",
          ],
          references: [
            "Hagendorff, T. (2024) 'Mapping the ethics of generative AI: A comprehensive scoping review', arXiv preprint arXiv:2402.08323. Available at: https://arxiv.org/abs/2402.08323 (Accessed: 24 September 2026).",
            "Luccioni, A.S., Viguier, S. and Ligozat, A.-L. (2023) 'Estimating the carbon footprint of BLOOM, a 176B parameter language model', Journal of Machine Learning Research, 24(253), pp. 1-15.",
            "Moore, J.G. and Frankel, S.J. (2024) 'Creativity, credit, and copyright in the age of artificial art', The Journal of Aesthetics and Art Criticism, 82(3), pp. 265-277. doi: 10.1093/jaac/kpae034.",
            "Sivagnanam, B. et al. (2024) 'Ethical dimensions and societal effects of generative AI', in Generative AI and Society. Hoboken, NJ: Wiley, pp. 1-20. doi: 10.1002/9781394302932.ch7.",
            "Zhang, D. et al. (2024) 'Privacy and copyright protection in generative AI: A lifecycle perspective', in Proceedings of the 2024 ACM Conference on Fairness, Accountability, and Transparency. New York: ACM, pp. 1-12. doi: 10.1145/3644815.3644952.",
          ],
        },
      ],
    }],
  },
  10: {
    week: 10,
    title: "Week 10",
    status: "complete",
    summary: "Discussion forum: responsible deployment and privacy; plus Deep Learning in Action activity.",
    sections: [{
      title: "Discussion Forum",
      description:
        "Two peer threads on responsible AI deployment: privacy-by-design safeguards for an academic-literature agent, and the limits of provenance/watermarking as an accountability mechanism.",
      items: [
        {
          title: "Initial Post (Thread 1)",
          author: "Aldana Mohammed A A Al-Dosari",
          description:
            "The shift from discriminative to generative deep learning makes ethical problems structural; proposes three safeguards for an academic-literature retrieval agent, built around privacy-by-design and human review.",
          href: courseworkBlobUrl("coursework/week-10/discussion-post.md"),
          body: [
            "The evolution of deep learning helps explain why its ethical implications now demand attention. Ten years ago, the biggest successes were discriminative ones; Microsoft's networks were able to outperform humans in image recognition (Thomsen, 2015). Today, transformer-based architectures underpin systems like DALL-E and ChatGPT that generate new content rather than classify content (Or, 2025), and I would argue that this move from recognition to generation makes the ethical problems structural rather than secondary. Generative systems require provenance and authorship questions, can create and amplify bias in their training data, and lower the cost of creating convincing misinformation (Radanliev et al., 2024). Izabayo (2026) tackles an even wider societal issue: how AI benefits are distributed across countries, which he argues is the least well-known aspect of national AI strategy globally. Ethical deployment is therefore not just a design problem but a governance one as well.",
            "For the second task, I researched responsible deployment with a focus on privacy. Radanliev et al. (2024) argue that AI systems must handle large volumes of personal data, so privacy protection should be built into the system in advance through differential privacy and federated learning, and that developers should be responsible for monitoring bias and errors throughout the system's lifecycle. This is critical because deep learning models are opaque, so harm can go unnoticed without meaningful protection.",
            "I would address this risk in my own agent system, which retrieves and curates academic literature, in three ways: minimising the personal data agents collect and store; verifying every retrieved source's metadata before it enters any output, so unverified content is discarded rather than repaired; and keeping a human reviewer over the final synthesis, as a reflection of the transparency and lifecycle-accountability principles Radanliev et al. (2024) identify as central to responsible deployment.",
          ],
          references: [
            "Izabayo, J.C. (2026) 'The DARE framework: a global model for responsible artificial intelligence (AI) deployment', Journal of Integrated Global STEM, 2(2), pp. 92-97.",
            "Or, B. (2025) Modern deep learning foundations: explore deep learning with CNNs, transformers, and real-world deployment tools. Packt Publishing.",
            "Radanliev, P., Santos, O., Brandon-Jones, A. and Joinson, A. (2024) 'Ethics and responsible AI deployment', Frontiers in Artificial Intelligence, 7, 1377011.",
            "Thomsen, M. (2015) 'Microsoft's deep learning project outperforms humans in image recognition', Forbes.",
          ],
        },
        {
          title: "Peer Response (Thread 1)",
          author: "Lana Menezes Fidelis (in reply to Aldana Mohammed A A Al-Dosari)",
          description:
            "Response proposing claim-level grounding via retrieval-augmented generation, guarding against automation complacency in the human reviewer step, versioned accountability logging, and the limits of watermarking as a safeguard.",
          href: courseworkBlobUrl("coursework/week-10/peer-response.md"),
          body: [
            "Hello Aldana! Your agent design turns abstract generative-AI ethics into concrete engineering decisions, and I would like to suggest some preventive measures that build on your three safeguards.",
            "First, checking metadata confirms that a source exists, but not that it says what the output claims. Walters and Wilder (2023) found that 55% of GPT-3.5 citations and 18% of GPT-4 citations were fabricated, and many of the real ones still contained substantive errors. This matters for Frederick's question about misrepresented findings. One answer is claim-level grounding: use retrieval-augmented generation (Lewis et al., 2020), then run an entailment check that links each sentence to a quoted passage. Any claim the retrieved text does not support gets flagged, not silently passed.",
            "Second, a human reviewer only helps if they stay alert. Parasuraman and Manzey (2010) show that people come to over-trust automation that is usually reliable, so a reviewer who approves many polished syntheses may stop checking closely. Showing the low-confidence claims first, and occasionally inserting known errors as a test, could keep the review meaningful.",
            "Third, I would argue that the responsibility gaps Santoni de Sio and Mecacci (2021) describe get smaller when accountability is built into the system. Versioned logs of prompts, retrieved sources, and reviewer decisions support the end-to-end auditing proposed by Raji et al. (2020), so it becomes possible to trace where a failure started.",
            "Finally, watermarking is unlikely to be a universal solution, because Sadasivan et al. (2023) show that paraphrasing can remove it. The EU AI Act already requires providers to mark generative outputs (European Union, 2024, Art. 50). This suggests responsibility starts with the tool, and platforms act as a second layer.",
          ],
          references: [
            "Lewis, P., Perez, E., Piktus, A., Petroni, F., Karpukhin, V., Goyal, N., Kuttler, H., Lewis, M., Yih, W., Rocktaschel, T., Riedel, S. and Kiela, D. (2020) 'Retrieval-augmented generation for knowledge-intensive NLP tasks', Advances in Neural Information Processing Systems, 33, pp. 9459-9474.",
            "Parasuraman, R. and Manzey, D.H. (2010) 'Complacency and bias in human use of automation: an attentional integration', Human Factors, 52(3), pp. 381-410. Available at: https://doi.org/10.1177/0018720810376055",
            "Raji, I.D., Smart, A., White, R.N., Mitchell, M., Gebru, T., Hutchinson, B., Smith-Loud, J., Theron, D. and Barnes, P. (2020) 'Closing the AI accountability gap: defining an end-to-end framework for internal algorithmic auditing', Proceedings of the 2020 Conference on Fairness, Accountability, and Transparency (FAT* '20). Barcelona, 27-30 January. New York: ACM, pp. 33-44. Available at: https://doi.org/10.1145/3351095.3372873",
            "Regulation (EU) 2024/1689 of the European Parliament and of the Council of 13 June 2024 laying down harmonised rules on artificial intelligence (Artificial Intelligence Act). Official Journal of the European Union L, 12 July 2024. Available at: https://eur-lex.europa.eu/eli/reg/2024/1689/oj (Accessed: 30 September 2026).",
            "Sadasivan, V.S., Kumar, A., Balasubramanian, S., Wang, W. and Feizi, S. (2023) 'Can AI-generated text be reliably detected?', arXiv preprint, arXiv:2303.11156. Available at: https://arxiv.org/abs/2303.11156 (Accessed: 30 September 2026).",
            "Santoni de Sio, F. and Mecacci, G. (2021) 'Four responsibility gaps with artificial intelligence: why they matter and how to address them', Philosophy & Technology, 34(4), pp. 1057-1084. Available at: https://doi.org/10.1007/s13347-021-00450-x",
            "Walters, W.H. and Wilder, E.I. (2023) 'Fabrication and errors in the bibliographic citations generated by ChatGPT', Scientific Reports, 13, 14045. Available at: https://doi.org/10.1038/s41598-023-41032-5",
          ],
        },
        {
          title: "Initial Post (Thread 2)",
          author: "Anne Dayer",
          description:
            "Argues that provenance marking (C2PA, SynthID-Text watermarking) answers only a narrow question, origin, not veracity or accountability, and is fragile and forgeable besides.",
          href: courseworkBlobUrl("coursework/week-10/discussion-post-anne.md"),
          body: [
            "Yes. Provenance marking answers a real question, but a narrow one, and is treated as though it settled the rest.",
            "Since 2 August 2026, Article 50 of the AI Act has required generative output to be marked machine-readably as synthetic (European Union, 2024), and Anthropic says future Claude models will carry a watermark at launch (Anthropic, 2026).",
            "Golaszewski et al. (2026) put the distinction sharply: despite the word in its name, C2PA is a mechanism for provenance, not authenticity. Origin is not veracity. The same holds for text. Claude's mark is a version of SynthID-Text (Dathathri et al., 2024), which Anthropic says works poorly on factual passages and is largely absent from code, because exact wording leaves few choices free (Anthropic, 2026).",
            "Such marks are also removable. An open implementation of SynthID-Text lost its watermark in 98.3% of paraphrase runs (Tamim and Khan, 2026), though fragility is the smaller worry.",
            "Even a flawless mark would leave the ethics untouched, because correctness is not by itself a moral property. What carries weight is whether anyone was warranted in putting something forward, and who answers if it turns out wrong. Provenance settles neither.",
            "Consider a synthetic intimate image of a real person. A credential would report only that a model made it, and not who created it, who published it, or that its subject never consented.",
            "So should provenance name the person generating content, and not only the model? It would give the affected person someone to hold responsible. Yet C2PA's own identity specification concedes that an attacker can lift a valid identity assertion and attach it to another asset, falsely attributing illegal content to an innocent person (Kaye and Dixon, 2025). I am not sure which risk I would rather run. Where would you?",
          ],
          references: [
            "Anthropic (2026) How Claude's text watermarking works, 14 August. Available at: https://www.anthropic.com/news/claude-text-watermark (Accessed: 19 August 2026).",
            "Dathathri, S. et al. (2024) 'Scalable watermarking for identifying large language model outputs', Nature, 634(8035), pp. 818-823. Available at: https://doi.org/10.1038/s41586-024-08025-4",
            "European Union (2024) Regulation (EU) 2024/1689 of the European Parliament and of the Council of 13 June 2024 laying down harmonised rules on artificial intelligence (Artificial Intelligence Act). OJ L, 2024/1689, 12 July. Available at: https://eur-lex.europa.eu/eli/reg/2024/1689/oj (Accessed: 19 August 2026).",
            "Golaszewski, E. et al. (2026) Verifying provenance of digital media: security analysis of C2PA and its implementation. Maryland Shared Open Access Repository. Available at: https://doi.org/10.13016/m2u1qh-txb8 (Accessed: 19 August 2026).",
            "Kaye, K. and Dixon, P. (2025) Privacy, identity and trust in C2PA: a technical review and analysis of the C2PA digital media provenance framework. San Diego, CA: World Privacy Forum. Available at: https://worldprivacyforum.org/posts/privacy-identity-and-trust-in-c2pa/ (Accessed: 19 August 2026).",
            "Tamim, S.R. and Khan, A.L. (2026) 'AI watermark evidence fails forensic readiness: an empirical evaluation', arXiv [Preprint]. Available at: https://arxiv.org/abs/2607.16010 (Accessed: 19 August 2026).",
          ],
        },
        {
          title: "Peer Response (Thread 2)",
          author: "Lana Menezes Fidelis (in reply to Anne Dayer)",
          description:
            "Response arguing provenance is being asked to do accountability work it was not designed for (the 'answerability gap'), and that responsibility-by-design and platform-level preventive measures offer more practical protection than watermarking alone.",
          href: courseworkBlobUrl("coursework/week-10/peer-response-anne.md"),
          body: [
            "Hello Anne! I agree that provenance does not equal veracity, and your point about the limitations of watermarking is compelling. But I want to shift the focus from what provenance fails to do, toward what it is actually designed to achieve, and whether other approaches might better address the harms you raise.",
            "First, a technical qualification. The fragility of watermarking that you note is not incidental but structural. A systematic review of AI-generated code provenance techniques finds that passive attribution degrades significantly under common transformations such as refactoring, while token-level watermarking schemes remain fragile under semantic-preserving transformations (Kaur et al., 2026). If provenance is easily stripped or forged, as when C2PA manifests are signed with self-signed certificates claiming any creator identity or platform recompression removes metadata entirely (AI Threat Atlas, 2026), then relying on it for accountability is precarious at best.",
            "More fundamentally, I would suggest the problem is not that provenance fails to establish correctness, but that it is being asked to carry accountability work it was never designed for. The \"answerability gap\" describes precisely this: a party may be traceable yet never exercised judgment over the decision's evaluative frame, meaning responsibility becomes scapegoating rather than genuine accountability (Walton, 2026). This is why Lara's provider-retention proposal, while reducing false attribution risk, simply relocates trust to an institution without resolving the underlying gap.",
            "A complementary approach lies in responsibility-by-design, which embeds ethical and legal considerations from conception through the entire AI lifecycle (Telefónica Tech, 2023). Platform-level preventive measures, such as YouTube's likeness detection, which uses facial scanning to alert individuals to synthetic misuse of their image and enables removal requests (VARIndia, 2026), operationalise this principle by targeting harm directly rather than relying on post-hoc provenance verification. Combined with regulatory frameworks like the EU AI Act's transparency obligations (European Union, 2024), such measures offer more practical protection than watermarking alone.",
          ],
          references: [
            "AI Threat Atlas (2026) C2PA manifest forgery and provenance bypass. Available at: https://github.com/seahop/ai-threat-atlas/blob/main/docs/techniques/c2pa-manifest-forgery.md (Accessed: 24 September 2026).",
            "European Union (2024) Regulation (EU) 2024/1689 of the European Parliament and of the Council of 13 June 2024 laying down harmonised rules on artificial intelligence (Artificial Intelligence Act). OJ L, 2024/1689, 12 July. Available at: https://eur-lex.europa.eu/eli/reg/2024/1689/oj (Accessed: 24 September 2026).",
            "Kaur, M. et al. (2026) 'Can we trust the source? A systematic review of watermarking and attribution for AI-generated code', Information and Software Technology, 196, article 107684. Available at: https://doi.org/10.1016/j.infsof.2026.107684.",
            "Telefónica Tech (2023) Responsibility from design applied to AI, 10 July. Available at: https://telefonicatech.com/en/blog/responsibility-from-design-applied-to-ai (Accessed: 24 September 2026).",
            "VARIndia (2026) 'YouTube expands AI deepfake detection tool to all adult users', VARIndia, 18 May. Available at: https://www.varindia.com/news/youtube-expands-ai-deepfake-detection-tool-to-all-adult-users (Accessed: 24 September 2026).",
            "Walton, D. (2026) The decision no one authored: the answerability gap in generative AI. Zenodo. Available at: https://doi.org/10.5281/zenodo.20622946 (Accessed: 24 September 2026).",
          ],
        },
      ],
    }, {
      title: "Activity: Deep Learning in Action",
      description:
        "Research post on an application of deep learning expected to impact society: Deep Knowledge Tracing (DKT) for personalised education, covering how it works and its social good, reliability, fairness, and privacy/regulatory implications.",
      items: [
        {
          title: "Deep Learning in Action",
          description:
            "Deep Knowledge Tracing models what a student knows via an LSTM over interaction sequences and recommends a personalised path to close learning gaps; operates as a learning agent (perceives responses, maintains a learner model, acts to maximise mastery).",
          href: courseworkBlobUrl("coursework/week-10/deep-learning-in-action.md"),
          body: [
            "Deep Knowledge Tracing (DKT) uses deep learning to model what a student knows and identify the concepts they have not yet grasped. It then recommends a personalised path to close those gaps. DKT underpins many adaptive learning platforms because it offers a scalable approximation of one-to-one tutoring, which Bloom (1984) found raised attainment by around two standard deviations.",
            "How it works: Classical Bayesian Knowledge Tracing treats each skill as either mastered or not (Corbett and Anderson, 1994). Piech et al. (2015) replaced this with a recurrent neural network. Each interaction, meaning the exercise attempted and whether it was answered correctly, is fed into a Long Short-Term Memory network. The network's hidden state represents the student's evolving knowledge. The model predicts the probability of answering each skill correctly next, and persistently low probabilities reveal gaps. A recommendation component, increasingly based on reinforcement learning, then sequences exercises according to prerequisite structure (Liu et al., 2019). The system therefore operates as a learning agent: it perceives responses, maintains an internal model of the learner, and acts autonomously to maximise mastery (Russell and Norvig, 2021; Wooldridge, 2009).",
            "Social good: DKT can detect misunderstanding before it compounds, and can give teachers dashboards that show where to focus classroom time.",
            "Reliability: the gains may be overstated. Khajah, Lindsey, and Mozer (2016) found that extended Bayesian models performed comparably. Yeung and Yeung (2018) showed that DKT can lower a student's estimated mastery after a correct answer. Because the knowledge state is an opaque vector, teachers cannot easily verify why a pupil was flagged.",
            "Fairness: educational algorithms often perform worse for underrepresented groups (Baker and Hawn, 2022). A biased diagnosis could channel pupils into remedial pathways, and the lowered expectations could become a self-fulfilling prophecy.",
            "Privacy and regulation: continuous tracking of children's errors creates detailed cognitive profiles, raising concerns over consent, retention, and commercial reuse (Slade and Prinsloo, 2013). The EU AI Act classifies systems that evaluate learning outcomes and steer learning as high-risk, so they require human oversight (European Union, 2024).",
            "Conclusion: DKT could make personalised tutoring affordable at scale. However, its diagnoses are probabilistic, opaque and potentially biased, so it should inform teachers' judgement rather than replace it.",
          ],
          references: [
            "Baker, R.S. and Hawn, A. (2022) 'Algorithmic bias in education', International Journal of Artificial Intelligence in Education, 32(4), pp. 1052-1092. Available at: https://doi.org/10.1007/s40593-021-00285-9",
            "Bloom, B.S. (1984) 'The 2 sigma problem: the search for methods of group instruction as effective as one-to-one tutoring', Educational Researcher, 13(6), pp. 4-16. Available at: https://doi.org/10.3102/0013189X013006004",
            "Corbett, A.T. and Anderson, J.R. (1994) 'Knowledge tracing: modeling the acquisition of procedural knowledge', User Modeling and User-Adapted Interaction, 4(4), pp. 253-278. Available at: https://doi.org/10.1007/BF01099821",
            "European Union (2024) Regulation (EU) 2024/1689 laying down harmonised rules on artificial intelligence (Artificial Intelligence Act). OJ L, 2024/1689, 12 July. Available at: https://eur-lex.europa.eu/eli/reg/2024/1689/oj (Accessed: 1 October 2026).",
            "Khajah, M., Lindsey, R.V. and Mozer, M.C. (2016) 'How deep is knowledge tracing?', Proceedings of the 9th International Conference on Educational Data Mining. Raleigh, NC: International Educational Data Mining Society, pp. 94-101.",
            "Liu, Q. et al. (2019) 'Exploiting cognitive structure for adaptive learning', Proceedings of the 25th ACM SIGKDD International Conference on Knowledge Discovery and Data Mining. New York: ACM, pp. 627-635. Available at: https://doi.org/10.1145/3292500.3330922",
            "Piech, C. et al. (2015) 'Deep knowledge tracing', Advances in Neural Information Processing Systems 28. Montreal: Curran Associates, pp. 505-513.",
            "Russell, S. and Norvig, P. (2021) Artificial Intelligence: A Modern Approach. 4th edn. Harlow: Pearson.",
            "Slade, S. and Prinsloo, P. (2013) 'Learning analytics: ethical issues and dilemmas', American Behavioral Scientist, 57(10), pp. 1510-1529. Available at: https://doi.org/10.1177/0002764213479366",
            "Wooldridge, M. (2009) An Introduction to MultiAgent Systems. 2nd edn. Chichester: Wiley.",
            "Yeung, C.-K. and Yeung, D.-Y. (2018) 'Addressing two problems in deep knowledge tracing via prediction-consistent regularization', Proceedings of the Fifth Annual ACM Conference on Learning at Scale. New York: ACM, Article 5. Available at: https://doi.org/10.1145/3231644.3231647",
          ],
        },
      ],
    }],
  },
  11: {
    week: 11,
    title: "Week 11",
    status: "complete",
    summary: "Discussion forum and implemented solution: Research Brief Agent.",
    sections: [{
      title: "Discussion Forum",
      description:
        "Summary post reflecting on peer discussion (Anne, Aldana) about generative deep learning ethics, arguing bias and memorisation are structural consequences of how these systems are optimised, not patchable defects.",
      items: [
        {
          title: "Summary Post",
          author: "Lana Menezes Fidelis (own thread)",
          description:
            "Argues upstream data curation and lifecycle-based governance matter more than output-level fixes, since neural networks induce behaviour from data rather than following specified rules, and that some risks (data provenance, environmental cost accounting) may be structurally difficult to fully resolve.",
          href: courseworkBlobUrl("coursework/week-11/summary-post.md"),
          body: [
            "Peer discussion has reinforced my view that the ethical problems of generative deep learning are not incidental flaws but consequences of how these systems are built, and that this limits what technical fixes can achieve.",
            "Neural networks induce behaviour from data rather than following specified rules, and deep architectures can fit even randomly labelled examples (Zhang et al., 2021). Bias and memorisation are therefore expected outcomes of optimisation, not defects that can be patched afterwards.",
            "Anne's reference to Carlini et al. (2023) illustrates this: training images were extracted from state-of-the-art diffusion models, most often those heavily duplicated in the training set, and neither deduplication nor differentially private training offered an acceptable privacy-utility trade-off. This favours upstream curation over output filtering alone. Yet upstream control assumes consent and provenance can be verified, which Longpre et al. (2024) show current data infrastructure cannot guarantee; datasheets (Gebru et al., 2021) improve transparency but do not, by themselves, confer legitimacy.",
            "Aldana's question of environmental versus economic trade-offs exposes a further gap. The energy cost of large models is substantial, yet estimates vary with hardware, grid intensity and accounting boundaries (Strubell, Ganesh and McCallum, 2019; Luccioni, Viguier and Ligozat, 2023), and the EU AI Act requires documentation rather than limits (European Union, 2024). Disclosure without thresholds risks becoming compliance theatre.",
            "These weaknesses grow more serious as deep learning shifts from generating content to driving decisions. In smart manufacturing and algorithmic finance, learned models increasingly act through cyber-physical systems and autonomous agents (Lu, 2017), where a biased or erroneous output becomes an action rather than a suggestion.",
            "I therefore maintain that governance must assign each harm a lifecycle stage, an accountable actor and a measurable control, treated as non-functional requirements from data collection onward (Radanliev et al., 2024), while recognising that some risks may prove irreducible.",
          ],
          references: [
            "Carlini, N. et al. (2023) 'Extracting training data from diffusion models', Proceedings of the 32nd USENIX Security Symposium. Berkeley, CA: USENIX Association, pp. 5253-5270.",
            "European Union (2024) Regulation (EU) 2024/1689 laying down harmonised rules on artificial intelligence (Artificial Intelligence Act). OJ L, 2024/1689, 12 July. Available at: https://eur-lex.europa.eu/eli/reg/2024/1689/oj (Accessed: 1 October 2026).",
            "Gebru, T. et al. (2021) 'Datasheets for datasets', Communications of the ACM, 64(12), pp. 86-92. Available at: https://doi.org/10.1145/3458723",
            "Longpre, S. et al. (2024) 'Position: data authenticity, consent, and provenance for AI are all broken: what will it take to fix them?', Proceedings of the 41st International Conference on Machine Learning, 235, pp. 32711-32725.",
            "Lu, Y. (2017) 'Industry 4.0: a survey on technologies, applications and open research issues', Journal of Industrial Information Integration, 6, pp. 1-10. Available at: https://doi.org/10.1016/j.jii.2017.04.005",
            "Luccioni, A.S., Viguier, S. and Ligozat, A.-L. (2023) 'Estimating the carbon footprint of BLOOM, a 176B parameter language model', Journal of Machine Learning Research, 24(253), pp. 1-15.",
            "Radanliev, P., Santos, O., Brandon-Jones, A. and Joinson, A. (2024) 'Ethics and responsible AI deployment', Frontiers in Artificial Intelligence, 7, 1377011. Available at: https://doi.org/10.3389/frai.2024.1377011",
            "Strubell, E., Ganesh, A. and McCallum, A. (2019) 'Energy and policy considerations for deep learning in NLP', Proceedings of the 57th Annual Meeting of the Association for Computational Linguistics. Florence: ACL, pp. 3645-3650. Available at: https://doi.org/10.18653/v1/P19-1355",
            "Zhang, C., Bengio, S., Hardt, M., Recht, B. and Vinyals, O. (2021) 'Understanding deep learning (still) requires rethinking generalization', Communications of the ACM, 64(3), pp. 107-115. Available at: https://doi.org/10.1145/3446776",
          ],
        },
      ],
    }, {
      title: "Implemented Solution",
      description:
        "Research Brief Agent: an individual implementation of the group's Week 7 design, a multi-agent pipeline that plans, retrieves, evaluates and synthesises academic literature into a grounded research brief.",
      items: [
        {
          title: "Research Brief Agent",
          href: "https://github.com/Lana-Lannister/research-brief-agent",
          highlightHref: true,
          description:
            "A deterministic orchestrator coordinates a Planning Agent, a Retrieval Agent (Semantic Scholar, falling back to OpenAlex, with Crossref DOI validation) and an Evaluation & Synthesis Agent, bounded by two human checkpoints and strict output grounding, to turn a research question into a Markdown/JSON research brief.",
          body: [
            "Given a high-level research question, the system plans sub-questions, retrieves scholarly records, evaluates their relevance, and synthesises the evidence into a research brief listing selected papers (DOI-checked against Crossref), abstract-grounded summaries, themes, gaps and the search's own limitations. It is explicitly scoped as a starting point for a literature search, not a finished review.",
            "Architecture: a deterministic orchestrator, not an LLM, handles retry/scope limits, deduplication, DOI validation, storage and logging. The Planning Agent (LLM) decomposes the question and can revise sub-questions or reformulate a query. The Retrieval Agent queries Semantic Scholar, falls back to OpenAlex, and requests one reformulation through the orchestrator if the record threshold isn't met. The Evaluation & Synthesis Agent (LLM) scores relevance, identifies themes and gaps, and summarises only approved abstracts. This mirrors the retrieval-agent-to-planning-agent reformulation exchange discussed in the Week 7 forum thread with Dragos Hont, and keeps the deterministic, rule-based operations (deduplication, DOI validation) outside the LLM boundary, consistent with the practical boundary argued for there.",
            "Autonomy bounds: two human checkpoints (approving/revising sub-questions, then approving/refining/rejecting the retrieval scope, with one rejection allowed), one automatic query reformulation per sub-question, and one scope revision per run. This is a concrete instance of bounded autonomy: the system can act independently within a fixed budget of retries and revisions, but cannot expand its own scope indefinitely, which keeps a human in the loop at the two points where misdirected autonomy would be costliest to unwind.",
            "Grounding and safeguards: the LLM is restricted to semantic tasks only, it is never asked to invent references, and it only judges records the indexes actually returned. Replies are schema-validated with bounded retries, and a reply that stays invalid causes the run to fail closed rather than produce an unreliable brief. Any output citing a record ID the model was not given is discarded, and summaries draw only on approved abstracts. This directly addresses the citation-fabrication risk raised in the Week 10 discussion (Walters and Wilder, 2023, found 55% of GPT-3.5 and 18% of GPT-4 citations fabricated): grounding is enforced in code, not left to the model's self-report, and evaluative decisions remain with the human reviewer to counter automation complacency (Parasuraman and Manzey, 2010).",
            "Testing: 55 offline unit, functional and robustness tests with 95% line coverage, run against replayed API responses so the test suite does not depend on live network access or API keys. An offline demo mode using a synthetic corpus and a keyword baseline lets the whole pipeline be exercised without any credentials.",
            "Tech stack: Python 3.11+, Pydantic for schema validation, the Google Gemini API (gemini-2.5-flash by default) for the Planning and Evaluation & Synthesis agents, and Semantic Scholar/OpenAlex/Crossref as scholarly data sources.",
          ],
          references: [
            "Parasuraman, R. and Manzey, D.H. (2010) 'Complacency and bias in human use of automation: an attentional integration', Human Factors, 52(3), pp. 381-410. Available at: https://doi.org/10.1177/0018720810376055",
            "Walters, W.H. and Wilder, E.I. (2023) 'Fabrication and errors in the bibliographic citations generated by ChatGPT', Scientific Reports, 13, 14045. Available at: https://doi.org/10.1038/s41598-023-41032-5",
          ],
        },
      ],
    }],
  },
  12: {
    week: 12,
    title: "Week 12",
    status: "complete",
    summary: "Unit 12: Individual e-Portfolio submission, reflective piece.",
    sections: [{
      title: "Unit 12: Individual e-Portfolio Submission",
      description:
        "The module's final assessment: this e-portfolio, plus the reflective piece required by the brief, reflective commentary on skills and understanding developed, and three formative case studies (bias, AI safety, XAI) structured with Rolfe, Freshwater and Jasper's (2001) What/So what/Now what framework.",
      items: [
        {
          title: "Reflective Commentary",
          author: "Lana Menezes Fidelis",
          description:
            "Reflective commentary on the skills, knowledge and understanding developed across the module: peer debate across forum threads, multicultural collaboration with my project group, and sustained engagement through technical uncertainty while building Research Brief Agent.",
          href: courseworkBlobUrl("coursework/week-12/reflective-piece.md"),
          body: [
            "This commentary reflects on the skills, knowledge and understanding I developed across the Intelligent Agents module, structured using Rolfe, Freshwater and Jasper's (2001) What / So what / Now what framework to connect specific module experiences, forum debate, group collaboration, and building Research Brief Agent, to their practical and professional implications.",
            "What: Across this module I worked through the conceptual foundations of agent-based computing (Wooldridge and Jennings, 1995), practical exercises in agent communication (KQML/KIF dialogues, Week 6) and natural language structure (constituency parsing, Week 8), and a sustained thread of discussion-forum debate on agent communication languages, generative AI ethics, and responsible deployment (Weeks 2, 3, 5, 7, 9, 10, 11). The module culminated in a group project with Lara Koller, Sergei Misjura and Dragos Hont, where I individually implemented Research Brief Agent, a multi-agent literature-retrieval system built around a deterministic orchestrator, a Planning Agent, a Retrieval Agent, and an Evaluation and Synthesis Agent, bounded by human checkpoints and strict output grounding (Week 11).",
            "The forum work was not a side activity to the technical exercises; it was where most of my actual learning happened, both with my groupmates and with the wider cohort. Debating with my groupmate Lara Koller over whether a single coordinating planning agent risks becoming a rigid single point of failure, and with Dragos Hont, also a groupmate, over where to draw the line between deterministic method calls and KQML-style messaging, repeatedly forced me to defend or revise a position I had thought was settled. Sergei's retrieval example in the Week 3 thread, and separate debates with wider-cohort peers Yasmin Almeida Ferrera, Anne Dayer and Aldana Mohammed Al-Dosari on provenance marking and privacy-by-design, added further perspectives from outside the immediate group. My Week 3 summary post is the clearest evidence of this: direct peer feedback changed my view from treating agent autonomy as self-evidently valuable to treating it as conditional on coordination quality (Jennings, 2000).",
            "So what: The group and wider forum work was specifically what let me see how differently my peers approached the same problem, and debating those different positions, rather than just reading about them, is what actually produced the learning. Jehn's (1995) distinction between task conflict and relationship conflict captures why this worked: disagreeing with Dragos about the method-call/KQML boundary, or with Anne about whether provenance can ever substitute for accountability, was productive precisely because it stayed focused on the technical and ethical substance of the claim, not on the people making it. Working through those disagreements in writing, where I had to cite a source rather than just assert a view, is also why I think the forum threads read as more rigorous than my first posts: by Week 7 and Week 10 I was routinely checking a claim against a specific paper before posting it, not after.",
            "The multicultural composition of my project group, Lara Koller, Sergei Misjura, Dragos Hont and myself, was a second, distinct source of learning, separate from the content of any single debate. Working alongside groupmates with different academic backgrounds, different native languages, and different default assumptions about how a technical disagreement should be phrased meant this was something I had to build in practice. Earley and Ang's (2003) account of cultural intelligence, the capacity to function effectively across culturally diverse settings, describes exactly that skill: noticing, for instance, that a groupmate's directness in a critique was a difference in communication norms rather than a sign of the critique being harsher than intended. Gibson and Gibbs (2006) note that national diversity in virtual teams can initially slow coordination before it improves outcomes, and I think that pattern held here. Earlier posts of mine stayed cautious and overly deferential; by the later weeks I was more willing to state a disagreement plainly, because I had more evidence that my groupmates read directness as rigor rather than hostility.",
            "Emotionally, I was engaged and genuinely excited through almost the entire module, including the stretches where I did not yet know how to solve the technical problem in front of me, such as getting the KQML/KIF dialogue's performative semantics right in Week 6, or deciding how to bound the agents' autonomy in the final project without making the system either unsafe or useless. That the uncertainty did not translate into anxiety is consistent with Dweck's (2006) account of a growth mindset, treating a difficulty as evidence that the skill is not yet built rather than as evidence that it cannot be built, and with Bandura's (1997) account of self-efficacy, where each small technical win (getting one message exchange to validate, getting one test suite to pass) built the expectation that the next one was solvable too. The grounding safeguards I eventually built into Research Brief Agent, discarding any output that cites a source it was not given, are a direct product of staying with that uncertainty rather than shipping the first version that produced plausible-looking output.",
            "Now what: Three things from this module will carry into how I build agent-based systems afterwards. First, I will treat peer critique of a design decision as a required step, not an optional one; the single biggest improvement in my own reasoning (Week 3) came directly from having to answer other people's objections in writing. Second, I will keep deliberately working in culturally mixed teams where possible, because the friction Gibson and Gibbs (2006) describe is where I learned the most about communicating technical disagreement clearly rather than defensively. Third, I will keep building systems that fail closed under uncertainty rather than ship a confident-looking but ungrounded result, which is the single technical habit from this module I am most confident is correct, and the one I am least willing to compromise on in future work.",
            "Taken together, these experiences changed not just what I know about agent-based systems, but how I now expect myself to work: debating design decisions with others before committing to them, treating team diversity as a skill to practise rather than a constraint to manage, and designing for safe failure rather than confident failure.",
          ],
          references: [
            "Bandura, A. (1997) Self-Efficacy: The Exercise of Control. New York: W.H. Freeman.",
            "Dweck, C.S. (2006) Mindset: The New Psychology of Success. New York: Random House.",
            "Earley, P.C. and Ang, S. (2003) Cultural Intelligence: Individual Interactions Across Cultures. Stanford, CA: Stanford University Press.",
            "Gibson, C.B. and Gibbs, J.L. (2006) 'Unpacking the concept of virtuality: the effects of geographic dispersion, electronic dependence, national diversity, and spatial distance on team innovation', Administrative Science Quarterly, 51(3), pp. 451-495.",
            "Jehn, K.A. (1995) 'A multimethod examination of the benefits and detriments of intragroup conflict', Administrative Science Quarterly, 40(2), pp. 256-282.",
            "Jennings, N.R. (2000) 'On agent-based software engineering', Artificial Intelligence, 117(2), pp. 277-296.",
            "Rolfe, G., Freshwater, D. and Jasper, M. (2001) Critical Reflection in Nursing and the Helping Professions: A User's Guide. Basingstoke: Palgrave Macmillan.",
            "Wooldridge, M. and Jennings, N.R. (1995) 'Intelligent agents: theory and practice', The Knowledge Engineering Review, 10(2), pp. 115-152.",
          ],
        },
        {
          title: "Case Study 1 - Bias in Autonomous Decision-Making",
          author: "Lana Menezes Fidelis",
          description:
            "Reflective case study on a bias risk in Research Brief Agent's Evaluation and Synthesis Agent scoring step.",
          href: courseworkBlobUrl("coursework/week-12/reflective-piece.md"),
          body: [
            "This case study is grounded in a bias risk I identified in Research Brief Agent's Evaluation and Synthesis Agent, reflecting on what happened, why it mattered, and how it will shape my future practice.",
            "In Research Brief Agent, the Evaluation and Synthesis Agent scores each retrieved paper's relevance to a sub-question before it is allowed into the brief. That scoring step is itself a decision-making agent, not a neutral filter, and I realised partway through building it that the same risk I had been reading about in the Week 9 and Week 10 forum threads, algorithmic bias in generative and evaluative AI systems, applied directly to my own system. The scorer could plausibly favour papers from well-known venues or frequently-cited authors, favour papers whose abstracts happen to repeat the sub-question's exact wording over papers that address it in different terms, or systematically under-rank older work relative to recent preprints, none of which track actual relevance.",
            "This mattered because the harm is structural rather than incidental: Mehrabi et al. (2021) note that bias in ML-based ranking and recommendation systems compounds whatever skew already exists in the underlying data, and academic search is a domain where citation counts and venue prestige are already unevenly distributed. If an evaluation agent's scores are treated as ground truth by a downstream synthesis step, and then by the researcher reading the brief, a biased ranking does not just mis-order the evidence, it actively shapes which arguments the user believes are well-supported. Baker and Hawn (2022) make the same point about educational algorithms: a biased diagnosis is not corrected by the system working as designed, because the system working as designed is what produces the biased diagnosis. Professionally, this reframed how I think about an evaluation agent: it is not a measurement instrument to be validated once, it is a decision-maker whose errors need ongoing auditing, which is why Research Brief Agent requires the human reviewer to see the evaluation scores and rationale rather than only the final summary.",
            "Going forward I will treat any agent that ranks, scores or filters candidates, not just one that generates text, as a decision-making component that needs its own bias testing, following the kind of structured auditing Raji et al. (2020) describe for algorithmic systems generally. Concretely, that means testing a scoring agent against topics chosen to surface skew (an obscure but correct source against a prominent but tangential one) before trusting it in production, and keeping the rationale behind a score visible to the human reviewer rather than collapsing it into a single number. I had not fully appreciated, before building this, how much of what gets called an AI safety problem is actually a bias problem wearing a different name.",
            "This case study reinforced that bias is not confined to generative text output: it can live quietly inside any agent that ranks, scores or filters, which is why ongoing auditing rather than one-off validation is now part of how I build and evaluate such components.",
          ],
          references: [
            "Baker, R.S. and Hawn, A. (2022) 'Algorithmic bias in education', International Journal of Artificial Intelligence in Education, 32(4), pp. 1052-1092. Available at: https://doi.org/10.1007/s40593-021-00285-9",
            "Mehrabi, N., Morstatter, F., Saxena, N., Lerman, K. and Galstyan, A. (2021) 'A survey on bias and fairness in machine learning', ACM Computing Surveys, 54(6), pp. 1-35. Available at: https://doi.org/10.1145/3457607",
            "Raji, I.D., Smart, A., White, R.N., Mitchell, M., Gebru, T., Hutchinson, B., Smith-Loud, J., Theron, D. and Barnes, P. (2020) 'Closing the AI accountability gap: defining an end-to-end framework for internal algorithmic auditing', Proceedings of the 2020 Conference on Fairness, Accountability, and Transparency (FAT* '20). Barcelona, 27-30 January. New York: ACM, pp. 33-44. Available at: https://doi.org/10.1145/3351095.3372873",
          ],
        },
        {
          title: "Case Study 2 - AI Safety Constraints",
          author: "Lana Menezes Fidelis",
          description:
            "Reflective case study on bounded autonomy and fail-closed design in Research Brief Agent's human checkpoints.",
          href: courseworkBlobUrl("coursework/week-12/reflective-piece.md"),
          body: [
            "This case study is grounded in the bounded-autonomy design built into Research Brief Agent, specifically its human checkpoints and fail-closed validation, reflecting on why those design choices mattered and how they will inform my future practice.",
            "Research Brief Agent's design bounds the system's autonomy at two specific points rather than leaving it fully autonomous end-to-end: the researcher must approve or revise the Planning Agent's sub-questions before any search runs, and must approve, refine, or reject the retrieval scope (with one rejection allowed) before any evidence is synthesised. Beyond those checkpoints, autonomy is also budgeted rather than open-ended: the Retrieval Agent gets exactly one automatic query reformulation per sub-question, and the pipeline allows exactly one scope revision per run. If an LLM reply fails schema validation after a bounded number of retries, the system fails closed and produces no brief at all, rather than falling back to a lower-confidence output.",
            "Deciding where to put those bounds was the part of the project I found hardest, because every extra checkpoint makes the system slower and more dependent on the human being available, while every autonomy budget I removed made a plausible failure mode (the agent reformulating forever against an empty result set, or silently guessing when a reply didn't parse) more likely. Orseau and Armstrong's (2016) work on safely interruptible agents is the clearest grounding for why this matters: an agent that can always be stopped or redirected without the agent having an incentive to resist that interruption is safer specifically because the interruption points are designed in from the start, not bolted on after the system is already acting. The fail-closed validation serves the same function Amodei et al. (2016) describe under \"avoiding negative side effects\": an invalid LLM reply is a signal that the system does not know enough to act safely, and treating that as a stop condition, rather than a problem to paper over with a fallback, is a deliberate trade of convenience for safety.",
            "The habit I am keeping from this is to decide autonomy bounds and checkpoints as a first design question, before any functionality is built, rather than adding them once something has already gone wrong in testing. I would also push further next time: the current checkpoints are binary (approve or reject), and a more graduated signal, flagging low-confidence sub-questions for extra scrutiny rather than treating all approved sub-questions identically, would likely catch more of the failure modes I only found by accident during testing.",
            "Overall, this case study confirmed that safety constraints are most effective when they are a first design decision rather than an afterthought, a principle I intend to carry into any future agent-based system I build.",
          ],
          references: [
            "Amodei, D., Olah, C., Steinhardt, J., Christiano, P., Schulman, J. and Mane, D. (2016) 'Concrete problems in AI safety', arXiv preprint arXiv:1606.06565.",
            "Orseau, L. and Armstrong, S. (2016) 'Safely interruptible agents', Proceedings of the Thirty-Second Conference on Uncertainty in Artificial Intelligence (UAI 2016). Corvallis, OR: AUAI Press, pp. 557-566.",
          ],
        },
        {
          title: "Case Study 3 - Explainable Decisions in Agents (XAI)",
          author: "Lana Menezes Fidelis",
          description:
            "Reflective case study on an explainability gap at Research Brief Agent's evidence-approval checkpoint.",
          href: courseworkBlobUrl("coursework/week-12/reflective-piece.md"),
          body: [
            "This case study is grounded in an explainability gap at Research Brief Agent's evidence-approval checkpoint, reflecting on why unexplained decisions undermine human oversight and what I changed as a result.",
            "The same Evaluation and Synthesis Agent discussed in the bias case study produces a single relevance score per paper, and in an early version of Research Brief Agent that score was the only thing surfaced to the human reviewer at the evidence-approval checkpoint: a number, with no account of what the agent actually weighed to arrive at it. A reviewer could see that a paper scored 0.8 and another scored 0.3, but not why, which made the second human checkpoint, the one point in the design specifically meant to let a researcher catch a bad inclusion before synthesis, much weaker in practice than it was on paper.",
            "This is a common and well-documented failure mode rather than a one-off bug: Arrieta et al. (2020) describe exactly this gap between a model's accuracy and its interpretability as the central tension XAI research exists to address, and Doshi-Velez and Kim (2017) argue that interpretability is only meaningful relative to a specific downstream task, here, a human needing to decide in seconds whether to trust or override a score, not an abstract property of the model. A bare numeric score fails that task even if the score itself is accurate, because the reviewer cannot distinguish \"this paper is off-topic\" from \"this paper is on-topic but methodologically weak\" from \"the model is uncertain\", and those three cases warrant different reviewer actions. Post-hoc explanation techniques such as LIME (Ribeiro, Singh and Guestrin, 2016), which approximate a complex model's local decision boundary with an interpretable one to show which input features drove a specific prediction, exist precisely because retrofitting an explanation onto an already-built scoring system is a known, tractable problem, not a reason to leave the score unexplained.",
            "I changed the Evaluation and Synthesis Agent's output to include a short rationale alongside each score, which paper of the two keywords from the sub-question it matched, which it did not, so the second human checkpoint actually functions as a checkpoint rather than a rubber stamp on a number. More generally, I will treat \"what does the reviewer need to decide, and does the explanation support that decision\" (Doshi-Velez and Kim's task-grounded framing) as a design requirement for any agent whose output feeds a human approval gate, rather than treating explainability as something to add afterwards if there is time, since in this project it directly determined whether the bounded-autonomy design from the AI safety case study actually worked as intended.",
            "Ultimately, this experience showed that explainability is not a cosmetic feature but a precondition for a human checkpoint to function as intended, a lesson I will apply to any agent whose output feeds a human decision.",
          ],
          references: [
            "Arrieta, A.B. et al. (2020) 'Explainable Artificial Intelligence (XAI): concepts, taxonomies, opportunities and challenges toward responsible AI', Information Fusion, 58, pp. 82-115. Available at: https://doi.org/10.1016/j.inffus.2019.12.012",
            "Doshi-Velez, F. and Kim, B. (2017) 'Towards a rigorous science of interpretable machine learning', arXiv preprint arXiv:1702.08608.",
            "Ribeiro, M.T., Singh, S. and Guestrin, C. (2016) '\"Why should I trust you?\": explaining the predictions of any classifier', Proceedings of the 22nd ACM SIGKDD International Conference on Knowledge Discovery and Data Mining. San Francisco, CA, 13-17 August. New York: ACM, pp. 1135-1144. Available at: https://doi.org/10.1145/2939672.2939778",
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
