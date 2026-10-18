# Case Study 1 - Bias in Autonomous Decision-Making

**Author:** Lana Menezes Fidelis

## What

In Research Brief Agent, the Evaluation and Synthesis Agent scores each retrieved paper's relevance to a sub-question before it is allowed into the brief. That scoring step is itself a decision-making agent, not a neutral filter, and I realised partway through building it that the same risk I had been reading about in the Week 9 and Week 10 forum threads, algorithmic bias in generative and evaluative AI systems, applied directly to my own system. The scorer could plausibly favour papers from well-known venues or frequently-cited authors, favour papers whose abstracts happen to repeat the sub-question's exact wording over papers that address it in different terms, or systematically under-rank older work relative to recent preprints, none of which track actual relevance.

## So what

This matters because the harm is structural rather than incidental: Mehrabi et al. (2021) note that bias in ML-based ranking and recommendation systems compounds whatever skew already exists in the underlying data, and academic search is a domain where citation counts and venue prestige are already unevenly distributed. If an evaluation agent's scores are treated as ground truth by a downstream synthesis step, and then by the researcher reading the brief, a biased ranking does not just mis-order the evidence, it actively shapes which arguments the user believes are well-supported. Baker and Hawn (2022) make the same point about educational algorithms: a biased diagnosis is not corrected by the system working as designed, because the system working as designed is what produces the biased diagnosis. Professionally, this reframed how I think about an evaluation agent: it is not a measurement instrument to be validated once, it is a decision-maker whose errors need ongoing auditing, which is why Research Brief Agent requires the human reviewer to see the evaluation scores and rationale rather than only the final summary.

## Now what

Going forward I will treat any agent that ranks, scores or filters candidates, not just one that generates text, as a decision-making component that needs its own bias testing, following the kind of structured auditing Raji et al. (2020) describe for algorithmic systems generally. Concretely, that means testing a scoring agent against topics chosen to surface skew (an obscure but correct source against a prominent but tangential one) before trusting it in production, and keeping the rationale behind a score visible to the human reviewer rather than collapsing it into a single number. I had not fully appreciated, before building this, how much of what gets called an AI safety problem is actually a bias problem wearing a different name.

## References

Baker, R.S. and Hawn, A. (2022) 'Algorithmic bias in education', *International Journal of Artificial Intelligence in Education*, 32(4), pp. 1052-1092. Available at: https://doi.org/10.1007/s40593-021-00285-9

Mehrabi, N., Morstatter, F., Saxena, N., Lerman, K. and Galstyan, A. (2021) 'A survey on bias and fairness in machine learning', *ACM Computing Surveys*, 54(6), pp. 1-35. Available at: https://doi.org/10.1145/3457607

Raji, I.D., Smart, A., White, R.N., Mitchell, M., Gebru, T., Hutchinson, B., Smith-Loud, J., Theron, D. and Barnes, P. (2020) 'Closing the AI accountability gap: defining an end-to-end framework for internal algorithmic auditing', *Proceedings of the 2020 Conference on Fairness, Accountability, and Transparency (FAT* '20)*. Barcelona, 27-30 January. New York: ACM, pp. 33-44. Available at: https://doi.org/10.1145/3351095.3372873
