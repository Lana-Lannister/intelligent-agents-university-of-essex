# Week 7 Discussion Forum - Peer Response

**Author:** Lana Menezes Fidelis
**In reply to:** Dragos Hont
**Posted:** Tuesday, 1 September 2026, 10:27 PM

Thanks for a well-structured post, Dragos, the boundary you draw between deterministic operations and autonomous goal interpretation is a useful practical heuristic, and grounding it in Searle's (1969) speech act theory gives it theoretical weight rather than just being a coding convention.

One thing worth adding is that KQML's performatives, while making intent explicit, were criticised early on for lacking a rigorous formal semantics. Cohen and Levesque (1995) argued that KQML defined its speech acts largely through informal English descriptions, which meant two implementations could interpret the same performative (e.g. achieve or tell) inconsistently, essentially the same interoperability risk you flag via Payne and Tamma (2014), but occurring at the level of the language itself rather than just the ontology.

This is partly why FIPA-ACL (FIPA, 2002) followed, replacing KQML's ad hoc semantics with a semantic language grounded more formally in agents' beliefs and intentions. So a possible refinement to your practical boundary: even where you'd choose KQML-style messaging for the Retrieval-Planning Agent exchange, the specific dialect matters. FIPA-ACL's more constrained semantics would reduce (though not eliminate) the ambiguity you're already anticipating.

As a mitigation for the ontology mismatch you raise, Payne and Tamma's (2014) own negotiation protocol is instructive here: rather than assuming a shared ontology upfront, agents iteratively exchange candidate mappings and refine correspondences. That seems like a more realistic safeguard than a single agreed ontology, especially in an open multi-agent setting.

## References

Cohen, P.R. and Levesque, H.J. (1995) 'Communicative actions for artificial agents', in *Proceedings of the First International Conference on Multi-Agent Systems (ICMAS-95)*. Cambridge, MA: AAAI Press/MIT Press, pp. 65-72.

FIPA (2002) *FIPA ACL Message Structure Specification*. Geneva: Foundation for Intelligent Physical Agents.
