import { useEffect, useState } from "react"
import { PomodoroState } from "./PomodoroState"

export function usePomodoroState(): [
  PomodoroState,
  (state: PomodoroState) => void
] {
  let state = new PomodoroState()
  let saveState: (state: PomodoroState) => void = () => {}

  const [isComponentMounted, setIsComponentMounted] = useState(false)
  useEffect(() => setIsComponentMounted(true), [])

  if (typeof window === "undefined") {
    return [state, saveState]
  }

  if (!isComponentMounted) {
    return [state, saveState]
  }

  const found = window.localStorage.getItem(PomodoroState.name)
  if (found) {
    state = PomodoroState.create(JSON.parse(found))
    saveState = (state: PomodoroState) => {
      window.localStorage.setItem(
        PomodoroState.name,
        JSON.stringify(state.json())
      )
    }
  }

  return [state, saveState]
}
