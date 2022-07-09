import { Focus, Break, Recess } from "./Mode"

type ModesSetting = {
  Focus: Focus
  Break: Break
  Recess: Recess
}

export class Settings {
  modes: ModesSetting

  constructor(options: { modes: ModesSetting }) {
    this.modes = options.modes
  }

  static defaultSettings(): Settings {
    return new Settings({
      modes: {
        Focus: new Focus(25 * 60),
        Break: new Break(5 * 60),
        Recess: new Recess(15 * 60),
      },
    })
  }

  static testingSettings(): Settings {
    return new Settings({
      modes: {
        Focus: new Focus(5),
        Break: new Break(2),
        Recess: new Recess(3),
      },
    })
  }
}
