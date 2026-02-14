import { useEffect } from 'react'

function FinalMessage() {
  useEffect(() => {
    const createConfetti = () => {
      const confettiCount = 100
      const body = document.body

      for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div')
        const size = Math.random() * 8 + 4
        const duration = Math.random() * 3 + 2
        const delay = Math.random() * 0.5
        const leftPos = Math.random() * 100
        const icons = ['💕', '💖', '💗', '✨', '⭐', '💫']

        confetti.style.cssText = `
          position: fixed;
          left: ${leftPos}%;
          top: -20px;
          font-size: ${size}px;
          pointer-events: none;
          z-index: 999;
          opacity: 0.8;
          animation: confettiFall ${duration}s linear ${delay}s forwards;
        `

        confetti.textContent = icons[Math.floor(Math.random() * icons.length)]
        body.appendChild(confetti)

        setTimeout(() => confetti.remove(), (duration + delay) * 1000)
      }

      if (!document.querySelector('style[data-confetti]')) {
        const style = document.createElement('style')
        style.setAttribute('data-confetti', 'true')
        style.textContent = `
          @keyframes confettiFall {
            to {
              transform: translateY(100vh) rotate(720deg);
              opacity: 0;
            }
          }
        `
        document.head.appendChild(style)
      }
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          createConfetti()
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.5 })

    const element = document.querySelector('.final-message')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section className="final-message">
      <div className="section-container">
        <div className="message-box">
          <h2 className="reveal-text">Chimkarila, You Are My Forever</h2>
          <p className="final-text">
            In this vast universe, among billions of souls, 
            the odds of us finding each other were impossible.
            Yet here we are — a beautiful proof that fate, 
            destiny, and true love exist.
          </p>
          <p className="final-text">
            Happy Valentine's Day to the love of my life, Chimkarila. <br />
            Loving you was never a mistake and I will forever keep loving you my baby girl!
          </p>
        </div>
      </div>
    </section>
  )
}

export default FinalMessage
