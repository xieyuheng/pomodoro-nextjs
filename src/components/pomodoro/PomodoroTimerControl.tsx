import { FC } from "react"
import classNames from "classnames"
import { observer } from "mobx-react-lite"
import { PomodoroState as State } from "./PomodoroState"
import { PomodoroTimerButton } from "./PomodoroTimerButton"
import { callWithConfirm } from "../../utils/call-with-confirm"

export const PomodoroTimerControl: FC<{ state: State }> = observer(
  ({ state }) => (
    <div className="flex justify-between  py-4 px-2 font-bold md:py-6 md:px-6">
      {!state.isRunning && (
        <div className="flex space-x-2">
          <PomodoroTimerButton
            state={state}
            name="START"
            onClick={() => state.start()}
          />

          {state.isStarted && <ResetButton state={state} />}
        </div>
      )}

      {state.isRunning && (
        <div className="flex space-x-2">
          <PomodoroTimerButton
            state={state}
            name="STOP"
            onClick={() => state.stop()}
          />

          {state.isStarted && <ResetButton state={state} />}
        </div>
      )}
    </div>
  )
)

const ResetButton: FC<{ state: State }> = observer(({ state }) => (
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
))
