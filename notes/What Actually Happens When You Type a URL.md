---
title: "What actually happens when you type a URL?"
type: topic
date: 2026-09-26
publish: true
tags: [why, internet, networking, tech]
---

## In one sentence

Typing a URL and pressing enter sets off a chain of roughly five steps, translating a name into an address, opening a connection, requesting the page, and rendering what comes back, all of which normally finishes in under a second without the user ever seeing a single step of it.

## Explain it

Truth be told, a web address like https://example.com is not something a computer can use directly, since computers route traffic using numeric IP addresses, not names. So the first step is DNS lookup: the browser asks a Domain Name System server, essentially the Internet's phone book, to translate example.com into an IP address such as 93.184.216.34. This is where "the said domain" becomes a number the network can actually route toward.

Once the browser has an IP address, it opens a TCP connection to the server at that address, a three-step handshake whereby the browser and server exchange short messages confirming both sides are ready to talk. If the address starts with https, an additional TLS handshake follows, whereby the two sides agree on an encryption key so nobody snooping on the connection in between can read the traffic. Only after both handshakes finish does the browser send an HTTP request, a plain text message asking for a specific page, and the server sends back an HTTP response containing the page's HTML, the structural code a browser reads to build what is on screen.

Lastly, the browser parses that HTML, which in turn tells it to fetch more files, images, stylesheets, scripts, and it renders all of it into the page the user actually sees, then keeps redrawing as scripts run and images finish loading.

## Example / non-example

- Example: typing wikipedia.org triggers a DNS lookup that returns an IP address, then a connection, then a request for the homepage's HTML, which references a logo image and a stylesheet that get fetched right after, all before the page finishes appearing.
- Non-example: refreshing a page you already loaded moments ago often skips the DNS lookup and even the full request, since browsers cache both DNS results and page content for a short time, which is why a second load of the same page is usually much faster than the first.

## Why it matters

So where does this actually go wrong, in a way a normal person notices? If DNS fails, the browser shows "this site can't be reached" even though the actual server is fine, because the name simply never resolved to an address. If the TLS handshake fails, browsers show a security warning, which is why an expired certificate, the file a server uses to prove its identity during that handshake, locks users out even when the underlying site works perfectly.

In addition, this is why a slow "first load" does not always mean a slow server: DNS lookups, handshakes and multiple file requests all add up in sequence before the actual content, whereby content delivery networks (services that copy a website's files to servers physically closer to the visitor) exist specifically to cut that latency down, especially the part before the response even starts.

In our case, the next time a page hangs on "connecting..." the delay is very often the DNS lookup or the TLS handshake stalling, not the actual page content, which is a useful thing to know before blaming a slow website for what might be a slow name lookup instead.

## Sources

- [Mozilla, What happens when you type a URL into a browser](https://developer.mozilla.org/en-US/docs/Web/Performance/Guides/How_browsers_work) - full request lifecycle
- [Cloudflare, What is DNS?](https://www.cloudflare.com/learning/dns/what-is-dns/) - DNS lookup explanation
- [Cloudflare, What happens in a TLS handshake?](https://www.cloudflare.com/learning/ssl/what-happens-in-a-tls-handshake/) - handshake steps

## Related

- [[The Internet]] - the network this whole chain of events runs on
- [[Does being busy mean being productive?]] - unrelated, shares this batch
