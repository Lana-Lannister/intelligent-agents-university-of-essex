# Week 7 Discussion Forum - Peer Response (to Yasmin Almeida Ferrera)

**Author:** Lana Menezes Fidelis
**In reply to:** Yasmin Almeida Ferrera
**Posted:** Tuesday, 1 September 2026, 10:31 PM

Hello Yasmin! Framing the trade-off as control versus autonomy is a clear way to cut through the KQML-versus-method-call comparison, and connecting it to MCP and multi-agent debate research (Du et al., 2024) makes a strong case that the underlying design question has outlived the original ACL technology.

I would push a little further on the "communication does not equal understanding" point. This is essentially the symbol grounding problem in a distributed setting: even with a shared protocol like KQML, performatives only specify the type of speech act, not the meaning of the terms inside the message content (Chaib-draa and Dignum, 2002). FIPA-ACL tried to address part of this by requiring agents to share content languages and ontologies explicitly rather than assuming them, though as your Malik and Malik (2018) reference suggests, semantic web style ontology alignment does not fully eliminate the risk of divergent interpretation. Wooldridge (2009) makes a related point that agent communication only works reliably when agents share a common mental model of the world, something that cannot be guaranteed simply by agreeing on a message syntax.

On the reliability point, I think there is a useful middle ground worth naming: many practical multi-agent systems, and MCP-based tool use is a good example, keep the transport and message structure standardised and machine-checkable (closer to a method call's defined interface) while leaving the content of the request open to interpretation by the receiving model. This partially recovers some of the testability you attribute to Python or Java, while still preserving the flexibility ACLs were designed for. It suggests the real design choice is not fully autonomous versus fully deterministic, but where along that spectrum the interface boundary is drawn.

This links to Jennings' (2000) argument that coordination in multi-agent systems requires an explicit trade-off between the flexibility of negotiation-based interaction and the predictability needed for dependable engineering, a tension that maps closely onto your control-versus-autonomy framing. More recent work on LLM-based agents (Guo et al., 2024) also suggests that as natural language itself becomes the communication medium, the boundary between "message" and "method call" is blurring further, since a natural language request can carry both structured intent and open-ended content within a single exchange.

## References

Guo, T., Chen, X., Wang, Y., Chang, R., Pei, S., Chawla, N.V., Wiest, O. and Zhang, X. (2024) 'Large language model based multi-agents: a survey of progress and challenges', in *Proceedings of the Thirty-Third International Joint Conference on Artificial Intelligence (IJCAI-24)*, pp. 8048-8057.

Jennings, N.R. (2000) 'On agent-based software engineering', *Artificial Intelligence*, 117(2), pp. 277-296.

Wooldridge, M. (2009) *An Introduction to MultiAgent Systems*. 2nd edn. Chichester: Wiley.
