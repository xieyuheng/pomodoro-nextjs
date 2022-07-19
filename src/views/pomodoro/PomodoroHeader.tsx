import { Fragment } from "react"
import classes from "classnames"
import { observer } from "mobx-react-lite"
import { PomodoroState as State } from "./PomodoroState"
import { Listbox, Transition } from "@headlessui/react"
import {
  TranslateIcon,
  CheckIcon,
  SelectorIcon,
} from "@heroicons/react/outline"

export default observer(function PomodoroHeader({ state }: { state: State }) {
  return (
    <div
      className={classes(
        "flex w-full items-center border-b px-4 pt-3 pb-2 md:py-4",
        "justify-between",
        state.classes.transition,
        `border-${state.theme}-500`
      )}
    >
      <div className="text-3xl font-bold">{state.appName}</div>

      <Listbox
        as="div"
        className="relative flex text-xl"
        value={state.lang.tag}
        onChange={(tag) => (state.lang.tag = tag)}
      >
        <Listbox.Button className="flex items-center font-bold">
          {state.lang.tagName}
          <TranslateIcon className="ml-1.5 h-5 w-5" />
          <SelectorIcon className="h-5 w-5" />
        </Listbox.Button>

        <Transition
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          <Listbox.Options
            className={classes(
              "absolute top-8 right-0 border-2 min-w-max",
              `bg-${state.theme}-400 border-${state.theme}-300`
            )}
          >
            {state.lang.tags.map((tag) => (
              <Listbox.Option key={tag} value={tag}>
                {({ active, selected }) => (
                  <div
                    className={classes(
                      "flex min-w-max items-center p-2",
                      active && `bg-${state.theme}-500`
                    )}
                  >
                    {state.lang.findTagName(tag)}
                    {selected && <CheckIcon className="ml-2 h-5 w-5" />}
                  </div>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </Listbox>
    </div>
  )
})
