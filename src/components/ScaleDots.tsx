'use client'

export function LabDots() {
  return (
    <div className="scale__dots scale__dots--lab">
      {Array.from({ length: 25 }).map((_, i) => (
        <div key={i} className="dot" style={{ width: 10, height: 10 }} />
      ))}
    </div>
  )
}

export function CommercialDots() {
  return (
    <div className="scale__dots scale__dots--commercial">
      {Array.from({ length: 400 }).map((_, i) => (
        <div key={i} className="dot" style={{ width: 5, height: 5 }} />
      ))}
    </div>
  )
}
