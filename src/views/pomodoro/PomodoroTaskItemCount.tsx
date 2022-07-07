import { useState } from "react"
import classNames from "classnames"
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
          className={classNames(
            "h-2.5 w-2.5 border",
            state.classes.transition,
            {
              "border-focus-400 bg-focus-600": state.kind === "Focus",
              "border-break-400 bg-break-600": state.kind === "Break",
              "border-recess-400 bg-recess-600": state.kind === "Recess",
            }
          )}
          key={i}
        ></div>
      ))}
    </div>
  ) : (
    <div></div>
  )
})
