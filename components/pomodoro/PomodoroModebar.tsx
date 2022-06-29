import { FC } from "react"
import { observer } from "mobx-react-lite"
import { PomodoroState as State } from "./PomodoroState"
import { PomodoroModeButton } from "./PomodoroModeButton"

export const PomodoroModebar: FC<{ state: State }> = observer(({ state }) => (
  <div className="flex w-full px-6">
    <div className="flex w-full justify-center space-x-4 px-2 py-4 text-xl font-semibold md:text-2xl">
      <PomodoroModeButton name="Focus" active />
      <PomodoroModeButton name="Break" />
      <PomodoroModeButton name="Recess" />
    </div>
  </div>
))
