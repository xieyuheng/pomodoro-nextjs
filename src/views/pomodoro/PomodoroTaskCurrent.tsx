import classes from "classnames"
import { observer } from "mobx-react-lite"
import { PomodoroState as State } from "./PomodoroState"
import { Task } from "./Task"
import IconDotsVertical from "../../icons/IconDotsVertical"
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
      className={classes(
        "flex flex-col border-2 bg-white p-3 md:py-4",
        state.classes.transition,
        {
          "border-red-300 text-red-900": state.kind === "Focus",
          "border-sky-300 text-sky-900": state.kind === "Break",
          "border-violet-300 text-violet-900": state.kind === "Recess",
        }
      )}
    >
      <div className={classes("flex items-start justify-between")}>
        <div className="text-2xl font-semibold">{task.title}</div>

        <button className="shrink-0">
          <IconDotsVertical className="h-6 w-6" />
        </button>
      </div>

      <PomodoroTaskItemCount state={state} task={task} />
    </div>
  )
})
