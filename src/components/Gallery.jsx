function Gallery({ moments, onOpenMedia }) {
  return (
    <section className="gallery">
      <div className="section-container">
        <h2 className="section-title reveal-text">Some of Our Beautiful Moments</h2>
        <h6 className="section-title reveal-text">Click to view them</h6>
        <div className="gallery-grid" id="moments-grid">
          {moments.map((moment, idx) => (
            <div 
              key={idx}
              className="gallery-item"
              onClick={() => onOpenMedia(moment.src, moment.type)}
              style={{ '--delay': `${idx * 0.1}s` }}
            >
              {moment.type === 'image' ? (
                <img className="gallery-thumb" src={moment.src} alt="moment" loading="lazy" />
              ) : (
                <video className="gallery-thumb" muted preload="metadata" src={moment.src}></video>
              )}
              <div className="gallery-overlay">
                <p>{moment.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
