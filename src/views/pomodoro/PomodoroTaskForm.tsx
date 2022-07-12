import classes from "classnames"
import { observer } from "mobx-react-lite"
import { PomodoroState as State } from "./PomodoroState"
import IconPlus from "../../icons/IconPlus"

export default observer(function PomodoroTaskForm({
  state,
}: {
  state: State
}) {
  return (
    <div
      className={classes(
        "flex w-full flex-col border-2 p-3 md:py-4",
        state.classes.transition,
        `border-${state.theme}-200  bg-${state.theme}-100  text-${state.theme}-900`
      )}
    >
      <input
        className={classes(
          "flex w-full flex-col border-b-2 p-3",
          "text-xl font-semibold",
          "focus:outline-none focus:ring",
          state.classes.transition,
          `border-${state.theme}-200 bg-${state.theme}-100 text-${state.theme}-900 focus:ring-${state.theme}-200`,
          `placeholder-${state.theme}-400`
        )}
        type="text"
        placeholder="Add a new task ~"
        onChange={(event) => {
          state.inputTaskTitle = event.target.value
        }}
      />

      <div className="flex justify-end space-x-2 pt-4">
        <button
          className={classes(
            "border-2 p-2 text-xl font-semibold",
            state.classes.transition,
            `border-${state.theme}-300 bg-${state.theme}-200 text-${state.theme}-600`
          )}
          onClick={() => {
            state.editing = false
          }}
        >
          CANCEL
        </button>
        <button
          className={classes(
            "border-2 p-2 text-xl font-semibold",
            state.classes.transition,
            `border-${state.theme}-300 bg-${state.theme}-200 text-${state.theme}-600`
          )}
          onClick={(event) => {
            state.addTask()
            state.editing = false
          }}
        >
          SAVE
        </button>
      </div>
    </div>
  )
})
