import { FC } from "react"
import classNames from "classnames"
import { observer } from "mobx-react-lite"
import { PomodoroState as State } from "./PomodoroState"

export const PomodoroModeButton: FC<{
  name: string
  active: boolean
}> = observer(({ name, active }) => (
  <button
    className={classNames("rounded border-2 py-1 px-3", {
      "border-focus-400 bg-focus-600 text-focus-200": active,
      "border-focus-500 bg-focus-500 text-focus-300": !active,
    })}
  >
    {name}
  </button>
))
