import * as React from "react"
import { PomodoroState as State } from "./PomodoroState"
import { observer } from "mobx-react-lite"

export const PomodoroTimer: React.FC<{ state: State }> = observer(
  ({ state }) => (
    <div className="text-9xl">
      {state.formatMinutes()}:{state.formatSeconds()}
    </div>
  )
)
