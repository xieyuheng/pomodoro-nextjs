import classes from "classnames"
import { observer } from "mobx-react-lite"
import { PomodoroState as State } from "./PomodoroState"
import IconPlus from "../../icons/IconPlus"

export default observer(function PomodoroTaskForm({ state }: { state: State }) {
  return state.editing ? (
    <div
      className={classes(
        "flex w-full flex-col border-2 p-3 md:py-4",
        state.classes.transition,
        {
          "border-red-200  bg-red-100  text-red-900": state.kind === "Focus",
          "border-sky-200  bg-sky-100  text-sky-900": state.kind === "Break",
          "border-violet-200 bg-violet-100 text-violet-900":
            state.kind === "Recess",
        }
      )}
    >
      <input
        className={classes(
          "flex w-full flex-col border-b-2 p-3",
          "text-xl font-semibold",
          "focus:outline-none focus:ring",
          state.classes.transition,
          {
            "border-red-200  bg-red-100 text-red-900 focus:ring-red-200":
              state.kind === "Focus",
            "border-sky-200  bg-sky-100 text-sky-900 focus:ring-sky-200":
              state.kind === "Break",
            "border-violet-200 bg-violet-100 text-violet-900 focus:ring-violet-200":
              state.kind === "Recess",
          }
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
            {
              "border-red-300  bg-red-200 text-red-600": state.kind === "Focus",
              "border-sky-300  bg-sky-200 text-sky-600": state.kind === "Break",
              "border-violet-300 bg-violet-200 text-violet-600":
                state.kind === "Recess",
            }
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
            {
              "border-red-300  bg-red-200 text-red-600": state.kind === "Focus",
              "border-sky-300  bg-sky-200 text-sky-600": state.kind === "Break",
              "border-violet-300 bg-violet-200 text-violet-600":
                state.kind === "Recess",
            }
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
  ) : (
    <button
      onClick={() => {
        state.editing = true
      }}
      className={classes(
        "flex w-full flex-col border-2 border-dashed p-3 md:py-4",
        "items-center justify-center",
        state.classes.transition,
        {
          "border-red-300  bg-red-400  hover:bg-red-500":
            state.kind === "Focus",
          "border-sky-300  bg-sky-400  hover:bg-sky-500  ":
            state.kind === "Break",
          "border-violet-300 bg-violet-400 hover:bg-violet-500 ":
            state.kind === "Recess",
        }
      )}
    >
      <IconPlus
        className={classes("h-10 w-10", state.classes.transition, {
          "text-red-300": state.kind === "Focus",
          "text-sky-300": state.kind === "Break",
          "text-violet-300": state.kind === "Recess",
        })}
      />
    </button>
  )
})
