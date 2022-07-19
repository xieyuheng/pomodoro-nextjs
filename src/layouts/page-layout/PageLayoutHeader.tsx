import classes from "classnames"
import { observer } from "mobx-react-lite"
import PageLayoutLogo from "./PageLayoutLogo"
import { PageLayoutState as State } from "./PageLayoutState"
import { Listbox, Transition } from "@headlessui/react"
import {
  TranslateIcon,
  CheckIcon,
  SelectorIcon,
} from "@heroicons/react/outline"

export default observer(function PageLayoutHeader({ state }: { state: State }) {
  return (
    <div
      className={classes(
        "flex w-full items-center border-b px-4 pt-3 pb-2 md:py-4",
        "justify-between",
        state.classes.transition,
        `border-${state.theme.name}-500`
      )}
    >
      <PageLayoutLogo state={state} />

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
              "absolute top-8 right-0 min-w-max border-2",
              `bg-${state.theme.name}-400 border-${state.theme.name}-300`
            )}
          >
            {state.lang.tags.map((tag) => (
              <Listbox.Option key={tag} value={tag}>
                {({ active, selected }) => (
                  <div
                    className={classes(
                      "flex min-w-max items-center p-2",
                      active && `bg-${state.theme.name}-500`
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
