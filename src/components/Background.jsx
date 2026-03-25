export default function Background() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      {/* Animated gradient base */}
      <div className="absolute inset-0 bg-animated" />
      {/* Dot-matrix grid */}
      <div className="absolute inset-0 dot-grid" />
      {/* CRT scanlines */}
      <div className="absolute inset-0 scanlines" />
    </div>
  )
}
