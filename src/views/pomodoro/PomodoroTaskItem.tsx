import { useState } from "react"
import classes from "classnames"
import { observer } from "mobx-react-lite"
import { PomodoroState as State } from "./PomodoroState"
import { Task } from "./Task"
import IconDotsVertical from "../../icons/IconDotsVertical"
import PomodoroTaskItemCount from "./PomodoroTaskItemCount"

export default observer(function PomodoroTaskItem({
  state,
  task,
}: {
  state: State
  task: Task
}) {
  const [active, setActive] = useState(false)

  return (
    <div
      className={classes(
        "flex flex-col border-2 p-3 hover:border-white md:py-4",
        state.classes.transition,
        {
          "border-red-200  bg-red-100  text-red-900": state.kind === "Focus",
          "border-sky-200  bg-sky-100  text-sky-900": state.kind === "Break",
          "border-violet-200 bg-violet-100 text-violet-900":
            state.kind === "Recess",
        },
        {
          "text-red-500": state.kind === "Focus" && active,
          "text-sky-500": state.kind === "Break" && active,
          "text-violet-500": state.kind === "Recess" && active,
        }
      )}
    >
      <div className={classes("flex items-start justify-between")}>
        <div
          className="text-xl font-semibold"
          onMouseLeave={() => {
            setActive(false)
          }}
          onClick={() => {
            if (!active) {
              setActive(true)
            } else {
              state.selectTask(task.id)
            }
          }}
        >
          {task.title}
        </div>

        <button className="shrink-0">
          <IconDotsVertical className="h-6 w-6" />
        </button>
      </div>

      <PomodoroTaskItemCount state={state} task={task} />
    </div>
  )
})
