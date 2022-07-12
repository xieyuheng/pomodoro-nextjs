import classes from "classnames"
import { observer } from "mobx-react-lite"
import { PomodoroState as State } from "./PomodoroState"
import IconPlus from "../../icons/IconPlus"
import PomodoroTaskForm from "./PomodoroTaskForm"

export default observer(function PomodoroTaskInput({
  state,
}: {
  state: State
}) {
  return state.editing ? (
    <PomodoroTaskForm state={state} />
  ) : (
    <button
      onClick={() => {
        state.editing = true
      }}
      className={classes(
        "flex w-full flex-col border-2 border-dashed p-3 md:py-4",
        "items-center justify-center",
        state.classes.transition,
        `border-${state.theme}-300 bg-${state.theme}-400 hover:bg-${state.theme}-500`
      )}
    >
      <IconPlus
        className={classes(
          "h-10 w-10",
          state.classes.transition,
          `text-${state.theme}-300`
        )}
      />
    </button>
  )
})
