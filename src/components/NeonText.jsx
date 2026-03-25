const GLOW_MAP = {
  cyan: '#00f0ff',
  magenta: '#ff2d78',
  green: '#39ff14',
  white: '#f0f0f0',
}

export default function NeonText({
  children,
  color = 'cyan',
  as: Tag = 'h1',
  className = '',
  style = {},
}) {
  const hex = GLOW_MAP[color] ?? GLOW_MAP.cyan

  return (
    <Tag
      className={`font-pixel uppercase ${className}`}
      style={{
        color: hex,
        textShadow: `0 0 10px ${hex}, 0 0 30px ${hex}, 0 0 60px ${hex}44`,
        lineHeight: 1.5,
        ...style,
      }}
    >
      {children}
    </Tag>
  )
}
