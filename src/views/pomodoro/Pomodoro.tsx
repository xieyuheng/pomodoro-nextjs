import classes from "classnames"
import { Observer } from "mobx-react-lite"
import PomodoroTimer from "./PomodoroTimer"
import PomodoroHeader from "./PomodoroHeader"
import PomodoroTasks from "./PomodoroTasks"
import Head from "next/head"
import { useMount } from "ahooks"
import { autorun } from "mobx"
import { usePomodoroState } from "./usePomodoroState"

export default function Pomodoro() {
  const [state, saveState] = usePomodoroState()

  autorun(() => saveState(state))
  useMount(() => state.setupNotification())

  return (
    <Observer>
      {() => (
        <div
          className={classes(
            "flex min-h-screen flex-col items-center",
            state.classes.transition,
            {
              "bg-red-400 text-red-100": state.kind === "Focus",
              "bg-sky-400 text-sky-100": state.kind === "Break",
              "bg-violet-400 text-violet-100": state.kind === "Recess",
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
