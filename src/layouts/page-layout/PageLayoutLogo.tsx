import { observer } from "mobx-react-lite"
import { PageLayoutState as State } from "./PageLayoutState"
import Link from "../../components/Link"

export default observer(function PageLayoutLogo({ state }: { state: State }) {
  return (
    <Link
      href="/"
      className="font-logo text-2xl font-bold hover:underline md:text-3xl"
    >
      {state.appName}
    </Link>
  )
})
