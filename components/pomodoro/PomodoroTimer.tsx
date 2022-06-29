import { PomodoroState as State } from "./PomodoroState"

export default function PomodoroTimer({ state }) {
  return (
    <div className="text-9xl">
      {state.formatMinutes()}:{state.formatSeconds()}
    </div>
  )
}
