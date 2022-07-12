import classes from "classnames"
import { observer } from "mobx-react-lite"
import { PomodoroState as State } from "./PomodoroState"

export default observer(function PomodoroTaskForm({
  state,
  value,
  placeholder,
  onChange,
  onDelete,
  onCancel,
  onSave,
}: {
  state: State
  value?: string
  placeholder?: string
  onChange: (event: any) => void
  onDelete?: () => void
  onCancel?: () => void
  onSave?: () => void
}) {
  return (
    <div>
      <input
        autoFocus
        className={classes(
          "flex w-full flex-col border-b-2 bg-inherit p-3",
          "focus:outline-none focus:ring",
          state.classes.transition,
          `border-${state.theme}-200 text-${state.theme}-900 focus:ring-${state.theme}-200`,
          `placeholder-${state.theme}-400`
        )}
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            if (onSave) onSave()
          }
        }}
      />

      <div className="flex justify-end space-x-2 pt-4">
        {onDelete && (
          <button
            className={classes(
              "border-2 p-2 text-lg font-semibold md:text-xl",
              state.classes.transition,
              `border-${state.theme}-300 bg-${state.theme}-200 text-${state.theme}-600`
            )}
            onClick={onDelete}
          >
            {state.lang.zh ? "删除" : "DELETE"}
          </button>
        )}

        {onCancel && (
          <button
            className={classes(
              "border-2 p-2 text-lg font-semibold md:text-xl",
              state.classes.transition,
              `border-${state.theme}-300 bg-${state.theme}-200 text-${state.theme}-600`
            )}
            onClick={onCancel}
          >
            {state.lang.zh ? "取消" : "CANCEL"}
          </button>
        )}

        {onSave && (
          <button
            className={classes(
              "border-2 p-2 text-lg font-semibold md:text-xl",
              state.classes.transition,
              `border-${state.theme}-300 bg-${state.theme}-200 text-${state.theme}-600`
            )}
            onClick={onSave}
          >
            {state.lang.zh ? "保存" : "SAVE"}
          </button>
        )}
      </div>
    </div>
  )
})
