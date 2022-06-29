import { FC } from "react"
import classNames from "classnames"
import { observer } from "mobx-react-lite"

export const PomodoroTimerButton: FC<{
  name: string
  onClick: () => void
}> = observer(({ name, onClick }) => (
  <button
    className={classNames(
      "rounded-md border-2 px-4 py-2 text-2xl md:text-3xl",
      {
        "border-focus-300 bg-focus-200 text-focus-600":
          state.mode.kind === "Focus",
        "border-break-300 bg-break-200 text-break-600":
          state.mode.kind === "Break",
        "border-recess-300 bg-recess-200 text-recess-600":
          state.mode.kind === "Recess",
      }
    )}
    onClick={onClick}
  >
    {name}
  </button>
))
