import { useState } from "react"
import classNames from "classnames"
import { observer } from "mobx-react-lite"
import { PomodoroState as State } from "./PomodoroState"
import { Task } from "./Task"
import IconPlus from "../../icons/IconPlus"
import PomodoroTaskItemCount from "./PomodoroTaskItemCount"

export default observer(function PomodoroTaskForm({ state }: { state: State }) {
  return state.editing ? (
    <div
      className={classNames(
        "flex w-full flex-col border-2 p-3 md:py-4",
        state.classes.transition,
        {
          "border-focus-200  bg-focus-100  text-focus-900":
            state.kind === "Focus",
          "border-break-200  bg-break-100  text-break-900":
            state.kind === "Break",
          "border-recess-200 bg-recess-100 text-recess-900":
            state.kind === "Recess",
        }
      )}
    >
      <input
        className={classNames(
          "flex w-full flex-col border-b-2 p-3",
          "text-xl font-semibold",
          "focus:outline-none focus:ring",
          state.classes.transition,
          {
            "border-focus-200  bg-focus-100 text-focus-900 focus:ring-focus-200":
              state.kind === "Focus",
            "border-break-200  bg-break-100 text-break-900 focus:ring-break-200":
              state.kind === "Break",
            "border-recess-200 bg-recess-100 text-recess-900 focus:ring-recess-200":
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
          className={classNames(
            "border-2 p-2 text-xl font-semibold",
            state.classes.transition,
            {
              "border-focus-300  bg-focus-200 text-focus-600":
                state.kind === "Focus",
              "border-break-300  bg-break-200 text-break-600":
                state.kind === "Break",
              "border-recess-300 bg-recess-200 text-recess-600":
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
          className={classNames(
            "border-2 p-2 text-xl font-semibold",
            state.classes.transition,
            {
              "border-focus-300  bg-focus-200 text-focus-600":
                state.kind === "Focus",
              "border-break-300  bg-break-200 text-break-600":
                state.kind === "Break",
              "border-recess-300 bg-recess-200 text-recess-600":
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
      className={classNames(
        "flex w-full flex-col border-2 border-dashed p-3 md:py-4",
        "items-center justify-center",
        state.classes.transition,
        {
          "border-focus-300  bg-focus-400  hover:bg-focus-500":
            state.kind === "Focus",
          "border-break-300  bg-break-400  hover:bg-break-500  ":
            state.kind === "Break",
          "border-recess-300 bg-recess-400 hover:bg-recess-500 ":
            state.kind === "Recess",
        }
      )}
    >
      <IconPlus
        className={classNames("h-10 w-10", state.classes.transition, {
          "text-focus-300": state.kind === "Focus",
          "text-break-300": state.kind === "Break",
          "text-recess-300": state.kind === "Recess",
        })}
      />
    </button>
  )
})
