import { FC } from "react"
import { observer } from "mobx-react-lite"
import { PomodoroState as State } from "./PomodoroState"
import { PomodoroTimerControl } from "./PomodoroTimerControl"

export const PomodoroTimer: FC<{ state: State }> = observer(({ state }) => (
  <div className="flex flex-col items-center rounded border-2 border-red-600 bg-red-500 bg-red-400 py-6 px-2 md:py-10 md:px-6">
    <div className="font-mono text-8xl font-semibold md:text-9xl">
      {state.formatTime()}
    </div>

    <div className="mt-4 font-sans font-bold md:mt-6">
      <PomodoroTimerControl state={state} />
    </div>
  </div>
))
