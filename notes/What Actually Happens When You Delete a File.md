---
title: "What actually happens when you delete a file?"
type: topic
date: 2026-09-26
publish: true
tags: [why, tech, computers, data]
---

## In one sentence

Deleting a file on most computers does not actually erase its contents from the storage drive at all, it simply removes the file's entry from the drive's internal index and marks that space as available for something new to be written later, which is exactly why deleted files can often be recovered, sometimes fully, until new data happens to overwrite that same physical space.

## Explain it

Truth be told, a storage drive keeps two genuinely separate things, the actual raw data written somewhere on the physical disk, and a separate index, called a file system, tracking which addresses on the disk correspond to which named file. When a file gets deleted through the ordinary "delete" or "move to trash" action, the operating system typically only updates that index, removing the file's entry and marking its previously used space as free, while the actual underlying data usually remains physically untouched on the drive until something else happens to be written into that same freed-up space.

This in turn is exactly why specialised file recovery software can often successfully restore a "deleted" file, the software scans the drive directly for recognisable data patterns rather than relying on the file system's index, which no longer lists the file at all, and can frequently reconstruct it as long as nothing has yet overwritten that specific physical location. In addition, this is precisely why permanently and securely deleting sensitive data requires a genuinely different tool, one that deliberately overwrites the freed space with random data one or more times, rather than relying on an ordinary delete command that leaves the original data recoverable.

## Example / non-example

- Example: emptying a computer's recycle bin after accidentally deleting an important document does not guarantee the document is truly gone, and running recovery software shortly afterward, before much new data gets written, can often successfully bring it back intact.
- Non-example: a solid-state drive using a feature called TRIM behaves noticeably differently from a traditional hard drive, proactively wiping freed blocks of data in the background for performance reasons, which means deleted files on many modern SSDs are genuinely much harder, sometimes impossible, to recover compared to an older mechanical hard drive.

## Why it matters

So where does this actually matter beyond a curious detail about how storage drives work? Firstly, this is exactly why organisations handling sensitive data, financial records or medical information, follow strict data destruction procedures, physically destroying drives or using certified secure-erase software, rather than trusting an ordinary delete command to actually protect that data from ever being recovered by someone else.

In addition, this gap between "deleted" and "actually erased" has real legal and forensic significance, law enforcement digital forensics teams routinely recover files a suspect believed were permanently gone, precisely because an ordinary delete leaves so much recoverable data behind on the physical drive.

In our case, the detail worth carrying forward is a simple but genuinely useful mental model, treat "delete" on most devices as "hide and mark for eventual reuse" rather than "erase," a distinction worth remembering before selling, donating or discarding any device that once held sensitive personal data.

## Sources

- [Wikipedia, File deletion](https://en.wikipedia.org/wiki/File_deletion) - file system index mechanism
- [Wikipedia, Data erasure](https://en.wikipedia.org/wiki/Data_erasure) - secure deletion methods
- [Wikipedia, Trim (computing)](https://en.wikipedia.org/wiki/Trim_(computing)) - SSD behaviour difference

## Related

- [[Why Do Websites Use Cookies]] - unrelated, shares this batch
- [[Cybersecurity]] - the closest sibling hub note on data protection concerns
