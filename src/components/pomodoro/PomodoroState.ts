import { makeAutoObservable } from "mobx"
import { leftPad } from "../../utils/left-pad"
import { tailwind } from "../../config/tailwind"
import { Mode, ModeKind, Focus, Break, Recess } from "./Mode"

type Settings = {
  modes: {
    focus: Focus
    break: Break
    recess: Recess
  }
}

const defaultModes = {
  focus: new Focus(25 * 60),
  break: new Break(10 * 60),
  recess: new Recess(20 * 60),
}

type Timer = ReturnType<typeof setInterval>

export class PomodoroState {
  mode: Mode
  time: number
  timer?: Timer = undefined

  settings: Settings = { modes: defaultModes }

  classes = {
    transition: "transition duration-500 ease-in",
  }

  constructor() {
    this.mode = this.settings.modes.focus
    this.time = this.mode.interval

    makeAutoObservable(this)
  }

  changeMode(kind: ModeKind): void {
    switch (kind) {
      case "Focus": {
        this.mode = this.settings.modes.focus
        this.reset()
        return
      }

      case "Break": {
        this.mode = this.settings.modes.break
        this.reset()
        return
      }

      case "Recess": {
        this.mode = this.settings.modes.recess
        this.reset()
        return
      }
    }
  }

  get kind(): ModeKind {
    return this.mode.kind
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
