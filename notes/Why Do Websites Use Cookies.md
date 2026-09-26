---
title: "Why do websites use cookies?"
type: topic
date: 2026-09-26
publish: true
tags: [why, tech, internet, privacy]
---

## In one sentence

The web's core communication protocol, HTTP, was designed to be stateless, meaning a server forgets a visitor completely the instant one page request finishes, so cookies exist purely to patch over that built-in forgetfulness, small pieces of data a browser stores and resends with every request so a site can recognise the same visitor across multiple pages.

## Explain it

Truth be told, without cookies, a website would have no way to remember that the person clicking "add to cart" on one page is the same person viewing the checkout page moments later, since each page request arrives at the server as a completely fresh, anonymous connection. A cookie solves this by having the server hand the browser a small unique identifier the first time it visits, which the browser then automatically attaches to every subsequent request to that same site, letting the server look up that visitor's shopping cart, login state or preferences using the identifier as a lookup key.

This in turn is why cookies split into genuinely different categories with very different privacy implications. "First-party cookies," set directly by the site a person is actually visiting, generally handle straightforward functionality, keeping someone logged in or remembering a language preference. "Third-party cookies," set by an entirely different domain embedded within the page, an advertising network for instance, are what let that advertiser track a person's browsing activity across many unrelated websites, building a far more detailed profile than any single site alone could construct.

## Example / non-example

- Example: staying logged into an email account while clicking between different pages of the same site relies directly on a first-party cookie quietly confirming, with every single page request, that the browser making the request already has a valid, previously established login session.
- Non-example: seeing an advertisement for a product on one unrelated website shortly after browsing that exact product on a completely different site is not magic or coincidence, it is third-party cookie tracking connecting the two separate visits together behind the scenes.

## Why it matters

So where does this actually matter beyond routine web functionality? Firstly, this exact distinction between first-party and third-party cookies is why major browsers have progressively restricted or blocked third-party cookies by default, since they are the mechanism responsible for most cross-site advertising tracking that many users find genuinely invasive once they understand how it actually works.

In addition, this shift is exactly why the advertising industry has had to develop new tracking approaches, browser fingerprinting and various server-side identity systems among them, attempting to preserve similar tracking capability without relying on the third-party cookies that browsers are actively phasing out, a cat-and-mouse dynamic that connects closely to the behavioural tracking already covered in this vault's [[How Does CAPTCHA Know Youre Human]] note.

In our case, the detail worth carrying forward is that a cookie itself is not inherently invasive, a first-party cookie keeping someone logged in causes no real privacy concern, the concern arises specifically from third-party cookies crossing between sites a person never explicitly chose to be tracked across together.

## Sources

- [Wikipedia, HTTP cookie](https://en.wikipedia.org/wiki/HTTP_cookie) - first-party versus third-party mechanism
- [Mozilla, How cookies work](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies) - technical implementation
- [EFF, Third-party tracking explained](https://www.eff.org/) - privacy implications

## Related

- [[How Does CAPTCHA Know Youre Human]] - the closest sibling note on invisible web tracking mechanisms
- [[What Actually Happens When You Delete a File]] - unrelated, shares this batch
