import classNames from "classnames"
import { observer } from "mobx-react-lite"
import { PomodoroState as State } from "./PomodoroState"

export default observer(function PomodoroState({ state }: { state: State }) {
  return (
    <div
      className={classNames(
        "flex flex-col md:py-4 py-2",
        "justify-between",
        state.classes.transition,
        {
          "border-focus-500": state.kind === "Focus",
          "border-break-500": state.kind === "Break",
          "border-recess-500": state.kind === "Recess",
        }
      )}
    >
      <div className="text-3xl font-semibold">Tasks</div>
      <ul>
        <li>Task 1</li>
        <li>Task 2</li>
      </ul>
    </div>
  )
})
