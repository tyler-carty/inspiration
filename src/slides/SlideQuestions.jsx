import { motion } from 'framer-motion'

const container = {
  animate: { transition: { staggerChildren: 0.2 } },
}
const item = {
  initial: { y: 24, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function SlideQuestions() {
  return (
    <div className="w-full h-full flex items-center justify-center px-8">
      <motion.div
        variants={container}
        initial="initial"
        animate="animate"
        className="text-center max-w-4xl"
      >
        <motion.h1
          variants={item}
          className="font-pixel uppercase leading-loose mb-12"
          style={{
            fontSize: 'clamp(1.6rem, 4vw, 3.6rem)',
            color: '#00f0ff',
            textShadow: '0 0 10px #00f0ff, 0 0 30px #00f0ff, 0 0 80px rgba(0,240,255,0.5)',
          }}
        >
          Any questions?
        </motion.h1>

        <motion.p
          variants={item}
          className="font-mono mb-3"
          style={{ fontSize: 'clamp(0.6rem, 1.3vw, 0.9rem)', color: 'rgba(240,240,240,0.5)' }}
        >
          Tyler Cartwright · tylercartwright.co.uk
        </motion.p>

        <motion.p
          variants={item}
          className="font-pixel uppercase"
          style={{
            fontSize: 'clamp(0.65rem, 1.4vw, 1rem)',
            color: '#39ff14',
            textShadow: '0 0 8px #39ff14',
            marginTop: '2rem',
          }}
        >
          Now go find YOUR thing.
        </motion.p>
      </motion.div>
    </div>
  )
}
