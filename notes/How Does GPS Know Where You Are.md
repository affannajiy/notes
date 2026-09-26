---
title: "How does GPS know where you are?"
type: topic
date: 2026-09-26
publish: true
tags: [why, tech, gps, satellites]
---

## In one sentence

A GPS receiver works out its location by timing how long radio signals take to arrive from at least four satellites it can see, and since it knows exactly where each satellite is and the signal travels at the speed of light, that tiny difference in travel time from each one lets the receiver calculate its own position through simple geometry.

## Explain it

The Global Positioning System, run by the US Department of Defense and made publicly available from 1995, consists of a constellation of at least 24 satellites orbiting roughly 20,200 km above Earth, positioned so that any point on the ground can usually see between four and twelve of them at once. Truth be told, the receiver in a phone does not send anything to the satellites at all, it only listens, which is why GPS works even with no phone signal or data connection.

Each satellite constantly broadcasts its own precise position and the exact time the signal was sent, using an atomic clock accurate to within nanoseconds. The receiver compares that sent time to the time it actually received the signal, and since radio waves travel at the speed of light, roughly 300,000 km per second, that time difference tells the receiver exactly how far away that one satellite is. This process is called trilateration, meaning the receiver measures distance, not angle, from at least three points to narrow down its location, and a fourth satellite is needed in practice to also correct for tiny errors in the receiver's own less accurate clock.

## Example / non-example

- Example: a phone showing "searching for GPS" indoors or in a tunnel is failing because concrete and metal block the radio signals from reaching enough satellites, not because GPS itself is broken, which is why the same phone locks on again within seconds of stepping back outside.
- Non-example: Wi-Fi and mobile network location, which some apps use as a faster stand-in for GPS, work completely differently, by matching known Wi-Fi router or cell tower positions rather than timing satellite signals, and are generally far less precise, sometimes off by hundreds of metres, than genuine satellite-based GPS.

## Why it matters

So why does GPS accuracy vary so much between a phone in an open field and one in a city? Tall buildings cause a problem called multipath, whereby a signal bounces off a building before reaching the receiver, making the travel time look longer than it really was and throwing the calculated distance off, which is the main reason GPS in dense cities can be off by tens of metres when it would be accurate to a few metres in the open.

In addition, this is why some devices now use GPS alongside other satellite systems, Russia's GLONASS, the EU's Galileo and China's BeiDou, whereby combining all four constellations gives a receiver far more satellites to choose from at any moment, cutting the error further and speeding up how quickly a device locks onto a position after being turned on.

In our case, the next time a navigation app shows the little blue dot drifting slightly while stationary, that drift is the receiver constantly recalculating from slightly different sets of visible satellites, each with its own small timing error, not the app itself losing track of where I am.

## Sources

- [GPS.gov, GPS: The Global Positioning System](https://www.gps.gov/systems/gps/) - constellation size, orbit altitude, official US government explanation
- [NASA, How Does GPS Work?](https://www.nasa.gov/) - trilateration, atomic clocks
- [Wikipedia, Multipath propagation](https://en.wikipedia.org/wiki/Multipath_propagation) - urban signal bounce error

## Related

- [[The Internet]] - a different kind of network, same broad "how does the tech behind this actually work" spirit
- [[How does QR code error correction work?]] - shares this batch
