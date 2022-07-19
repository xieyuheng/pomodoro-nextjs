import { Fragment } from "react"
import { Listbox, Transition } from "@headlessui/react"
import {
  TranslateIcon,
  CheckIcon,
  SelectorIcon,
} from "@heroicons/react/outline"
import classes from "classnames"
import { observer } from "mobx-react-lite"
import { PomodoroState as State } from "./PomodoroState"

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
          as={Fragment}
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options
            className={classes(
              "absolute top-8 right-0 border-2",
              `border-${state.theme}-300`
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
