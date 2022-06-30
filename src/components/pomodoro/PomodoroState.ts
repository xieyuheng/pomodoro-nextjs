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
  // settings: Settings = Settings.testingSettings()
  notificationPermission: NotificationPermission | null = null

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
        await this.enableNotification()
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

  async enableNotification(): Promise<void> {
    this.notificationPermission = await Notification.requestPermission()
  }

  get canNotify(): boolean {
    return this.notificationPermission === "granted"
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
    const kind = this.kind.toLowerCase()
    return tailwind.theme.colors[kind][400]
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

  get isFinished(): boolean {
    return this.time === 0
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
    return formatTime(this.time)
  }

  formatInterval(): string {
    return formatTime(this.mode.interval)
  }
}

function formatTime(time: number): string {
  const minutes = Math.floor(time / 60)
  const seconds = time % 60

  const mm = leftPad(minutes.toString(), 2, "0")
  const ss = leftPad(seconds.toString(), 2, "0")

  return `${mm}:${ss}`
}
