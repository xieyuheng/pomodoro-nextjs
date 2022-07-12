import { makeAutoObservable } from "mobx"

export class Lang {
  tag: string = "en"

  constructor() {
    makeAutoObservable(this)
  }

  get zh(): boolean {
    return this.tag.startsWith("zh")
  }

  get en(): boolean {
    return !this.zh
  }
}
