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
      className={classes("border-2 py-1 px-3", state.classes.transition, {
        "border-red-400 bg-red-600 text-red-200":
          state.kind === "Focus" && state.kind === kind,
        "border-red-500 bg-red-500 text-red-300":
          state.kind === "Focus" && state.kind !== kind,

        "border-sky-400 bg-sky-600 text-sky-200":
          state.kind === "Break" && state.kind === kind,
        "border-sky-500 bg-sky-500 text-sky-300":
          state.kind === "Break" && state.kind !== kind,

        "border-violet-400 bg-violet-600 text-violet-200":
          state.kind === "Recess" && state.kind === kind,
        "border-violet-500 bg-violet-500 text-violet-300":
          state.kind === "Recess" && state.kind !== kind,
      })}
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
