'use client'

export function startViewTransition(callback: () => void) {
  if (!document.startViewTransition) {
    callback()
    return
  }

  document.startViewTransition(callback)
}

export function navigateWithTransition(href: string) {
  startViewTransition(() => {
    window.location.href = href
  })
}

export function updateWithTransition(callback: () => void) {
  startViewTransition(callback)
}

// Custom hook for view transitions
export function useViewTransition() {
  return {
    navigate: navigateWithTransition,
    update: updateWithTransition,
    isSupported: typeof document !== 'undefined' && 'startViewTransition' in document,
  }
}
