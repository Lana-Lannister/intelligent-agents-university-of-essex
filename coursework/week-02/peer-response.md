# Week 2 Discussion Forum - Peer Response

**Author:** Lana Menezes Fidelis
**In reply to:** Lara Koller
**Posted:** Monday, 10 August 2026, 8:39 PM

Hi Lara,

I really liked how you tied BDI theory to the practical coordination challenges in your post. Your point about rigid communication protocols limiting flexibility and robustness stood out to me, since it suggests a fairly common failure mode in organisation-based MAS: systems that are efficient under expected conditions can struggle when task complexity shifts unexpectedly.

One measure that could mitigate this is designing for adaptive role allocation rather than fixed roles. Dorri, Kanhere and Jurdak (2018) note that many MAS architectures sit on a spectrum between fully centralised and fully decentralised control, and that hybrid designs can dynamically reassign coordination responsibilities depending on load or failure conditions. Applying this idea to your discussion, a system could retain organisational structure for routine tasks while allowing agents to renegotiate roles or escalate to a coordinator when rigid protocols would otherwise create a bottleneck. This kind of flexibility is consistent with Wooldridge and Jennings' (1995) original characterisation of agents as reactive and proactive, not just autonomous; an agent's value lies partly in its ability to adapt behaviour to environmental change, not simply follow a predefined plan.

This also connects to your research-agent design. A single coordinating planning agent is efficient, but if it becomes a single point of failure, it risks reproducing the same rigidity you identified. Wang et al. (2024) discuss LLM-agent planning modules that support replanning when retrieval or evaluation stages return insufficient results; this could be a useful safeguard, letting your coordinator revise its subquestion strategy rather than proceeding with poor evidence.

Overall, I think building in some capacity for agents to renegotiate roles or replan is what would most improve the resilience you flagged.

## References

Dorri, A., Kanhere, S.S. and Jurdak, R. (2018) 'Multi-agent systems: a survey', *IEEE Access*, 6, pp. 28573–28593. Available at: https://doi.org/10.1109/ACCESS.2018.2831228

Wang, L. et al. (2024) 'A survey on large language model based autonomous agents', *Frontiers of Computer Science*, 18, article 186345. Available at: https://doi.org/10.1007/s11704-024-40231-1

Wooldridge, M. and Jennings, N.R. (1995) 'Intelligent agents: theory and practice', *The Knowledge Engineering Review*, 10(2), pp. 115–152. Available at: https://doi.org/10.1017/S0269888900008122
