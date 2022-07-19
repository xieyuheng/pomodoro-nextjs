import { observer } from "mobx-react-lite"
import { PageLayoutState as State } from "./PageLayoutState"
import Link from "next/link"

export default observer(function PageLayoutLogo({ state }: { state: State }) {
  return (
    <Link href="/">
      <a className="text-2xl font-bold hover:underline md:text-3xl">
        {state.appName}
      </a>
    </Link>
  )
})
