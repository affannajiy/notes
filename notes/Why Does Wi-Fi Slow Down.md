---
title: "Why does Wi-Fi slow down?"
type: topic
date: 2026-09-26
publish: true
tags: [why, tech, wifi, networking]
---

## In one sentence

Wi-Fi slows down mainly because it is a shared radio channel, so more devices talking at once, physical obstacles like walls, and interference from neighbours' networks or even microwaves all eat into the same limited airtime, as opposed to a wired connection where each device gets its own dedicated cable.

## Explain it

Wi-Fi carries data over radio waves on specific frequency bands, mainly 2.4GHz and 5GHz, with a newer 6GHz band added by the Wi-Fi 6E standard. Truth be told, every device on the same Wi-Fi network at the same frequency is sharing one channel, similar to several people trying to talk in the same room at once: the more talkers, the more each one has to wait their turn or talk over static.

The 2.4GHz band travels further and passes through walls better, but it is crowded, since Bluetooth devices, baby monitors, cordless phones and even microwave ovens operate in the same band and cause real interference. The 5GHz band offers far more channels and less interference but has a shorter range and struggles to pass through walls and floors, which is why a router in another room often shows a full signal bar while the actual speed crawls. This in turn is why moving closer to a router, or switching a device from 2.4GHz to 5GHz, sometimes fixes a slowdown instantly.

## Example / non-example

- Example: a household with fifteen smart devices, a few phones, a laptop and a smart TV all streaming or checking in constantly on the same 2.4GHz band will see real slowdowns during peak hours, even with a fast internet plan, because the bottleneck is the shared radio channel inside the house, not the connection to the ISP outside it.
- Non-example: a single laptop, alone in a room next to the router, on 5GHz, rarely experiences this kind of slowdown, because there is minimal contention for the channel and minimal interference to fight through.

## Why it matters

So where does this go wrong in a way people actually notice? Firstly, distance and obstacles matter more than most people expect: concrete walls, metal appliances and even fish tanks absorb or reflect Wi-Fi signals meaningfully, whereby a router placed in a corner or behind a TV cabinet loses far more range than the same router placed centrally and in the open.

In addition, "more devices" is not just about total device count but about how many are active at once, since a phone doing nothing but checking for notifications uses almost no airtime, while a device actively streaming video or backing up files occupies the shared channel continuously. This is why a household's Wi-Fi can feel fine most of the day and then crawl the moment someone starts a video call while another person streams a movie.

In our case, the fix that made the biggest difference for me was not upgrading the router at all but moving it out of a cabinet into open air on a shelf, which let the same hardware reach every room in the house without the walls and metal shelving swallowing half the signal before it left the room.

## Sources

- [Cisco, How Wi-Fi Works](https://www.cisco.com/c/en/us/products/wireless/what-is-wifi.html) - frequency bands, channel sharing
- [FCC, Wi-Fi frequency bands explained](https://www.fcc.gov/) - 2.4GHz vs 5GHz vs 6GHz tradeoffs
- [Wikipedia, Wi-Fi](https://en.wikipedia.org/wiki/Wi-Fi) - interference sources, standards history

## Related

- [[The Internet]] - the wider network Wi-Fi is just the last stretch of
- [[Why Does Music Give Us Goosebumps]] - unrelated, shares this batch
