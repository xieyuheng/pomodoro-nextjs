import { FC } from "react"
import classNames from "classnames"
import { observer } from "mobx-react-lite"
import { PomodoroState as State } from "./PomodoroState"
import IconGithub from "../../icons/IconGithub"

export const PomodoroFooter: FC<{ state: State }> = observer(({ state }) => (
  <div
    className={classNames(
      "flex w-full items-center border-t px-4 py-4 font-sans text-3xl font-semibold",
      "justify-center",
      "transition delay-300 duration-1000",
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
))
