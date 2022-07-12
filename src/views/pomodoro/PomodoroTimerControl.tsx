import { observer } from "mobx-react-lite"
import { PomodoroState as State } from "./PomodoroState"
import PomodoroTimerButton from "./PomodoroTimerButton"
import { callWithConfirm } from "../../utils/call-with-confirm"
import { useLang } from "../../hooks/useLang"

export default observer(function PomodoroTimerControl({
  state,
}: {
  state: State
}) {
  const lang = useLang()

  return (
    <div className="flex justify-between py-2 px-2 font-bold md:py-4 md:px-6">
      <div className="flex space-x-2">
        {!state.timer.isRunning && !state.timer.isFinished && (
          <PomodoroTimerButton
            state={state}
            name={lang.zh ? "开始" : "START"}
            onClick={() => state.start()}
          />
        )}

        {state.timer.isRunning && (
          <PomodoroTimerButton
            state={state}
            name={lang.zh ? "暂停" : "STOP"}
            onClick={() => state.timer.stop()}
          />
        )}

        {state.timer.isStarted && (
          <PomodoroTimerButton
            state={state}
            name={lang.zh ? "重置" : "RESET"}
            onClick={() =>
              callWithConfirm(() => state.timer.reset(), {
                message: lang.zh
                  ? [`计时器已经开始了，`, `确定要重置吗？`].join("\n")
                  : [
                      `A timer has been started in ${state.kind} mode,`,
                      `are you sure to reset it?`,
                    ].join("\n"),
                when: !state.timer.isFinished,
              })
            }
          />
        )}
      </div>
    </div>
  )
})
