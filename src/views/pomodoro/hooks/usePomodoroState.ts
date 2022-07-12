import { PomodoroState } from "../PomodoroState"

export function usePomodoroState(): [
  PomodoroState,
  (state: PomodoroState) => void
] {
  const saveState = (state: PomodoroState) => {
    localStorage.setItem(PomodoroState.name, JSON.stringify(state.json()))
  }

  const found = window.localStorage.getItem(PomodoroState.name)

  const state = found
    ? PomodoroState.create(JSON.parse(found))
    : new PomodoroState()

  return [state, saveState]
}
