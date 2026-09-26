---
title: "Does more RAM actually make your computer faster?"
type: take
date: 2026-09-26
publish: true
tags: [take, tech, computers, hardware]
---

## My take in one line

More RAM (random access memory, the short-term working memory a computer uses while running programs) only speeds things up once the amount installed is the actual bottleneck, and past the point where everything you run already fits comfortably, adding more RAM does almost nothing, which is why doubling RAM on an already-adequate machine rarely feels like the dramatic upgrade people expect.

## Why this is interesting

Truth be told, I upgraded a laptop's RAM once expecting a big speed jump and noticed almost nothing, which confused me until I actually understood what RAM does versus what a processor or storage drive does, three completely different jobs people often lump together as "computer speed" in general.

## The case for

Firstly, RAM genuinely is the bottleneck in one well documented situation: when total memory demand exceeds what is physically installed, the operating system starts "swapping," writing some data to the much slower storage drive and reading it back as needed, sometimes a hundred times slower than reading from RAM directly. Here, adding RAM removes the swapping entirely and produces a genuinely dramatic speed improvement.

In addition, certain workloads, video editing with large project files, running several memory-hungry applications simultaneously, or working with large datasets, do scale their memory demand directly with the task size, so more RAM directly and predictably helps specifically for these use cases, not just as insurance against running out.

## The case against

On the other hand, once installed RAM comfortably exceeds what a person's actual usage demands, adding more delivers close to zero measurable benefit, since the extra capacity simply sits unused, similar to buying a bigger fuel tank for a car that already never runs low. Benchmark testing from sites like Tom's Hardware and Puget Systems, which regularly test RAM capacity against real-world application performance, consistently shows a flat performance line once capacity crosses the point where the workload's memory demand is already satisfied, with no further gains from adding still more.

Moreover, processor speed and storage drive speed, particularly the difference between an older hard disk drive and a modern solid-state drive, are far more often the actual bottleneck in a typical, non-power-user computer's perceived sluggishness than RAM capacity is, which is why a struggling older laptop upgraded only with more RAM often still feels slow, while the same laptop fitted with a solid-state drive instead frequently feels transformed.

## Where I land

In my opinion, "more RAM equals faster" is true only conditionally, specifically when memory is the actual constraint, and false as a general rule most people apply without checking whether that condition holds for their own usage first. In our case, the laptop upgrade that disappointed me had plenty of RAM already for what I actually did with it day to day, and a storage drive upgrade the following year made a far larger, more obvious difference for a fraction of the RAM upgrade's cost.

(To which the technician who sold me that first RAM upgrade probably knew this, since he is, after all, in the business of selling RAM upgrades.)

## What would change my mind

Evidence that modern everyday software has grown memory-hungry enough that even moderate RAM amounts now routinely bottleneck typical, non-power-user tasks, rather than only specific memory-intensive workloads, would push me to recommend more RAM as a default rather than a conditional fix.

## Sources

- [Puget Systems, RAM capacity benchmark testing](https://www.pugetsystems.com/) - flat performance beyond sufficient capacity
- [Tom's Hardware, How much RAM do you actually need?](https://www.tomshardware.com/) - workload-specific RAM guidance
- [Wikipedia, Memory paging](https://en.wikipedia.org/wiki/Memory_paging) - swapping mechanics explained

## Related

- [[Is Dark Mode Actually Better For Your Eyes]] - a sibling take on this vault's growing tech myth-checking collection, waiting to be written
- [[Why Google Plus Failed]] - unrelated, shares this batch
