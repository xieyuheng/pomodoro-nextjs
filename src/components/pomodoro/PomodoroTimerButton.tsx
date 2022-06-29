import { FC } from "react"
import classNames from "classnames"
import { observer } from "mobx-react-lite"
import { PomodoroState as State } from "./PomodoroState"

export const PomodoroTimerButton: FC<{
  state: State
  name: string
  onClick: () => void
}> = observer(({ state, name, onClick }) => (
  <button
    className={classNames(
      "rounded-md border-2 px-4 py-2 text-2xl md:text-3xl",
      state.classes.transition,
      {
        "border-focus-300 bg-focus-200 text-focus-600": state.kind === "Focus",
        "border-break-300 bg-break-200 text-break-600": state.kind === "Break",
        "border-recess-300 bg-recess-200 text-recess-600":
          state.kind === "Recess",
      }
    )}
    onClick={onClick}
  >
    {name}
  </button>
))
