---
title: "How does QR code error correction work?"
type: topic
date: 2026-09-26
publish: true
tags: [why, tech, qr-codes]
---

## In one sentence

A QR code can still scan correctly even when up to 30% of it is smudged, torn or covered with a logo because the code deliberately stores extra, redundant data alongside the real content, using a math technique that lets a scanner reconstruct the missing or damaged parts instead of just failing.

## Explain it

QR codes, invented in 1994 by Denso Wave, a Japanese company, for tracking car parts on factory lines, use a method called Reed-Solomon error correction, the same family of math used on CDs and DVDs to survive scratches. Truth be told, this is not magic, it works because the code stores the same information more than once in a mathematically clever, compressed way, rather than as a simple duplicate copy.

When a QR code is generated, the data gets split into blocks, and the encoder calculates extra "check" values from that data using polynomial mathematics, meaning equations built from the data treated as coefficients, then stores those check values alongside the original data. If part of the code becomes unreadable, the scanner uses the surviving data plus the check values to solve for the missing part, the same way a sudoku puzzle can be solved from enough surrounding numbers even with several boxes blanked out.

QR codes offer four levels of this protection, and a code's creator picks the level when generating it: Level L can recover from about 7% damage, Level M about 15%, Level Q about 25%, and Level H about 30%. This is why some QR codes can have a company logo placed right in the middle and still scan fine, since the logo just replaces the portion of data the error correction was already built to reconstruct.

## Example / non-example

- Example: a QR code printed on a poster left in the sun that has faded or torn at one corner will often still scan, because the error correction level chosen was high enough to reconstruct that corner's data from the rest of the code.
- Non-example: a barcode, the older single-line kind used at supermarket checkouts, generally has no equivalent redundancy built in, which is why a torn or smudged barcode usually fails to scan entirely rather than degrading gracefully like a QR code does.

## Why it matters

So why does this matter beyond torn posters? Higher error correction levels take up more space in the same QR code, since the extra check data has to live somewhere, which is a real tradeoff a designer makes: Level H survives the most damage but forces a bigger, denser code for the same amount of actual content, while Level L packs in more real data but tolerates far less damage before it fails to scan.

In addition, this is why malicious QR codes are hard to spot visually, whereby a sticker over part of a legitimate code, small enough to stay within its error correction margin, can redirect a scan to a different link while the code still looks intact, a real scam documented at parking meters and payment terminals.

In our case, whenever I generate a QR code for something that will get handled, printed small or displayed for a while, I pick a higher error correction level on purpose, since the extra size costs almost nothing and buys real resilience against exactly the kind of wear a printed code goes through.

## Sources

- [Wikipedia, QR code](https://en.wikipedia.org/wiki/QR_code) - history, Denso Wave, error correction levels
- [Wikipedia, Reed-Solomon error correction](https://en.wikipedia.org/wiki/Reed%E2%80%93Solomon_error_correction) - the underlying math
- [FTC, Scammers hide harmful links in QR codes](https://consumer.ftc.gov/consumer-alerts/) - sticker-over-code scam method

## Related

- [[How does GPS know where you are?]] - shares this batch
- [[Why are manhole covers round?]] - shares this batch
