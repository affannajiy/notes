---
title: "Selection bias"
type: topic
date: 2026-09-26
publish: true
tags: [why, data, statistics, reasoning]
---

## In one sentence

Selection bias happens when the way a sample gets chosen systematically favours certain outcomes over others, producing a conclusion that reflects the sampling method rather than reality, and it differs from the closely related [[Survivorship Bias|survivorship bias]] mainly in scope, selection bias covers any biased sampling process, of which only surviving-versus-failing is one specific version.

## Explain it

Truth be told, selection bias is easy to describe abstractly and surprisingly easy to miss in practice, since the bias lives entirely in how a sample was gathered, a detail that is often invisible in the final reported numbers themselves. A classic historical example comes from a 1936 US presidential election poll conducted by Literary Digest, which surveyed millions of people using telephone directories and car registration lists, and confidently predicted the wrong winner, since in 1936, telephone and car ownership skewed heavily toward wealthier households, meaning the poll's entire sample leaned toward one political demographic before a single response was even collected.

That example captures the core mechanism, the sample was not randomly drawn from the full population, it was drawn from a subgroup selected by a method, owning a phone or car, that happened to correlate with the exact variable being measured, political preference. This in turn is why selection bias can produce a confidently wrong conclusion even with an enormous sample size, size does not fix a sampling method that is systematically skewed from the start, a large biased sample is still just a large biased sample.

## Example / non-example

- Example: a fitness app surveying its own active users about exercise habits will systematically overrepresent people who exercise regularly, since people who rarely exercise are less likely to be using a fitness app at all, producing a distorted picture of the general population's habits from a sample that was never representative to begin with.
- Non-example: a properly randomised phone survey drawing numbers from the full range of a country's phone number system, rather than from an existing customer list, avoids this specific bias, since every person with a phone has roughly equal chance of selection regardless of any trait correlated with the survey's actual topic.

## Why it matters

So where does this actually matter beyond a famous polling failure? Firstly, online reviews suffer from a milder but genuinely comparable version of this same problem, people with strongly positive or strongly negative experiences are far more motivated to leave a review than people with an unremarkable, merely satisfactory one, meaning review averages skew toward the extremes of actual customer experience rather than reflecting the typical case.

In addition, medical and social research specifically designs around this risk through random sampling and randomised control group assignment, precisely because any non-random method of choosing who gets studied risks introducing exactly this kind of systematic distortion into the resulting conclusions, however careful the analysis afterward.

In our case, the detail worth carrying forward is a simple question, whenever encountering a survey or study result, asking how the sample was actually gathered before trusting the conclusion, since the sampling method, not the sample size, is usually where this kind of bias actually lives.

## Sources

- [Wikipedia, Selection bias](https://en.wikipedia.org/wiki/Selection_bias) - mechanism and famous examples
- [Wikipedia, 1936 Literary Digest poll](https://en.wikipedia.org/wiki/The_Literary_Digest#Presidential_poll) - historical polling failure
- [Pew Research Center, Understanding sampling bias in surveys](https://www.pewresearch.org/) - methodology background

## Related

- [[Survivorship Bias]] - the closely related, narrower version of this same reasoning trap
- [[Satellites]] - unrelated, shares this batch
