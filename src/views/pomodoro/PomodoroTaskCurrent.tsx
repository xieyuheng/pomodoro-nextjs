import classNames from "classnames"
import { observer } from "mobx-react-lite"
import { PomodoroState as State } from "./PomodoroState"
import { Task } from "./Task"
import PomodoroTaskItemCount from "./PomodoroTaskItemCount"

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
        "flex flex-col border-2 bg-white p-3  md:py-4",
        state.classes.transition,
        {
          "border-focus-300 text-focus-900": state.kind === "Focus",
          "border-break-300 text-break-900": state.kind === "Break",
          "border-recess-300 text-recess-900": state.kind === "Recess",
        }
      )}
    >
      <div className="text-2xl font-semibold">{task.title}</div>

      <PomodoroTaskItemCount state={state} task={task} />
    </div>
  )
})
