import { makeAutoObservable } from "mobx"
import { leftPad } from "../../utils/left-pad"
import { removeFirst } from "../../utils/remove-first"
import { tailwind } from "../../config/tailwind"
import { next } from "../../config/next"
import { emptySoundLoop } from "../../config/howler"
import { Mode, ModeKind } from "./Mode"
import { Settings } from "./Settings"

type Timer = ReturnType<typeof setInterval>

interface Task {
  id: number
  title: string
}

const testingTasks = [
  { id: 1, title: "Lorem ipsum dolor sit amet" },
  { id: 2, title: "consectetur adipiscing elit" },
  { id: 3, title: "Ut enim ad minim veniam" },
  {
    id: 4,
    title:
      "quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
  },
  {
    id: 5,
    title:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
  },
]

const testingCurrentTask = {
  id: 6,
  title: "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
}

export class PomodoroState {
  mode: Mode

  time: number
  timer: Timer | null = null

  playing = false

  currentTesk: Task | null = testingCurrentTask
  tasks: Array<Task> = testingTasks

  settings: Settings = next.dev
    ? Settings.testingSettings()
    : Settings.defaultSettings()

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
        await Notification.requestPermission()
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

  async notify(): Promise<void> {
    if (Notification.permission === "granted") {
      const registration = await navigator.serviceWorker.ready
      registration.showNotification("Pomodoro Notifier", {
        body: `${this.mode.kind} finished.`,
      })
    }
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
    if (!this.playing) {
      emptySoundLoop().play()
    }

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

  selectTask(id: number): void {
    const task = this.tasks.find((task) => task.id === id)
    if (task === undefined) return

    removeFirst(this.tasks, (task) => task.id === id)
    this.tasks.push(this.currentTesk)
    this.currentTesk = task
  }

  formatTitle(): string | null {
    let title = "🍅"

    if (this.isStarted) {
      title += ` ${this.formatTime()}`
    }

    if (this.currentTesk) {
      title += ` ${this.currentTesk.title}`
    }

    return title
  }
}

function formatTime(time: number): string {
  const minutes = Math.floor(time / 60)
  const seconds = time % 60

  const mm = leftPad(minutes.toString(), 2, "0")
  const ss = leftPad(seconds.toString(), 2, "0")

  return `${mm}:${ss}`
}
