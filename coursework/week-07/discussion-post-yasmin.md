# Week 7 Discussion Forum - Initial Post (Yasmin Almeida Ferrera)

**Author:** Yasmin Almeida Ferrera
**Posted:** Friday, 28 August 2026, 10:38 AM

Agent Communication Languages (ACLs), such as KQML, were developed to allow autonomous agents to communicate through messages representing actions such as requests, questions and information sharing (Labrou and Finin, 2000). This is fundamentally different from method invocation in Python or Java. When a Python or Java programme calls a method, the developer normally knows exactly which operation is being requested, what inputs it requires and what type of result should be returned. With KQML, the focus is instead on communicating an intention, allowing the receiving agent to decide how to respond.

This is where I see both the main strength and weakness of ACLs. They can make a system much more flexible because agents do not need to know the internal implementation of other agents. This is particularly useful when agents are independent or distributed. However, the same autonomy can make the system harder to control. Communication requires additional processing, and the outcome may not be as predictable as a direct method call.

Python and Java therefore have an important advantage in terms of control and reliability. A method has a defined interface, making it easier to test, debug and predict its behaviour. The limitation is that the components become more dependent on each other. If the method changes, the code relying on it may also need to change. For a multi-agent system where components need to operate independently, this type of dependency can become a limitation.

There is also a deeper problem: communication does not necessarily equal understanding. Two agents can follow the same protocol and still interpret information differently. This is why semantic interoperability is important in systems where agents need to share knowledge, not just exchange messages (Malik and Malik, 2018).

I find this particularly relevant to current AI agents. MCP provides a standardised way for AI applications to connect with tools and external resources (Anthropic, 2024), while multi-agent LLM research shows that agents can communicate to challenge and improve each other's reasoning (Du et al., 2024). In this sense, the idea behind ACLs is still relevant, even if the technology has changed.

For me, the interesting trade-off is therefore not simply KQML versus Python or Java. It is control versus autonomy. Method invocation gives us predictable behaviour, while agent communication gives agents more freedom to cooperate and adapt. The question is whether that additional autonomy actually produces better results, or whether the loss of predictability becomes too high a price to pay.

## References

Anthropic (2024) *Model Context Protocol specification*. Available at: https://modelcontextprotocol.io/introduction (Accessed: 25 August 2026).

Du, Y., Li, S., Torralba, A., Tenenbaum, J.B. and Mordatch, I. (2024) 'Improving factuality and reasoning in language models through multiagent debate', *Proceedings of the 41st International Conference on Machine Learning*, 235. Available at: https://openreview.net/pdf?id=zj7YuTE4t8N (Accessed: 25 August 2026).

Labrou, Y. and Finin, T. (2000) *Agent Communication Languages: Past, Present and Future*. Tutorial presented at ICMAS 2000, Boston, July 2000. Available at: https://userpages.cs.umbc.edu/finin/talks/icmas00.pdf (Accessed: 28 August 2026).

Malik, M. and Malik, S.K. (2018) 'Semantic web as the next generation smart web', *Journal of Emerging Technologies and Innovative Research*, 5(6), pp. 580-594. Available at: https://www.jetir.org/papers/JETIR1806326.pdf (Accessed: 28 August 2026).
