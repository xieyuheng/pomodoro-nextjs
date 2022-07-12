import classes from "classnames"
import { observer } from "mobx-react-lite"
import { PomodoroState as State } from "./PomodoroState"
import { Task } from "./Task"

export default observer(function PomodoroTaskItemCount({
  state,
  task,
}: {
  state: State
  task: Task
}) {
  return task.count > 0 ? (
    <div className="flex space-x-0.5 pt-2">
      {Array.from({ length: task.count }, (_, i) => (
        <div
          className={classes(
            "h-2.5 w-2.5 border",
            state.classes.transition,
            `border-${state.theme}-400 bg-${state.theme}-600`
          )}
          key={i}
        ></div>
      ))}
    </div>
  ) : (
    <div></div>
  )
})
