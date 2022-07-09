import { useState } from "react"
import classNames from "classnames"
import { observer } from "mobx-react-lite"
import { PomodoroState as State } from "./PomodoroState"
import { Task } from "./Task"
import IconPlus from "../../icons/IconPlus"
import PomodoroTaskItemCount from "./PomodoroTaskItemCount"

export default observer(function PomodoroTaskForm({ state }: { state: State }) {
  return (
    <button
      className={classNames(
        "w-full flex flex-col border-dashed border-2 p-3 md:py-4",
        "justify-center items-center",
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
        className={classNames("w-10 h-10", state.classes.transition, {
          "text-focus-300": state.kind === "Focus",
          "text-break-300": state.kind === "Break",
          "text-recess-300": state.kind === "Recess",
        })}
      />
    </button>
  )
})
