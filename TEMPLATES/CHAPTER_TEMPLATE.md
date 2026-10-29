# Chapter template

Two parts: a short chapter overview kept in the hub (`CHAPTERS/[CHAPTER-ID].md`, created when the chapter is built), and a full `LESSON.md` in each concept repository. The lesson in the concept repo is the single canonical copy.

## Part 1 — Hub chapter overview

```markdown
# [CHAPTER-ID] — [Title]

- Why it comes next:
- Prerequisites and status:
- Concepts and repositories: [Concept ID] → [repo link] (verified URL and commit)
- Effort:
- Versions used: three [x], Vite [x], Node [x], browsers tested [x]
- Risks and limitations:
- Test summary: Research [ ] · Teaching [ ] · Code [ ] · Repository [ ] · Video [ ] (PASS / PARTIAL / FAIL / NOT TESTED)
- Spaced review: next session [ ] · in 3–7 days [ ] · later in [part] [ ] (recommendation)
```

## Part 2 — Concept `LESSON.md` sections

Label every item **MUST UNDERSTAND**, **USEFUL TO RECOGNISE** or **ADVANCED / OPTIONAL**.

1. **Concept ID and title**
2. **Why it matters** — a realistic use case and the problem it solves.
3. **Prerequisites** — exact prior concepts, with links. One recall question to activate prior knowledge.
4. **Learning outcomes** — measurable verbs (build, explain, predict, diagnose).
5. **Mental model** — plain-language explanation; diagram with a text alternative; analogy and where it breaks.
6. **Vocabulary** — new terms with plain-English definitions (also added to the hub GLOSSARY.md).
7. **How it works** — step by step, with diagrams or tables.
8. **Smallest working example** — complete runnable code; every block names its file.
9. **Line-by-line walkthrough** — purpose, inputs, outputs, side effects, why the line exists.
10. **Expected result** — what success looks or sounds like.
11. **Experiment lab** — change one variable at a time; predict first, then run.
12. **Guided exercise** — partially completed code with hints (faded support).
13. **Independent challenge** — an original variation tied to an explainer-video use case.
14. **Solutions and reasoning summary** — full solution, why it works, recovery hints shown before the full answer.
15. **Common mistakes and debugging** — symptom → cause → check → fix.
16. **Performance, accessibility, licensing or safety notes** — when relevant.
17. **Quick reference.**
18. **Retrieval quiz** — varied recall questions; answers in a separate section.
19. **Mastery gate** — observable criteria; remediation if unmet.
20. **Spaced review and transfer task** — next session, 3–7 days, later part (recommendation, not a law).
21. **Sources and version notes** — inline citations collected; version-specific claims marked.
22. **Change history and test status.**

## Content rules

- At most three new core ideas; never a new maths idea, a new API and a new tool together in a first example.
- Complete code only: no ellipses, no pseudo-code presented as runnable, no missing imports or assets.
- Distinguish verified fact, recommendation, teaching analogy and unresolved uncertainty.
