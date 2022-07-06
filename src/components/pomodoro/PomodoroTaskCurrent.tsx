import classNames from "classnames"
import { observer } from "mobx-react-lite"
import { PomodoroState as State } from "./PomodoroState"
import { Task } from "./Task"

export default observer(function PomodoroTaskCurrent({
  state,
  task,
}: {
  state: State
  task: Task
}) {
  return (
    <div
      className={classNames(
        "flex flex-col border-8 p-3 text-2xl font-semibold md:py-4",
        state.classes.transition,
        {
          "border-focus-300  bg-focus-200  text-focus-900":
            state.kind === "Focus",
          "border-break-300  bg-break-200  text-break-900":
            state.kind === "Break",
          "border-recess-300 bg-recess-200 text-recess-900":
            state.kind === "Recess",
        }
      )}
    >
      {task.title}
    </div>
  )
})
