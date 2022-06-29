import { FC } from "react"
import { observer } from "mobx-react-lite"
import { PomodoroState as State } from "./PomodoroState"
import { PomodoroTimer } from "./PomodoroTimer"
import Head from "next/head"

export const Pomodoro: FC<{ state: State }> = observer(({ state }) => (
  <>
    <Head>
      <title>🍅 {state.formatTime()}</title>
      <meta name="theme-color" content="#f87171" />
    </Head>

    <div className="h-screen w-screen bg-red-400 text-red-50">
      <div className="flex h-full flex-col items-center py-10">
        <PomodoroTimer state={state} />
      </div>
    </div>
  </>
))
