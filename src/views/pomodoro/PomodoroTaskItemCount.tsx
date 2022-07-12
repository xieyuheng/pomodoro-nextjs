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
          className={classes("h-2.5 w-2.5 border", state.classes.transition, {
            "border-red-400 bg-red-600": state.kind === "Focus",
            "border-sky-400 bg-sky-600": state.kind === "Break",
            "border-violet-400 bg-violet-600": state.kind === "Recess",
          })}
          key={i}
        ></div>
      ))}
    </div>
  ) : (
    <div></div>
  )
})
