import classNames from "classnames"
import { observer } from "mobx-react-lite"
import { PomodoroState as State } from "./PomodoroState"
import PomodoroTimer from "./PomodoroTimer"
import PomodoroHeader from "./PomodoroHeader"
import PomodoroFooter from "./PomodoroFooter"
import PomodoroTasks from "./PomodoroTasks"
import Head from "next/head"
import { useMount } from "ahooks"

export default observer(function Pomodoro({ state }: { state: State }) {
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

      <main className="mt-6 w-full space-y-2 px-4 md:max-w-xl">
        <PomodoroTimer state={state} />
      </main>

      <main className="h-full w-full space-y-2 overflow-y-auto px-4 md:max-w-xl">
        <PomodoroTasks state={state} />
      </main>

      <PomodoroFooter state={state} />
    </div>
  )
})
