import type { ReactNode } from "react"
import classes from "classnames"
import { Observer } from "mobx-react-lite"
import PageLayoutHeader from "./PageLayoutHeader"
import Head from "next/head"
import { PageLayoutState as State } from "./PageLayoutState"

export default function PageLayout({ children }: { children: ReactNode }) {
  const state = new State()

  return (
    <Observer>
      {() => (
        <div
          className={classes(
            "flex min-h-screen flex-col items-center",
            state.classes.transition,
            `bg-${state.theme.name}-400 text-${state.theme.name}-100`
          )}
        >
          <Head>
            {state.formatTitle() && <title>{state.formatTitle()}</title>}
            <meta name="theme-color" content={state.theme.color} />
          </Head>

          <PageLayoutHeader state={state} />

          {children}
        </div>
      )}
    </Observer>
  )
}
