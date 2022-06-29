import { PomodoroState as State } from "./PomodoroState"
import PomodoroTimer from "./PomodoroTimer"

export default function Pomodoro() {
  const state = new State()

  return (
    <div>
      <div className="h-screen w-screen bg-red-400 text-white">
        <div className="h-full flex flex-col justify-center items-center">
          <PomodoroTimer state={state} />
        </div>
      </div>
    </div>
  )
}
