export type ModeKind = "Focus" | "Break" | "Recess"

export abstract class Mode {
  abstract kind: ModeKind
  abstract interval: number
}

export class Focus extends Mode {
  kind = "Focus" as const

  constructor(public interval: number) {
    super()
  }
}

export class Break extends Mode {
  kind = "Break" as const

  constructor(public interval: number) {
    super()
  }
}

export class Recess extends Mode {
  kind = "Recess" as const

  constructor(public interval: number) {
    super()
  }
}
