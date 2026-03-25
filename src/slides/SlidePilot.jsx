import { motion } from 'framer-motion'

const container = {
  animate: { transition: { staggerChildren: 0.18 } },
}
const item = {
  initial: { y: 24, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.45, ease: 'easeOut' } },
}

export default function SlidePilot() {
  return (
    <div className="w-full h-full flex items-center justify-center px-8">
      <motion.div
        variants={container}
        initial="initial"
        animate="animate"
        className="text-center max-w-4xl"
      >
        <motion.div variants={item} className="text-7xl mb-10" style={{ fontSize: 'clamp(4rem, 10vw, 8rem)' }}>
          ✈️
        </motion.div>

        <motion.h1
          variants={item}
          className="font-pixel uppercase leading-loose mb-8"
          style={{
            fontSize: 'clamp(0.9rem, 2.2vw, 2rem)',
            color: '#00f0ff',
            textShadow: '0 0 10px #00f0ff, 0 0 30px #00f0ff',
          }}
        >
          In primary school,<br />I wanted to be a pilot
        </motion.h1>

        <motion.p
          variants={item}
          className="font-mono"
          style={{
            fontSize: 'clamp(0.65rem, 1.4vw, 1rem)',
            color: 'rgba(240,240,240,0.6)',
          }}
        >
          ...but computers had other plans
        </motion.p>
      </motion.div>
    </div>
  )
}
