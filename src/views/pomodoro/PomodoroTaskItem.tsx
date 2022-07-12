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
        `border-${state.theme}-200  bg-${state.theme}-100  text-${state.theme}-900`,
        `text-${state.theme}-500`
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
