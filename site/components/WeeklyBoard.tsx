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
import style from "./styles/weeklyBoard.scss"

// One row per weekday. Keyed on the `type:` frontmatter each template sets, so
// the board fills itself in as notes get published. Change the routine here.
const ROUTINE = [
  { day: "Mon", label: "Company", type: "company", folder: "Companies" },
  { day: "Tue", label: "Take", type: "take", folder: "Takes" },
  { day: "Wed", label: "Why", type: "topic", folder: "Topics" },
  { day: "Thu", label: "Case", type: "case", folder: "Cases" },
  { day: "Fri", label: "Food", type: "food", folder: "Food" },
]

const WeeklyBoard: QuartzComponent = ({
  allFiles,
  fileData,
  cfg,
  displayClass,
}: QuartzComponentProps) => {
  const sorted = [...allFiles].sort(byDateAndAlphabetical(cfg))
  const latestOf = (type: string): QuartzPluginData | undefined =>
    sorted.find((f) => f.frontmatter?.type === type)
  // Quartz only emits a folder page once the folder holds a published note, so
  // the label stays plain text until then instead of linking to a 404.
  const hasFolderPage = (folder: string): boolean =>
    allFiles.some((f) => f.slug?.startsWith(`${folder}/`))

  return (
    <div class={classNames(displayClass, "weekly-board")}>
      <h3>The week</h3>
      <div class="rows">
        {ROUTINE.map(({ day, label, type, folder }) => {
          const note = latestOf(type)
          return (
            <div class="row">
              <span class="day">{day}</span>
              {hasFolderPage(folder) ? (
                <a
                  href={resolveRelative(fileData.slug!, `${folder}/index` as FullSlug)}
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

WeeklyBoard.css = style
export default (() => WeeklyBoard) satisfies QuartzComponentConstructor
