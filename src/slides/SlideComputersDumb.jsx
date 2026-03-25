import { motion } from 'framer-motion'

const container = {
  animate: { transition: { staggerChildren: 0.2 } },
}
const item = {
  initial: { y: 24, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.45, ease: 'easeOut' } },
}

export default function SlideComputersDumb() {
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
          className="font-pixel uppercase leading-loose mb-8"
          style={{
            fontSize: 'clamp(1rem, 2.5vw, 2.2rem)',
            color: '#ff2d78',
            textShadow: '0 0 10px #ff2d78, 0 0 30px #ff2d78',
          }}
        >
          Computers are<br />really, really dumb
        </motion.h1>

        {/* ASCII-style confused computer */}
        <motion.div
          variants={item}
          className="font-mono my-8"
          style={{
            fontSize: 'clamp(0.55rem, 1.1vw, 0.8rem)',
            color: 'rgba(0, 240, 255, 0.5)',
            lineHeight: 1.6,
          }}
        >
          <pre>{`  ┌─────────────────┐
  │  > ERROR: ????  │
  │   ¯\\_(ツ)_/¯   │
  └─────────────────┘`}</pre>
        </motion.div>

        <motion.p
          variants={item}
          className="font-mono mb-10"
          style={{ fontSize: 'clamp(0.65rem, 1.4vw, 1rem)', color: 'rgba(240,240,240,0.65)', lineHeight: 1.9 }}
        >
          They can&apos;t think. They just follow instructions...{' '}
          <span style={{ color: '#00f0ff' }}>VERY fast.</span>
        </motion.p>

        <motion.p
          variants={item}
          className="font-mono"
          style={{ fontSize: 'clamp(0.65rem, 1.4vw, 1rem)', color: '#39ff14', textShadow: '0 0 8px #39ff14', lineHeight: 1.9 }}
        >
          My job? Teach them to be clever.
        </motion.p>
      </motion.div>
    </div>
  )
}
