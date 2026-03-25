import { useState, useCallback } from 'react'

export function useFraudReveal() {
  const [revealed, setRevealed] = useState(false)

  const reveal = useCallback(() => {
    setRevealed(true)
  }, [])

  const reset = useCallback(() => {
    setRevealed(false)
  }, [])

  return { revealed, reveal, reset }
}
