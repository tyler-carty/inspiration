import { motion } from 'framer-motion'

export default function RoleCard({ icon, title, description, delay = 0 }) {
  return (
    <motion.div
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay, duration: 0.5, ease: 'easeOut' }}
      style={{
        background: 'rgba(19, 25, 41, 0.85)',
        border: '2px solid #00f0ff',
        borderRadius: '12px',
        padding: 'clamp(1.2rem, 2.5vw, 2rem) clamp(1rem, 2vw, 1.8rem)',
        boxShadow: '0 0 12px rgba(0,240,255,0.25), 0 0 40px rgba(0,240,255,0.08)',
        flex: 1,
        minWidth: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1rem',
        textAlign: 'center',
      }}
    >
      <div style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>{icon}</div>
      <h3
        className="font-pixel uppercase"
        style={{
          fontSize: 'clamp(0.65rem, 1.3vw, 1rem)',
          color: '#00f0ff',
          textShadow: '0 0 8px #00f0ff',
          lineHeight: 1.7,
        }}
      >
        {title}
      </h3>
      <p
        className="font-mono"
        style={{
          fontSize: 'clamp(0.7rem, 1.3vw, 1rem)',
          color: 'rgba(240,240,240,0.6)',
          lineHeight: 1.7,
        }}
      >
        {description}
      </p>
    </motion.div>
  )
}
