import { makeAutoObservable, autorun } from "mobx"

export class Lang {
  tag: string

  tags = ["zh", "en"]

  constructor() {
    const tag = localStorage.getItem("Lang")
    this.tag = tag || "en"

    makeAutoObservable(this)

    autorun(() => localStorage.setItem("Lang", this.tag))
  }

  get zh(): boolean {
    return this.tag.startsWith("zh")
  }

  get en(): boolean {
    return !this.zh
  }

  findTagName(tag: string): string {
    switch (tag) {
      case "zh":
        return "中文"
      case "en":
        return "English"
      default:
        return "English"
    }
  }

  get tagName(): string {
    return this.findTagName(this.tag)
  }
}
