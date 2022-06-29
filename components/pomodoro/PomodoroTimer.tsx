import { FC } from "react"
import { observer } from "mobx-react-lite"
import { PomodoroState as State } from "./PomodoroState"
import { PomodoroTimerControl } from "./PomodoroTimerControl"

export const PomodoroTimer: FC<{ state: State }> = observer(({ state }) => (
  <div className="flex w-full flex-col items-center rounded border-2 border-red-600 bg-red-500 bg-red-400 py-6 px-2 md:py-10 md:px-6">
    <div className="font-mono md:text-9xl text-8xl font-semibold md:text-9xl">
      {state.formatTime()}
    </div>

    <div className="pt-4 font-sans font-bold md:pt-6">
      <PomodoroTimerControl state={state} />
    </div>
  </div>
))
