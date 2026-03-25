import { motion } from 'framer-motion'

export default function SlideHowDidIGetHere() {
  return (
    <div className="w-full h-full flex items-center justify-center px-8">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="font-pixel uppercase text-center leading-loose"
        style={{
          fontSize: 'clamp(1.2rem, 2.8vw, 2.5rem)',
          color: '#ff2d78',
          textShadow: '0 0 10px #ff2d78, 0 0 30px #ff2d78, 0 0 60px rgba(255,45,120,0.4)',
        }}
      >
        But first...<br />
        <span style={{ color: '#00f0ff', textShadow: '0 0 10px #00f0ff, 0 0 30px #00f0ff' }}>
          How did I get here?
        </span>
      </motion.h1>
    </div>
  )
}
