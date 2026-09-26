---
title: "How recommendation algorithms work"
type: topic
date: 2026-09-26
publish: true
tags: [why, data, technology, algorithms]
---

## In one sentence

Most modern recommendation systems combine two complementary approaches, collaborative filtering, which recommends based on what similar users liked, and content-based filtering, which recommends based on the actual characteristics of items you already liked, and the reason streaming and shopping platforms increasingly favour the collaborative approach is that it can surface genuinely surprising recommendations no content-based analysis of an item's own attributes could ever produce.

## Explain it

Truth be told, "the algorithm just tracks what you watch" is an oversimplification that misses the more interesting engineering choice underneath it. Content-based filtering works roughly the way it sounds, if you liked several fast-paced action films, the system recommends other films sharing similar attributes, genre, actors, pacing, a fairly intuitive, explainable approach but one limited by how well those attributes are actually tagged and understood.

Collaborative filtering instead works by comparing your behaviour to other users, if people who liked the same set of films you liked also tended to enjoy a specific documentary you have never seen, the system will recommend that documentary to you, without ever needing to understand or tag what the documentary is actually about at all. This in turn is why collaborative filtering can produce recommendations that seem to come from nowhere, a horror fan getting recommended a romance film because enough other horror fans with otherwise similar taste happened to also enjoy it, a pattern purely content-based filtering, reasoning only from genre and attributes, would likely never surface on its own.

## Example / non-example

- Example: Netflix's recommendation system, covered separately in this vault, blends both approaches, using collaborative signals from millions of viewing patterns alongside content attributes, which is part of why its suggestions can feel eerily specific compared to a simple "more like this" genre-based list.
- Non-example: a basic alphabetical or "most popular this week" list is not a recommendation algorithm in this sense at all, since it makes no attempt to personalise based on either an individual user's behaviour or an item's specific attributes, the two ingredients both filtering approaches actually depend on.

## Why it matters

So where does this actually matter beyond streaming convenience? Firstly, this dual approach is exactly why a new user with little to no viewing or purchase history gets noticeably worse recommendations at first, called the "cold start problem," collaborative filtering has no similar-user pattern to draw on yet, and content-based filtering has little of your own history to build attribute preferences from either, meaning most platforms rely on generic popularity signals until enough personal data accumulates.

In addition, collaborative filtering's reliance on aggregate behaviour across millions of users means recommendation quality genuinely improves with platform scale, a smaller competitor with fewer total users structurally struggles to match a dominant platform's recommendation accuracy, regardless of how sophisticated its underlying algorithm actually is, since the algorithm has less real behavioural data to learn from.

In our case, the detail that reframes this for me is that a genuinely surprising, spot-on recommendation is not really the algorithm understanding your specific taste in any deep sense, it is a statistical pattern borrowed from thousands of other people who happened to share enough of your prior choices to make the comparison useful.

## Sources

- [Wikipedia, Recommender system](https://en.wikipedia.org/wiki/Recommender_system) - collaborative and content-based filtering
- [Netflix Tech Blog, How Netflix's recommendation engine works](https://netflixtechblog.com/) - real-world implementation detail
- [ACM, The cold start problem in recommender systems](https://www.acm.org/) - new user limitation

## Related

- [[Netflix]] - the company most associated with this exact mechanism, already in the vault
- [[Samsung]] - unrelated, shares this batch
