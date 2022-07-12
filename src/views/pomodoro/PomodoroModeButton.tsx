import classes from "classnames"
import { observer } from "mobx-react-lite"
import { PomodoroState as State } from "./PomodoroState"
import { ModeKind } from "./Mode"
import { callWithConfirm } from "../../utils/call-with-confirm"

export default observer(function PomodoroModeButton({
  state,
  kind,
}: {
  state: State
  kind: ModeKind
}) {
  return (
    <button
      disabled={state.kind === kind}
      className={classes(
        "border-2 py-1 px-3",
        state.classes.transition,
        state.kind === kind
          ? `border-${state.theme}-400 bg-${state.theme}-600 text-${state.theme}-200`
          : `border-${state.theme}-500 bg-${state.theme}-500 text-${state.theme}-300`
      )}
      onClick={() => {
        callWithConfirm(() => state.changeMode(kind), {
          when: state.timer.isStarted && !state.timer.isFinished,
          message: [
            `A timer has been started in ${state.kind} mode,`,
            `are you sure to change to ${kind} mode?`,
          ].join("\n"),
        })
      }}
    >
      {kind}
    </button>
  )
})
