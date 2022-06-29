import { FC } from "react"
import { observer } from "mobx-react-lite"
import { PomodoroState as State } from "./PomodoroState"

export const PomodoroTimerControl: FC<{ state: State }> = observer(
  ({ state }) => (
    <div className="flex justify-between px-2 md:px-6">
      {!state.isRunning() && (
        <button
          className="rounded border-2 border-red-300 bg-red-100 px-4 py-2 text-4xl text-red-600"
          onClick={() => state.start()}
        >
          START
        </button>
      )}

      {state.isRunning() && (
        <button
          className="rounded border-2 border-red-300 bg-red-100 px-4 py-2 text-4xl text-red-600"
          onClick={() => state.stop()}
        >
          STOP
        </button>
      )}
    </div>
  )
)
