import classes from "classnames"
import { Observer } from "mobx-react-lite"
import PomodoroTimer from "./PomodoroTimer"
import PomodoroHeader from "./PomodoroHeader"
import PomodoroTasks from "./PomodoroTasks"
import Head from "next/head"
import { useMount } from "ahooks"
import { autorun } from "mobx"
import { usePomodoroState } from "./hooks/usePomodoroState"
import PageLayout from "../../layouts/page-layout/PageLayout"

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
            `bg-${state.theme}-400 text-${state.theme}-100`
          )}
        >
          <Head>
            {state.formatTitle() && <title>{state.formatTitle()}</title>}
            <meta name="theme-color" content={state.themeColor} />
          </Head>

          <PomodoroHeader state={state} />

          <div className="mt-6 w-full space-y-2 px-4 md:max-w-2xl">
            <PomodoroTimer state={state} />
          </div>

          <div className="w-full space-y-2 px-4 pb-4 md:max-w-2xl ">
            <PomodoroTasks state={state} />
          </div>
        </div>
      )}
    </Observer>
  )
}
