import classes from "classnames"
import { observer } from "mobx-react-lite"
import { PomodoroState as State } from "./PomodoroState"

export default observer(function PomodoroHeader({ state }: { state: State }) {
  return (
    <div
      className={classes(
        "flex w-full items-center border-b px-4 py-2 md:py-4",
        "justify-between",
        state.classes.transition,
        `border-${state.theme}-500`
      )}
    >
      <div className="text-3xl font-semibold">Pomodoro</div>
    </div>
  )
})
