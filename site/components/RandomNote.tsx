import {
  QuartzComponent,
  QuartzComponentConstructor,
  QuartzComponentProps,
} from "../quartz/components/types"
import { classNames } from "../quartz/util/lang"
// @ts-ignore
import script from "./scripts/random.inline"
import style from "./styles/random.scss"

// Dice button (left sidebar): jump to any published note.
const RandomNote: QuartzComponent = ({ displayClass }: QuartzComponentProps) => (
  <button
    class={classNames(displayClass, "random-note")}
    title="Random note"
    aria-label="Random note"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <circle cx="8" cy="8" r="1.2" fill="currentColor" />
      <circle cx="16" cy="8" r="1.2" fill="currentColor" />
      <circle cx="12" cy="12" r="1.2" fill="currentColor" />
      <circle cx="8" cy="16" r="1.2" fill="currentColor" />
      <circle cx="16" cy="16" r="1.2" fill="currentColor" />
    </svg>
  </button>
)
RandomNote.afterDOMLoaded = script
RandomNote.css = style

// Under a note: follow one of its outgoing links at random. Falls back to a
// random note when the current one links nowhere. A button, not an `<a href="#">`,
// so the SPA router leaves it alone (it would otherwise start its own navigation
// to the same page and drop ours).
const RabbitHole: QuartzComponent = ({ displayClass }: QuartzComponentProps) => (
  <p class={classNames(displayClass, "rabbit-hole")}>
    <button class="rabbit-hole-link" title="Follow a random link from this note">
      Down the rabbit hole &rarr;
    </button>
  </p>
)
RabbitHole.afterDOMLoaded = script
RabbitHole.css = style

export const RandomNoteComponent = (() => RandomNote) satisfies QuartzComponentConstructor
export const RabbitHoleComponent = (() => RabbitHole) satisfies QuartzComponentConstructor
