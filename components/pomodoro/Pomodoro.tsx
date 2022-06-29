import { PomodoroState as State } from "./PomodoroState"

export default function Pomodoro() {
  const state = new State()

  return (
    <div>
      <div className="h-screen w-screen bg-red-400 text-white">
        <div className="h-full flex flex-col justify-center items-center">
          <div className="text-red-200 text-2xl">{state.time}</div>
        </div>
      </div>
    </div>
  )
}
