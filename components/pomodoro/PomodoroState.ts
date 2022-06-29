import { makeAutoObservable } from "mobx"
import { leftPad } from "../../ut/left-pad"

export type Mode = "Focus" | "Break" | "Recess"

type Timer = ReturnType<typeof setInterval>

export class PomodoroState {
  mode: Mode = "Focus"
  timer?: Timer = undefined
  time: number

  constructor(public interval: number = 25 * 60 * 1000) {
    this.time = interval
    makeAutoObservable(this)
  }

  start(): void {
    this.timer = setInterval(() => {
      if (this.time > 0) {
        this.time -= 1000
      }
    }, 1000)
  }

  get isRunning(): boolean {
    return this.timer !== undefined
  }

  get isStarted(): boolean {
    return this.time !== this.interval
  }

  stop(): void {
    if (this.timer === undefined) return

    clearInterval(this.timer)
    this.timer = undefined
  }

  reset(): void {
    clearInterval(this.timer)
    this.timer = undefined
    this.time = this.interval
  }

  private get minutes(): number {
    return Math.floor(this.time / (60 * 1000))
  }

  private get seconds(): number {
    const total = this.time / 1000
    return total % 60
  }

  private formatMinutes(): string {
    return leftPad(this.minutes.toString(), 2, "0")
  }

  private formatSeconds(): string {
    return leftPad(this.seconds.toString(), 2, "0")
  }

  formatTime(): string {
    return `${this.formatMinutes()}:${this.formatSeconds()}`
  }
}
