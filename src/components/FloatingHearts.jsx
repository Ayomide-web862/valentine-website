import { useEffect } from 'react'

function FloatingHearts() {
  useEffect(() => {
    const container = document.querySelector('.floating-hearts-container')
    if (!container || container.children.length > 0) return // Prevent duplicates

    const createHeart = () => {
      const heart = document.createElement('div')
      heart.className = 'floating-heart-particle'

      const size = Math.random() * 30 + 10
      const duration = Math.random() * 3 + 4
      const delay = Math.random() * 2
      const leftPos = Math.random() * 100

      heart.style.cssText = `
        position: absolute;
        left: ${leftPos}%;
        bottom: -50px;
        font-size: ${size}px;
        opacity: 0.6;
        pointer-events: none;
        animation: floatUp ${duration}s linear ${delay}s infinite;
      `

      heart.textContent = ['💕', '💖', '💗', '💝', '💞'][Math.floor(Math.random() * 5)]
      container.appendChild(heart)
    }

    for (let i = 0; i < 15; i++) {
      createHeart()
    }

    // Add animation to stylesheet
    if (!document.querySelector('style[data-floatup]')) {
      const style = document.createElement('style')
      style.setAttribute('data-floatup', 'true')
      style.textContent = `
        @keyframes floatUp {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0.6;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 0.6;
          }
          100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
          }
        }
      `
      document.head.appendChild(style)
    }
  }, [])

  return null
}

export default FloatingHearts
