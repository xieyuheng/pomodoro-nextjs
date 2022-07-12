import classes from "classnames"
import { observer } from "mobx-react-lite"
import { PomodoroState as State } from "./PomodoroState"

export default observer(function PomodoroTimerButton({
  state,
  name,
  onClick,
}: {
  state: State
  name: string
  onClick: () => void
}) {
  return (
    <button
      className={classes(
        "border-2 px-4 py-2 text-2xl md:text-3xl",
        state.classes.transition,
        {
          "border-red-300 bg-red-200 text-red-600": state.kind === "Focus",
          "border-sky-300 bg-sky-200 text-sky-600": state.kind === "Break",
          "border-violet-300 bg-violet-200 text-violet-600":
            state.kind === "Recess",
        }
      )}
      onClick={onClick}
    >
      {name}
    </button>
  )
})
