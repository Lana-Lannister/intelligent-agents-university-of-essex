# Week 5 Discussion Forum - Collaborative Discussion 2: Agent Communication Languages

**Author:** Lana Menezes Fidelis
**Posted:** Thursday, 27 August 2026, 10:51 PM

Agent Communication Languages (ACLs) provide a standardised way for autonomous agents to exchange information, requests, and intentions within open, heterogeneous multi-agent systems. KQML, one of the earliest and most influential ACLs, emerged from the ARPA Knowledge Sharing Effort as both a message format and a message-handling protocol intended to support run-time knowledge sharing among agents. Rather than specifying how content is represented, KQML wraps a message in a "performative", a speech-act label such as tell, ask-if, or achieve, that makes explicit the sender's communicative intent while remaining agnostic to the underlying content language (Finin, Fritzson, McKay and McEntire, 1994). This layered design, separating message-level intent from content and transport, is arguably KQML's central advantage: agents built on different platforms, in different programming languages, and with different internal knowledge representations can still interoperate provided they share enough vocabulary to interpret the performatives and content exchanged.

This flexibility, however, is also a source of weakness. Later evaluation work found that the practical desiderata for such languages span form, content, semantics, implementation, networking, environment, and reliability, and that KQML fell short on several of these fronts, particularly around a rigorously agreed semantics for its performative set (Mayfield, Labrou and Finin, 1995). Because two implementations could interpret the same performative differently, interoperability guarantees were weaker than the specification suggested, a criticism echoed in later surveys of the field noting that semantic specification issues dominated much of the debate around ACLs (Labrou, Finin and Peng, 1999). ACLs also introduce parsing and protocol overhead that simpler mechanisms avoid entirely.

Method invocation in Python or Java is a fundamentally different model: caller and callee are tightly coupled through a shared interface, type system, and usually a common runtime, and a call carries no negotiable intent, only direct procedural execution. This suits closed, trusted systems well, but is poorly matched to the open, dynamic environments that motivated agent research in the first place, where designers cannot assume shared implementation details in advance. Wooldridge and Jennings frame this distinction in terms of agent theories, architectures, and languages as separate but related concerns, with agent languages existing precisely to embody the autonomy and flexibility that conventional software engineering models do not (Wooldridge and Jennings, 1995). ACLs therefore trade raw efficiency and simplicity for semantic richness and openness.

## References

Finin, T., Fritzson, R., McKay, D. and McEntire, R. (1994) 'KQML as an agent communication language', *Proceedings of the Third International Conference on Information and Knowledge Management (CIKM '94)*. New York: ACM.

Labrou, Y., Finin, T. and Peng, Y. (1999) 'Agent communication languages: the current landscape', *IEEE Intelligent Systems*, 14(2), pp. 45–52.

Mayfield, J., Labrou, Y. and Finin, T. (1995) 'Evaluation of KQML as an agent communication language', in *Intelligent Agents II: Proceedings of the Second International Workshop on Agent Theories, Architectures, and Languages (ATAL-95)*, LNAI 1037. Montréal: Springer-Verlag.

Wooldridge, M. and Jennings, N.R. (1995) 'Intelligent agents: theory and practice', *The Knowledge Engineering Review*, 10(2), pp. 115–152.
