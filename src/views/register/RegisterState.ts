import { makeAutoObservable } from "mobx"
import { lang } from "../../states/lang"
import { theme } from "../../states/theme"

export class RegisterState {
  lang = lang
  theme = theme

  constructor() {
    makeAutoObservable(this)
  }
}
