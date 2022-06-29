import { FC } from "react"
import classNames from "classnames"
import { observer } from "mobx-react-lite"

export const PomodoroTimerButton: FC<{
  name: string
  onClick: () => void
}> = observer(({ name, onClick }) => (
  <button
    className="rounded-md border-2 border-focus-300 bg-focus-200 px-4 py-2 text-2xl text-focus-600 md:text-3xl"
    onClick={onClick}
  >
    {name}
  </button>
))
