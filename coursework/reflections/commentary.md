# Reflective Commentary

**Author:** Lana Menezes Fidelis

## What

Across this module I worked through the conceptual foundations of agent-based computing (Wooldridge and Jennings, 1995), practical exercises in agent communication (KQML/KIF dialogues, Week 6) and natural language structure (constituency parsing, Week 8), and a sustained thread of discussion-forum debate on agent communication languages, generative AI ethics, and responsible deployment (Weeks 2, 3, 5, 7, 9, 10, 11). The module culminated in a group project with Lara Koller, Sergei Misjura and Dragos Hont, where I individually implemented Research Brief Agent, a multi-agent literature-retrieval system built around a deterministic orchestrator, a Planning Agent, a Retrieval Agent, and an Evaluation and Synthesis Agent, bounded by human checkpoints and strict output grounding (Week 11).

The forum work was not a side activity to the technical exercises; it was where most of my actual learning happened, both with my groupmates and with the wider cohort. Debating with my groupmate Lara Koller over whether a single coordinating planning agent risks becoming a rigid single point of failure, and with Dragos Hont, also a groupmate, over where to draw the line between deterministic method calls and KQML-style messaging, repeatedly forced me to defend or revise a position I had thought was settled. Sergei's retrieval example in the Week 3 thread, and separate debates with wider-cohort peers Yasmin Almeida Ferrera, Anne Dayer and Aldana Mohammed Al-Dosari on provenance marking and privacy-by-design, added further perspectives from outside the immediate group. My Week 3 summary post is the clearest evidence of this: direct peer feedback changed my view from treating agent autonomy as self-evidently valuable to treating it as conditional on coordination quality (Jennings, 2000).

## So what

The group and wider forum work was specifically what let me see how differently my peers approached the same problem, and debating those different positions, rather than just reading about them, is what actually produced the learning. Jehn's (1995) distinction between task conflict and relationship conflict captures why this worked: disagreeing with Dragos about the method-call/KQML boundary, or with Anne about whether provenance can ever substitute for accountability, was productive precisely because it stayed focused on the technical and ethical substance of the claim, not on the people making it. Working through those disagreements in writing, where I had to cite a source rather than just assert a view, is also why I think the forum threads read as more rigorous than my first posts: by Week 7 and Week 10 I was routinely checking a claim against a specific paper before posting it, not after.

The multicultural composition of my project group, Lara Koller, Sergei Misjura, Dragos Hont and myself, was a second, distinct source of learning, separate from the content of any single debate. Working alongside groupmates with different academic backgrounds, different native languages, and different default assumptions about how a technical disagreement should be phrased meant this was something I had to build in practice. Earley and Ang's (2003) account of cultural intelligence, the capacity to function effectively across culturally diverse settings, describes exactly that skill: noticing, for instance, that a groupmate's directness in a critique was a difference in communication norms rather than a sign of the critique being harsher than intended. Gibson and Gibbs (2006) note that national diversity in virtual teams can initially slow coordination before it improves outcomes, and I think that pattern held here. Earlier posts of mine stayed cautious and overly deferential; by the later weeks I was more willing to state a disagreement plainly, because I had more evidence that my groupmates read directness as rigor rather than hostility.

Emotionally, I was engaged and genuinely excited through almost the entire module, including the stretches where I did not yet know how to solve the technical problem in front of me, such as getting the KQML/KIF dialogue's performative semantics right in Week 6, or deciding how to bound the agents' autonomy in the final project without making the system either unsafe or useless. That the uncertainty did not translate into anxiety is consistent with Dweck's (2006) account of a growth mindset, treating a difficulty as evidence that the skill is not yet built rather than as evidence that it cannot be built, and with Bandura's (1997) account of self-efficacy, where each small technical win (getting one message exchange to validate, getting one test suite to pass) built the expectation that the next one was solvable too. The grounding safeguards I eventually built into Research Brief Agent, discarding any output that cites a source it was not given, are a direct product of staying with that uncertainty rather than shipping the first version that produced plausible-looking output.

## Now what

Three things from this module will carry into how I build agent-based systems afterwards. First, I will treat peer critique of a design decision as a required step, not an optional one; the single biggest improvement in my own reasoning (Week 3) came directly from having to answer other people's objections in writing. Second, I will keep deliberately working in culturally mixed teams where possible, because the friction Gibson and Gibbs (2006) describe is where I learned the most about communicating technical disagreement clearly rather than defensively. Third, I will keep building systems that fail closed under uncertainty rather than ship a confident-looking but ungrounded result, which is the single technical habit from this module I am most confident is correct, and the one I am least willing to compromise on in future work.

## References

Bandura, A. (1997) *Self-Efficacy: The Exercise of Control*. New York: W.H. Freeman.

Dweck, C.S. (2006) *Mindset: The New Psychology of Success*. New York: Random House.

Earley, P.C. and Ang, S. (2003) *Cultural Intelligence: Individual Interactions Across Cultures*. Stanford, CA: Stanford University Press.

Gibson, C.B. and Gibbs, J.L. (2006) 'Unpacking the concept of virtuality: the effects of geographic dispersion, electronic dependence, national diversity, and spatial distance on team innovation', *Administrative Science Quarterly*, 51(3), pp. 451-495.

Jehn, K.A. (1995) 'A multimethod examination of the benefits and detriments of intragroup conflict', *Administrative Science Quarterly*, 40(2), pp. 256-282.

Jennings, N.R. (2000) 'On agent-based software engineering', *Artificial Intelligence*, 117(2), pp. 277-296.

Rolfe, G., Freshwater, D. and Jasper, M. (2001) *Critical Reflection in Nursing and the Helping Professions: A User's Guide*. Basingstoke: Palgrave Macmillan.

Wooldridge, M. and Jennings, N.R. (1995) 'Intelligent agents: theory and practice', *The Knowledge Engineering Review*, 10(2), pp. 115-152.
