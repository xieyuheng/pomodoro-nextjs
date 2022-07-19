import classes from "classnames"
import { observer } from "mobx-react-lite"
import { PageLayoutState as State } from "./PageLayoutState"
import { Menu, Transition } from "@headlessui/react"
import { MenuIcon } from "@heroicons/react/outline"

export default observer(function PageLayoutMenu({ state }: { state: State }) {
  return (
    <div>
      <MenuIcon className="h-5 w-5" />
    </div>
  )
})
