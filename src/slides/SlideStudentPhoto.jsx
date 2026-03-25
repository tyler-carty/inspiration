import { motion } from 'framer-motion'

export default function SlideStudentPhoto() {
  return (
    <div className="w-full h-full flex items-center justify-center px-8 gap-16">
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        style={{
          flexShrink: 0,
          border: '3px solid #00f0ff',
          boxShadow: '0 0 20px #00f0ff, 0 0 60px rgba(0,240,255,0.3)',
          borderRadius: '8px',
          overflow: 'hidden',
        }}
      >
        <img
          src="/inspiration/me.jpg"
          alt="Tyler as a student"
          style={{ display: 'block', maxHeight: '60vh', maxWidth: '40vw', objectFit: 'cover' }}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
        className="text-left"
      >
        <p
          className="font-pixel uppercase leading-loose"
          style={{
            fontSize: 'clamp(1rem, 2.2vw, 2rem)',
            color: '#ff2d78',
            textShadow: '0 0 10px #ff2d78, 0 0 30px #ff2d78, 0 0 60px rgba(255,45,120,0.4)',
          }}
        >
          Me, 15 years ago
        </p>
        <p
          className="font-mono uppercase tracking-widest mt-4"
          style={{
            fontSize: 'clamp(0.6rem, 1.3vw, 0.95rem)',
            color: 'rgba(0, 240, 255, 0.8)',
          }}
        >
          A student at Prospect Hill Junior School
        </p>
      </motion.div>
    </div>
  )
}
