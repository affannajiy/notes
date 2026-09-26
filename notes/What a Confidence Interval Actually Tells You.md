---
title: "What a confidence interval actually tells you"
type: topic
date: 2026-09-26
publish: true
tags: [why, data, statistics, reasoning]
---

## In one sentence

A "95 percent confidence interval" does not mean there is a 95 percent chance the true value falls within that specific range, it actually means that if the same study were repeated many times, roughly 95 percent of the intervals calculated across those repeated studies would contain the true value, a genuinely different and much more technical claim than the everyday interpretation most people assume.

## Explain it

Truth be told, a confidence interval exists because a single survey or experiment can only ever estimate a true underlying value, a population's average height, an election's true vote share, rather than measure it with total certainty, and the interval expresses how much uncertainty surrounds that particular estimate. Statisticians calculate the interval using the observed data's spread and sample size, a larger, less variable sample produces a narrower, more precise interval, while a smaller or more variable sample produces a wider, less precise one.

This in turn is exactly why the correct technical interpretation feels so counterintuitive, the 95 percent refers to the reliability of the method used to construct the interval across many hypothetical repeated studies, not to the probability that this one specific calculated interval happens to contain the true value, which from a strict frequentist statistical standpoint either definitely does or definitely does not, with no probability genuinely attached to that single instance at all. In addition, this exact same underlying uncertainty is precisely what the "margin of error" reported alongside political polls represents, covered from a related angle in this vault's own [[Why Polls Can Be Wrong]] note, a number that is itself simply a confidence interval expressed in more familiar, everyday language.

## Example / non-example

- Example: a poll reporting a candidate's support at 52 percent with a 95 percent confidence interval of plus or minus 3 percentage points is genuinely consistent with the candidate's true support being anywhere between 49 and 55 percent, a real range of plausible values rather than the single precise 52 percent figure the headline number alone might misleadingly suggest.
- Non-example: two overlapping confidence intervals for two different groups does not automatically mean there is no real difference between them, and conversely two intervals that do not overlap at all is not automatically definitive proof of a real difference either, since correctly comparing two intervals with genuine statistical rigor requires a somewhat more careful calculation than casual eyeballing.

## Why it matters

So where does this actually matter beyond a technical statistics distinction? Firstly, this exact confusion is why so much everyday reporting on scientific studies overstates certainty, a headline claiming a drug "works" often glosses over a confidence interval wide enough to include values close to no effect at all, a genuinely different picture than the confident headline alone conveys.

In addition, this connects directly to the statistical significance confusion already covered in this vault's [[What Statistically Significant Actually Means]] note, since a confidence interval and a significance test are calculated from largely the same underlying uncertainty, and a interval that includes zero, no effect, is functionally equivalent to a result failing to reach statistical significance.

In our case, the detail worth carrying forward is that a confidence interval is best read as an honest admission of uncertainty rather than a precise, promise-like guarantee, and treating its stated range as a genuinely plausible spread of outcomes rather than fixating on the single reported central number is usually the more accurate way to interpret it.

## Sources

- [Wikipedia, Confidence interval](https://en.wikipedia.org/wiki/Confidence_interval) - technical definition and common misinterpretation
- [American Statistical Association, Statement on p-values](https://www.amstat.org/) - related statistical interpretation guidance
- [FiveThirtyEight, Understanding margin of error](https://fivethirtyeight.com/) - polling application

## Related

- [[What Statistically Significant Actually Means]] - the closest sibling note on the same underlying statistical uncertainty
- [[How a Normal Distribution Works]] - unrelated, shares this batch
