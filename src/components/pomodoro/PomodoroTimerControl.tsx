import classNames from "classnames"
import { observer } from "mobx-react-lite"
import { PomodoroState as State } from "./PomodoroState"
import PomodoroTimerButton from "./PomodoroTimerButton"
import { callWithConfirm } from "../../utils/call-with-confirm"

export default observer(function PomodoroTimerControl({
  state,
}: {
  state: State
}) {
  return (
    <div className="flex justify-between  py-4 px-2 font-bold md:py-6 md:px-6">
      <div className="flex space-x-2">
        {!state.isRunning && !state.isFinished && (
          <PomodoroTimerButton
            state={state}
            name="START"
            onClick={() => state.start()}
          />
        )}

        {state.isRunning && (
          <PomodoroTimerButton
            state={state}
            name="STOP"
            onClick={() => state.stop()}
          />
        )}

        {state.isStarted && (
          <PomodoroTimerButton
            state={state}
            name="RESET"
            onClick={() =>
              callWithConfirm(() => state.reset(), {
                message: [
                  `A timer has been started in ${state.kind} mode,`,
                  `are you sure to reset it?`,
                ].join("\n"),
              })
            }
          />
        )}
      </div>
    </div>
  )
})
