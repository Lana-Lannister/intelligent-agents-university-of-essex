# Week 6 Activity - Creating Agent Dialogues

**Author:** Lana Menezes Fidelis

## Scenario

Two agents communicate using KQML (message-level performatives) and KIF (content-level knowledge representation):

- **Alice** - a procurement agent, sourcing stock on behalf of a retailer.
- **Bob** - a warehouse stock-control agent, holding authoritative inventory data.

Alice asks Bob about the available stock of 50-inch televisions, then queries how many HDMI ports those televisions have.

## Dialogue

### 1. Alice asks for the stock level

```
(ask-one
  :sender       Alice
  :receiver     Bob
  :content      (stock-level TV-50IN ?quantity)
  :reply-with   q1
  :language     KIF
  :ontology     warehouse-inventory
)
```

### 2. Bob replies with the stock level

```
(tell
  :sender       Bob
  :receiver     Alice
  :content      (stock-level TV-50IN 42)
  :in-reply-to  q1
  :language     KIF
  :ontology     warehouse-inventory
)
```

### 3. Alice asks how many HDMI ports the TV has

```
(ask-one
  :sender       Alice
  :receiver     Bob
  :content      (hdmi-ports TV-50IN ?count)
  :reply-with   q2
  :language     KIF
  :ontology     warehouse-inventory
)
```

### 4. Bob replies with the HDMI port count

```
(tell
  :sender       Bob
  :receiver     Alice
  :content      (hdmi-ports TV-50IN 4)
  :in-reply-to  q2
  :language     KIF
  :ontology     warehouse-inventory
)
```

## Why an agent communication language, not a direct call

Alice could, in principle, query Bob's inventory through a direct method call or a REST endpoint. The activity specifies KQML/KIF instead, which reflects a deliberate difference in what the two approaches assume about the parties involved. Genesereth and Ketchpel (1994) frame this as the core motivation for agent communication languages: in an open environment, the agents procuring and supplying stock may be built by different organisations, on different platforms, with no shared implementation to call into, so coordination has to happen through messages whose meaning does not depend on either side's internal code. A method call also carries no communicative content beyond "execute this operation now"; KQML's performative layer lets Alice express *ask-one* rather than a demand, leaving Bob free to decline, delay or answer with a `sorry` if `TV-50IN` were not in his catalogue (Finin et al., 1994). That autonomy, Bob is not obliged to execute Alice's request the way an object is obliged to execute an invoked method, is precisely the reactive-but-independent property Wooldridge and Jennings (1995) use to distinguish agents from objects. For a procurement scenario specifically, this matters practically as well as theoretically: stock levels change asynchronously and Bob may need to consult other systems before answering, so a request/response message pair that does not block Alice's thread of control is a better fit than a synchronous call.

## Theoretical grounding: speech acts and formal semantics

KQML's performative set did not appear arbitrarily; it operationalises speech act theory from the philosophy of language. Austin (1962) first argued that utterances can themselves perform actions (illocutionary acts) rather than merely describe the world, and Searle (1969) formalised this into categories such as assertives and directives. KQML performatives map onto these categories directly: `tell` is an assertive (Bob commits to the truth of `(stock-level TV-50IN 42)`), while `ask-one` is a directive (Alice attempts to get Bob to perform an informing act). This is the theoretical basis the module's Week 5 reading identified as under-specified in KQML's original definition: Mayfield, Labrou and Finin (1995) observed that KQML listed performatives without giving them a rigorously agreed formal semantics, so two implementations could agree on the performative name `tell` while disagreeing on what obligations it created. Cohen and Levesque (1995) addressed exactly this gap by grounding communicative acts in a theory of rational action, defining each performative via feasibility preconditions (what must be true of the sender's mental state to perform it) and rational effects (what the act is intended to bring about in the receiver), rather than leaving its meaning implicit. FIPA adopted this semantics for FIPA-ACL, its own performative set, formally specifying, for example, that an agent may only legitimately send `inform` if it believes the proposition and believes the receiver does not already believe it (FIPA, 2002). Framed against that standard, the dialogue above is a simplification: Bob's `tell` replies are presented as the ground truth of the warehouse database, so the feasibility precondition is trivially satisfied, but a fuller implementation would have Bob reason about whether Alice's belief state already matches the content before replying.

KIF itself has an independent grounding in first-order predicate logic (Genesereth and Fikes, 1992), which is what licenses using an unbound variable such as `?quantity` inside a KQML message in the first place: `(stock-level TV-50IN ?quantity)` is well-formed because KIF treats it as an open logical sentence, and `ask-one` is defined over exactly that case, "find a binding for the free variable that makes this sentence true". This is also why KQML's separation of performative from content (Finin et al., 1994) is more than a convenience: the same KIF sentence could be wrapped in `ask-one`, `ask-all` (to request every television model's stock level, not a single determinate value), or `subscribe` (to be told whenever the value changes) without any change to the underlying knowledge representation.

## Design notes

- **`ask-one` rather than `ask-all`**: both questions (stock level, HDMI port count) expect a single determinate value for a specific product, `TV-50IN`, not a set of matching facts, so `ask-one` captures that intent directly at the message level rather than leaving Bob to guess how many answers Alice wants.
- **`:reply-with` / `:in-reply-to`**: pairing each query with its reply by id lets Alice run both questions concurrently, or interleaved with queries to other suppliers, without ambiguity about which `tell` answers which `ask-one` - one of the reliability desiderata Mayfield, Labrou and Finin (1995) set out for a usable ACL.
- **Shared `:ontology`**: both agents reference `warehouse-inventory` so that `stock-level` and `hdmi-ports` resolve to the same predicates and argument order on both sides. KQML's performative layer alone does not guarantee this: two agents can agree perfectly on what `ask-one` means while still disagreeing on what `(stock-level TV-50IN ?quantity)` denotes, which is why the ontology reference is carried in every message rather than assumed.

## Limitation: what this dialogue does not show

The exchange above represents the successful path only. A complete agent dialogue would also need a non-understanding or refusal branch, for example Bob replying with `sorry` if `TV-50IN` is not a recognised product code, which KQML supports as a performative but which is not exercised here because the activity specifies a single, known product. This matters because it is exactly the kind of case where KQML's weak formal semantics (Mayfield, Labrou and Finin, 1995) becomes a practical problem: without an agreed precondition for when `sorry` is appropriate versus `tell`-ing a null result, Alice cannot reliably distinguish "the product does not exist" from "the stock level is zero" unless the ontology defines both outcomes unambiguously in advance.

## References

Austin, J.L. (1962) *How to Do Things with Words*. Oxford: Clarendon Press.

Cohen, P.R. and Levesque, H.J. (1995) 'Communicative actions for artificial agents', *Proceedings of the First International Conference on Multiagent Systems (ICMAS-95)*. San Francisco, CA, 12-14 June. Menlo Park, CA: AAAI Press, pp. 65-72.

FIPA (2002) *FIPA ACL Message Structure Specification*, SC00061G. Geneva: Foundation for Intelligent Physical Agents.

Finin, T., Fritzson, R., McKay, D. and McEntire, R. (1994) 'KQML as an agent communication language', *Proceedings of the Third International Conference on Information and Knowledge Management (CIKM '94)*. New York: ACM.

Genesereth, M.R. and Fikes, R.E. (1992) *Knowledge Interchange Format, Version 3.0 Reference Manual*. Technical Report Logic-92-1. Stanford, CA: Stanford University Logic Group.

Genesereth, M.R. and Ketchpel, S.P. (1994) 'Software agents', *Communications of the ACM*, 37(7), pp. 48-53.

Mayfield, J., Labrou, Y. and Finin, T. (1995) 'Evaluation of KQML as an agent communication language', in *Intelligent Agents II: Proceedings of the Second International Workshop on Agent Theories, Architectures, and Languages (ATAL-95)*, LNAI 1037. Montreal: Springer-Verlag.

Searle, J.R. (1969) *Speech Acts: An Essay in the Philosophy of Language*. Cambridge: Cambridge University Press.

Wooldridge, M. and Jennings, N.R. (1995) 'Intelligent agents: theory and practice', *The Knowledge Engineering Review*, 10(2), pp. 115-152.
