import { FC } from "react"
import { observer } from "mobx-react-lite"
import { PomodoroState as State } from "./PomodoroState"

export const PomodoroTimer: FC<{ state: State }> = observer(({ state }) => (
  <div className="text-9xl">
    {state.formatMinutes()}:{state.formatSeconds()}
  </div>
))
