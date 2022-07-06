import classNames from "classnames"
import { observer } from "mobx-react-lite"
import { PomodoroState as State } from "./PomodoroState"
import PomodoroTaskItem from "./PomodoroTaskItem"

export default observer(function PomodoroTasks({ state }: { state: State }) {
  return (
    <div className="flex flex-col py-2">
      <div className="py-2 text-3xl font-semibold">Tasks</div>
      <ul>
        {state.tasks.map((task, index) => (
          <div className="py-2">
            <PomodoroTaskItem state={state} task={task} key={index} />
          </div>
        ))}
      </ul>
    </div>
  )
})
