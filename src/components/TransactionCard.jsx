import { motion, AnimatePresence } from 'framer-motion'

export default function TransactionCard({ merchant, amount, date, location, isFraud, revealed, index = 0 }) {
  const revealDelay = revealed ? index * 0.15 : 0

  const borderColor = revealed
    ? isFraud ? '#ff2d78' : '#39ff14'
    : '#00f0ff'

  const bgColor = revealed
    ? isFraud ? 'rgba(255, 45, 120, 0.06)' : 'rgba(57, 255, 20, 0.04)'
    : 'rgba(19, 25, 41, 0.85)'

  const boxShadow = revealed
    ? isFraud
      ? '0 0 16px rgba(255,45,120,0.5), 0 0 40px rgba(255,45,120,0.2)'
      : '0 0 16px rgba(57,255,20,0.4), 0 0 40px rgba(57,255,20,0.15)'
    : '0 0 8px rgba(0,240,255,0.2)'

  const badgeColor = isFraud ? '#ff2d78' : '#39ff14'
  const badgeLabel = isFraud ? 'FRAUD!' : 'SAFE'

  return (
    <motion.div
      animate={{
        borderColor,
        backgroundColor: bgColor,
        boxShadow,
      }}
      transition={{ delay: revealDelay, duration: 0.4 }}
      style={{
        border: '2px solid',
        borderColor,
        borderRadius: '12px',
        padding: 'clamp(1rem, 2vw, 1.6rem)',
        flex: 1,
        minWidth: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.8rem',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Card label (A/B/C) */}
      <div
        className="font-pixel"
        style={{
          fontSize: 'clamp(0.6rem, 1vw, 0.85rem)',
          color: 'rgba(0,240,255,0.35)',
          marginBottom: '0.2rem',
        }}
      >
        Card {String.fromCharCode(65 + index)}
      </div>

      {/* Transaction info */}
      <div
        className="font-pixel uppercase"
        style={{
          fontSize: 'clamp(0.65rem, 1.3vw, 1rem)',
          color: '#f0f0f0',
          lineHeight: 1.8,
        }}
      >
        {merchant}
      </div>
      <div
        className="font-pixel"
        style={{
          fontSize: 'clamp(0.8rem, 1.8vw, 1.4rem)',
          color: '#00f0ff',
          textShadow: '0 0 8px #00f0ff',
        }}
      >
        {amount}
      </div>
      <div
        className="font-mono"
        style={{
          fontSize: 'clamp(0.6rem, 1.1vw, 0.85rem)',
          color: 'rgba(240,240,240,0.4)',
        }}
      >
        {date}
      </div>
      <div
        className="font-mono"
        style={{
          fontSize: 'clamp(0.7rem, 1.4vw, 1.05rem)',
          color: 'rgba(240,240,240,0.75)',
        }}
      >
        {location}
      </div>

      {/* Verdict badge */}
      <AnimatePresence>
        {revealed && (
          <motion.div
            key="badge"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: revealDelay + 0.1, duration: 0.35, ease: [0.175, 0.885, 0.32, 1.275] }}
            className="font-pixel uppercase"
            style={{
              marginTop: '0.4rem',
              padding: '0.3em 0.7em',
              border: `2px solid ${badgeColor}`,
              borderRadius: '8px',
              color: badgeColor,
              fontSize: 'clamp(0.6rem, 1.2vw, 0.85rem)',
              textShadow: `0 0 8px ${badgeColor}`,
              boxShadow: `0 0 12px ${badgeColor}44`,
              background: `${badgeColor}11`,
            }}
          >
            {badgeLabel}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
