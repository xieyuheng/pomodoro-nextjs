import { makeAutoObservable } from "mobx"
import { leftPad } from "../../utils/left-pad"

type TimerId = ReturnType<typeof setInterval>

export class Timer {
  time: number
  private id: TimerId | null = null

  constructor(public interval: number) {
    this.time = interval
    makeAutoObservable(this)
  }

  start(options: { onStopped: () => void }): void {
    this.id = setInterval(() => {
      if (this.time > 0) {
        this.time--
      } else {
        this.stop()
        options.onStopped()
      }
    }, 1000)
  }

  get isRunning(): boolean {
    return this.id !== null
  }

  get isStarted(): boolean {
    return this.time !== this.interval
  }

  get isFinished(): boolean {
    return this.time === 0
  }

  stop(): void {
    if (this.id === null) return

    clearInterval(this.id)
    this.id = null
  }

  reset(interval?: number): void {
    if (interval !== undefined) {
      this.interval = interval
    }

    this.time = this.interval
    this.stop()
  }

  formatTime(): string {
    return formatTime(this.time)
  }

  formatInterval(): string {
    return formatTime(this.interval)
  }
}

function formatTime(time: number): string {
  const minutes = Math.floor(time / 60)
  const seconds = time % 60

  const mm = leftPad(minutes.toString(), 2, "0")
  const ss = leftPad(seconds.toString(), 2, "0")

  return `${mm}:${ss}`
}
