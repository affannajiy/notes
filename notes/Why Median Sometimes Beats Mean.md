---
title: "Why median sometimes beats mean"
type: topic
date: 2026-09-26
publish: true
tags: [why, data, statistics, reasoning]
---

## In one sentence

The mean, the arithmetic average, gets pulled heavily toward extreme values in a dataset, while the median, the middle value once everything is sorted, ignores exactly how extreme the highest and lowest values are, which is why the median gives a more representative picture of a "typical" case whenever a dataset contains outliers, income being the textbook example.

## Explain it

Truth be told, "just average it" is often treated as the safe, neutral way to summarise a set of numbers, but the mean's actual mathematical behaviour makes it surprisingly sensitive to a small number of unusual values. The mean is calculated by summing every value and dividing by how many there are, meaning one single, extremely large or small number can shift the entire average substantially, even if every other value in the dataset sits close together.

The median instead sorts every value and picks the one sitting exactly in the middle, or averages the two middle values if there is an even count, a calculation that does not care how far the highest or lowest value sits from the rest, only where it ranks in order. This in turn is why household income is almost always reported as a median rather than a mean in serious statistical reporting, a small number of extremely wealthy households can pull a country's mean income up substantially, painting a picture of prosperity that most actual households, sitting well below that inflated average, would not recognise as representative of their own situation.

## Example / non-example

- Example: a company with nine employees earning \$50,000 each and one founder earning \$5 million has a mean salary above \$545,000, wildly unrepresentative of what any typical employee actually earns, while the median, \$50,000, accurately reflects the typical employee's pay.
- Non-example: a dataset with no significant outliers, exam scores clustered fairly evenly between 60 and 90 for instance, produces a mean and median that sit close together, since there is no extreme value present to pull the mean away from the data's actual centre, showing the two measures only diverge meaningfully once real outliers exist.

## Why it matters

So where does this actually matter beyond a statistics lesson? Firstly, this is exactly why house price reporting, salary surveys and wealth statistics typically favour median figures specifically, since these datasets reliably contain a small number of extreme high values, mansions, top executive pay, extreme wealth, that would otherwise distort a mean-based summary into something misleading for anyone trying to gauge a typical case.

In addition, recognising which measure a headline statistic actually uses matters for reading news critically, a report using "average" without specifying mean or median can obscure whether a described trend reflects most people's actual experience or is being driven upward by a small number of extreme cases sitting far from everyone else.

In our case, the detail worth carrying forward is a simple habit, whenever a dataset plausibly contains a small number of very large or very small values, checking whether a reported figure is a mean or a median before trusting it as representative of a typical case.

## Sources

- [Wikipedia, Median](https://en.wikipedia.org/wiki/Median) - calculation and outlier resistance
- [US Census Bureau, Why median household income, not mean](https://www.census.gov/) - practical reporting rationale
- [Khan Academy, Mean, median and mode explained](https://www.khanacademy.org/) - accessible comparison

## Related

- [[Why Averages Can Lie]] - the closest sibling data reasoning note already in the vault
- [[Electric Vehicles]] - unrelated, shares this batch
