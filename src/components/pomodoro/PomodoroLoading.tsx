import classNames from "classnames"
import { observer } from "mobx-react-lite"
import { PomodoroState as State } from "./PomodoroState"
import Head from "next/head"

export default observer(function PomodoroLoading({ state }: { state: State }) {
  return (
    <div
      className={classNames(
        "flex h-screen w-screen flex-col items-center justify-center",
        `bg-${state.theme}-400 text-${state.theme}-100`
      )}
    >
      <Head>
        <meta name="theme-color" content={state.themeColor} />
      </Head>

      <div className="flex flex-col items-center">
        <div className="font-bold text-2xl">Pomodoro</div>
        <div className="font-bold text-lg">Loading...</div>
      </div>
    </div>
  )
})
