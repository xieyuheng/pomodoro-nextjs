import { makeAutoObservable } from "mobx"
import { leftPad } from "../../ut/left-pad"

const pomodoroTime = 25 * 60 * 1000

type Timer = ReturnType<typeof setInterval>

export class PomodoroState {
  timer?: Timer = undefined

  constructor(public time: number = pomodoroTime) {
    makeAutoObservable(this)
  }

  start(): void {
    this.timer = setInterval(() => {
      this.time -= 1000
    }, 1000)
  }

  isRunning(): boolean {
    return this.timer !== undefined
  }

  stop(): void {
    if (this.timer === undefined) return

    clearInterval(this.timer)
    this.timer = undefined
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
