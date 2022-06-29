import { FC } from "react"
import { observer } from "mobx-react-lite"
import { PomodoroState as State } from "./PomodoroState"
import IconGithub from "../../icons/IconGithub"

export const PomodoroHeader: FC<{ state: State }> = observer(({ state }) => (
  <div className="px-4 py-4 flex justify-between items-center text-3xl border-b border-red-300 w-full font-semibold font-sans">
    <div>Pomodoro</div>

    <a className="w-6 h-6" href="https://github.com/xieyuheng/pomodoro">
      <IconGithub />
    </a>
  </div>
))
