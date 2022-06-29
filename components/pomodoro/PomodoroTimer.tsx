import { FC } from "react"
import { observer } from "mobx-react-lite"
import { PomodoroState as State } from "./PomodoroState"

export const PomodoroTimer: FC<{ state: State }> = observer(({ state }) => (
  <div className="flex flex-col items-center bg-red-500 rounded-xl py-10 md:px-6 px-2">
    <div className="text-8xl md:text-9xl">
      {state.formatMinutes()}:{state.formatSeconds()}
    </div>

    <div className="flex justify-between pt-6 md:px-6 px-2">
      {!state.isRunning() && (
        <button
          className="p-2 rounded-lg bg-red-100 text-red-600 border-2 border-red-600 text-4xl"
          onClick={() => state.start()}
        >
          START
        </button>
      )}

      {state.isRunning() && (
        <button
          className="p-2 rounded-lg bg-red-100 text-red-600 border-2 border-red-600 text-4xl"
          onClick={() => state.stop()}
        >
          STOP
        </button>
      )}
    </div>
  </div>
))
