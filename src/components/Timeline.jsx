function Timeline() {
  const timelineItems = [
    { title: 'The Beginning', desc: 'When destiny brought us together' },
    { title: 'Falling', desc: 'Head over heels for you' },
    { title: 'Growing', desc: 'Building something beautiful together' },
    { title: 'Forever', desc: 'A love that will last until the end of time' },
  ]

  return (
    <section className="timeline">
      <div className="section-container">
        <h2 className="section-title reveal-text">Our Love Story</h2>
        <div className="timeline-container">
          {timelineItems.map((item, idx) => (
            <div key={idx} className="timeline-item" style={{ '--delay': `${idx * 0.15}s` }}>
              <div className="timeline-content">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Timeline
