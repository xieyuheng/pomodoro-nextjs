import classNames from "classnames"
import { Observer } from "mobx-react-lite"
import { PomodoroState as State } from "./PomodoroState"
import PomodoroTimer from "./PomodoroTimer"
import PomodoroHeader from "./PomodoroHeader"
import PomodoroTasks from "./PomodoroTasks"
import Head from "next/head"
import { useMount } from "ahooks"
import { usePomodoroState } from "./usePomodoroState"
import { autorun } from "mobx"

export default function Pomodoro() {
  const [state, saveState] = usePomodoroState()

  autorun(() => saveState(state))

  useMount(() => {
    state.setupNotification()
  })

  return (
    <Observer>
      {() => (
        <div
          className={classNames(
            "flex min-h-screen flex-col items-center",
            state.classes.transition,
            {
              "bg-focus-400 text-focus-100": state.kind === "Focus",
              "bg-break-400 text-break-100": state.kind === "Break",
              "bg-recess-400 text-recess-100": state.kind === "Recess",
            }
          )}
        >
          <Head>
            {state.formatTitle() && <title>{state.formatTitle()}</title>}
            <meta name="theme-color" content={state.themeColor} />
          </Head>

          <PomodoroHeader state={state} />

          <main className="mt-6 w-full space-y-2 px-4 md:max-w-2xl">
            <PomodoroTimer state={state} />
          </main>

          <main className="w-full space-y-2 px-4 pb-4 md:max-w-2xl">
            <PomodoroTasks state={state} />
          </main>
        </div>
      )}
    </Observer>
  )
}
