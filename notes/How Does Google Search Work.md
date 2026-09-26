---
title: "How does Google Search work?"
type: topic
date: 2026-09-26
publish: true
tags: [why, tech, internet, google]
---

## In one sentence

Google Search works in three broad stages that all happen well before you type anything, crawling the web to discover pages, indexing what those pages contain into a searchable database, and ranking which indexed pages best answer a given query, and only that last stage happens at the actual moment you hit search.

## Explain it

Truth be told, "Google searches the internet in real time" is the intuitive but wrong mental model most people carry around, and the actual process is closer to a library that has already read and catalogued every book before anyone asks a question. The first stage, crawling, uses automated programs called crawlers or spiders, Googlebot being Google's own, that continuously follow links from page to page across the web, discovering new and updated content, a process running constantly in the background rather than triggered by any specific search.

Once a page is crawled, indexing analyses its content, text, images, structured data, and stores a processed representation of it in Google's index, an enormous database, rather than storing the raw page itself. This indexed database is what a search query actually gets matched against, meaning searching does not scan the live internet at all, it queries this already-built index. The final stage, ranking, happens when a query comes in, running that request against the relevant portion of the index and ordering results using an algorithm considering hundreds of signals, including relevance of content, page authority based partly on how many other reputable pages link to it, and increasingly personalisation and location context.

## Example / non-example

- Example: a newly published article can appear in Google Search results within hours if the site is crawled frequently and the content is deemed relevant and well linked, showing indexing and ranking can move fast, but only after crawling has already discovered the page.
- Non-example: a page that blocks crawlers through a robots.txt file, a standard instruction file websites use to control crawler access, never gets indexed regardless of its content quality, confirming that crawling is a genuine prerequisite stage, not a formality that ranking can bypass.

## Why it matters

So where does this actually change how search results get shaped in practice? Firstly, this three-stage structure is exactly why search engine optimisation, the practice of improving a site's visibility in search results, targets each stage separately, technical fixes to help crawlers access a site properly, content structuring to help indexing understand it, and link building and relevance signals to help ranking favour it.

In addition, this is why search results can differ noticeably between users even for an identical query, ranking increasingly weighs personalisation signals, past search history, location, device, meaning the shared underlying index still produces genuinely different result orderings for different people.

In our case, the detail that changed how I think about search is that "how good is Google's algorithm" is really three separate engineering problems stacked on top of each other, discovering content, understanding it, and then ranking it well, each with its own failure modes and its own decades of ongoing refinement.

## Sources

- [Google Search Central, How Search works](https://developers.google.com/search/docs/fundamentals/how-search-works) - official three-stage explanation
- [Wikipedia, Web crawler](https://en.wikipedia.org/wiki/Web_crawler) - crawling mechanism
- [Wikipedia, PageRank](https://en.wikipedia.org/wiki/PageRank) - original ranking signal background

## Related

- [[Google]] - the company this note explains a core product of, already in the vault
- [[Ships]] - unrelated, shares this batch
