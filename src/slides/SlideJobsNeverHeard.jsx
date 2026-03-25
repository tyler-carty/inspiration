import { motion } from 'framer-motion'
import RoleCard from '../components/RoleCard'

const roles = [
  {
    icon: '🔧',
    title: 'Data Engineer',
    description: 'I built the pipes that move information around a bank',
  },
  {
    icon: '🧠',
    title: 'Machine Learning Engineer',
    description: 'I make computers smart enough to protect millions of people\'s money — every single day',
  },
  {
    icon: '🔍',
    title: 'Data Scientist',
    description: 'I taught computers to spot patterns and catch bad guys',
  },
]

export default function SlideJobsNeverHeard() {
  return (
    <div className="w-full h-full flex items-center justify-center px-8">
      <div className="max-w-6xl w-full">
        <motion.h1
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.45 }}
          className="font-pixel uppercase text-center leading-loose mb-12"
          style={{
            fontSize: 'clamp(0.9rem, 2vw, 1.8rem)',
            color: '#ff2d78',
            textShadow: '0 0 10px #ff2d78, 0 0 30px #ff2d78',
          }}
        >
          Jobs you&apos;ve never heard of
        </motion.h1>

        <div style={{ display: 'flex', gap: 'clamp(1rem, 2vw, 1.8rem)', alignItems: 'stretch' }}>
          {roles.map((role, i) => (
            <RoleCard key={role.title} {...role} delay={0.15 + i * 0.18} />
          ))}
        </div>
      </div>
    </div>
  )
}
