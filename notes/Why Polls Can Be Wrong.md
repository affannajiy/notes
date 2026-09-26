---
title: "Why polls can be wrong"
type: topic
date: 2026-09-26
publish: true
tags: [why, data, statistics, polling]
---

## In one sentence

Polls go wrong less often because of outright bad math and more often because of the harder, messier problem underneath the math, getting a genuinely representative sample of who will actually show up to vote or respond honestly, a challenge that has grown harder, not easier, as traditional methods like landline phone surveys have become less reliable.

## Explain it

Truth be told, a poll's headline margin of error, usually plus or minus three or four percentage points, describes only the statistical uncertainty from sample size, and it says nothing at all about a completely separate source of error, whether the sample itself was actually representative of the group being measured in the first place. This second problem, covered in this vault's broader note on [[Selection Bias]], is usually the real culprit behind a poll's biggest, most embarrassing misses, not random statistical noise.

Modern polling faces a genuinely harder version of this problem than it did decades ago, response rates to phone surveys have fallen sharply as people screen unknown calls, and the shrinking, self-selecting pool of people who do answer may differ systematically from those who do not, in ways pollsters can only partially correct for through statistical weighting, adjusting a sample's demographics to better match the broader population. This in turn is why "who will actually vote" adds a second layer of difficulty specific to election polling, a poll measures stated preference among respondents, but turnout, who among them actually shows up on election day, is a separate, harder-to-predict variable that has caused several high-profile polling misses even when the underlying preference numbers were reasonably accurate.

## Example / non-example

- Example: the 2016 and 2020 US presidential election polls underestimated support for one candidate in several key states, and post-election analysis pointed partly to non-response bias, certain voter groups being systematically less likely to respond to pollsters at all, rather than any simple arithmetic mistake in how the polls were calculated.
- Non-example: a well designed exit poll, surveying voters immediately after they have actually cast a ballot, avoids the turnout prediction problem entirely, since it only surveys people confirmed to have voted, though it can still face its own separate representativeness issues depending on which voters agree to participate.

## Why it matters

So where does this actually matter beyond election-season debate? Firstly, this is exactly why reputable pollsters report a margin of error alongside methodology details, response rate, weighting approach, sample source, rather than a bare percentage, since the number alone cannot convey how much uncertainty comes from sampling error versus deeper representativeness problems the statistics cannot fully correct for.

In addition, polling aggregators, averaging multiple polls together, have become more common specifically because individual polls can each carry their own particular methodological blind spots, and averaging across several different approaches tends to cancel out some, though not all, of any single poll's specific bias.

In our case, the detail worth carrying forward is that a poll being "wrong" rarely means someone made a calculation error, it almost always means the sample quietly failed to represent the group it claimed to measure, a much harder problem to fully solve than the headline margin of error implies.

## Sources

- [Pew Research Center, Why do polls sometimes get it wrong?](https://www.pewresearch.org/) - non-response bias explanation
- [Wikipedia, Opinion poll](https://en.wikipedia.org/wiki/Opinion_poll) - methodology overview
- [FiveThirtyEight, How polling averages work](https://fivethirtyeight.com/) - aggregation approach

## Related

- [[Selection Bias]] - the underlying reasoning trap driving most serious polling errors
- [[Cybersecurity]] - unrelated, shares this batch
