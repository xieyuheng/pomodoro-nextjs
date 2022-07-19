import { makeAutoObservable } from "mobx"
import { tailwindConfig } from "../lib/tailwind"

export class Theme {
  constructor(public name: string) {
    makeAutoObservable(this)
  }

  get color(): string {
    return tailwindConfig.theme.colors[this.name][400]
  }
}
