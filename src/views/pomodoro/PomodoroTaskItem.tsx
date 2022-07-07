import { useState } from "react"
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
  const [active, setActive] = useState(false)

  return (
    <div
      className={classNames(
        "flex flex-col border-4 p-3 hover:border-white md:py-4",
        state.classes.transition,
        {
          "border-focus-200  bg-focus-100  text-focus-900":
            state.kind === "Focus",
          "border-break-200  bg-break-100  text-break-900":
            state.kind === "Break",
          "border-recess-200 bg-recess-100 text-recess-900":
            state.kind === "Recess",
        },
        {
          "text-focus-500": state.kind === "Focus" && active,
          "text-break-500": state.kind === "Break" && active,
          "text-recess-500": state.kind === "Recess" && active,
        }
      )}
    >
      <div className={classNames("flex items-start justify-between")}>
        <div
          className="text-2xl font-semibold"
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

        <button className="shrink-0 pl-2">
          <IconDotsVertical />
        </button>
      </div>

      {task.count > 0 && (
        <div className="flex space-x-1">
          {Array.from({ length: task.count }, (_, i) => (
            <div className={classNames("h-3 w-3 bg-focus-900")} key={i}></div>
          ))}
        </div>
      )}
    </div>
  )
})