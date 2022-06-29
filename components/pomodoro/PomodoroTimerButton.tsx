import { FC } from "react"
import { observer } from "mobx-react-lite"

export const PomodoroTimerButton: FC<{
  name: string
  onClick: () => void
}> = observer(({ name, onClick }) => (
  <button
    className="rounded-md border-2 border-focus-300 bg-focus-200 px-4 py-2 text-3xl text-focus-600"
    onClick={onClick}
  >
    {name}
  </button>
))
