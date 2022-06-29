import { FC } from "react"
import { observer } from "mobx-react-lite"
import { PomodoroState as State } from "./PomodoroState"
import { PomodoroTimer } from "./PomodoroTimer"
import { PomodoroHeader } from "./PomodoroHeader"
import Head from "next/head"

export const Pomodoro: FC<{ state: State }> = observer(({ state }) => (
  <div className="h-screen w-screen bg-red-400 flex flex-col items-center text-red-50">
    <Head>
      <title>🍅 {state.formatTime()}</title>
      <meta name="theme-color" content="#f87171" />
    </Head>

    <PomodoroHeader state={state} />

    <div className="md:max-w-xl sm:max-w-lg w-full px-10 py-10">
      <PomodoroTimer state={state} />
    </div>
  </div>
))
