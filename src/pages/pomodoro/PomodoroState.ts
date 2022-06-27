const defaultTime = 25 * 60 * 1000

export class PomodoroState {
  constructor(public time: number = defaultTime) {}

  start(): void {
    setInterval(() => {
      this.time -= 1000
    }, 1000)
  }

  get minutes(): number {
    return Math.floor(this.time / (60 * 1000))
  }

  get seconds(): number {
    const total = this.time / 1000
    return total % 60
  }

  formatMinutes(): string {
    return this.minutes.toString()
  }

  formatSeconds(): string {
    return this.seconds.toString()
  }
}
