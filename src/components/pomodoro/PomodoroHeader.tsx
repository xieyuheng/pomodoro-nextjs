import { FC } from "react"
import classNames from "classnames"
import { observer } from "mobx-react-lite"
import { PomodoroState as State } from "./PomodoroState"

export const PomodoroHeader: FC<{ state: State }> = observer(({ state }) => (
  <div
    className={classNames(
      "flex w-full items-center border-b  px-4 py-4 font-sans text-3xl font-semibold",
      {
        "border-focus-500": state.mode.kind === "Focus",
        "border-break-500": state.mode.kind === "Break",
        "border-recess-500": state.mode.kind === "Recess",
      }
    )}
  >
    <div>Pomodoro</div>
  </div>
))
