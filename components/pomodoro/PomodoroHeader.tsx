import { FC } from "react"
import { observer } from "mobx-react-lite"
import { PomodoroState as State } from "./PomodoroState"

export const PomodoroHeader: FC<{ state: State }> = observer(({ state }) => (
  <div className="flex w-full items-center border-b border-red-300 px-4 py-4 font-sans text-3xl font-semibold">
    <div>Pomodoro</div>
  </div>
))
