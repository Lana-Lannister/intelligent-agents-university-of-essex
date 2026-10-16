# Week 10 Activity - Deep Learning in Action

**Author:** Lana Menezes Fidelis
**Posted:** Thursday, 1 October 2026, 5:56 PM

## Deep Knowledge Tracing: Identifying Learning Gaps and Personalising Improvement

Deep Knowledge Tracing (DKT) uses deep learning to model what a student knows and identify the concepts they have not yet grasped. It then recommends a personalised path to close those gaps. DKT underpins many adaptive learning platforms because it offers a scalable approximation of one-to-one tutoring, which Bloom (1984) found raised attainment by around two standard deviations.

### How it works

Classical Bayesian Knowledge Tracing treats each skill as either mastered or not (Corbett and Anderson, 1994). Piech et al. (2015) replaced this with a recurrent neural network. Each interaction, meaning the exercise attempted and whether it was answered correctly, is fed into a Long Short-Term Memory network. The network's hidden state represents the student's evolving knowledge. The model predicts the probability of answering each skill correctly next, and persistently low probabilities reveal gaps. A recommendation component, increasingly based on reinforcement learning, then sequences exercises according to prerequisite structure (Liu et al., 2019).

The system therefore operates as a learning agent. It perceives responses, maintains an internal model of the learner, and acts autonomously to maximise mastery (Russell and Norvig, 2021; Wooldridge, 2009).

### Potential impacts

**Social good.** DKT can detect misunderstanding before it compounds. It can also give teachers dashboards that show where to focus classroom time.

**Reliability.** The gains may be overstated. Khajah, Lindsey, and Mozer (2016) found that extended Bayesian models performed comparably. Yeung and Yeung (2018) showed that DKT can lower a student's estimated mastery after a correct answer. Because the knowledge state is an opaque vector, teachers cannot easily verify why a pupil was flagged.

**Fairness.** Educational algorithms often perform worse for underrepresented groups (Baker and Hawn, 2022). A biased diagnosis could channel pupils into remedial pathways, and the lowered expectations could become a self-fulfilling prophecy.

**Privacy and regulation.** Continuous tracking of children's errors creates detailed cognitive profiles, raising concerns over consent, retention, and commercial reuse (Slade and Prinsloo, 2013). The EU AI Act classifies systems that evaluate learning outcomes and steer learning as high-risk, so they require human oversight (European Union, 2024).

### Conclusion

DKT could make personalised tutoring affordable at scale. However, its diagnoses are probabilistic, opaque and potentially biased, so it should inform teachers' judgement rather than replace it.

## References

Baker, R.S. and Hawn, A. (2022) 'Algorithmic bias in education', *International Journal of Artificial Intelligence in Education*, 32(4), pp. 1052-1092. Available at: https://doi.org/10.1007/s40593-021-00285-9

Bloom, B.S. (1984) 'The 2 sigma problem: the search for methods of group instruction as effective as one-to-one tutoring', *Educational Researcher*, 13(6), pp. 4-16. Available at: https://doi.org/10.3102/0013189X013006004

Corbett, A.T. and Anderson, J.R. (1994) 'Knowledge tracing: modeling the acquisition of procedural knowledge', *User Modeling and User-Adapted Interaction*, 4(4), pp. 253-278. Available at: https://doi.org/10.1007/BF01099821

European Union (2024) Regulation (EU) 2024/1689 laying down harmonised rules on artificial intelligence (Artificial Intelligence Act). *OJ L*, 2024/1689, 12 July. Available at: https://eur-lex.europa.eu/eli/reg/2024/1689/oj (Accessed: 1 October 2026).

Khajah, M., Lindsey, R.V. and Mozer, M.C. (2016) 'How deep is knowledge tracing?', *Proceedings of the 9th International Conference on Educational Data Mining*. Raleigh, NC: International Educational Data Mining Society, pp. 94-101.

Liu, Q. et al. (2019) 'Exploiting cognitive structure for adaptive learning', *Proceedings of the 25th ACM SIGKDD International Conference on Knowledge Discovery and Data Mining*. New York: ACM, pp. 627-635. Available at: https://doi.org/10.1145/3292500.3330922

Piech, C. et al. (2015) 'Deep knowledge tracing', *Advances in Neural Information Processing Systems 28*. Montreal: Curran Associates, pp. 505-513.

Russell, S. and Norvig, P. (2021) *Artificial Intelligence: A Modern Approach*. 4th edn. Harlow: Pearson.

Slade, S. and Prinsloo, P. (2013) 'Learning analytics: ethical issues and dilemmas', *American Behavioral Scientist*, 57(10), pp. 1510-1529. Available at: https://doi.org/10.1177/0002764213479366

Wooldridge, M. (2009) *An Introduction to MultiAgent Systems*. 2nd edn. Chichester: Wiley.

Yeung, C.-K. and Yeung, D.-Y. (2018) 'Addressing two problems in deep knowledge tracing via prediction-consistent regularization', *Proceedings of the Fifth Annual ACM Conference on Learning at Scale*. New York: ACM, Article 5. Available at: https://doi.org/10.1145/3231644.3231647
