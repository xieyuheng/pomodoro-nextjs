import classNames from "classnames"
import { observer } from "mobx-react-lite"
import { PomodoroState as State } from "./PomodoroState"
import IconGithub from "../../icons/IconGithub"

export default observer(function PomodoroFooter({ state }: { state: State }) {
  return (
    <div
      className={classNames(
        "flex w-full items-center border-t px-4 py-4 font-sans text-3xl font-semibold",
        "justify-center",
        state.classes.transition,
        `border-${state.theme}-500`
      )}
    >
      <a className="h-6 w-6" href="https://github.com/xieyuheng/pomodoro">
        <IconGithub />
      </a>
    </div>
  )
})
