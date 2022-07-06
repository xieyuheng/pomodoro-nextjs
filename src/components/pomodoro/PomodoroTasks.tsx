import classNames from "classnames"
import { observer } from "mobx-react-lite"
import { PomodoroState as State } from "./PomodoroState"
import PomodoroTaskItem from "./PomodoroTaskItem"

export default observer(function PomodoroTasks({ state }: { state: State }) {
  return (
    <div className="flex h-full flex-col overflow-y-auto py-2">
      <div className="py-3 text-3xl font-semibold">Tasks</div>
      <ul className="h-full overflow-y-auto">
        {state.tasks.map((task, index) => (
          <li className="py-2">
            <PomodoroTaskItem state={state} task={task} key={index} />
          </li>
        ))}
      </ul>
    </div>
  )
})
