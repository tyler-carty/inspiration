import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const shiftLines = [
  { day: 'Mon', time: '9:00am – 5:00pm', done: true },
  { day: 'Tue', time: '10:00am – 3:00pm', done: true },
  { day: 'Sat', time: '8:00am – 6:00pm', done: false },
]

export default function SlideCleaningJob() {
  const [phase, setPhase] = useState(0)

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 1800)
    const t2 = setTimeout(() => setPhase(2), 3600)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [])

  return (
    <div className="w-full h-full flex items-center justify-center px-8">
      <div className="text-center max-w-4xl">
        {/* Phase 0: The setup */}
        <motion.h1
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="font-pixel uppercase leading-loose mb-6"
          style={{
            fontSize: 'clamp(0.9rem, 2.2vw, 2rem)',
            color: '#00f0ff',
            textShadow: '0 0 10px #00f0ff, 0 0 30px #00f0ff',
          }}
        >
          At uni, I had a cleaning job
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="font-mono"
          style={{
            fontSize: 'clamp(0.65rem, 1.4vw, 1rem)',
            color: 'rgba(240,240,240,0.55)',
            marginBottom: '2rem',
          }}
        >
          A wedding venue. Mop, bucket, the works.
        </motion.p>

        {/* Phase 1: The problem */}
        <AnimatePresence>
          {phase >= 1 && (
            <motion.div
              key="problem"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              style={{ marginBottom: '2rem' }}
            >
              <p
                className="font-pixel uppercase leading-loose mb-6"
                style={{
                  fontSize: 'clamp(0.65rem, 1.4vw, 1rem)',
                  color: '#ff2d78',
                  textShadow: '0 0 8px #ff2d78',
                }}
              >
                They tracked every shift on paper.
              </p>

              {/* Paper timesheet visual */}
              <div
                className="inline-block"
                style={{
                  background: 'rgba(255, 255, 240, 0.05)',
                  border: '1px solid rgba(255, 45, 120, 0.35)',
                  borderRadius: '8px',
                  padding: '1rem 1.5rem',
                  boxShadow: '0 0 12px rgba(255,45,120,0.1)',
                }}
              >
                {shiftLines.map((row) => (
                  <div
                    key={row.day}
                    className="font-mono"
                    style={{
                      fontSize: 'clamp(0.6rem, 1.2vw, 0.85rem)',
                      color: row.done ? 'rgba(240,240,240,0.45)' : 'rgba(240,240,240,0.25)',
                      textDecoration: row.done ? 'line-through' : 'none',
                      textAlign: 'left',
                      marginBottom: '0.7rem',
                      letterSpacing: '0.05em',
                    }}
                  >
                    {row.day}: {row.time} {row.done ? '✓' : '...'}
                  </div>
                ))}
                <div
                  className="font-mono"
                  style={{
                    fontSize: 'clamp(0.5rem, 1vw, 0.7rem)',
                    color: 'rgba(255,45,120,0.4)',
                    marginTop: '0.6rem',
                    textAlign: 'left',
                  }}
                >
                  [ page 1 of 12 ]
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Phase 2: The solution */}
        <AnimatePresence>
          {phase >= 2 && (
            <motion.div
              key="solution"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.45, ease: [0.175, 0.885, 0.32, 1.275] }}
            >
              <h2
                className="font-pixel uppercase leading-loose mb-8"
                style={{
                  fontSize: 'clamp(0.9rem, 2.2vw, 2rem)',
                  color: '#39ff14',
                  textShadow: '0 0 10px #39ff14, 0 0 30px #39ff14',
                }}
              >
                So I built them an app.
              </h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="font-mono"
                style={{
                  fontSize: 'clamp(0.65rem, 1.4vw, 1rem)',
                  color: 'rgba(240,240,240,0.6)',
                }}
              >
                When you spot a problem,{' '}
                <span style={{ color: '#00f0ff' }}>YOU can be the one to fix it.</span>
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
