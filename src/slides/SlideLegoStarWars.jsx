import { motion } from 'framer-motion'

const container = {
  animate: { transition: { staggerChildren: 0.2 } },
}
const item = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.45, ease: 'easeOut' } },
}

export default function SlideLegoStarWars() {
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
            fontSize: 'clamp(0.9rem, 2.2vw, 2rem)',
            color: '#00f0ff',
            textShadow: '0 0 10px #00f0ff, 0 0 30px #00f0ff',
          }}
        >
          It all started with this...
        </motion.h1>

        {/* Retro game cartridge card */}
        <motion.div
          variants={item}
          className="inline-block relative mx-auto"
          style={{
            background: 'linear-gradient(145deg, #1a1f35, #0d1120)',
            border: '2px solid #00f0ff',
            borderRadius: '12px',
            padding: 'clamp(2rem, 3.5vw, 3rem) clamp(2rem, 4vw, 4rem)',
            boxShadow: '0 0 20px rgba(0,240,255,0.25), 0 0 60px rgba(0,240,255,0.1), inset 0 0 20px rgba(0,240,255,0.04)',
            minWidth: 'clamp(280px, 40vw, 480px)',
          }}
        >
          {/* Cartridge notch detail */}
          <div
            style={{
              position: 'absolute',
              top: -1,
              left: '50%',
              transform: 'translateX(-50%)',
              width: '40%',
              height: '8px',
              background: '#0a0e1a',
              borderRadius: '0 0 4px 4px',
              borderBottom: '2px solid #00f0ff66',
            }}
          />

          <div className="font-pixel uppercase text-center space-y-8">
            <p
              style={{
                fontSize: 'clamp(0.45rem, 1vw, 0.75rem)',
                color: '#ff2d78',
                textShadow: '0 0 8px #ff2d78',
                letterSpacing: '0.15em',
              }}
            >
              ★ LEGO ★
            </p>
            <p
              style={{
                fontSize: 'clamp(0.7rem, 1.6vw, 1.3rem)',
                color: '#f0f0f0',
                textShadow: '0 0 10px rgba(240,240,240,0.3)',
                lineHeight: 1.9,
              }}
            >
              Star Wars
              <br />
              <span style={{ fontSize: '0.75em', color: 'rgba(240,240,240,0.7)' }}>
                The Complete Saga
              </span>
            </p>
            <div
              style={{
                width: '100%',
                height: '1px',
                background: 'linear-gradient(90deg, transparent, #00f0ff66, transparent)',
              }}
            />
            <p
              style={{
                fontSize: 'clamp(0.4rem, 0.85vw, 0.6rem)',
                color: 'rgba(0,240,255,0.6)',
                letterSpacing: '0.2em',
              }}
            >
              XBOX 360 · 2007
            </p>
          </div>
        </motion.div>

        <motion.p
          variants={item}
          className="font-mono"
          style={{
            fontSize: 'clamp(0.65rem, 1.4vw, 1rem)',
            color: 'rgba(240,240,240,0.55)',
            marginTop: '1.5rem',
          }}
        >
          One game. That&apos;s all it took.
        </motion.p>
      </motion.div>
    </div>
  )
}
