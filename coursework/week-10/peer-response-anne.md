# Week 10 Discussion Forum - Peer Response (to Anne Dayer)

**Author:** Lana Menezes Fidelis
**In reply to:** Anne Dayer
**Posted:** Thursday, 24 September 2026, 9:38 PM

Hello Anne! I agree that provenance does not equal veracity, and your point about the limitations of watermarking is compelling. But I want to shift the focus from what provenance fails to do, toward what it is actually designed to achieve, and whether other approaches might better address the harms you raise.

First, a technical qualification. The fragility of watermarking that you note is not incidental but structural. A systematic review of AI-generated code provenance techniques finds that passive attribution degrades significantly under common transformations such as refactoring, while token-level watermarking schemes remain fragile under semantic-preserving transformations (Kaur et al., 2026). If provenance is easily stripped or forged, as when C2PA manifests are signed with self-signed certificates claiming any creator identity or platform recompression removes metadata entirely (AI Threat Atlas, 2026), then relying on it for accountability is precarious at best.

More fundamentally, I would suggest the problem is not that provenance fails to establish correctness, but that it is being asked to carry accountability work it was never designed for. The "answerability gap" describes precisely this: a party may be traceable yet never exercised judgment over the decision's evaluative frame, meaning responsibility becomes scapegoating rather than genuine accountability (Walton, 2026). This is why Lara's provider-retention proposal, while reducing false attribution risk, simply relocates trust to an institution without resolving the underlying gap.

A complementary approach lies in responsibility-by-design, which embeds ethical and legal considerations from conception through the entire AI lifecycle (Telefónica Tech, 2023). Platform-level preventive measures, such as YouTube's likeness detection, which uses facial scanning to alert individuals to synthetic misuse of their image and enables removal requests (VARIndia, 2026), operationalise this principle by targeting harm directly rather than relying on post-hoc provenance verification. Combined with regulatory frameworks like the EU AI Act's transparency obligations (European Union, 2024), such measures offer more practical protection than watermarking alone.

## References

AI Threat Atlas (2026) *C2PA manifest forgery and provenance bypass*. Available at: https://github.com/seahop/ai-threat-atlas/blob/main/docs/techniques/c2pa-manifest-forgery.md (Accessed: 24 September 2026).

European Union (2024) Regulation (EU) 2024/1689 of the European Parliament and of the Council of 13 June 2024 laying down harmonised rules on artificial intelligence (Artificial Intelligence Act). *OJ L*, 2024/1689, 12 July. Available at: https://eur-lex.europa.eu/eli/reg/2024/1689/oj (Accessed: 24 September 2026).

Kaur, M. et al. (2026) 'Can we trust the source? A systematic review of watermarking and attribution for AI-generated code', *Information and Software Technology*, 196, article 107684. Available at: https://doi.org/10.1016/j.infsof.2026.107684.

Telefónica Tech (2023) *Responsibility from design applied to AI*, 10 July. Available at: https://telefonicatech.com/en/blog/responsibility-from-design-applied-to-ai (Accessed: 24 September 2026).

VARIndia (2026) 'YouTube expands AI deepfake detection tool to all adult users', *VARIndia*, 18 May. Available at: https://www.varindia.com/news/youtube-expands-ai-deepfake-detection-tool-to-all-adult-users (Accessed: 24 September 2026).

Walton, D. (2026) *The decision no one authored: the answerability gap in generative AI*. Zenodo. Available at: https://doi.org/10.5281/zenodo.20622946 (Accessed: 24 September 2026).
