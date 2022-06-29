import { FC } from "react"
import { observer } from "mobx-react-lite"
import { PomodoroState as State } from "./PomodoroState"
import { PomodoroTimer } from "./PomodoroTimer"
import { PomodoroHeader } from "./PomodoroHeader"
import { PomodoroFooter } from "./PomodoroFooter"
import Head from "next/head"

export const Pomodoro: FC<{ state: State }> = observer(({ state }) => (
  <div className="flex h-screen w-screen flex-col items-center bg-focus-400 text-focus-100">
    <Head>
      {state.isStarted && <title>{`🍅 ${state.formatTime()}`}</title>}
      <meta name="theme-color" content={state.themeColor} />
    </Head>

    <PomodoroHeader state={state} />

    <div className="h-full w-full px-4 py-8 sm:max-w-lg md:max-w-xl">
      <PomodoroTimer state={state} />
    </div>

    <PomodoroFooter state={state} />
  </div>
))
