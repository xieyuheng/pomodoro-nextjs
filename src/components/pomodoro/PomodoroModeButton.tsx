import { FC } from "react"
import classNames from "classnames"
import { observer } from "mobx-react-lite"
import { PomodoroState as State } from "./PomodoroState"
import { ModeKind } from "./Mode"
import { callWithConfirm } from "../../utils/call-with-confirm"

export const PomodoroModeButton: FC<{
  state: State
  kind: ModeKind
}> = observer(({ state, kind }) => (
  <button
    disabled={state.kind === kind}
    className={classNames(
      "rounded-lg border-2 py-1 px-3",
      state.classes.transition,
      {
        "border-focus-400 bg-focus-600 text-focus-200":
          state.kind === "Focus" && state.kind === kind,
        "border-focus-500 bg-focus-500 text-focus-300":
          state.kind === "Focus" && state.kind !== kind,

        "border-break-400 bg-break-600 text-break-200":
          state.kind === "Break" && state.kind === kind,
        "border-break-500 bg-break-500 text-break-300":
          state.kind === "Break" && state.kind !== kind,

        "border-recess-400 bg-recess-600 text-recess-200":
          state.kind === "Recess" && state.kind === kind,
        "border-recess-500 bg-recess-500 text-recess-300":
          state.kind === "Recess" && state.kind !== kind,
      }
    )}
    onClick={() => {
      callWithConfirm(() => state.changeMode(kind), {
        when: state.isStarted,
        message: [
          `A timer has been started in ${state.kind} mode,`,
          `are you sure to change to ${kind} mode?`,
        ].join("\n"),
      })
    }}
  >
    {kind}
  </button>
))
