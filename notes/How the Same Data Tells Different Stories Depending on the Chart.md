---
title: "How the same data tells different stories depending on the chart"
type: topic
date: 2026-09-26
publish: true
tags: [why, data, statistics, reasoning]
---

## In one sentence

The exact same dataset can be made to look like a dramatic crisis or a non-event purely through chart design choices, axis range, chart type and colour among them, without changing a single underlying number, which is precisely why reading a chart critically requires checking its construction just as carefully as the data it claims to represent.

## Explain it

Truth be told, a chart is never a neutral, purely mechanical translation of numbers into a picture, every design choice behind it, where the axis starts, which chart type gets used, how colours are assigned, shapes the impression a viewer walks away with, often more powerfully than the actual numbers ever could on their own. A line chart with a vertical axis starting at 95 rather than zero can make a genuinely tiny two percent change look like a dramatic, near-vertical spike, a technique covered in more depth in this vault's own [[Data Visualization]] note on truncated axes specifically.

This in turn is why the choice between chart types itself carries real interpretive weight, a pie chart emphasises how parts relate to a whole but genuinely struggles to show a trend over time clearly, while a line chart excels at trends but can visually flatten or exaggerate the apparent size of a change depending entirely on how its axis is scaled. In addition, colour choices carry real persuasive weight too, a map shading one region in alarming red and everywhere else in calm blue draws a viewer's eye and emotional reaction toward that one region regardless of whether the actual underlying numerical difference genuinely justifies that reaction.

## Example / non-example

- Example: a company's revenue chart showing what looks like a dramatic, near-vertical climb might simply reflect a y-axis compressed to only show the range between 98 and 102 percent of the previous year's figure, a scale choice that makes an ordinary two percent change look like explosive growth.
- Non-example: a scatter plot showing genuinely no visible pattern at all between two variables is a case where the chart itself is behaving honestly, since scatter plots are specifically chosen to reveal or rule out a relationship, and an absence of visible pattern there is real, useful information rather than a design trick hiding something.

## Why it matters

So where does this actually matter beyond appreciating good chart design? Firstly, this exact manipulation potential is why data journalism and scientific publishing increasingly emphasise chart transparency, labelling axis starting points clearly and avoiding unnecessary 3D or decorative effects that can distort a reader's actual perception of the underlying numbers.

In addition, this connects directly to the base-rate confusion covered in this vault's [[Why Percentages Can Be Deceptive]] note, since a misleading chart and a misleading percentage often work through the exact same underlying trick, presenting a technically accurate number in a framing designed to produce a stronger emotional reaction than the raw figures alone would justify.

In our case, the detail worth carrying forward is a simple habit worth building, before reacting emotionally to any chart, checking where its axis actually starts and what specific numbers sit behind the visual impression it is creating.

## Sources

- [Edward Tufte, The Visual Display of Quantitative Information](https://www.edwardtufte.com/tufte/books_vdqi) - chart design and honesty principles
- [Wikipedia, Misleading graph](https://en.wikipedia.org/wiki/Misleading_graph) - common distortion techniques
- [FiveThirtyEight, How to read a chart critically](https://fivethirtyeight.com/) - practical reading guide

## Related

- [[Data Visualization]] - the closest sibling hub note this topic builds directly on
- [[Why Percentages Can Be Deceptive]] - the closest sibling note on a related framing trick
