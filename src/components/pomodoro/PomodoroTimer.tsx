import { FC } from "react"
import classNames from "classnames"
import { observer } from "mobx-react-lite"
import { PomodoroState as State } from "./PomodoroState"
import { PomodoroModebar } from "./PomodoroModebar"
import { PomodoroTimerControl } from "./PomodoroTimerControl"

export const PomodoroTimer: FC<{ state: State }> = observer(({ state }) => (
  <div
    className={classNames(
      "flex flex-col items-center rounded-lg border-2 py-2 px-2 md:px-6",
      "transition delay-300 duration-1000",
      {
        "border-focus-600 bg-focus-500 bg-focus-400": state.kind === "Focus",
        "border-break-600 bg-break-500 bg-break-400": state.kind === "Break",
        "border-recess-600 bg-recess-500 bg-recess-400":
          state.kind === "Recess",
      }
    )}
  >
    <PomodoroModebar state={state} />

    <div className="font-mono text-7xl font-semibold sm:text-8xl md:text-9xl">
      {state.formatTime()}
    </div>

    <PomodoroTimerControl state={state} />
  </div>
))
