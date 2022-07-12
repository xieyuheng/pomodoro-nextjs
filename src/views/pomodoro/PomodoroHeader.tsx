import classes from "classnames"
import { observer } from "mobx-react-lite"
import { PomodoroState as State } from "./PomodoroState"
import IconTranslate from "../../icons/IconTranslate"

export default observer(function PomodoroHeader({ state }: { state: State }) {
  return (
    <div
      className={classes(
        "flex w-full items-center border-b px-4 py-2 md:py-4",
        "justify-between",
        state.classes.transition,
        `border-${state.theme}-500`
      )}
    >
      <div className="text-3xl font-bold">{state.appName}</div>

      <button
        className="flex items-baseline text-xl font-bold"
        onClick={() => {
          if (!state.lang.zh) {
            state.lang.tag = "zh"
          } else {
            state.lang.tag = "en"
          }
        }}
      >
        {state.lang.zh && "English"}
        {state.lang.en && "汉语"}

        <IconTranslate className="ml-2 h-5 w-5" />
      </button>
    </div>
  )
})
