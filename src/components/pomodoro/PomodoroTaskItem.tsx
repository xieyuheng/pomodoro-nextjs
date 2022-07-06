import classNames from "classnames"
import { observer } from "mobx-react-lite"
import { PomodoroState as State } from "./PomodoroState"
import { Task } from "./Task"

export default observer(function PomodoroTaskItem({
  state,
  task,
}: {
  state: State
  task: Task
}) {
  return (
    <div
      className={classNames(
        "flex flex-col border-4 p-3 text-2xl font-semibold hover:border-white md:py-4",
        state.classes.transition,
        {
          "border-focus-200  bg-focus-100  text-focus-900":
            state.kind === "Focus",
          "border-break-200  bg-break-100  text-break-900":
            state.kind === "Break",
          "border-recess-200 bg-recess-100 text-recess-900":
            state.kind === "Recess",
        }
      )}
      onClick={() => state.selectTask(task.id)}
    >
      {task.title}
    </div>
  )
})