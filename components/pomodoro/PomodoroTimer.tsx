import { PomodoroState as State } from "./PomodoroState"
import { observer } from "mobx-react-lite"

export const PomodoroTimer = observer(({ state }) => {
  return (
    <div className="text-9xl">
      {state.formatMinutes()}:{state.formatSeconds()}
    </div>
  )
})
