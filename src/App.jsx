import { useState, useEffect } from 'react'
import Hero from './components/Hero'
import Letter from './components/Letter'
import Gallery from './components/Gallery'
import Quotes from './components/Quotes'
import Timeline from './components/Timeline'
import Final from './components/Final'
import FinalMessage from './components/FinalMessage'
import Footer from './components/Footer'
import Navigation from './components/Navigation'
import MediaModal from './components/MediaModal'
import FloatingHearts from './components/FloatingHearts'
import './styles.css'

// Import media files
import img1 from '../Snapchat-1584062702.jpg'
import img2 from '../Snapchat-1645277567.jpg'
import img3 from '../Snapchat-237639917.jpg'
import img4 from '../Snapchat-1936801808.jpg'
import vid1 from '../Snapchat-104019380.mp4'
import vid2 from '../Snapchat-1767457443.mp4'
import vid3 from '../Snapchat-2139036754.mp4'
import vid4 from '../Snapchat-363687362.mp4'
import vid5 from '../Snapchat-648241668.mp4'

function App() {
  const [modalOpen, setModalOpen] = useState(false)
  const [modalContent, setModalContent] = useState(null)

  const moments = [
    { src: img1, type: 'image', caption: '' },
    { src: img2, type: 'image', caption: 'Our first and only couple pic' },
    { src: img3, type: 'image', caption: 'Journer together' },
    { src: img4, type: 'image', caption: 'Ice cream date ' },
    { src: vid1, type: 'video', caption: 'Our fist tiktok 😂' },
    { src: vid2, type: 'video', caption: 'One of our days in chapel' },
    { src: vid3, type: 'video', caption: 'EES Week I guess ' },
    { src: vid4, type: 'video', caption: 'Our "Glory" days' },
    { src: vid5, type: 'video', caption: '' },
  ]

  const openMedia = (src, type) => {
    setModalContent({ src, type })
    setModalOpen(true)
  }

  const closeMedia = () => {
    setModalOpen(false)
    setModalContent(null)
  }

  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [modalOpen])

  return (
    <>
      <div className="background-animation">
        <div className="stars"></div>
        <div className="floating-hearts-container"></div>
      </div>
      <FloatingHearts />
      
      <Navigation />
      <Hero />
      <Letter />
      <Gallery moments={moments} onOpenMedia={openMedia} />
      <Quotes />
      {/* <Timeline />
      <Final /> */}
      <FinalMessage />
      <Footer />

      {modalOpen && modalContent && (
        <MediaModal
          src={modalContent.src}
          type={modalContent.type}
          onClose={closeMedia}
        />
      )}
    </>
  )
}

export default App
