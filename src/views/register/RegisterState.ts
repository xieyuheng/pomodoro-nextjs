import { makeAutoObservable } from "mobx"
import { lang } from "../../stores/lang"
import { theme } from "../../stores/theme"

interface Verifying {
  email: string
  confirmation_code: string
  verification_token: string
}

function verifyingLinks(verifying: Verifying) {
  return {
    verify: `/register/${verifying.verification_token}/verify`,
    revoke: `/register/${verifying.verification_token}/revoke`,
  }
}

export class RegisterState {
  lang = lang
  theme = theme

  verifying: Verifying | null = null

  constructor() {
    makeAutoObservable(this)
  }
}
