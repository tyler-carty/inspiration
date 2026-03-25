import { motion } from 'framer-motion'

const lines = [
  { prompt: true, text: 'print("hello world")' },
  { prompt: false, text: 'hello world' },
  { prompt: true, text: '' },
]

const container = {
  animate: { transition: { staggerChildren: 0.6, delayChildren: 0.3 } },
}
const lineVariant = {
  initial: { opacity: 0, x: -10 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.3 } },
}

export default function TerminalVisual() {
  return (
    <div
      style={{
        background: '#0d1120',
        border: '1px solid rgba(57,255,20,0.4)',
        borderRadius: '8px',
        overflow: 'hidden',
        boxShadow: '0 0 20px rgba(57,255,20,0.1), inset 0 0 20px rgba(0,0,0,0.5)',
        maxWidth: 'clamp(280px, 45vw, 520px)',
      }}
    >
      {/* Terminal title bar */}
      <div
        style={{
          background: '#1a1f35',
          padding: '0.5rem 1rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          borderBottom: '1px solid rgba(57,255,20,0.2)',
        }}
      >
        <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#ff2d78', display: 'inline-block' }} />
        <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#ffbb00', display: 'inline-block' }} />
        <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#39ff14', display: 'inline-block' }} />
        <span
          className="font-mono"
          style={{ marginLeft: 'auto', fontSize: '0.6rem', color: 'rgba(57,255,20,0.4)' }}
        >
          terminal
        </span>
      </div>

      {/* Terminal body */}
      <motion.div
        variants={container}
        initial="initial"
        animate="animate"
        style={{ padding: '1.2rem 1.5rem', minHeight: '120px' }}
      >
        {lines.map((line, i) => (
          <motion.div
            key={i}
            variants={lineVariant}
            className="font-mono"
            style={{
              fontSize: 'clamp(0.55rem, 1.1vw, 0.85rem)',
              color: line.prompt ? '#39ff14' : 'rgba(240,240,240,0.7)',
              marginBottom: '0.4rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
            }}
          >
            {line.prompt && (
              <span style={{ color: 'rgba(57,255,20,0.5)' }}>{'>'}</span>
            )}
            <span>{line.text}</span>
            {line.prompt && line.text === '' && (
              <span
                className="cursor-blink"
                style={{
                  display: 'inline-block',
                  width: '0.55em',
                  height: '1.1em',
                  background: '#39ff14',
                  verticalAlign: 'middle',
                }}
              />
            )}
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
