# Week 2 Discussion Forum — Initial Post (Lara Koller)

**Author:** Lara Koller
**Posted:** Sunday, 2 August 2026, 1:34 AM

## Initial Post

The growing use of agent-based systems reflects both the increasing complexity of organisational processes and continued advances in artificial intelligence. Many modern tasks are distributed, constantly changing and difficult to manage through a single centralised system. Multi-agent systems respond to this challenge by dividing work among autonomous, specialised agents that can interpret their environment, make decisions and coordinate their actions. More recently, large language models have accelerated this development by improving agents' ability to communicate in natural language, reason, plan, retain information and access external knowledge (Li et al., 2024).

Agent-based computing also builds on established AI research. For example, the Belief-Desire-Intention architecture represents what an agent knows, what it aims to achieve and the plans it chooses to follow. This allows agents to act purposefully in changing environments. However, Archibald et al. (2024) show that performance is strongly influenced by how agents prioritise competing intentions, indicating that autonomy alone does not guarantee effective decision-making.

For organisations, agent-based systems can support the division of tasks, parallel problem-solving and decentralised decision-making. Organisational models can also define roles and communication protocols to structure how agents interact. However, these advantages can come with trade-offs. Bouslimi (2024) found that an organisation-based multi-agent system remained highly efficient as task complexity increased, although specialised roles and rigid communication protocols limited its flexibility and robustness. Overall, agent-based systems can provide considerable value for organisations managing complex and distributed work, but their effectiveness depends on strong coordination, appropriate validation and resilient system design.

## Additional Task

Research into STORM and PaSa suggests that LLM-powered research systems should separate planning, retrieval and evaluation rather than respond immediately using only the language model's existing knowledge.

STORM decomposes a broad topic into several research perspectives, generates follow-up questions, retrieves information from external sources and organises the collected evidence into an outline before producing a long-form response (Shao et al., 2024). PaSa focuses specifically on academic paper search. It uses a Crawler to generate search queries, retrieve papers and follow citation links, while a Selector assesses whether each paper satisfies the user's requirements (He et al., 2025).

Both systems demonstrate the value of task decomposition, iterative searching and evaluating retrieved information before it is used in the final research output. These principles could inform our group's agent design by enabling the system to expand or redirect its search when the initial results are insufficient or irrelevant. One design option to consider is a single coordinating planning agent that converts the user's goal into focused subquestions and manages separate stages for retrieval, relevance assessment, evidence extraction and synthesis. This architecture could help maintain alignment with the overall research goal while supporting a modular, transparent and traceable workflow.

## References

Archibald, B. et al. (2024) 'Quantitative modelling and analysis of BDI agents', *Software and Systems Modeling*, 23, pp. 343–367. Available at: https://doi.org/10.1007/s10270-023-01121-5

Bouslimi, I. (2024) 'The scalability impact on organization-based multi-agent systems', *28th International Conference on Knowledge-Based and Intelligent Information & Engineering Systems (KES 2024)*, Seville, Spain, 11–13 September. Amsterdam: Elsevier B.V. Pp. 991–1000. Available at: https://doi.org/10.1016/j.procs.2024.09.518

He, Y. et al. (2025) 'PaSa: An LLM agent for comprehensive academic paper search', *63rd Annual Meeting of the Association for Computational Linguistics*, Vienna, Austria, 27 July–1 August. Association for Computational Linguistics. Pp. 11663–11679. Available at: https://doi.org/10.18653/v1/2025.acl-long.572

Li, X. et al. (2024) 'A survey on LLM-based multi-agent systems: workflow, infrastructure, and challenges', *Vicinagearth*, 1, article 9. Available at: https://doi.org/10.1007/s44336-024-00009-2

Shao, Y. et al. (2024) 'Assisting in writing Wikipedia-like articles from scratch with large language models', *2024 Conference of the North American Chapter of the Association for Computational Linguistics: Human Language Technologies*, Mexico City, Mexico, 16–21 June. Association for Computational Linguistics. Pp. 6252–6278. Available at: https://doi.org/10.18653/v1/2024.naacl-long.347
