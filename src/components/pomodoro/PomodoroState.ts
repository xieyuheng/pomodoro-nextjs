import { makeAutoObservable } from "mobx"
import { leftPad } from "../../utils/left-pad"
import { tailwind } from "../../config/tailwind"

export type ModeKind = "Focus" | "Break" | "Recess"

export type Mode = {
  kind: ModeKind
  interval: number
}

export const defaultModes = {
  focus: { kind: "Focus", interval: 25 * 60 },
}

type Timer = ReturnType<typeof setInterval>

export class PomodoroState {
  timer?: Timer = undefined
  time: number

  constructor(public mode: Mode = defaultModes.focus) {
    this.time = mode.interval
    makeAutoObservable(this)
  }

  get themeColor(): string {
    return tailwind.theme.colors.focus[400]
  }

  start(): void {
    this.timer = setInterval(() => {
      if (this.time > 0) {
        this.time--
      }
    }, 1000)
  }

  get isRunning(): boolean {
    return this.timer !== undefined
  }

  get isStarted(): boolean {
    return this.time !== this.mode.interval
  }

  stop(): void {
    if (this.timer === undefined) return

    clearInterval(this.timer)
    this.timer = undefined
  }

  reset(): void {
    clearInterval(this.timer)
    this.timer = undefined
    this.time = this.mode.interval
  }

  private get minutes(): number {
    return Math.floor(this.time / 60)
  }

  private get seconds(): number {
    const total = this.time
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