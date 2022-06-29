import { FC } from "react"
import { observer } from "mobx-react-lite"
import { PomodoroState as State } from "./PomodoroState"
import { PomodoroButton } from "./PomodoroButton"

export const PomodoroTimerControl: FC<{ state: State }> = observer(
  ({ state }) => (
    <div className="flex justify-between px-2 md:px-6">
      {!state.isRunning && (
        <div className="flex space-x-2">
          <PomodoroButton name="START" onClick={() => state.start()} />

          {state.isStarted && (
            <PomodoroButton name="RESET" onClick={() => state.reset()} />
          )}
        </div>
      )}

      {state.isRunning && (
        <div className="flex space-x-2">
          <PomodoroButton name="STOP" onClick={() => state.stop()} />

          {state.isStarted && (
            <PomodoroButton name="RESET" onClick={() => state.reset()} />
          )}
        </div>
      )}
    </div>
  )
)
