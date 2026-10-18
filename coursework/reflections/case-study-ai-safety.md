# Case Study 2 - AI Safety Constraints

**Author:** Lana Menezes Fidelis

## What

Research Brief Agent's design bounds the system's autonomy at two specific points rather than leaving it fully autonomous end-to-end: the researcher must approve or revise the Planning Agent's sub-questions before any search runs, and must approve, refine, or reject the retrieval scope (with one rejection allowed) before any evidence is synthesised. Beyond those checkpoints, autonomy is also budgeted rather than open-ended: the Retrieval Agent gets exactly one automatic query reformulation per sub-question, and the pipeline allows exactly one scope revision per run. If an LLM reply fails schema validation after a bounded number of retries, the system fails closed and produces no brief at all, rather than falling back to a lower-confidence output.

## So what

Deciding where to put those bounds was the part of the project I found hardest, because every extra checkpoint makes the system slower and more dependent on the human being available, while every autonomy budget I removed made a plausible failure mode (the agent reformulating forever against an empty result set, or silently guessing when a reply didn't parse) more likely. Orseau and Armstrong's (2016) work on safely interruptible agents is the clearest grounding for why this matters: an agent that can always be stopped or redirected without the agent having an incentive to resist that interruption is safer specifically because the interruption points are designed in from the start, not bolted on after the system is already acting. The fail-closed validation serves the same function Amodei et al. (2016) describe under 'avoiding negative side effects': an invalid LLM reply is a signal that the system does not know enough to act safely, and treating that as a stop condition, rather than a problem to paper over with a fallback, is a deliberate trade of convenience for safety.

## Now what

The habit I am keeping from this is to decide autonomy bounds and checkpoints as a first design question, before any functionality is built, rather than adding them once something has already gone wrong in testing. I would also push further next time: the current checkpoints are binary (approve or reject), and a more graduated signal, flagging low-confidence sub-questions for extra scrutiny rather than treating all approved sub-questions identically, would likely catch more of the failure modes I only found by accident during testing.

## References

Amodei, D., Olah, C., Steinhardt, J., Christiano, P., Schulman, J. and Mane, D. (2016) 'Concrete problems in AI safety', *arXiv preprint arXiv:1606.06565*.

Orseau, L. and Armstrong, S. (2016) 'Safely interruptible agents', *Proceedings of the Thirty-Second Conference on Uncertainty in Artificial Intelligence (UAI 2016)*. Corvallis, OR: AUAI Press, pp. 557-566.
