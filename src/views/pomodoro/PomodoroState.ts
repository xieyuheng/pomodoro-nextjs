import { makeAutoObservable } from "mobx"
import { removeFirst } from "../../utils/remove-first"
import { tailwind } from "../../config/tailwind"
import { next } from "../../config/next"
import { emptySoundLoop } from "../../config/howler"
import { Mode, ModeKind } from "./Mode"
import { Task } from "./Task"
import { Settings, defaultSettings, testingSettings } from "./Settings"
import { Timer, TimerJson } from "./Timer"

export type PomodoroStateJson = {
  mode: Mode
  timer: TimerJson
  playing: boolean
  editing: boolean
  currentTesk: Task | null
  tasks: Array<Task>
  inputTaskTitle: string | null
  settings: Settings
}

export class PomodoroState {
  mode: Mode
  timer: Timer
  playing = false
  editing = false
  currentTesk: Task | null = null
  tasks: Array<Task> = []
  inputTaskTitle: string | null = null
  settings: Settings = next.dev ? testingSettings : defaultSettings
  classes = {
    transition: "transition duration-500 ease-out",
  }

  constructor() {
    this.mode = this.settings.modes.Focus
    this.timer = new Timer(this.mode.interval)
    makeAutoObservable(this)
  }

  json(): PomodoroStateJson {
    return {
      mode: this.mode,
      timer: this.timer.json(),
      playing: this.playing,
      editing: this.editing,
      currentTesk: this.currentTesk,
      tasks: this.tasks,
      inputTaskTitle: this.inputTaskTitle,
      settings: this.settings,
    }
  }

  static create(json: PomodoroStateJson): PomodoroState {
    const state = new PomodoroState()
    state.mode = json.mode
    state.timer = Timer.create(json.timer)
    state.playing = json.playing
    state.editing = json.editing
    state.currentTesk = json.currentTesk
    state.tasks = json.tasks
    state.inputTaskTitle = json.inputTaskTitle
    state.settings = json.settings
    return state
  }

  addTask() {
    const ids = this.tasks.map((task) => task.id)
    const newId = ids.length === 0 ? 0 : Math.max(...ids) + 1
    const newTask = {
      id: newId,
      title: this.inputTaskTitle || "",
      count: 0,
    }

    if (this.inputTaskTitle) {
      if (this.currentTesk === null) {
        this.currentTesk = newTask
        this.inputTaskTitle = null
      } else {
        this.tasks.push(newTask)
        this.inputTaskTitle = null
      }
    }
  }

  get time(): number {
    return this.timer.time
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

  get kind(): ModeKind {
    return this.mode.kind
  }

  changeMode(kind: ModeKind): void {
    this.mode = this.settings.modes[kind]
    this.timer.reset(this.mode.interval)
  }

  get themeColor(): string {
    const kind = this.kind.toLowerCase()
    return tailwind.theme.colors[kind][400]
  }

  start(): void {
    if (!this.playing) {
      emptySoundLoop().play()
    }

    this.timer.start({
      onFinished: () => {
        this.notify()
        if (this.currentTesk && this.mode.kind === "Focus") {
          this.currentTesk.count++
        }
      },
    })
  }

  selectTask(id: number): void {
    const task = this.tasks.find((task) => task.id === id)
    if (task === undefined) return

    removeFirst(this.tasks, (task) => task.id === id)

    if (this.currentTesk) {
      this.tasks.unshift(this.currentTesk)
    }

    this.currentTesk = task
  }

  formatTitle(): string | null {
    let title = "🍅"

    if (this.timer.isStarted) {
      title += ` ${this.timer.formatTime()}`
    }

    if (this.currentTesk) {
      title += ` ${this.currentTesk.title}`
    } else {
      title += ` Pomodoro`
    }

    return title
  }
}
