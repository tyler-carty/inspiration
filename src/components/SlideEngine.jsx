import { useRef, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useKeyboardNav } from '../hooks/useKeyboardNav'
import { useFraudReveal } from '../hooks/useFraudReveal'
import SlideCounter from './SlideCounter'
import { slideConfig } from '../slides'

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction > 0 ? '-100%' : '100%',
    opacity: 0,
  }),
}

const transition = {
  duration: 0.35,
  ease: [0.4, 0, 0.2, 1],
}

export default function SlideEngine() {
  const { revealed, reveal, reset } = useFraudReveal()
  const prevSlideRef = useRef(0)
  const directionRef = useRef(1)

  const { currentSlide, goNext, goPrev } = useKeyboardNav({
    totalSlides: slideConfig.length,
    onReveal: reveal,
  })

  // Track direction and reset fraud reveal on slide change
  useEffect(() => {
    directionRef.current = currentSlide > prevSlideRef.current ? 1 : -1
    prevSlideRef.current = currentSlide
    reset()
  }, [currentSlide, reset])

  const config = slideConfig[currentSlide]
  const SlideComponent = config.component

  return (
    <>
      <div className="relative w-screen h-screen overflow-hidden z-10">
        <AnimatePresence mode="wait" custom={directionRef.current}>
          <motion.div
            key={currentSlide}
            custom={directionRef.current}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={transition}
            className="absolute inset-0"
          >
            <SlideComponent
              {...(config.hasReveal ? { revealed, onReveal: reveal } : {})}
            />
          </motion.div>
        </AnimatePresence>
      </div>
      <SlideCounter current={currentSlide} total={slideConfig.length} />
    </>
  )
}
