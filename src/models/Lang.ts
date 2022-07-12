import { makeAutoObservable, autorun } from "mobx"

export class Lang {
  tag: string

  constructor() {
    const tag = window.localStorage.getItem(Lang.name)
    this.tag = tag || "en"

    makeAutoObservable(this)

    autorun(() => localStorage.setItem(Lang.name, this.tag))
  }

  get zh(): boolean {
    return this.tag.startsWith("zh")
  }

  get en(): boolean {
    return !this.zh
  }
}
