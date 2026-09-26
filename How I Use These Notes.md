---
title: How I Use These Notes
type: routine
publish: false
tags: [routine]
---

A hub for general knowledge I read and want to keep. No schedule. I write a note when something is worth one, and each note is small enough to pick up and read in 2 to 3 minutes.

```
Hub      "What do I need to know to talk about this?"  type: hub
Company  "How does this company work?"                 type: company
Take     "What's my take on this?"                     type: take
Why      "Why does this happen / exist?"               type: topic
Case     "What happened, and why?"                     type: case
Food     "What's interesting about this food?"         type: food
```

- Hub: one subject (motorcycles, football, whatever), enough to hold a conversation. Types, terms, big names, what is happening now. Links out to the notes it spawns.
- Company: what it does, how it makes money, competitors, edge, recent news, what surprised me. Learning note, not a report.
- Take: one claim people disagree on. Steelman both sides, say where I land, say what would change my mind.
- Why: one genuine "why" question about the world, answered in my own words.
- Case: one real event, failure, success or decision. Analysis, not retelling.
- Food: one dish, ingredient or cuisine and the story behind it. Not a recipe.

New note: copy `templates/note.md` into `notes/`, name the file after the subject, fill in `title:`, `type:` and `date:`, then pick the middle sections from the menu in its comment. Bite-sized is the rule for all of them: answer in the first line, one idea per section, 400 to 600 words. See "Writing notes" in `README.md`.

Every note gets `[[links]]` in Related. That is what makes the graph useful.

## Recall, now and then

No new files. No summary.

1. Open the global graph on the site (or locally with `cd site && npm run serve`) and look at the newest nodes. Only published notes show up there.
2. Before opening a note, try to recall what it said and how it connects to its neighbours.
3. Only open it if recall fails.
4. If a real connection between two notes is not already a `[[link]]`, add it.

A written summary would just repeat what the graph and links already show. Pulling it out of my head is the part that makes it stick.
