import { makeAutoObservable } from "mobx"
import { lang } from "../../states/lang"
import { theme } from "../../states/theme"

export class PageLayoutState {
  lang = lang
  theme = theme

  classes = {
    transition: "transition delay-0 duration-500 ease-out",
  }

  constructor() {
    makeAutoObservable(this)
  }

  get appName(): string {
    return this.lang.zh ? "番茄钟" : "Pomodoro"
  }

  formatTitle(): string {
    return `${this.appName}`
  }
}
