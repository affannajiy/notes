---
title: "How does cloud computing actually work?"
type: topic
date: 2026-09-26
publish: true
tags: [why, tech, cloud, infrastructure]
---

## In one sentence

"The cloud" is not some abstract, placeless thing, it is simply someone else's physical computers, housed in enormous data centres and rented out to customers over the internet, and cloud computing's real innovation was never the hardware itself but the software layer that lets thousands of customers securely share the same physical machines without ever interfering with each other.

## Explain it

Truth be told, before cloud computing became widespread, a company needing serious computing power had to buy and physically maintain its own servers, a slow, expensive process that made it genuinely hard to scale up quickly during a busy period or scale down cheaply during a quiet one. Cloud computing solves this through a technique called virtualisation, software that lets one powerful physical server be divided into many separate, isolated virtual machines, each behaving like its own independent computer even though several customers' virtual machines might actually be running on the exact same physical hardware underneath.

This in turn is why a cloud provider like Amazon Web Services or Microsoft Azure can offer a customer computing power within minutes rather than weeks, a new virtual machine can be created instantly on already-existing hardware, and billed by the hour or even by the second, letting a business pay only for computing capacity it genuinely uses rather than owning fixed hardware that sits idle much of the time. In addition, cloud providers achieve reliability partly through sheer geographic redundancy, running multiple data centres across different regions so that a failure or disaster affecting one location does not take an entire service offline.

## Example / non-example

- Example: a small startup can launch a new app supporting a sudden viral surge in users by simply requesting additional virtual server capacity from its cloud provider within minutes, rather than needing to have already bought and installed enough physical servers to handle a spike that may never actually happen.
- Non-example: a company's own private, self-managed servers sitting in a room down the hall are not cloud computing at all, regardless of how remotely employees might access them, since the defining feature of cloud computing is specifically renting shared, provider-managed infrastructure rather than owning and maintaining the physical hardware directly.

## Why it matters

So where does this actually matter beyond a technical curiosity about data centres? Firstly, this shift from owned hardware to rented cloud capacity fundamentally reshaped how quickly new technology companies could start operating, letting a small team build a globally accessible service without ever purchasing a single physical server themselves, a barrier that would have been prohibitively expensive only two decades earlier.

In addition, this model is exactly why Amazon, covered separately in this vault's own [[Amazon]] note, generates such disproportionate profit from its cloud division relative to its retail business, since renting out already-built infrastructure carries far higher margins than low-margin physical goods sales.

In our case, the detail worth carrying forward is that cloud computing did not eliminate physical hardware, it simply hid that hardware behind a rental model, real machines, in real buildings, consuming real electricity, remain running underneath every seemingly weightless cloud service.

## Sources

- [Wikipedia, Cloud computing](https://en.wikipedia.org/wiki/Cloud_computing) - virtualisation mechanism
- [AWS, What is cloud computing](https://aws.amazon.com/what-is-cloud-computing/) - provider-level explanation
- [Wikipedia, Virtualization](https://en.wikipedia.org/wiki/Virtualization) - technical foundation

## Related

- [[Amazon]] - the closest sibling company note whose profit depends heavily on this technology
- [[What Happens When a Website Crashes]] - unrelated, shares this batch
