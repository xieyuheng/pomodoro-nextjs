import { FC } from "react"
import { observer } from "mobx-react-lite"
import { PomodoroState as State } from "./PomodoroState"

export const PomodoroHeader: FC<{ state: State }> = observer(({ state }) => (
  <div className="px-4 py-4 text-3xl border-b border-red-300 w-full font-semibold font-sans">
    Pomodoro
  </div>
))
