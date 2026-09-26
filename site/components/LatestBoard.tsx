import {
  QuartzComponent,
  QuartzComponentConstructor,
  QuartzComponentProps,
} from "../quartz/components/types"
import { FullSlug, resolveRelative } from "../quartz/util/path"
import { QuartzPluginData } from "../quartz/plugins/vfile"
import { Date as DateEl, getDate } from "../quartz/components/Date"
import { byDateAndAlphabetical } from "../quartz/components/PageList"
import { classNames } from "../quartz/util/lang"
import style from "./styles/latestBoard.scss"

// One row per note kind. Keyed on the `type:` frontmatter every note sets, so
// the board fills itself in as notes get published. All notes share one folder,
// so the label links to the kind's tag page instead. Add or drop a kind here.
const KINDS = [
  { label: "Hub", type: "hub", tag: "hub" },
  { label: "Company", type: "company", tag: "company" },
  { label: "Take", type: "take", tag: "take" },
  { label: "Why", type: "topic", tag: "why" },
  { label: "Case", type: "case", tag: "case" },
  { label: "Food", type: "food", tag: "food" },
]

const LatestBoard: QuartzComponent = ({
  allFiles,
  fileData,
  cfg,
  displayClass,
}: QuartzComponentProps) => {
  const sorted = [...allFiles].sort(byDateAndAlphabetical(cfg))
  const latestOf = (type: string): QuartzPluginData | undefined =>
    sorted.find((f) => f.frontmatter?.type === type)
  // Quartz only emits a tag page once a published note carries the tag, so the
  // label stays plain text until then instead of linking to a 404.
  const hasTagPage = (tag: string): boolean =>
    allFiles.some((f) => f.frontmatter?.tags?.includes(tag))

  return (
    <div class={classNames(displayClass, "latest-board")}>
      <h3>Latest by kind</h3>
      <div class="rows">
        {KINDS.map(({ label, type, tag }) => {
          const note = latestOf(type)
          return (
            <div class="row">
              {hasTagPage(tag) ? (
                <a
                  href={resolveRelative(fileData.slug!, `tags/${tag}` as FullSlug)}
                  class="internal label"
                >
                  {label}
                </a>
              ) : (
                <span class="label">{label}</span>
              )}
              <span class="date">
                {note?.dates && <DateEl date={getDate(cfg, note)!} locale={cfg.locale} />}
              </span>
              <span class="note">
                {note ? (
                  <a href={resolveRelative(fileData.slug!, note.slug!)} class="internal">
                    {note.frontmatter?.title ?? note.slug}
                  </a>
                ) : (
                  <span class="empty">nothing yet</span>
                )}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

LatestBoard.css = style
export default (() => LatestBoard) satisfies QuartzComponentConstructor
