import { Mode } from "./Mode"

type ModesSetting = {
  Focus: Mode
  Break: Mode
  Recess: Mode
}

export class Settings {
  modes: ModesSetting

  constructor(options: { modes: ModesSetting }) {
    this.modes = options.modes
  }

  static defaultSettings(): Settings {
    return new Settings({
      modes: {
        Focus: { kind: "Focus", interval: 25 * 60 },
        Break: { kind: "Break", interval: 5 * 60 },
        Recess: { kind: "Recess", interval: 15 * 60 },
      },
    })
  }

  static testingSettings(): Settings {
    return new Settings({
      modes: {
        Focus: { kind: "Focus", interval: 5 },
        Break: { kind: "Break", interval: 2 },
        Recess: { kind: "Recess", interval: 3 },
      },
    })
  }
}
