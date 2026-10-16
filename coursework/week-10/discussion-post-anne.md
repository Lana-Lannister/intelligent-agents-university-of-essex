# Week 10 Discussion Forum - Initial Post (Anne Dayer)

**Author:** Anne Dayer
**Posted:** Tuesday, 22 September 2026, 11:55 AM

Yes. Provenance marking answers a real question, but a narrow one, and is treated as though it settled the rest.

Since 2 August 2026, Article 50 of the AI Act has required generative output to be marked machine-readably as synthetic (European Union, 2024), and Anthropic says future Claude models will carry a watermark at launch (Anthropic, 2026).

Golaszewski et al. (2026) put the distinction sharply: despite the word in its name, C2PA is a mechanism for provenance, not authenticity. Origin is not veracity. The same holds for text. Claude's mark is a version of SynthID-Text (Dathathri et al., 2024), which Anthropic says works poorly on factual passages and is largely absent from code, because exact wording leaves few choices free (Anthropic, 2026).

Such marks are also removable. An open implementation of SynthID-Text lost its watermark in 98.3% of paraphrase runs (Tamim and Khan, 2026), though fragility is the smaller worry.

Even a flawless mark would leave the ethics untouched, because correctness is not by itself a moral property. What carries weight is whether anyone was warranted in putting something forward, and who answers if it turns out wrong. Provenance settles neither.

Consider a synthetic intimate image of a real person. A credential would report only that a model made it, and not who created it, who published it, or that its subject never consented.

So should provenance name the person generating content, and not only the model? It would give the affected person someone to hold responsible. Yet C2PA's own identity specification concedes that an attacker can lift a valid identity assertion and attach it to another asset, falsely attributing illegal content to an innocent person (Kaye and Dixon, 2025). I am not sure which risk I would rather run. Where would you?

## References

Anthropic (2026) *How Claude's text watermarking works*, 14 August. Available at: https://www.anthropic.com/news/claude-text-watermark (Accessed: 19 August 2026).

Dathathri, S. et al. (2024) 'Scalable watermarking for identifying large language model outputs', *Nature*, 634(8035), pp. 818-823. Available at: https://doi.org/10.1038/s41586-024-08025-4

European Union (2024) Regulation (EU) 2024/1689 of the European Parliament and of the Council of 13 June 2024 laying down harmonised rules on artificial intelligence (Artificial Intelligence Act). *OJ L*, 2024/1689, 12 July. Available at: https://eur-lex.europa.eu/eli/reg/2024/1689/oj (Accessed: 19 August 2026).

Golaszewski, E. et al. (2026) *Verifying provenance of digital media: security analysis of C2PA and its implementation*. Maryland Shared Open Access Repository. Available at: https://doi.org/10.13016/m2u1qh-txb8 (Accessed: 19 August 2026).

Kaye, K. and Dixon, P. (2025) *Privacy, identity and trust in C2PA: a technical review and analysis of the C2PA digital media provenance framework*. San Diego, CA: World Privacy Forum. Available at: https://worldprivacyforum.org/posts/privacy-identity-and-trust-in-c2pa/ (Accessed: 19 August 2026).

Tamim, S.R. and Khan, A.L. (2026) 'AI watermark evidence fails forensic readiness: an empirical evaluation', *arXiv [Preprint]*. Available at: https://arxiv.org/abs/2607.16010 (Accessed: 19 August 2026).
