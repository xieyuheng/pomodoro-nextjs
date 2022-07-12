import { PomodoroState } from "./PomodoroState"

export function usePomodoroState(): [
  PomodoroState,
  (state: PomodoroState) => void
] {
  let state = new PomodoroState()
  let saveState: (state: PomodoroState) => void = () => {}

  if (typeof window === "undefined") {
    return [state, saveState]
  }

  const found = window.localStorage.getItem(PomodoroState.name)
  if (found) {
    state = PomodoroState.create(JSON.parse(found))
    saveState = (state) => {
      localStorage.setItem(PomodoroState.name, JSON.stringify(state.json()))
    }
  }

  return [state, saveState]
}
