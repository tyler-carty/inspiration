import { motion } from 'framer-motion'

const container = {
  animate: { transition: { staggerChildren: 0.2 } },
}

const titleVariant = {
  initial: { scale: 0.5, opacity: 0 },
  animate: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.5, ease: [0.175, 0.885, 0.32, 1.275] },
  },
}

const subtitleVariant = {
  initial: { y: 20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

export default function SlideTitle() {
  return (
    <div className="w-full h-full flex items-center justify-center px-8">
      <motion.div
        variants={container}
        initial="initial"
        animate="animate"
        className="text-center max-w-5xl"
      >
        <motion.h1
          variants={titleVariant}
          className="font-pixel uppercase leading-loose mb-12"
          style={{
            fontSize: 'clamp(1.4rem, 3.5vw, 3.2rem)',
            color: '#00f0ff',
            textShadow: '0 0 10px #00f0ff, 0 0 30px #00f0ff, 0 0 80px rgba(0,240,255,0.4)',
          }}
        >
          I Catch Bad Guys<br />For A Living
        </motion.h1>

        <motion.div variants={subtitleVariant} className="space-y-3">
          <p
            className="font-mono uppercase tracking-widest"
            style={{
              fontSize: 'clamp(0.65rem, 1.4vw, 1rem)',
              color: 'rgba(240,240,240,0.7)',
            }}
          >
            Tyler Cartwright
          </p>
          <p
            className="font-mono uppercase tracking-widest"
            style={{
              fontSize: 'clamp(0.55rem, 1.2vw, 0.85rem)',
              color: 'rgba(0, 240, 255, 0.6)',
            }}
          >
            Machine Learning Engineer · Lloyds Banking Group
          </p>
        </motion.div>
      </motion.div>
    </div>
  )
}
