import classes from "classnames"
import { observer } from "mobx-react-lite"
import { PomodoroState as State } from "./PomodoroState"
import PomodoroModebar from "./PomodoroModebar"
import PomodoroTimerControl from "./PomodoroTimerControl"

export default observer(function PomodoroTimer({ state }: { state: State }) {
  return (
    <div
      className={classes(
        "flex flex-col items-center justify-between border-4 py-2 px-2 md:px-6",
        "h-64 md:h-80",
        state.classes.transition,
        {
          "border-red-600 bg-red-500 bg-red-400": state.kind === "Focus",
          "border-sky-600 bg-sky-500 bg-sky-400": state.kind === "Break",
          "border-violet-600 bg-violet-500 bg-violet-400":
            state.kind === "Recess",
        }
      )}
    >
      <PomodoroModebar state={state} />

      {!state.timer.isFinished ? (
        <div className="pt-2 font-mono text-8xl font-semibold md:text-9xl">
          {state.timer.formatTime()}
        </div>
      ) : (
        <div className="flex flex-col items-center pt-2">
          <div className="text-4xl md:text-5xl">{state.kind} finished</div>
          <div className="py-2 font-mono text-3xl font-semibold md:text-4xl">
            {state.timer.formatInterval()}
          </div>
        </div>
      )}

      <PomodoroTimerControl state={state} />
    </div>
  )
})
