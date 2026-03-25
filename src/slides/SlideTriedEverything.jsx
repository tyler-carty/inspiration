import { motion } from 'framer-motion'
import SkillTree from '../components/SkillTree'

const item = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.45, ease: 'easeOut' } },
}

export default function SlideTriedEverything() {
  return (
    <div className="w-full h-full flex items-center justify-center px-8">
      <div className="text-center max-w-5xl">
        <motion.h1
          initial="initial"
          animate="animate"
          variants={item}
          className="font-pixel uppercase leading-loose mb-12"
          style={{
            fontSize: 'clamp(1rem, 2.5vw, 2.2rem)',
            color: '#00f0ff',
            textShadow: '0 0 10px #00f0ff, 0 0 30px #00f0ff',
          }}
        >
          So I tried everything
        </motion.h1>

        <div className="flex justify-center">
          <SkillTree />
        </div>
      </div>
    </div>
  )
}
