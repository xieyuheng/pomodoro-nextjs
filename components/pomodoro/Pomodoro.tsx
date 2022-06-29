import * as React from "react"
import { PomodoroState as State } from "./PomodoroState"
import { PomodoroTimer } from "./PomodoroTimer"
import { observer } from "mobx-react-lite"

export const Pomodoro: React.FC<{ state: State }> = observer(({ state }) => (
  <div>
    <div className="h-screen w-screen bg-red-400 text-white">
      <div className="h-full flex flex-col justify-center items-center">
        <PomodoroTimer state={state} />
      </div>
    </div>
  </div>
))
