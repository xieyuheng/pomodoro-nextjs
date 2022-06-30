export async function registerServiceWorker(): Promise<void> {
  if (typeof navigator === "undefined") return
  if (!navigator.serviceWorker) return

  try {
    const file = "/service-workers/notifier.js"
    const registration = await navigator.serviceWorker.register(file)

    if (registration.installing) {
      console.log("Service worker installing")
    } else if (registration.waiting) {
      console.log("Service worker installed")
    } else if (registration.active) {
      console.log("Service worker active")
    }
  } catch (error) {
    console.error(`Registration failed with ${error}`)
  }
}
