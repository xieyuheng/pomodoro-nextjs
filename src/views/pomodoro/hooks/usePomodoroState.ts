import { PomodoroState } from "../PomodoroState"

export function usePomodoroState(): [
  PomodoroState,
  (state: PomodoroState) => void
] {
  const saveState = (state: PomodoroState) => {
    localStorage.setItem("PomodoroState", JSON.stringify(state.json()))
  }

  const found = window.localStorage.getItem("PomodoroState")

  const state = found
    ? PomodoroState.create(JSON.parse(found))
    : new PomodoroState()

  return [state, saveState]
}
