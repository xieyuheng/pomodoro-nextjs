import classNames from "classnames"
import { observer } from "mobx-react-lite"
import { PomodoroState as State } from "./PomodoroState"
import { Task } from "./Task"
import IconDotsVertical from "../../icons/IconDotsVertical"

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
        "flex justify-between items-start border-4 p-3 text-2xl font-semibold hover:border-white md:py-4",
        state.classes.transition,
        {
          "border-focus-200  bg-focus-100  text-focus-900 hover:text-focus-600":
            state.kind === "Focus",
          "border-break-200  bg-break-100  text-break-900 hover:text-break-600":
            state.kind === "Break",
          "border-recess-200 bg-recess-100 text-recess-900 hover:text-recess-600":
            state.kind === "Recess",
        }
      )}
    >
      <div onClick={() => state.selectTask(task.id)}>{task.title}</div>
      <button className="shrink-0 pl-2">
        <IconDotsVertical />
      </button>
    </div>
  )
})
