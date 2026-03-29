import { useEffect, useRef } from 'react'

export default function BackgroundParticles() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animationFrameId

    const mouse = { x: -1000, y: -1000 }
    const handleMove = (e) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
    }

    window.addEventListener('mousemove', handleMove)

    // Set canvas dimensions
    const setRes = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', setRes)
    setRes()

    const particles = []
    const count = 1080

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2.5 + 0.5,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.6 + 0.2,
      })
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach(p => {
        // Simple attraction logic
        const dx = mouse.x - p.x
        const dy = mouse.y - p.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        const range = 130 // Interaction range

        if (dist < range) {
          const force = (range - dist) / range
          p.x += dx * force * 0.02 // Gentle pull
          p.y += dy * force * 0.02
        }

        p.x += p.vx
        p.y += p.vy

        // Wrap around
        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0

        // Performance optimization: Batch similar colors if possible (omitted for simplicity here)
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0, 245, 255, ${p.opacity * 0.6})`
        ctx.fill()

        // High count optimization: only shadow for very large particles
        if (p.size > 2.2) {
          ctx.shadowBlur = 6
          ctx.shadowColor = 'rgba(123, 47, 247, 0.6)'
        } else {
          ctx.shadowBlur = 0
        }
      })

      animationFrameId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      window.removeEventListener('resize', setRes)
      window.removeEventListener('mousemove', handleMove)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-70"
    />
  )
}
