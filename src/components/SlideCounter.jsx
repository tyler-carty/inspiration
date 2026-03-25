export default function SlideCounter({ current, total }) {
  return (
    <div
      className="fixed bottom-4 right-6 z-50 font-mono text-xs pointer-events-none"
      style={{
        color: 'rgba(0, 240, 255, 0.35)',
        fontSize: '0.6rem',
        letterSpacing: '0.05em',
      }}
    >
      {current + 1} / {total}
    </div>
  )
}
