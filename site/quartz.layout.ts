import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"
import WeeklyBoard from "./components/WeeklyBoard"
import { RandomNoteComponent, RabbitHoleComponent } from "./components/RandomNote"
import Head from "./components/Head"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Head(), // upstream Head minus its cdnjs preconnect, see components/Head.tsx
  header: [],
  afterBody: [
    // Home only: the weekday board (latest note per type) and latest 5 notes.
    Component.ConditionalRender({
      component: WeeklyBoard(),
      condition: (page) => page.fileData.slug === "index",
    }),
    Component.ConditionalRender({
      component: Component.RecentNotes({
        limit: 5,
        showTags: false,
        title: "Recently written",
        filter: (f) => f.slug !== "index",
      }),
      condition: (page) => page.fileData.slug === "index",
    }),
    // Every other page: follow one of the note's links at random.
    Component.ConditionalRender({
      component: RabbitHoleComponent(),
      condition: (page) => page.fileData.slug !== "index",
    }),
  ],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/affannajiy/notes",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
        { Component: RandomNoteComponent() },
        { Component: Component.ReaderMode() },
      ],
    }),
    Component.Explorer(),
  ],
  right: [
    // Graph is the main feature of the site. Local graph reaches two hops so a
    // note shows its neighbourhood, not just direct links; global graph is the
    // whole vault with radial layout so clusters (one per folder) read clearly.
    Component.Graph({
      localGraph: { depth: 2, scale: 1.1, linkDistance: 40, showTags: false, focusOnHover: true },
      globalGraph: {
        depth: -1,
        scale: 0.8,
        repelForce: 0.6,
        centerForce: 0.2,
        linkDistance: 40,
        showTags: false,
        focusOnHover: true,
        enableRadial: true,
      },
    }),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
      ],
    }),
    Component.Explorer(),
  ],
  right: [],
}
