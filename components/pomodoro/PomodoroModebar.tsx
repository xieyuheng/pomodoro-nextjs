import { FC } from "react"
import { observer } from "mobx-react-lite"
import { PomodoroState as State } from "./PomodoroState"

export const PomodoroModebar: FC<{ state: State }> = observer(({ state }) => (
  <div className="flex w-full px-6">
    <div className="flex w-full justify-center space-x-4 px-2 py-4 text-xl font-semibold md:text-2xl">
      <div className="rounded border-2 border-focus-400 bg-focus-600 py-1 px-3 text-focus-200">
        Focus
      </div>
      <div className="rounded border-2 border-focus-500 bg-focus-500 py-1 px-3 text-focus-300">
        Break
      </div>
      <div className="rounded border-2 border-focus-500 bg-focus-500 py-1 px-3 text-focus-300">
        Recess
      </div>
    </div>
  </div>
))
