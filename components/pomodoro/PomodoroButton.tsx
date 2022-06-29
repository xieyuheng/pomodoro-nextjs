import { FC } from "react"
import { observer } from "mobx-react-lite"

export const PomodoroButton: FC<{
  name: string
  onClick: () => void
}> = observer(({ name, onClick }) => (
  <button
    className="rounded border-2 border-red-300 bg-red-100 px-4 py-2 text-3xl text-red-600"
    onClick={onClick}
  >
    {name}
  </button>
))
