# Week 11 Discussion Forum - Summary Post

**Author:** Lana Menezes Fidelis
**Posted:** Thursday, 1 October 2026, 5:42 PM

Peer discussion has reinforced my view that the ethical problems of generative deep learning are not incidental flaws but consequences of how these systems are built, and that this limits what technical fixes can achieve.

Neural networks induce behaviour from data rather than following specified rules, and deep architectures can fit even randomly labelled examples (Zhang et al., 2021). Bias and memorisation are therefore expected outcomes of optimisation, not defects that can be patched afterwards.

Anne's reference to Carlini et al. (2023) illustrates this: training images were extracted from state-of-the-art diffusion models, most often those heavily duplicated in the training set, and neither deduplication nor differentially private training offered an acceptable privacy-utility trade-off. This favours upstream curation over output filtering alone. Yet upstream control assumes consent and provenance can be verified, which Longpre et al. (2024) show current data infrastructure cannot guarantee; datasheets (Gebru et al., 2021) improve transparency but do not, by themselves, confer legitimacy.

Aldana's question of environmental versus economic trade-offs exposes a further gap. The energy cost of large models is substantial, yet estimates vary with hardware, grid intensity and accounting boundaries (Strubell, Ganesh and McCallum, 2019; Luccioni, Viguier and Ligozat, 2023), and the EU AI Act requires documentation rather than limits (European Union, 2024). Disclosure without thresholds risks becoming compliance theatre.

These weaknesses grow more serious as deep learning shifts from generating content to driving decisions. In smart manufacturing and algorithmic finance, learned models increasingly act through cyber-physical systems and autonomous agents (Lu, 2017), where a biased or erroneous output becomes an action rather than a suggestion.

I therefore maintain that governance must assign each harm a lifecycle stage, an accountable actor and a measurable control, treated as non-functional requirements from data collection onward (Radanliev et al., 2024), while recognising that some risks may prove irreducible.

## References

Carlini, N. et al. (2023) 'Extracting training data from diffusion models', *Proceedings of the 32nd USENIX Security Symposium*. Berkeley, CA: USENIX Association, pp. 5253-5270.

European Union (2024) Regulation (EU) 2024/1689 laying down harmonised rules on artificial intelligence (Artificial Intelligence Act). *OJ L*, 2024/1689, 12 July. Available at: https://eur-lex.europa.eu/eli/reg/2024/1689/oj (Accessed: 1 October 2026).

Gebru, T. et al. (2021) 'Datasheets for datasets', *Communications of the ACM*, 64(12), pp. 86-92. Available at: https://doi.org/10.1145/3458723

Longpre, S. et al. (2024) 'Position: data authenticity, consent, and provenance for AI are all broken: what will it take to fix them?', *Proceedings of the 41st International Conference on Machine Learning*, 235, pp. 32711-32725.

Lu, Y. (2017) 'Industry 4.0: a survey on technologies, applications and open research issues', *Journal of Industrial Information Integration*, 6, pp. 1-10. Available at: https://doi.org/10.1016/j.jii.2017.04.005

Luccioni, A.S., Viguier, S. and Ligozat, A.-L. (2023) 'Estimating the carbon footprint of BLOOM, a 176B parameter language model', *Journal of Machine Learning Research*, 24(253), pp. 1-15.

Radanliev, P., Santos, O., Brandon-Jones, A. and Joinson, A. (2024) 'Ethics and responsible AI deployment', *Frontiers in Artificial Intelligence*, 7, 1377011. Available at: https://doi.org/10.3389/frai.2024.1377011

Strubell, E., Ganesh, A. and McCallum, A. (2019) 'Energy and policy considerations for deep learning in NLP', *Proceedings of the 57th Annual Meeting of the Association for Computational Linguistics*. Florence: ACL, pp. 3645-3650. Available at: https://doi.org/10.18653/v1/P19-1355

Zhang, C., Bengio, S., Hardt, M., Recht, B. and Vinyals, O. (2021) 'Understanding deep learning (still) requires rethinking generalization', *Communications of the ACM*, 64(3), pp. 107-115. Available at: https://doi.org/10.1145/3446776
