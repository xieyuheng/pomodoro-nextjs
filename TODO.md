- one mode one theme

- rename ut to utils

- use `tailwindConfig` to set meta `theme-color`

  ```
  import resolveConfig from "tailwindcss/resolveConfig"
  import tailwindConfig from "../../tailwind.config.js"

  const fullConfig = resolveConfig(tailwindConfig)
  ```

- `PomodoroTasks`
- `PomodoroTasks` -- show current task name in page title

- use `localStorage`

- be able to config

  - focus
  - break
  - recess

- `useConfig` -- with `lang`

- add notification
