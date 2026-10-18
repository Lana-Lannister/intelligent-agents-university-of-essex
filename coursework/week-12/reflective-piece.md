# Week 12 - Unit 12: Individual e-Portfolio Submission - Reflective Piece

**Author:** Lana Menezes Fidelis

## Reflective Commentary

**What:** Across this module I worked through the conceptual foundations of agent-based computing (Wooldridge and Jennings, 1995), practical exercises in agent communication (KQML/KIF dialogues, Week 6) and natural language structure (constituency parsing, Week 8), and a sustained thread of discussion-forum debate on agent communication languages, generative AI ethics, and responsible deployment (Weeks 2, 3, 5, 7, 9, 10, 11). The module culminated in a group project with Lara Koller, Sergei Misjura and Dragos Hont, where I individually implemented Research Brief Agent, a multi-agent literature-retrieval system built around a deterministic orchestrator, a Planning Agent, a Retrieval Agent, and an Evaluation and Synthesis Agent, bounded by human checkpoints and strict output grounding (Week 11).

The forum work was not a side activity to the technical exercises; it was where most of my actual learning happened, both with my groupmates and with the wider cohort. Debating with my groupmate Lara Koller over whether a single coordinating planning agent risks becoming a rigid single point of failure, and with Dragos Hont, also a groupmate, over where to draw the line between deterministic method calls and KQML-style messaging, repeatedly forced me to defend or revise a position I had thought was settled. Sergei's retrieval example in the Week 3 thread, and separate debates with wider-cohort peers Yasmin Almeida Ferrera, Anne Dayer and Aldana Mohammed Al-Dosari on provenance marking and privacy-by-design, added further perspectives from outside the immediate group. My Week 3 summary post is the clearest evidence of this: direct peer feedback changed my view from treating agent autonomy as self-evidently valuable to treating it as conditional on coordination quality (Jennings, 2000).

**So what:** The group and wider forum work was specifically what let me see how differently my peers approached the same problem, and debating those different positions, rather than just reading about them, is what actually produced the learning. Jehn's (1995) distinction between task conflict and relationship conflict captures why this worked: disagreeing with Dragos about the method-call/KQML boundary, or with Anne about whether provenance can ever substitute for accountability, was productive precisely because it stayed focused on the technical and ethical substance of the claim, not on the people making it. Working through those disagreements in writing, where I had to cite a source rather than just assert a view, is also why I think the forum threads read as more rigorous than my first posts: by Week 7 and Week 10 I was routinely checking a claim against a specific paper before posting it, not after.

The multicultural composition of my project group, Lara Koller, Sergei Misjura, Dragos Hont and myself, was a second, distinct source of learning, separate from the content of any single debate. Working alongside groupmates with different academic backgrounds, different native languages, and different default assumptions about how a technical disagreement should be phrased meant this was something I had to build in practice. Earley and Ang's (2003) account of cultural intelligence, the capacity to function effectively across culturally diverse settings, describes exactly that skill: noticing, for instance, that a groupmate's directness in a critique was a difference in communication norms rather than a sign of the critique being harsher than intended. Gibson and Gibbs (2006) note that national diversity in virtual teams can initially slow coordination before it improves outcomes, and I think that pattern held here. Earlier posts of mine stayed cautious and overly deferential; by the later weeks I was more willing to state a disagreement plainly, because I had more evidence that my groupmates read directness as rigor rather than hostility.

Emotionally, I was engaged and genuinely excited through almost the entire module, including the stretches where I did not yet know how to solve the technical problem in front of me, such as getting the KQML/KIF dialogue's performative semantics right in Week 6, or deciding how to bound the agents' autonomy in the final project without making the system either unsafe or useless. That the uncertainty did not translate into anxiety is consistent with Dweck's (2006) account of a growth mindset, treating a difficulty as evidence that the skill is not yet built rather than as evidence that it cannot be built, and with Bandura's (1997) account of self-efficacy, where each small technical win (getting one message exchange to validate, getting one test suite to pass) built the expectation that the next one was solvable too. The grounding safeguards I eventually built into Research Brief Agent, discarding any output that cites a source it was not given, are a direct product of staying with that uncertainty rather than shipping the first version that produced plausible-looking output.

**Now what:** Three things from this module will carry into how I build agent-based systems afterwards. First, I will treat peer critique of a design decision as a required step, not an optional one; the single biggest improvement in my own reasoning (Week 3) came directly from having to answer other people's objections in writing. Second, I will keep deliberately working in culturally mixed teams where possible, because the friction Gibson and Gibbs (2006) describe is where I learned the most about communicating technical disagreement clearly rather than defensively. Third, I will keep building systems that fail closed under uncertainty rather than ship a confident-looking but ungrounded result, which is the single technical habit from this module I am most confident is correct, and the one I am least willing to compromise on in future work.

### References

Bandura, A. (1997) *Self-Efficacy: The Exercise of Control*. New York: W.H. Freeman.

Dweck, C.S. (2006) *Mindset: The New Psychology of Success*. New York: Random House.

Earley, P.C. and Ang, S. (2003) *Cultural Intelligence: Individual Interactions Across Cultures*. Stanford, CA: Stanford University Press.

Gibson, C.B. and Gibbs, J.L. (2006) 'Unpacking the concept of virtuality: the effects of geographic dispersion, electronic dependence, national diversity, and spatial distance on team innovation', *Administrative Science Quarterly*, 51(3), pp. 451-495.

Jehn, K.A. (1995) 'A multimethod examination of the benefits and detriments of intragroup conflict', *Administrative Science Quarterly*, 40(2), pp. 256-282.

Jennings, N.R. (2000) 'On agent-based software engineering', *Artificial Intelligence*, 117(2), pp. 277-296.

Rolfe, G., Freshwater, D. and Jasper, M. (2001) *Critical Reflection in Nursing and the Helping Professions: A User's Guide*. Basingstoke: Palgrave Macmillan.

Wooldridge, M. and Jennings, N.R. (1995) 'Intelligent agents: theory and practice', *The Knowledge Engineering Review*, 10(2), pp. 115-152.

---

## Case Study 1 - Bias in Autonomous Decision-Making

**What:** In Research Brief Agent, the Evaluation and Synthesis Agent scores each retrieved paper's relevance to a sub-question before it is allowed into the brief. That scoring step is itself a decision-making agent, not a neutral filter, and I realised partway through building it that the same risk I had been reading about in the Week 9 and Week 10 forum threads, algorithmic bias in generative and evaluative AI systems, applied directly to my own system. The scorer could plausibly favour papers from well-known venues or frequently-cited authors, favour papers whose abstracts happen to repeat the sub-question's exact wording over papers that address it in different terms, or systematically under-rank older work relative to recent preprints, none of which track actual relevance.

**So what:** This matters because the harm is structural rather than incidental: Mehrabi et al. (2021) note that bias in ML-based ranking and recommendation systems compounds whatever skew already exists in the underlying data, and academic search is a domain where citation counts and venue prestige are already unevenly distributed. If an evaluation agent's scores are treated as ground truth by a downstream synthesis step, and then by the researcher reading the brief, a biased ranking does not just mis-order the evidence, it actively shapes which arguments the user believes are well-supported. Baker and Hawn (2022) make the same point about educational algorithms: a biased diagnosis is not corrected by the system working as designed, because the system working as designed is what produces the biased diagnosis. Professionally, this reframed how I think about an evaluation agent: it is not a measurement instrument to be validated once, it is a decision-maker whose errors need ongoing auditing, which is why Research Brief Agent requires the human reviewer to see the evaluation scores and rationale rather than only the final summary.

**Now what:** Going forward I will treat any agent that ranks, scores or filters candidates, not just one that generates text, as a decision-making component that needs its own bias testing, following the kind of structured auditing Raji et al. (2020) describe for algorithmic systems generally. Concretely, that means testing a scoring agent against topics chosen to surface skew (an obscure but correct source against a prominent but tangential one) before trusting it in production, and keeping the rationale behind a score visible to the human reviewer rather than collapsing it into a single number. I had not fully appreciated, before building this, how much of what gets called an AI safety problem is actually a bias problem wearing a different name.

### References

Baker, R.S. and Hawn, A. (2022) 'Algorithmic bias in education', *International Journal of Artificial Intelligence in Education*, 32(4), pp. 1052-1092. Available at: https://doi.org/10.1007/s40593-021-00285-9

Mehrabi, N., Morstatter, F., Saxena, N., Lerman, K. and Galstyan, A. (2021) 'A survey on bias and fairness in machine learning', *ACM Computing Surveys*, 54(6), pp. 1-35. Available at: https://doi.org/10.1145/3457607

Raji, I.D., Smart, A., White, R.N., Mitchell, M., Gebru, T., Hutchinson, B., Smith-Loud, J., Theron, D. and Barnes, P. (2020) 'Closing the AI accountability gap: defining an end-to-end framework for internal algorithmic auditing', *Proceedings of the 2020 Conference on Fairness, Accountability, and Transparency (FAT* '20)*. Barcelona, 27-30 January. New York: ACM, pp. 33-44. Available at: https://doi.org/10.1145/3351095.3372873

---

## Case Study 2 - AI Safety Constraints

**What:** Research Brief Agent's design bounds the system's autonomy at two specific points rather than leaving it fully autonomous end-to-end: the researcher must approve or revise the Planning Agent's sub-questions before any search runs, and must approve, refine, or reject the retrieval scope (with one rejection allowed) before any evidence is synthesised. Beyond those checkpoints, autonomy is also budgeted rather than open-ended: the Retrieval Agent gets exactly one automatic query reformulation per sub-question, and the pipeline allows exactly one scope revision per run. If an LLM reply fails schema validation after a bounded number of retries, the system fails closed and produces no brief at all, rather than falling back to a lower-confidence output.

**So what:** Deciding where to put those bounds was the part of the project I found hardest, because every extra checkpoint makes the system slower and more dependent on the human being available, while every autonomy budget I removed made a plausible failure mode (the agent reformulating forever against an empty result set, or silently guessing when a reply didn't parse) more likely. Orseau and Armstrong's (2016) work on safely interruptible agents is the clearest grounding for why this matters: an agent that can always be stopped or redirected without the agent having an incentive to resist that interruption is safer specifically because the interruption points are designed in from the start, not bolted on after the system is already acting. The fail-closed validation serves the same function Amodei et al. (2016) describe under "avoiding negative side effects": an invalid LLM reply is a signal that the system does not know enough to act safely, and treating that as a stop condition, rather than a problem to paper over with a fallback, is a deliberate trade of convenience for safety.

**Now what:** The habit I am keeping from this is to decide autonomy bounds and checkpoints as a first design question, before any functionality is built, rather than adding them once something has already gone wrong in testing. I would also push further next time: the current checkpoints are binary (approve or reject), and a more graduated signal, flagging low-confidence sub-questions for extra scrutiny rather than treating all approved sub-questions identically, would likely catch more of the failure modes I only found by accident during testing.

### References

Amodei, D., Olah, C., Steinhardt, J., Christiano, P., Schulman, J. and Mane, D. (2016) 'Concrete problems in AI safety', *arXiv preprint arXiv:1606.06565*.

Orseau, L. and Armstrong, S. (2016) 'Safely interruptible agents', *Proceedings of the Thirty-Second Conference on Uncertainty in Artificial Intelligence (UAI 2016)*. Corvallis, OR: AUAI Press, pp. 557-566.

---

## Case Study 3 - Explainable Decisions in Agents (XAI)

**What:** The same Evaluation and Synthesis Agent discussed in the bias case study produces a single relevance score per paper, and in an early version of Research Brief Agent that score was the only thing surfaced to the human reviewer at the evidence-approval checkpoint: a number, with no account of what the agent actually weighed to arrive at it. A reviewer could see that a paper scored 0.8 and another scored 0.3, but not why, which made the second human checkpoint, the one point in the design specifically meant to let a researcher catch a bad inclusion before synthesis, much weaker in practice than it was on paper.

**So what:** This is a common and well-documented failure mode rather than a one-off bug: Arrieta et al. (2020) describe exactly this gap between a model's accuracy and its interpretability as the central tension XAI research exists to address, and Doshi-Velez and Kim (2017) argue that interpretability is only meaningful relative to a specific downstream task, here, a human needing to decide in seconds whether to trust or override a score, not an abstract property of the model. A bare numeric score fails that task even if the score itself is accurate, because the reviewer cannot distinguish "this paper is off-topic" from "this paper is on-topic but methodologically weak" from "the model is uncertain", and those three cases warrant different reviewer actions. Post-hoc explanation techniques such as LIME (Ribeiro, Singh and Guestrin, 2016), which approximate a complex model's local decision boundary with an interpretable one to show which input features drove a specific prediction, exist precisely because retrofitting an explanation onto an already-built scoring system is a known, tractable problem, not a reason to leave the score unexplained.

**Now what:** I changed the Evaluation and Synthesis Agent's output to include a short rationale alongside each score, which paper of the two keywords from the sub-question it matched, which it did not, so the second human checkpoint actually functions as a checkpoint rather than a rubber stamp on a number. More generally, I will treat "what does the reviewer need to decide, and does the explanation support that decision" (Doshi-Velez and Kim's task-grounded framing) as a design requirement for any agent whose output feeds a human approval gate, rather than treating explainability as something to add afterwards if there is time, since in this project it directly determined whether the bounded-autonomy design from the AI safety case study actually worked as intended.

### References

Arrieta, A.B. et al. (2020) 'Explainable Artificial Intelligence (XAI): concepts, taxonomies, opportunities and challenges toward responsible AI', *Information Fusion*, 58, pp. 82-115. Available at: https://doi.org/10.1016/j.inffus.2019.12.012

Doshi-Velez, F. and Kim, B. (2017) 'Towards a rigorous science of interpretable machine learning', *arXiv preprint arXiv:1702.08608*.

Ribeiro, M.T., Singh, S. and Guestrin, C. (2016) '"Why should I trust you?": explaining the predictions of any classifier', *Proceedings of the 22nd ACM SIGKDD International Conference on Knowledge Discovery and Data Mining*. San Francisco, CA, 13-17 August. New York: ACM, pp. 1135-1144. Available at: https://doi.org/10.1145/2939672.2939778
