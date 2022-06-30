type Action = () => void

type Options = {
  message: string
  when?: boolean
}

export function callWithConfirm(action: Action, options: Options): void {
  const { message, when } = options

  if (when) {
    if (window.confirm(message)) {
      action()
    }
  } else {
    action()
  }
}
