import { FC } from "react"
import { observer } from "mobx-react-lite"
import { PomodoroState as State } from "./PomodoroState"
import IconGithub from "../../icons/IconGithub"

export const PomodoroFooter: FC<{ state: State }> = observer(({ state }) => (
  <div className="flex w-full items-center justify-center border-t border-red-300 px-4 py-4 font-sans text-3xl font-semibold">
    <a className="h-6 w-6" href="https://github.com/xieyuheng/pomodoro">
      <IconGithub />
    </a>
  </div>
))
