let openWelcomeModal: (() => void) | null = null

export const registerWelcomeModal = (fn: () => void) => {
  openWelcomeModal = fn
}

export const triggerWelcomeModal = () => {
  openWelcomeModal?.()
}
