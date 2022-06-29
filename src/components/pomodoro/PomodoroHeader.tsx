import { FC } from "react"
import classNames from "classnames"
import { observer } from "mobx-react-lite"
import { PomodoroState as State } from "./PomodoroState"
import IconBell from "../../icons/IconBell"

export const PomodoroHeader: FC<{ state: State }> = observer(({ state }) => (
  <div
    className={classNames(
      "flex w-full items-center border-b px-4 py-4 font-sans text-3xl font-semibold",
      "justify-between",
      state.classes.transition,
      {
        "border-focus-500": state.kind === "Focus",
        "border-break-500": state.kind === "Break",
        "border-recess-500": state.kind === "Recess",
      }
    )}
  >
    <div>Pomodoro</div>

    {!state.canNotify && (
      <button
        title="Enable notification."
        className="h-6 w-6"
        onClick={() => state.enableNotification()}
      >
        <IconBell />
      </button>
    )}
  </div>
))
