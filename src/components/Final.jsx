import { useEffect, useState } from 'react'

function Final() {
  const [heartMessage, setHeartMessage] = useState('Click the heart and make a wish!')

  const messages = [
    "I love you more every day! 💕",
    "You make my heart skip a beat! 💖",
    "Forever and always! 💗",
    "You're my greatest blessing! ✨",
    "My heart belongs to you! 💝"
  ]

  const createParticles = (x, y) => {
    const particleCount = 30
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div')
      const size = Math.random() * 8 + 4
      const duration = Math.random() * 1 + 0.8
      const angle = (Math.PI * 2 * i) / particleCount
      const velocity = Math.random() * 8 + 4

      const xVelocity = Math.cos(angle) * velocity
      const yVelocity = Math.sin(angle) * velocity

      particle.style.cssText = `
        position: fixed;
        left: ${x}px;
        top: ${y}px;
        width: ${size}px;
        height: ${size}px;
        background: linear-gradient(135deg, #ff6b9d, #c06c84);
        border-radius: 50%;
        pointer-events: none;
        z-index: 1001;
      `

      document.querySelector('.particle-container')?.appendChild(particle)

      const startTime = Date.now()
      const animate = () => {
        const elapsed = Date.now() - startTime
        const progress = elapsed / (duration * 1000)

        if (progress > 1) {
          particle.remove()
          return
        }

        particle.style.transform = `
          translate(${xVelocity * progress * 50}px, ${yVelocity * progress * 50 + progress * progress * 100}px)
        `
        particle.style.opacity = 1 - progress
        requestAnimationFrame(animate)
      }
      animate()
    }
  }

  const handleHeartClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = rect.left + rect.width / 2
    const y = rect.top + rect.height / 2

    createParticles(x, y)
    setHeartMessage(messages[Math.floor(Math.random() * messages.length)])
  }

  useEffect(() => {
    const particleContainer = document.querySelector('.particle-container')
    if (!particleContainer) {
      const container = document.createElement('div')
      container.className = 'particle-container'
      document.body.appendChild(container)
    }
  }, [])

  return (
    <section className="heart-section">
      <div className="section-container">
        <h2 className="section-title reveal-text">Click if You Love Me</h2>
        <div className="heart-button-container">
          <button className="pulsing-heart" onClick={handleHeartClick}>❤️</button>
          <p className="heart-message">{heartMessage}</p>
        </div>
      </div>
    </section>
  )
}

export default Final
