# Case Study 3 - Explainable Decisions in Agents (XAI)

**Author:** Lana Menezes Fidelis

## What

The same Evaluation and Synthesis Agent discussed in the bias case study produces a single relevance score per paper, and in an early version of Research Brief Agent that score was the only thing surfaced to the human reviewer at the evidence-approval checkpoint: a number, with no account of what the agent actually weighed to arrive at it. A reviewer could see that a paper scored 0.8 and another scored 0.3, but not why, which made the second human checkpoint, the one point in the design specifically meant to let a researcher catch a bad inclusion before synthesis, much weaker in practice than it was on paper.

## So what

This is a common and well-documented failure mode rather than a one-off bug: Arrieta et al. (2020) describe exactly this gap between a model's accuracy and its interpretability as the central tension XAI research exists to address, and Doshi-Velez and Kim (2017) argue that interpretability is only meaningful relative to a specific downstream task, here, a human needing to decide in seconds whether to trust or override a score, not an abstract property of the model. A bare numeric score fails that task even if the score itself is accurate, because the reviewer cannot distinguish "this paper is off-topic" from "this paper is on-topic but methodologically weak" from "the model is uncertain", and those three cases warrant different reviewer actions. Post-hoc explanation techniques such as LIME (Ribeiro, Singh and Guestrin, 2016), which approximate a complex model's local decision boundary with an interpretable one to show which input features drove a specific prediction, exist precisely because retrofitting an explanation onto an already-built scoring system is a known, tractable problem, not a reason to leave the score unexplained.

## Now what

I changed the Evaluation and Synthesis Agent's output to include a short rationale alongside each score, which paper of the two keywords from the sub-question it matched, which it did not, so the second human checkpoint actually functions as a checkpoint rather than a rubber stamp on a number. More generally, I will treat "what does the reviewer need to decide, and does the explanation support that decision" (Doshi-Velez and Kim's task-grounded framing) as a design requirement for any agent whose output feeds a human approval gate, rather than treating explainability as something to add afterwards if there is time, since in this project it directly determined whether the bounded-autonomy design from the AI safety case study actually worked as intended.

## References

Arrieta, A.B. et al. (2020) 'Explainable Artificial Intelligence (XAI): concepts, taxonomies, opportunities and challenges toward responsible AI', *Information Fusion*, 58, pp. 82-115. Available at: https://doi.org/10.1016/j.inffus.2019.12.012

Doshi-Velez, F. and Kim, B. (2017) 'Towards a rigorous science of interpretable machine learning', *arXiv preprint arXiv:1702.08608*.

Ribeiro, M.T., Singh, S. and Guestrin, C. (2016) '"Why should I trust you?": explaining the predictions of any classifier', *Proceedings of the 22nd ACM SIGKDD International Conference on Knowledge Discovery and Data Mining*. San Francisco, CA, 13-17 August. New York: ACM, pp. 1135-1144. Available at: https://doi.org/10.1145/2939672.2939778
