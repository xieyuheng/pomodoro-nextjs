import { FC } from "react"
import { observer } from "mobx-react-lite"
import { PomodoroState as State } from "./PomodoroState"
import { PomodoroModebar } from "./PomodoroModebar"
import { PomodoroTimerControl } from "./PomodoroTimerControl"

export const PomodoroTimer: FC<{ state: State }> = observer(({ state }) => (
  <div className="flex flex-col items-center rounded-lg border-2 border-focus-600 bg-focus-500 bg-focus-400 py-2 px-2 md:px-6">
    <PomodoroModebar state={state} />

    <div className="font-mono text-7xl font-semibold sm:text-8xl md:text-9xl">
      {state.formatTime()}
    </div>

    <PomodoroTimerControl state={state} />
  </div>
))
