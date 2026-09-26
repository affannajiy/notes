---
title: Cryptography
type: hub
date: 2026-09-26
publish: true
tags: [hub, cryptography, security, mathematics]
---

## In one sentence

Cryptography is the mathematics of making information unreadable to anyone without the right key, and the single most consequential shift in its history was the move from symmetric encryption, where the same key both locks and unlocks a message, to public-key cryptography, where a key that locks a message publicly cannot itself unlock it, a breakthrough that made secure communication between strangers over the open internet possible for the first time.

## What it is

Cryptography transforms readable information, plaintext, into unreadable ciphertext using a mathematical algorithm and a key, and only someone holding the correct key can reverse that transformation and recover the original message, a process this vault's [[What Happens When You Send a WhatsApp Message]] note covers in a specific real-world application.

## Types

Symmetric encryption uses a single shared key for both encrypting and decrypting a message, fast and efficient, but requiring both parties to somehow already share that key securely before communicating, a real logistical problem when the parties have never met. Public-key, or asymmetric, encryption uses two mathematically linked keys, a public key anyone can use to encrypt a message, and a private key, kept secret by its owner, that alone can decrypt it, solving the shared-key problem entirely since the public key can be shared openly without compromising security.

## Terms

A few terms recur across cryptography discussion worth defining plainly. "Hashing," distinct from encryption, transforms data into a fixed-length output that cannot be reversed back into the original input at all, used for verifying data integrity or storing passwords without ever storing the actual password itself. "End-to-end encryption," a specific application of public-key cryptography, ensures only the sender and intended recipient, not any intermediate server, can read a message's content, the exact mechanism behind WhatsApp's message privacy covered elsewhere in this vault.

## History in moments

Cryptography's earliest recorded uses date back thousands of years, simple substitution ciphers used by ancient civilizations to protect military and diplomatic messages. The Enigma machine, used by Nazi Germany during World War Two, and its eventual breaking by Allied codebreakers, Alan Turing prominent among them, at Bletchley Park stands as one of history's most consequential cryptographic events, with some historians crediting the codebreaking effort with meaningfully shortening the war. The 1970s invention of public-key cryptography, credited to Whitfield Diffie and Martin Hellman, and separately to Ron Rivest, Adi Shamir and Leonard Adleman, whose RSA algorithm remains widely used today, solved the shared-key problem and laid the mathematical foundation for secure online communication and commerce as they exist now.

## Malaysian connection

Malaysia's digital banking and e-commerce sectors rely entirely on public-key cryptographic standards for secure transactions, and the country's cybersecurity agency, covered in this vault's broader cybersecurity note, actively promotes cryptographic best practice as part of national digital infrastructure policy.

## What's happening now

Researchers are actively developing "post-quantum cryptography," new algorithms designed to remain secure even against a sufficiently powerful future quantum computer, since some of the mathematical problems current public-key systems rely on being hard to solve could, in principle, become solvable much faster with quantum computing, a threat still theoretical but taken seriously enough to drive active standardisation efforts already underway.

## Sources

- [Wikipedia, Cryptography](https://en.wikipedia.org/wiki/Cryptography) - history and mechanism overview
- [Wikipedia, Public-key cryptography](https://en.wikipedia.org/wiki/Public-key_cryptography) - Diffie-Hellman and RSA background
- [NIST, Post-quantum cryptography standardisation](https://www.nist.gov/) - future-proofing effort

## Related

- [[Cybersecurity]] - the applied field this mathematical foundation supports
- [[Why Do Keyboards Have a Raised Bump on F and J]] - unrelated, shares this batch
