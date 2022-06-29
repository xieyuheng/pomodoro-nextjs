import { FC } from "react"
import { observer } from "mobx-react-lite"
import { PomodoroState as State } from "./PomodoroState"
import { PomodoroTimerButton } from "./PomodoroTimerButton"

export const PomodoroTimerControl: FC<{ state: State }> = observer(
  ({ state }) => (
    <div className="flex justify-between  py-4 px-2 font-bold md:py-6 md:px-6">
      {!state.isRunning && (
        <div className="flex space-x-2">
          <PomodoroTimerButton name="START" onClick={() => state.start()} />

          {state.isStarted && (
            <PomodoroTimerButton name="RESET" onClick={() => state.reset()} />
          )}
        </div>
      )}

      {state.isRunning && (
        <div className="flex space-x-2">
          <PomodoroTimerButton name="STOP" onClick={() => state.stop()} />

          {state.isStarted && (
            <PomodoroTimerButton name="RESET" onClick={() => state.reset()} />
          )}
        </div>
      )}
    </div>
  )
)