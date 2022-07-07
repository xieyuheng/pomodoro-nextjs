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
    <div className="flex space-x-1 pt-2">
      {Array.from({ length: task.count }, (_, i) => (
        <div
          className={classNames("h-3 w-3 border", state.classes.transition, {
            "border-focus-200 bg-focus-700": state.kind === "Focus",
            "border-break-200 bg-break-700": state.kind === "Break",
            "border-recess-200 bg-recess-700": state.kind === "Recess",
          })}
          key={i}
        ></div>
      ))}
    </div>
  ) : (
    <div></div>
  )
})
