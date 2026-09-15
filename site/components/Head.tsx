import { cloneElement, ComponentChildren, FunctionComponent, VNode } from "preact"
import UpstreamHead from "../quartz/components/Head"
import {
  QuartzComponent,
  QuartzComponentConstructor,
  QuartzComponentProps,
} from "../quartz/components/types"

// Upstream Head hard-codes `<link rel="preconnect" href="https://cdnjs.cloudflare.com">`
// for mermaid, which opens a connection to Cloudflare on every page view even though
// nothing here loads from it (SECURITY.md invariant 4). Wrap upstream rather than copy
// it, so a newer Quartz tarball still applies; only that one tag is dropped.
const isCdnPreconnect = (child: unknown): boolean => {
  const node = child as VNode<{ rel?: string; href?: string }> | null
  return (
    typeof node === "object" &&
    node !== null &&
    node.type === "link" &&
    node.props?.rel === "preconnect" &&
    typeof node.props?.href === "string" &&
    node.props.href.includes("cdnjs.cloudflare.com")
  )
}

export default (() => {
  const Base = UpstreamHead() as FunctionComponent<QuartzComponentProps> & QuartzComponent

  const Head: QuartzComponent = (props: QuartzComponentProps) => {
    const head = Base(props) as VNode<{ children?: ComponentChildren }>
    const children = ([] as ComponentChildren[]).concat(head.props.children ?? [])
    return cloneElement(head, {}, ...children.filter((c) => !isCdnPreconnect(c)))
  }
  Head.css = Base.css
  Head.beforeDOMLoaded = Base.beforeDOMLoaded
  Head.afterDOMLoaded = Base.afterDOMLoaded

  return Head
}) satisfies QuartzComponentConstructor
