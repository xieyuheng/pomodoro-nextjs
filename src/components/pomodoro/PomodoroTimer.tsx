import classNames from "classnames"
import { observer } from "mobx-react-lite"
import { PomodoroState as State } from "./PomodoroState"
import PomodoroModebar from "./PomodoroModebar"
import PomodoroTimerControl from "./PomodoroTimerControl"

export default observer(function PomodoroTimer({ state }: { state: State }) {
  return (
    <div
      className={classNames(
        "flex flex-col items-center justify-between rounded-lg border-2 py-2 px-2 md:px-6",
        "h-64 md:h-80",
        state.classes.transition,
        `border-${state.theme}-600 bg-${state.theme}-500 bg-${state.theme}-400`
      )}
    >
      <PomodoroModebar state={state} />

      {!state.isFinished ? (
        <div className="pt-2 font-mono text-8xl font-semibold md:text-9xl">
          {state.formatTime()}
        </div>
      ) : (
        <div className="flex flex-col items-center pt-2">
          <div className="text-4xl md:text-5xl">{state.kind} finished</div>
          <div className="py-2 font-mono text-3xl font-semibold md:text-4xl">
            {state.formatInterval()}
          </div>
        </div>
      )}

      <PomodoroTimerControl state={state} />
    </div>
  )
})
