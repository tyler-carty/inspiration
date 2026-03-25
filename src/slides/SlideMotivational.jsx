import { motion } from 'framer-motion'

const container = {
  animate: { transition: { staggerChildren: 0.22 } },
}
const item = {
  initial: { x: -30, opacity: 0 },
  animate: { x: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
}

const points = [
  { text: 'Stay curious', color: '#00f0ff' },
  { text: 'Try everything', color: '#ff2d78' },
  { text: "It's OK to change your mind", color: '#39ff14' },
]

export default function SlideMotivational() {
  return (
    <div className="w-full h-full flex items-center justify-center px-8">
      <motion.div
        variants={container}
        initial="initial"
        animate="animate"
        className="max-w-4xl w-full"
      >
        <motion.h1
          variants={item}
          className="font-pixel uppercase text-center leading-loose mb-16"
          style={{
            fontSize: 'clamp(0.8rem, 2vw, 1.8rem)',
            color: '#f0f0f0',
            textShadow: '0 0 10px rgba(240,240,240,0.3)',
          }}
        >
          You don&apos;t need to have<br />it all figured out
        </motion.h1>

        <div className="space-y-8 text-center">
          {points.map(({ text, color }) => (
            <motion.p
              key={text}
              variants={item}
              className="font-pixel uppercase"
              style={{
                fontSize: 'clamp(0.9rem, 2.2vw, 2rem)',
                color,
                textShadow: `0 0 10px ${color}, 0 0 25px ${color}66`,
              }}
            >
              {text}
            </motion.p>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
