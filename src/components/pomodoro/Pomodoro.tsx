import classNames from "classnames"
import { observer } from "mobx-react-lite"
import { PomodoroState as State } from "./PomodoroState"
import { PomodoroTimer } from "./PomodoroTimer"
import { PomodoroHeader } from "./PomodoroHeader"
import { PomodoroFooter } from "./PomodoroFooter"
import Head from "next/head"
import { useMount } from "ahooks"

export const Pomodoro = observer(({ state }: { state: State }) => {
  useMount(() => {
    state.setupNotification()
  })

  return (
    <div
      className={classNames(
        "flex h-screen w-screen flex-col items-center",
        state.classes.transition,
        {
          "bg-focus-400 text-focus-100": state.kind === "Focus",
          "bg-break-400 text-break-100": state.kind === "Break",
          "bg-recess-400 text-recess-100": state.kind === "Recess",
        }
      )}
    >
      <Head>
        {state.isStarted && <title>{`🍅 ${state.formatTime()}`}</title>}
        <meta name="theme-color" content={state.themeColor} />
      </Head>

      <PomodoroHeader state={state} />

      <div className="h-full w-full px-4 py-8 md:max-w-xl">
        <PomodoroTimer state={state} />
      </div>

      <PomodoroFooter state={state} />
    </div>
  )
})
