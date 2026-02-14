function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-animation">
          <h1 className="main-title">
            <span className="title-word">My</span>
            <span className="title-word">Love</span>
            <span className="title-word">For</span>
            <span className="title-word">Chimkarila</span>
          </h1>
          <p className="subtitle">A beautiful celebration of love, moments, and forever with you</p>
        </div>
        <svg className="floating-heart" viewBox="0 0 100 100">
          <path d="M50,90 Q20,70 20,50 Q20,35 35,35 Q50,35 50,50 Q50,35 65,35 Q80,35 80,50 Q80,70 50,90 Z" fill="currentColor"/>
        </svg>
      </div>
      <div className="scroll-indicator">
        <span>Scroll to explore</span>
        <div className="mouse-wheel"></div>
      </div>
    </section>
  )
}

export default Hero
