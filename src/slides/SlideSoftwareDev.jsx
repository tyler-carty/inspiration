import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function SlideSoftwareDev() {
  const [phase, setPhase] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => setPhase(1), 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="w-full h-full flex items-center justify-center px-8">
      <div className="text-center max-w-4xl">
        <motion.h1
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="font-pixel uppercase leading-loose mb-8"
          style={{
            fontSize: 'clamp(0.9rem, 2.2vw, 2rem)',
            color: '#00f0ff',
            textShadow: '0 0 10px #00f0ff, 0 0 30px #00f0ff',
          }}
        >
          I wanted to be a<br />software developer
        </motion.h1>

        <AnimatePresence>
          {phase >= 1 && (
            <motion.div
              key="bad-news"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, ease: [0.175, 0.885, 0.32, 1.275] }}
            >
              <h2
                className="font-pixel uppercase leading-loose mb-6"
                style={{
                  fontSize: 'clamp(0.9rem, 2.2vw, 2rem)',
                  color: '#ff2d78',
                  textShadow: '0 0 10px #ff2d78, 0 0 30px #ff2d78',
                }}
              >
                But I hated making apps!
              </h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="font-mono"
                style={{
                  fontSize: 'clamp(0.6rem, 1.3vw, 0.9rem)',
                  color: 'rgba(240,240,240,0.55)',
                }}
              >
                Designing buttons and screens was SO boring to me. I was stuck.
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
