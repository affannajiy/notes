---
title: "Why can a treatment win every group and still lose overall?"
type: topic
date: 2026-09-26
publish: true
tags: [why, data, statistics]
---

## In one sentence

Because the groups are not the same size, so when one option gets handed the hard cases more often, its overall average drops even though it beats the other option inside every single group, and that trap is called Simpson's paradox.

## The kidney stone study

Simpson's paradox is defined as a trend that shows up in every group of the data but flips when the groups are added together. The cleanest example I found is a 1986 study in the British Medical Journal by C. R. Charig and three colleagues, comparing two treatments for kidney stones.

| | Treatment A | Treatment B |
| :--- | :--- | :--- |
| Small stones | 93% (81 of 87) | 87% (234 of 270) |
| Large stones | 73% (192 of 263) | 69% (55 of 80) |
| All patients | 78% (273 of 350) | 83% (289 of 350) |

A wins for small stones and A wins for large stones, yet B wins overall. Honestly, the first time I read that table I checked the maths twice.

## Why it flips

So where does B's win come from? Look at who each treatment got. Doctors gave A, the more invasive surgery, mostly to large stones, which are harder to treat, whereby 263 of its 350 patients were the difficult cases. B got mostly small, easy stones, 270 of its 350. In other words, B's overall 83% is mostly the success rate of easy cases, and A's 78% is mostly the success rate of hard ones.

The hidden factor here, stone size, is called a confounder: something that affects both which treatment you get and how well it goes. To illustrate, it is like comparing two teachers by pass rate when one of them was given the weakest class. The raw number says more about the class than the teacher.

## The Berkeley admissions case

In 1973 the University of California, Berkeley admitted 44% of its 8,442 male applicants and only 35% of its 4,321 female applicants. That looks like clear bias. However, in 1975 the statisticians P. J. Bickel, E. A. Hammel and J. W. O'Connell broke it down by department and found a small but significant bias in favour of women. The women had mostly applied to crowded departments like English, which rejected most people, while the men had applied to departments like engineering, which admitted more.

Edward H. Simpson described the effect in a 1951 paper, and Colin R. Blyth gave it his name in 1972. (Simpson himself was not the first to notice it, which is a paradox of its own.)

## Why it matters

In our case, the same trap sits in any league table. Imagine comparing CGPA across two faculties at UTP. If one faculty takes in more students who struggle in first year, its average can look worse even if every cohort inside it does better than the other faculty's. Therefore, before I believe an overall average, I ask one question first: were the groups mixed the same way on both sides? If not, split the data and look again.

## Sources

- [Wikipedia, Simpson's paradox](https://en.wikipedia.org/wiki/Simpson%27s_paradox) - kidney stone figures, Berkeley figures, Simpson 1951, Blyth 1972
- [Charig et al, BMJ 1986](https://www.bmj.com/content/292/6524/879) - the kidney stone study
- [Bickel, Hammel and O'Connell, Science 1975](https://www.science.org/doi/10.1126/science.187.4175.398) - the Berkeley admissions analysis

## Related

- [[Speed of Light]] - another number that says less than it seems to until you ask what it is made of
- [[Netflix After the Pandemic]] - subscriber totals are averages over very different markets
- [[Why averages can lie]] - the wider family of traps this one belongs to
