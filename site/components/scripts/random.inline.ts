import type { ContentDetails } from "../../quartz/plugins/emitters/contentIndex"
import { FullSlug, getFullSlug, resolveRelative, simplifySlug } from "../../quartz/util/path"

// `fetchData` is a global set by renderPage: a promise for contentIndex.json.
declare const fetchData: Promise<Record<FullSlug, ContentDetails>>

function pick<T>(xs: T[]): T | undefined {
  return xs[Math.floor(Math.random() * xs.length)]
}

function go(target: FullSlug) {
  const current = getFullSlug(window)
  const url = new URL(resolveRelative(current, target), window.location.toString())
  window.spaNavigate(url)
}

async function randomNote() {
  const data = await fetchData
  const current = getFullSlug(window)
  const slugs = (Object.keys(data) as FullSlug[]).filter(
    (s) => s !== current && s !== "index" && !s.endsWith("/index") && !s.startsWith("tags/"),
  )
  const target = pick(slugs)
  if (target) go(target)
}

async function rabbitHole() {
  const data = await fetchData
  const current = getFullSlug(window)
  const links = data[current]?.links ?? []
  // links are simple slugs; match them back to full slugs in the index
  const all = Object.keys(data) as FullSlug[]
  const candidates = all.filter((s) => links.includes(simplifySlug(s)))
  const target = pick(candidates)
  if (target) go(target)
  else await randomNote()
}

function bind(className: string, action: () => Promise<void>) {
  for (const el of document.getElementsByClassName(className)) {
    const onClick = () => void action()
    el.addEventListener("click", onClick)
    window.addCleanup(() => el.removeEventListener("click", onClick))
  }
}

document.addEventListener("nav", () => {
  bind("random-note", randomNote)
  bind("rabbit-hole-link", rabbitHole)
})
