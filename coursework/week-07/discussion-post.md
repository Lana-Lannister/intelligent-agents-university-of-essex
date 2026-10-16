# Week 7 Discussion Forum - Initial Post (Dragos Hont)

**Author:** Dragos Hont
**Posted:** Friday, 28 August 2026, 6:15 PM

A method call invokes a known operation through an agreed interface, so its purpose is already defined by the code. An agent message may need to express both its content and how the receiver should treat it. Searle (1969) separates propositional content from acts such as stating, questioning or commanding. KQML applies this distinction through a performative that makes the sender's intent explicit (Finin et al., 1994).

I would keep DOI deduplication as an ordinary Python method called by the orchestrator. It is deterministic within one controlled application, so KQML would add message handling and ontology agreement where no autonomous interpretation is needed.

I would use KQML-style messaging (Finin et al., 1994) when the Retrieval Agent asks the Planning Agent to reformulate a query. The performative perform marks reformulation as a requested action rather than a report of insufficient evidence, but different ontologies could still give that evidence different meanings (Payne and Tamma, 2014).

My boundary is practical. I would keep deterministic internal operations as method calls because their interfaces already define what should happen. I would use KQML-style messages where an autonomous agent must interpret a requested goal. This flexibility requires agreement on ontology and semantics, and the same terms may still be understood differently, so interoperability cannot be assumed (Payne and Tamma, 2014).

## References

Finin, T., Fritzson, R., McKay, D. and McEntire, R. (1994) 'KQML as an agent communication language', in *Proceedings of the Third International Conference on Information and Knowledge Management*. New York: ACM, pp. 456-463. doi:10.1145/191246.191322.

Payne, T.R. and Tamma, V. (2014) 'Negotiating over ontological correspondences with asymmetric and incomplete knowledge', in *Proceedings of the 13th International Conference on Autonomous Agents and Multiagent Systems*. Richland, SC: International Foundation for Autonomous Agents and Multiagent Systems, pp. 517-524.

Searle, J.R. (1969) *Speech Acts: An Essay in the Philosophy of Language*. Cambridge: Cambridge University Press.
