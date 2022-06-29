import { makeAutoObservable } from "mobx"
import { leftPad } from "../../utils/left-pad"
import { tailwind } from "../../config/tailwind"
import { Mode, ModeKind } from "./Mode"
import { Settings } from "./Settings"

type Timer = ReturnType<typeof setInterval>

export class PomodoroState {
  mode: Mode
  time: number
  timer: Timer | null = null
  settings: Settings = Settings.defaultSettings()
  notificationPermission = "default"

  classes = {
    transition: "transition delay-0 duration-500 ease-out",
  }

  constructor() {
    this.mode = this.settings.modes.Focus
    this.time = this.mode.interval
    makeAutoObservable(this)
  }

  async setupNotification(): Promise<void> {
    switch (Notification.permission) {
      case "default": {
        await this.requestNotificationPermission()
        return
      }
      case "granted": {
        return
      }
      case "denied": {
        return
      }
    }
  }

  async requestNotificationPermission(): Promise<void> {
    this.notificationPermission = await Notification.requestPermission()
  }

  notify(): void {
    new Notification("Pomodoro", {
      body: `${this.mode.kind} finished.`,
      vibrate: [300, 100, 300, 100, 300],
    })
  }

  changeMode(kind: ModeKind): void {
    this.mode = this.settings.modes[kind]
    this.reset()
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
      } else {
        this.stop()
        this.notify()
      }
    }, 1000)
  }

  get isRunning(): boolean {
    return this.timer !== null
  }

  get isStarted(): boolean {
    return this.time !== this.mode.interval
  }

  stop(): void {
    if (this.timer === null) return

    clearInterval(this.timer)
    this.timer = null
  }

  reset(): void {
    this.time = this.mode.interval
    this.stop()
  }

  formatTime(): string {
    return `${this.formatMinutes()}:${this.formatSeconds()}`
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
}
