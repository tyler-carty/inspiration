import { motion } from 'framer-motion'
import TerminalVisual from '../components/TerminalVisual'

const container = {
  animate: { transition: { staggerChildren: 0.2 } },
}
const item = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.45, ease: 'easeOut' } },
}

export default function SlideComputerScience() {
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
            fontSize: 'clamp(0.9rem, 2.2vw, 2rem)',
            color: '#00f0ff',
            textShadow: '0 0 10px #00f0ff, 0 0 30px #00f0ff',
          }}
        >
          Then I discovered<br />Computer Science
        </motion.h1>

        <motion.p
          variants={item}
          className="font-mono"
          style={{
            fontSize: 'clamp(0.6rem, 1.3vw, 0.9rem)',
            color: 'rgba(240,240,240,0.55)',
            marginBottom: '1.5rem',
          }}
        >
          Year 7. No idea what jobs existed. Just knew I loved it.
        </motion.p>

        <motion.div variants={item} className="flex justify-center">
          <TerminalVisual />
        </motion.div>
      </motion.div>
    </div>
  )
}
