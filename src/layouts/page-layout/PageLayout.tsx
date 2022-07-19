import type { ReactNode } from "react"
import classes from "classnames"
import { Observer } from "mobx-react-lite"
import Head from "next/head"
import { PageLayoutState as State } from "./PageLayoutState"

export default function PageLayout({ children }: { children: ReactNode }) {
  const state = new State()

  return (
    <Observer>
      {() => (
        <div>
          <div> TODO</div>

          {children}
        </div>
      )}
    </Observer>
  )
}
