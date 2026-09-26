---
title: "How does facial recognition work?"
type: topic
date: 2026-09-26
publish: true
tags: [why, tech, ai, security]
---

## In one sentence

Facial recognition works by converting a face into a numerical "faceprint," a set of measurements describing the relative distances and proportions between key facial features, and then comparing that faceprint against a stored database using a machine learning model trained on millions of face images, rather than by literally "recognising" a face the way a human intuitively would.

## Explain it

Truth be told, facial recognition sounds almost magical in how it is often marketed, but at a technical level it is closer to an extremely sophisticated pattern-matching exercise than anything resembling human perception. The process typically runs through several distinct stages, first detecting that a face is present at all within an image, then mapping specific landmark points, the distance between the eyes, the shape of the jawline, the position of the nose relative to the mouth, and converting those measurements into a compact numerical representation, the faceprint.

That faceprint is then compared against a database of previously stored faceprints using a similarity score, and if the score exceeds some threshold, the system reports a match. This in turn is why the underlying machine learning model matters so much, it was trained by processing enormous numbers of labelled face images so it could learn which facial measurements reliably distinguish one person from another despite variation in lighting, angle and expression, and a poorly trained model, particularly one trained on a dataset lacking diversity, has historically produced measurably higher error rates for certain demographic groups than others, a well documented and serious limitation of many deployed systems.

## Example / non-example

- Example: unlocking a smartphone with your face works by comparing a live faceprint captured by the phone's camera against a faceprint stored securely on the device itself during setup, a one-to-one comparison rather than a search against a large external database, which is why it can run quickly and entirely on-device without needing internet access.
- Non-example: a security camera system scanning a crowd to identify a specific person of interest performs a one-to-many search, comparing one captured face against a large database of many stored faceprints, a fundamentally more complex and error-prone task than the one-to-one comparison a phone unlock performs, since more comparisons mean more chances for a false match.

## Why it matters

So where does this actually matter beyond the technical mechanism? Firstly, the documented accuracy gap across demographic groups has led several cities and countries to restrict or ban police use of facial recognition specifically, since a wrongful match in a law enforcement context carries far more serious consequences than a missed phone unlock, making the same underlying accuracy limitation matter very differently depending on the application.

In addition, one-to-many searches against large databases carry a structurally higher false positive risk than one-to-one verification, purely as a matter of probability, comparing one face against millions of stored faces gives many more opportunities for a coincidental similarity to trigger an incorrect match than comparing against a single stored faceprint ever would.

In our case, the detail that reframes facial recognition for me is that the system's accuracy is fundamentally a product of its training data's quality and diversity, not some fixed property of the technology itself, which is exactly why the same underlying approach can perform very differently depending on who built it and what data it learned from.

## Sources

- [Wikipedia, Facial recognition system](https://en.wikipedia.org/wiki/Facial_recognition_system) - mechanism overview
- [NIST, Face recognition vendor test](https://www.nist.gov/) - demographic accuracy research
- [MIT Technology Review, The bias in facial recognition explained](https://www.technologyreview.com/) - accessible coverage

## Related

- [[How Does CAPTCHA Know Youre Human]] - the closest sibling AI-verification question in this batch's neighbourhood
- [[Search Engines]] - unrelated, shares this batch
