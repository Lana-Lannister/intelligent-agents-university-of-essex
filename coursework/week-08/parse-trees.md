# Week 8 Activity - Constituency-Based Parse Trees

**Author:** Lana Menezes Fidelis

## Grammar used

The trees below use a small context-free phrase structure grammar in the Chomskyan tradition (Chomsky, 1957), notated in Penn Treebank style (Jurafsky and Martin, 2009):

```
S  -> NP VP
NP -> Det N | Det N N | N | NP PP
VP -> V NP | V NP NP | V NP PP
PP -> P NP
```

## 1. "The government raised interest rates."

```
(S
  (NP (Det The) (N government))
  (VP (V raised)
      (NP (N interest) (N rates))))
```

```
S
├── NP
│   ├── Det: The
│   └── N: government
└── VP
    ├── V: raised
    └── NP
        ├── N: interest
        └── N: rates
```

"Interest rates" is a compound nominal: "interest" modifies the head noun "rates" within a single NP, rather than being a separate argument of the verb. The sentence is structurally unambiguous: one subject NP, one transitive VP.

## 2. "The internet gives everyone a voice."

```
(S
  (NP (Det The) (N internet))
  (VP (V gives)
      (NP (N everyone))
      (NP (Det a) (N voice))))
```

```
S
├── NP
│   ├── Det: The
│   └── N: internet
└── VP
    ├── V: gives
    ├── NP
    │   └── N: everyone
    └── NP
        ├── Det: a
        └── N: voice
```

"Gives" is ditransitive, taking two NP arguments directly (the double-object construction: *gives [NP everyone] [NP a voice]*), rather than a single NP plus a prepositional phrase (*gives a voice to everyone*). Both complements attach under VP as siblings, not nested inside each other.

## 3. "The man saw the dog with the telescope."

This sentence is the classic case of **prepositional-phrase attachment ambiguity**: the same surface string is consistent with two distinct constituency structures, because the grammar above allows a PP to attach either inside the object NP (modifying "the dog") or directly under VP (modifying "saw"). Both are shown below.

### Reading A - instrumental: the man used the telescope to see the dog (PP attaches to VP)

```
(S
  (NP (Det The) (N man))
  (VP (V saw)
      (NP (Det the) (N dog))
      (PP (P with) (NP (Det the) (N telescope)))))
```

```
S
├── NP
│   ├── Det: The
│   └── N: man
└── VP
    ├── V: saw
    ├── NP
    │   ├── Det: the
    │   └── N: dog
    └── PP
        ├── P: with
        └── NP
            ├── Det: the
            └── N: telescope
```

### Reading B - possessive/descriptive: the dog that has the telescope (PP attaches to NP)

```
(S
  (NP (Det The) (N man))
  (VP (V saw)
      (NP (Det the) (N dog)
          (PP (P with) (NP (Det the) (N telescope))))))
```

```
S
├── NP
│   ├── Det: The
│   └── N: man
└── VP
    ├── V: saw
    └── NP
        ├── Det: the
        ├── N: dog
        └── PP
            ├── P: with
            └── NP
                ├── Det: the
                └── N: telescope
```

## Discussion: why this ambiguity matters for intelligent agents

A context-free grammar alone cannot resolve which of the two readings above is intended; both are equally well-formed derivations of the same string, so disambiguation requires information the grammar does not encode. Early psycholinguistic accounts proposed structural heuristics such as Minimal Attachment, preferring the parse with fewer nodes (Frazier, 1978), which would favour Reading A here since Reading B embeds the PP one level deeper inside the object NP. However, Hindle and Rooth (1993) showed that human and computational disambiguation is better modelled lexically than structurally: attachment preference correlates with the statistical association between the verb/noun and the preposition (how often "saw... with" co-occurs as an instrumental pairing versus how often "dog with" co-occurs as a descriptive one in a training corpus), not with tree shape alone. This is precisely the kind of problem later addressed by statistical and neural parsers, including transformer-based dependency parsers that score attachment decisions using learned contextual representations rather than hand-written heuristics (Dozat and Manning, 2017).

The relevance to intelligent agents is direct rather than incidental. An agent whose natural-language-understanding component must interpret an instruction such as "identify the dog with the telescope" cannot act correctly without resolving exactly this ambiguity: under Reading A, the agent should use a telescope as a tool to search for any dog; under Reading B, it should search for a dog that happens to be carrying or wearing a telescope. This is the same class of problem raised in the Week 7 discussion on semantic interoperability between agents, communication does not equal understanding (Malik and Malik, 2018), and the symbol-grounding concern that shared syntax does not guarantee shared interpretation (Chaib-draa and Dignum, 2002). A constituency parser only exposes the ambiguity; resolving it in a deployed agent additionally requires either disambiguating context (world knowledge about whether dogs typically carry telescopes), dialogue clarification, or a learned statistical preference of the kind Hindle and Rooth (1993) and modern neural parsers provide.

## References

Chaib-draa, B. and Dignum, F. (2002) 'Trends in agent communication language', *Computational Intelligence*, 18(2), pp. 89-101.

Chomsky, N. (1957) *Syntactic Structures*. The Hague: Mouton.

Dozat, T. and Manning, C.D. (2017) 'Deep biaffine attention for neural dependency parsing', *5th International Conference on Learning Representations (ICLR 2017)*. Toulon, France, 24-26 April.

Frazier, L. (1978) *On Comprehending Sentences: Syntactic Parsing Strategies*. PhD thesis. University of Connecticut.

Hindle, D. and Rooth, M. (1993) 'Structural ambiguity and lexical relations', *Computational Linguistics*, 19(1), pp. 103-120.

Jurafsky, D. and Martin, J.H. (2009) *Speech and Language Processing*. 2nd edn. Upper Saddle River, NJ: Pearson Prentice Hall.

Malik, M. and Malik, S.K. (2018) 'Semantic web as the next generation smart web', *Journal of Emerging Technologies and Innovative Research*, 5(6), pp. 580-594.
