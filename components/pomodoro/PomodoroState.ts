import { makeAutoObservable } from "mobx"
import { leftPad } from "../../ut/left-pad"

const pomodoroTime = 25 * 60 * 1000

export class PomodoroState {
  time: number
  runner: number | null

  constructor(public time: number = pomodoroTime) {
    this.runner = null

    makeAutoObservable(this)
  }

  start(): void {
    this.runner = setInterval(() => {
      this.time -= 1000
    }, 1000)
  }

  isRunning(): boolean {
    return this.runner !== null
  }

  stop(): void {
    console.log(this)

    if (this.runner !== null) {
      clearInterval(this.runner)
      this.runner = null
    }
  }

  get minutes(): number {
    return Math.floor(this.time / (60 * 1000))
  }

  get seconds(): number {
    const total = this.time / 1000
    return total % 60
  }

  formatMinutes(): string {
    return leftPad(this.minutes.toString(), 2, "0")
  }

  formatSeconds(): string {
    return leftPad(this.seconds.toString(), 2, "0")
  }
}
