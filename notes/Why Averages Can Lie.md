---
title: "Why can an average say almost nothing about anyone in the group?"
type: topic
date: 2026-09-26
publish: true
tags: [why, data, statistics]
---

## In one sentence

An average collapses a whole distribution, meaning the full spread of every value in a group, into one number, so it hides how spread out, skewed or lopsided the group actually is, and three different groups can share the same average while looking nothing alike.

## Explain it

Truth be told, "average" almost always means the mean: add up every value and divide by the count. The trouble is that the mean answers "what if everyone had the same value", not "what does a typical member look like", and those are only the same thing when the data is symmetric and has no extreme values.

To illustrate, take five people earning RM2,000, RM2,200, RM2,500, RM2,800 and RM50,000 a month. The mean income is RM11,900, yet four of the five people earn nowhere near that. The fifth person's RM50,000 pulled the mean far above what a "typical" person in the group actually takes home. This is the same shape as Malaysia's household income data, whereby a small number of very high earners pull the national mean well above the median, the middle value when everyone is lined up in order, which for this made-up group is RM2,500, a much closer read on the typical case.

## Example / non-example

- Example: a class of 30 students has a mean exam mark of 65%. If 25 students scored 70 to 80% and 5 scored under 20%, the mean of 65% looks fine, but it hides a group of students who are badly failing. The mean smooths the two groups into one number that describes neither.
- Non-example: if every student in that class scored between 60 and 70%, the mean of 65% is a fair summary, because there is no spread and no extreme value to distort it. Averages behave when the data behaves.

## Why it matters

So where does this go wrong in real decisions? A company reporting "average employee salary" can include the CEO's pay and make a low-paying employer look generous, which is why job listings and pay audits increasingly ask for the median instead. A city reporting "average commute time" hides the residents stuck with a 90-minute trip while most people only travel 20. And [[Simpson's Paradox]] shows the same trap from another angle, whereby splitting one group into two smaller groups can flip which option looks better, because the mean of a mixed group depends on how it was mixed, not just on the numbers inside it.

In our case, the fix is never to throw the mean away, since it is still useful for totals and budgets, but to ask for the median and the spread (the range from lowest to highest, or how many values sit far from the middle) alongside it before I believe a single number describes a group. Therefore, whenever I see one average reported alone, I treat it as the start of the question, not the answer.

## Sources

- [Wikipedia, Average](https://en.wikipedia.org/wiki/Average) - mean vs median definitions
- [Department of Statistics Malaysia, Household Income Survey](https://www.dosm.gov.my/) - mean vs median household income gap
- [Wikipedia, Skewness](https://en.wikipedia.org/wiki/Skewness) - how extreme values pull the mean away from the median

## Related

- [[Simpson's Paradox]] - the wider family of traps this one belongs to
- [[Speed of Light]] - another number that says less than it seems to until you ask what it is made of
