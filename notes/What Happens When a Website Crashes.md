---
title: "What happens when a website crashes?"
type: topic
date: 2026-09-26
publish: true
tags: [why, tech, internet, infrastructure]
---

## In one sentence

A website "crashing" almost never means the internet itself has broken somewhere, it usually means the specific servers responsible for handling that site's requests have become overwhelmed, misconfigured or genuinely broken, and the browser showing an error page is simply reporting honestly that it never received a proper reply back from wherever that site actually lives.

## Explain it

Truth be told, visiting a website involves a request travelling from a browser to a server somewhere, that server processing the request and sending back the actual page content, and a crash can interrupt that exchange at several different points along the way. Most commonly, a sudden surge in visitors, a popular product launch or breaking news event driving unusually heavy traffic, can overwhelm a server's capacity to process every incoming request fast enough, causing requests to time out or the server to stop responding entirely until either traffic drops or additional capacity gets added.

This in turn is why major websites increasingly rely on cloud infrastructure, covered separately in this vault's [[How Does Cloud Computing Actually Work]] note, specifically because it lets a site automatically add more server capacity during a sudden traffic surge rather than being stuck with a fixed amount of hardware that a busy day could easily overwhelm. In addition, crashes can also stem from software bugs introduced during an update, a database becoming corrupted or unreachable, or even a targeted denial-of-service attack deliberately flooding a server with fake traffic specifically to overwhelm it and take the site offline.

## Example / non-example

- Example: a ticket sales website going down the moment tickets for a hugely popular concert go on sale is a textbook traffic surge crash, thousands of people hitting the same purchase page within seconds far exceeding what the site's normal server capacity was ever built to handle smoothly.
- Non-example: a single person seeing "this site can't be reached" while everyone else browses it normally is usually not a crash at all, that is far more often a local internet connection problem, an incorrect address typed, or a DNS lookup failure on that one person's device rather than any actual server-side outage.

## Why it matters

So where does this actually matter beyond understanding an annoying error message? Firstly, this distinction between local connection problems and genuine server-side outages is exactly why troubleshooting a "broken" website usually starts with checking whether other people are experiencing the same issue, since a truly local problem calls for a completely different fix than an actual server crash affecting everyone.

In addition, businesses that depend heavily on their website staying online invest significantly in load testing, deliberately simulating heavy traffic before a known busy event, and redundancy, running multiple duplicate servers so that one failing does not take the entire site down, precautions that connect directly to the geographic redundancy strategy cloud providers already build into their infrastructure.

In our case, the detail worth carrying forward is that a crash is rarely a single dramatic failure, it is usually capacity simply running out somewhere along the request's path, a distinction that reframes most outages as a scaling problem rather than a mysterious technical mystery.

## Sources

- [Wikipedia, Denial-of-service attack](https://en.wikipedia.org/wiki/Denial-of-service_attack) - deliberate overload mechanism
- [Cloudflare, What is a server outage](https://www.cloudflare.com/learning/) - traffic surge and infrastructure explanation
- [Wikipedia, Load balancing (computing)](https://en.wikipedia.org/wiki/Load_balancing_(computing)) - redundancy and scaling approach

## Related

- [[How Does Cloud Computing Actually Work]] - the closest sibling note this topic depends directly on
- [[Cybersecurity]] - the closest sibling hub note covering deliberate attack causes
