import { FC } from "react"
import { observer } from "mobx-react-lite"
import { PomodoroState as State } from "./PomodoroState"

export const PomodoroFooter: FC<{ state: State }> = observer(({ state }) => (
  <div></div>
))
