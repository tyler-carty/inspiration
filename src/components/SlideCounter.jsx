export default function SlideCounter({ current, total }) {
  return (
    <div
      className="fixed bottom-4 right-6 z-50 font-mono pointer-events-none flex items-center gap-3"
      style={{
        color: 'rgba(0, 240, 255, 0.35)',
        fontSize: '0.6rem',
        letterSpacing: '0.05em',
      }}
    >
      <span>SPACE / → TO ADVANCE</span>
      <span>{current + 1} / {total}</span>
    </div>
  )
}
