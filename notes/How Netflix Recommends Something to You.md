---
title: "How Netflix recommends something to you"
type: topic
date: 2026-09-26
publish: true
tags: [why, data, technology, netflix]
---

## In one sentence

Netflix's recommendation system combines collaborative filtering, comparing your viewing patterns against millions of other users, with detailed content tagging, and its most distinctive technique is generating personalised artwork for the same title, showing different thumbnail images to different users based on which visual cues, an actor, a mood, an action scene, are most likely to make that specific person click.

## Explain it

Truth be told, "Netflix knows what I like" undersells the specific engineering choices behind that impression, since the system is really running several distinct techniques at once, covered generally in this vault's [[How Recommendation Algorithms Work]] note. Netflix's algorithm blends collaborative filtering, comparing your viewing history against other users with broadly similar taste, with detailed content-based tagging, where human taggers and automated systems assign shows and films thousands of granular descriptive attributes, not just broad genres, but tone, pacing, character types and setting details far more specific than a typical genre label would capture.

What makes Netflix's approach genuinely distinctive is what it does with that combined data beyond simply choosing what to recommend, it also personalises how a recommended title gets presented. This in turn is why the same film can appear with a completely different thumbnail image for two different users, Netflix tests which visual elements, a specific actor's face, a romantic versus an action-oriented scene, correlate with higher click-through for viewers with your particular viewing history, then serves whichever version its models predict is most likely to actually get you to press play.

## Example / non-example

- Example: a user who watches mostly romantic comedies might see a specific film's thumbnail featuring its lead actors in a warm, intimate scene, while a user who watches mostly action films might see the exact same title represented by a completely different, more intense-looking image, both accurate representations of the same film aimed at different predicted preferences.
- Non-example: a basic "trending now" or "top ten" list uses aggregate popularity data rather than any individual personalisation, showing Netflix's interface deliberately mixes fully personalised recommendation rows with non-personalised, popularity-driven ones for different purposes within the same homepage.

## Why it matters

So where does this actually matter beyond streaming trivia? Firstly, this artwork personalisation technique reveals that recommendation systems increasingly optimise not just for "what will this person enjoy" but specifically for "what will get this person to click," a subtly different, more behaviourally targeted goal that has drawn some criticism for prioritising engagement metrics over genuine content matching.

In addition, Netflix has publicly stated its recommendation system, including this thumbnail personalisation, measurably reduces subscriber cancellation by helping users find something to watch faster, directly tying recommendation quality to retention, a genuine business incentive explaining why the company continues investing so heavily in this specific area of its product.

In our case, the detail that changed how I see this system is that two people watching the exact same show may never see the exact same interface at all, the personalisation runs deeper than which titles are suggested, it extends into how those very same titles are visually presented to different individuals.

## Sources

- [Netflix Tech Blog, Selecting the best artwork for videos through A/B testing](https://netflixtechblog.com/) - thumbnail personalisation detail
- [Wikipedia, Netflix recommendation algorithm](https://en.wikipedia.org/wiki/Recommender_system#Netflix) - general system overview
- [Wired, How Netflix's algorithm actually works](https://www.wired.com/) - collaborative and content-based blend

## Related

- [[How Recommendation Algorithms Work]] - the general mechanism this specific implementation builds on
- [[Cryptography]] - unrelated, shares this batch
