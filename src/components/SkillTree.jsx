import { motion } from 'framer-motion'

const skills = [
  { label: 'App Development', icon: '📱', verdict: '❌', color: '#ff2d78', highlight: false },
  { label: '3D Graphics Engines', icon: '🎮', verdict: '🤔', color: '#ffbb00', highlight: false },
  { label: 'Low-Level Programming', icon: '⚙️', verdict: '😵', color: '#ff2d78', highlight: false },
  { label: 'Machine Learning', icon: '🤖', verdict: '✅', color: '#39ff14', highlight: true },
]

const container = {
  animate: { transition: { staggerChildren: 0.18, delayChildren: 0.1 } },
}
const nodeVariant = {
  initial: { scale: 0.7, opacity: 0 },
  animate: { scale: 1, opacity: 1, transition: { duration: 0.4, ease: [0.175, 0.885, 0.32, 1.275] } },
}

export default function SkillTree() {
  return (
    <motion.div
      variants={container}
      initial="initial"
      animate="animate"
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: 'clamp(0.75rem, 1.5vw, 1.25rem)',
        maxWidth: 'clamp(400px, 60vw, 700px)',
      }}
    >
      {skills.map((skill) => (
        <motion.div
          key={skill.label}
          variants={nodeVariant}
          style={{
            background: skill.highlight
              ? 'rgba(57, 255, 20, 0.06)'
              : 'rgba(19, 25, 41, 0.85)',
            border: `2px solid ${skill.color}`,
            borderRadius: '10px',
            padding: 'clamp(0.8rem, 1.5vw, 1.2rem) clamp(1rem, 2vw, 1.6rem)',
            boxShadow: skill.highlight
              ? '0 0 16px rgba(57,255,20,0.5), 0 0 40px rgba(57,255,20,0.2)'
              : `0 0 8px ${skill.color}33`,
            animation: skill.highlight ? 'pulse-glow 2s ease-in-out infinite' : 'none',
          }}
        >
          <div
            className="font-pixel uppercase"
            style={{
              fontSize: 'clamp(0.45rem, 0.95vw, 0.7rem)',
              color: skill.color,
              textShadow: `0 0 8px ${skill.color}`,
              lineHeight: 1.7,
            }}
          >
            <span style={{ marginRight: '0.4em' }}>{skill.icon}</span>
            {skill.label}
            <span style={{ marginLeft: '0.4em' }}>{skill.verdict}</span>
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}
