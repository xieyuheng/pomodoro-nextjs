import { FC } from "react"
import { observer } from "mobx-react-lite"
import { PomodoroState as State } from "./PomodoroState"
import { PomodoroTimer } from "./PomodoroTimer"

export const Pomodoro: FC<{ state: State }> = observer(({ state }) => (
  <div>
    <div className="h-screen w-screen bg-red-400 text-white">
      <div className="flex h-full flex-col items-center justify-center">
        <PomodoroTimer state={state} />
      </div>
    </div>
  </div>
))
