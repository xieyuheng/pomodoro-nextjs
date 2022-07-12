import { observer } from "mobx-react-lite"
import { PomodoroState as State } from "./PomodoroState"
import PomodoroModeButton from "./PomodoroModeButton"

export default observer(function PomodoroModebar({ state }: { state: State }) {
  return (
    <div className="flex w-full px-6">
      <div className="flex w-full justify-center space-x-4 px-2 py-2 text-xl font-semibold md:text-2xl">
        <PomodoroModeButton
          state={state}
          kind="Focus"
          name={state.lang.zh ? "专注" : "Focus"}
        />
        <PomodoroModeButton
          state={state}
          kind="Break"
          name={state.lang.zh ? "短休息" : "Break"}
        />
        <PomodoroModeButton
          state={state}
          kind="Recess"
          name={state.lang.zh ? "长休息" : "Recess"}
        />
      </div>
    </div>
  )
})
