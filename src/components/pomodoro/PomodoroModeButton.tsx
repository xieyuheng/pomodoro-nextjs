import { FC } from "react"
import classNames from "classnames"
import { observer } from "mobx-react-lite"
import { PomodoroState as State, ModeKind } from "./PomodoroState"

export const PomodoroModeButton: FC<{
  state: ModeKind
  kind: ModeKind
  active?: boolean
}> = observer(({ state, kind, active }) => (
  <button
    className={classNames("rounded-lg border-2 py-1 px-3", {
      "border-focus-400 bg-focus-600 text-focus-200":
        active && state.mode.kind === "Focus",
      "border-focus-500 bg-focus-500 text-focus-300":
        !active && state.mode.kind === "Focus",

      "border-break-400 bg-break-600 text-break-200":
        active && state.mode.kind === "Break",
      "border-break-500 bg-break-500 text-break-300":
        !active && state.mode.kind === "Break",

      "border-recess-400 bg-recess-600 text-recess-200":
        active && state.mode.kind === "Recess",
      "border-recess-500 bg-recess-500 text-recess-300":
        !active && state.mode.kind === "Recess",
    })}
  >
    {kind}
  </button>
))
