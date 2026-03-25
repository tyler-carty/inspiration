import { motion } from 'framer-motion'

const container = {
  animate: { transition: { staggerChildren: 0.18 } },
}
const item = {
  initial: { y: 24, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.45, ease: 'easeOut' } },
}

export default function SlideSpotTheFraud() {
  return (
    <div className="w-full h-full flex items-center justify-center px-8">
      <motion.div
        variants={container}
        initial="initial"
        animate="animate"
        className="text-center max-w-4xl"
      >
        <motion.div variants={item} style={{ fontSize: 'clamp(3rem, 7vw, 6rem)', marginBottom: '1.5rem' }}>
          🕵️
        </motion.div>

        <motion.h1
          variants={item}
          className="font-pixel uppercase leading-loose mb-8"
          style={{
            fontSize: 'clamp(0.9rem, 2.2vw, 2rem)',
            color: '#ff2d78',
            textShadow: '0 0 10px #ff2d78, 0 0 30px #ff2d78',
          }}
        >
          Your turn:<br />Spot the fraud
        </motion.h1>

        <motion.p
          variants={item}
          className="font-mono mb-4"
          style={{ fontSize: 'clamp(0.6rem, 1.3vw, 0.9rem)', color: 'rgba(240,240,240,0.6)', lineHeight: 1.8 }}
        >
          I&apos;m going to show you 3 transactions.
          <br />
          You tell me which one is suspicious.
        </motion.p>

        <motion.p
          variants={item}
          className="font-mono mb-6"
          style={{ fontSize: 'clamp(0.55rem, 1.1vw, 0.8rem)', color: 'rgba(240,240,240,0.4)' }}
        >
          This is what I do every day — but I teach a computer to do it.
        </motion.p>

        <motion.p
          variants={item}
          className="font-pixel uppercase"
          style={{
            fontSize: 'clamp(0.5rem, 1vw, 0.7rem)',
            color: '#39ff14',
            textShadow: '0 0 8px #39ff14',
          }}
        >
          Hands up when you think you&apos;ve spotted it!
        </motion.p>
      </motion.div>
    </div>
  )
}
