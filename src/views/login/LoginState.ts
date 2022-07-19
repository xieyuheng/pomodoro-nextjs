import { makeAutoObservable } from "mobx"
import { lang } from "../../states/lang"
import { theme } from "../../states/theme"

export class LoginState {
  lang = lang
  theme = theme

  constructor() {
    makeAutoObservable(this)
  }
}
