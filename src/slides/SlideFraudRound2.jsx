import { motion, AnimatePresence } from 'framer-motion'
import TransactionCard from '../components/TransactionCard'
import { round2 } from '../data/fraudData'

export default function SlideFraudRound2({ revealed }) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-8 gap-8">
      <motion.h1
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45 }}
        className="font-pixel uppercase"
        style={{
          fontSize: 'clamp(1rem, 2.5vw, 2.2rem)',
          color: '#00f0ff',
          textShadow: '0 0 10px #00f0ff, 0 0 30px #00f0ff',
        }}
      >
        {round2.title}
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.4 }}
        style={{ display: 'flex', gap: 'clamp(0.75rem, 1.5vw, 1.5rem)', width: '100%', maxWidth: '900px' }}
      >
        {round2.cards.map((card, i) => (
          <TransactionCard key={i} {...card} revealed={revealed} index={i} />
        ))}
      </motion.div>

      <AnimatePresence>
        {revealed && (
          <motion.p
            key="explanation"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.4 }}
            className="font-mono text-center"
            style={{
              fontSize: 'clamp(0.75rem, 1.6vw, 1.2rem)',
              color: '#ff2d78',
              textShadow: '0 0 8px #ff2d78',
              maxWidth: '700px',
            }}
          >
            {round2.explanation}
          </motion.p>
        )}
      </AnimatePresence>

      {!revealed && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="font-pixel uppercase"
          style={{
            fontSize: 'clamp(0.65rem, 1.1vw, 0.85rem)',
            color: 'rgba(0,240,255,0.5)',
          }}
        >
          Press Enter or R to reveal
        </motion.p>
      )}
    </div>
  )
}
