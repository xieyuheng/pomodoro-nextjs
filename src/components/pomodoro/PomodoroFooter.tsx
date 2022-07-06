import classNames from "classnames"
import { observer } from "mobx-react-lite"
import { PomodoroState as State } from "./PomodoroState"
import IconGithub from "../../icons/IconGithub"

export default observer(function PomodoroFooter({ state }: { state: State }) {
  return (
    <div
      className={classNames(
        "flex w-full items-center border-t px-4 py-4",
        "justify-center",
        state.classes.transition,
        {
          "border-focus-500": state.kind === "Focus",
          "border-break-500": state.kind === "Break",
          "border-recess-500": state.kind === "Recess",
        }
      )}
    >
      <a className="h-6 w-6" href="https://github.com/xieyuheng/pomodoro">
        <IconGithub />
      </a>
    </div>
  )
})
