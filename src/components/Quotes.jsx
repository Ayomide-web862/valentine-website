function Quotes() {
  const quotes = [
    { icon: '✨', text: 'Your beautiful' },
    { icon: '💫', text: 'Your smartness!' },
    { icon: '🌸', text: 'Your kind heart and compassionate soul' },
    { icon: '💝', text: 'How you make little moment feel special' },
    { icon: '💌', text: 'The way you love me unconditionally' },
  ]

  return (
    <section className="quotes">
      <div className="section-container">
        <h2 className="section-title reveal-text">Things I Love About You</h2>
        <div className="quotes-grid">
          {quotes.map((quote, idx) => (
            <div key={idx} className="quote-card" style={{ '--delay': `${idx * 0.1}s` }}>
              <div className="quote-icon">{quote.icon}</div>
              <p>{quote.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Quotes
