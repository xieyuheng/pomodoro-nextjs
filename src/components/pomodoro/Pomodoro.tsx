import classNames from "classnames"
import { observer } from "mobx-react-lite"
import { PomodoroState as State } from "./PomodoroState"
import PomodoroTimer from "./PomodoroTimer"
import PomodoroHeader from "./PomodoroHeader"
import PomodoroFooter from "./PomodoroFooter"
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
        `bg-${state.theme}-400 text-${state.theme}-100`
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
