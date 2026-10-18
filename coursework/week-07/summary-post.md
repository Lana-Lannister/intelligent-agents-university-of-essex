# Week 7 Discussion Forum - Summary Post

**Author:** Lana Menezes Fidelis
**Posted:** Saturday, 12 September 2026, 6:45 PM

My initial post argued that KQML's separation of communicative intent (the performative) from content is its central strength, enabling interoperability across heterogeneous, independently built agents, but that this same flexibility exposes a weakness: without a rigorously agreed-upon semantics, two implementations can interpret the same performative differently (Mayfield, Labrou and Finin, 1995). Method invocation in Python or Java, by contrast, offers efficiency and type safety in closed systems but carries no negotiable intent (Wooldridge and Jennings, 1995).

Both peer responses pushed this further in useful ways. Dragos questioned how much interoperability a shared performative set really buys if agents still rely on incompatible ontologies, and asked where, in practice, the line between ACL messaging and ordinary method calls should be drawn. Reflecting on this, I would place that line wherever a receiving agent can legitimately reject, reinterpret, or renegotiate a request rather than execute it; that is precisely where autonomy, not just distribution across processes, becomes relevant. Yasmin's response reinforced this by proposing that ontology-alignment mechanisms could preserve ACL flexibility while reducing semantic ambiguity, drawing on Santos et al.'s (2016) dialogue-based negotiation mechanism for agents with incomplete or asymmetric ontological knowledge.

This connects to how the field actually responded to KQML's semantic gaps. FIPA-ACL retained KQML's performative structure but grounded semantics in the mental states (beliefs, intentions) of communicating agents, an attempt at a more rigorous, verifiable specification (Pitt and Mamdani, 1999). This suggests the debate was never really "ACL versus method call" but rather how much semantic commitment a given interaction needs.

Overall, the discussion sharpened my original position: ACLs justify their overhead specifically when agents may respond to a request with genuine discretion, and ongoing work on ontology negotiation and formal semantics is what makes that discretion tractable rather than chaotic.

## References

Finin, T., Fritzson, R., McKay, D. and McEntire, R. (1994) 'KQML as an agent communication language', *Proceedings of the Third International Conference on Information and Knowledge Management (CIKM '94)*. New York: ACM.

Mayfield, J., Labrou, Y. and Finin, T. (1995) 'Evaluation of KQML as an agent communication language', in *Intelligent Agents II: Proceedings of the Second International Workshop on Agent Theories, Architectures, and Languages (ATAL-95)*, LNAI 1037. Montreal: Springer-Verlag.

Pitt, J. and Mamdani, A. (1999) 'Some remarks on the semantics of FIPA's agent communication language', *Autonomous Agents and Multi-Agent Systems*, 2(4), pp. 333-356. Available at: https://doi.org/10.1023/A:1010016503852.

Santos, G., Payne, T.R., Tamma, V. and Grasso, F. (2016) 'Discovering ontological correspondences through dialogue', in *Knowledge Engineering and Knowledge Management: EKAW 2016*, Lecture Notes in Computer Science, vol. 10024. Cham: Springer, pp. 543-560. Available at: https://doi.org/10.1007/978-3-319-49004-5_35.

Wooldridge, M. and Jennings, N.R. (1995) 'Intelligent agents: theory and practice', *The Knowledge Engineering Review*, 10(2), pp. 115-152.
