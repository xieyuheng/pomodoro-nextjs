const defaultTime = 25 * 60 * 1000

export class PomodoroState {
  constructor(public time: number = defaultTime) {}
}
