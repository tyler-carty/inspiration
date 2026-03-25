import { motion } from 'framer-motion'

const container = {
  animate: { transition: { staggerChildren: 0.3 } },
}
const item = {
  initial: { y: 24, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.7, ease: 'easeOut' } },
}

export default function SlideYouDidMyJob() {
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
          className="font-pixel uppercase leading-loose mb-10"
          style={{
            fontSize: 'clamp(1.4rem, 3.2vw, 3rem)',
            color: '#39ff14',
            textShadow: '0 0 10px #39ff14, 0 0 30px #39ff14, 0 0 80px rgba(57,255,20,0.4)',
          }}
        >
          You just did<br />my job
        </motion.h1>

        <motion.p
          variants={item}
          className="font-mono"
          style={{
            fontSize: 'clamp(0.65rem, 1.4vw, 1rem)',
            color: 'rgba(240,240,240,0.65)',
            lineHeight: 1.8,
          }}
        >
          Except I teach a computer to do that...
          <br />
          <span style={{ color: '#00f0ff' }}>millions of times. Every single day.</span>
        </motion.p>
      </motion.div>
    </div>
  )
}
