import classes from "classnames"
import { observer } from "mobx-react-lite"
import PageLayoutLogo from "./PageLayoutLogo"
import PageLayoutLang from "./PageLayoutLang"
import PageLayoutMenu from "./PageLayoutMenu"
import { PageLayoutState as State } from "./PageLayoutState"

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

      <div className="flex items-center space-x-2">
        <PageLayoutLang state={state} />
        <PageLayoutMenu state={state} />
      </div>
    </div>
  )
})
