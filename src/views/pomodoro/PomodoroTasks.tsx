import { useState } from "react"
import classNames from "classnames"
import { observer } from "mobx-react-lite"
import { PomodoroState as State } from "./PomodoroState"
import PomodoroTaskCurrent from "./PomodoroTaskCurrent"
import PomodoroTaskItem from "./PomodoroTaskItem"
import PomodoroTaskForm from "./PomodoroTaskForm"

export default observer(function PomodoroTasks({ state }: { state: State }) {
  return (
    <div className="flex flex-col py-2">
      {state.currentTesk && (
        <div className="py-4">
          <PomodoroTaskCurrent state={state} task={state.currentTesk} />
        </div>
      )}

      <ul>
        {state.tasks.map((task) => (
          <li className="py-2" key={task.id}>
            <PomodoroTaskItem state={state} task={task} />
          </li>
        ))}
        <li className="py-2">
          <PomodoroTaskForm state={state} />
        </li>
      </ul>
    </div>
  )
})
