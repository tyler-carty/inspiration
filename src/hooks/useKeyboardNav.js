import { useState, useEffect, useRef, useCallback } from 'react'

export function useKeyboardNav({ totalSlides, onReveal }) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const directionRef = useRef(1)

  const goNext = useCallback(() => {
    setCurrentSlide((s) => {
      if (s < totalSlides - 1) {
        directionRef.current = 1
        return s + 1
      }
      return s
    })
  }, [totalSlides])

  const goPrev = useCallback(() => {
    setCurrentSlide((s) => {
      if (s > 0) {
        directionRef.current = -1
        return s - 1
      }
      return s
    })
  }, [])

  const goTo = useCallback((index) => {
    setCurrentSlide((s) => {
      directionRef.current = index > s ? 1 : -1
      return Math.max(0, Math.min(totalSlides - 1, index))
    })
  }, [totalSlides])

  useEffect(() => {
    let touchStartX = null

    const handleTouchStart = (e) => {
      touchStartX = e.touches[0].clientX
    }

    const handleTouchEnd = (e) => {
      if (touchStartX === null) return
      const delta = touchStartX - e.changedTouches[0].clientX
      if (Math.abs(delta) > 50) {
        delta > 0 ? goNext() : goPrev()
      }
      touchStartX = null
    }

    window.addEventListener('touchstart', handleTouchStart, { passive: true })
    window.addEventListener('touchend', handleTouchEnd, { passive: true })

    return () => {
      window.removeEventListener('touchstart', handleTouchStart)
      window.removeEventListener('touchend', handleTouchEnd)
    }
  }, [goNext, goPrev])

  useEffect(() => {
    const handleKeyDown = (e) => {
      switch (e.code) {
        case 'ArrowRight':
        case 'Space':
        case 'PageDown':
          e.preventDefault()
          goNext()
          break
        case 'ArrowLeft':
        case 'PageUp':
          e.preventDefault()
          goPrev()
          break
        case 'Enter':
        case 'KeyR':
          e.preventDefault()
          onReveal?.()
          break
        default:
          break
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [goNext, goPrev, onReveal])

  return { currentSlide, direction: directionRef.current, goNext, goPrev, goTo }
}
