import { useEffect, useRef } from 'react'

function MediaModal({ src, type, onClose }) {
  const videoRef = useRef(null)

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [onClose])

  return (
    <div className="media-modal">
      <div className="modal-backdrop" onClick={onClose}></div>
      <div className="modal-content" role="dialog" aria-modal="true">
        <button className="modal-close" aria-label="Back" onClick={onClose}>
          ← Back
        </button>
        <div className="modal-body">
          {type === 'video' ? (
            <video 
              ref={videoRef}
              src={src}
              controls
              autoPlay
              playsInline
              style={{
                maxWidth: '100%',
                maxHeight: '88vh',
                borderRadius: '10px',
                display: 'block'
              }}
            ></video>
          ) : (
            <img 
              src={src} 
              alt="enlarged view"
              style={{
                maxWidth: '100%',
                maxHeight: '88vh',
                borderRadius: '10px',
                display: 'block'
              }}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default MediaModal
