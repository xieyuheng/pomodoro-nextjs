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
        `border-${state.theme}-300 bg-${state.theme}-200 text-${state.theme}-600`
      )}
      onClick={onClick}
    >
      {name}
    </button>
  )
})
