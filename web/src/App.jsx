import { useEffect, useState } from 'react'
import VideoPlayer from './components/VideoPlayer'
import MusicPlayer from './components/MusicPlayer'
import VideoGrid from './components/VideoGrid'
import api from './utils/api'
import './App.css'

function App() {
  const [videos, setVideos] = useState([])
  const [selectedVideo, setSelectedVideo] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchVideos()
  }, [])

  const fetchVideos = async () => {
    try {
      setLoading(true)
      const response = await api.get('/videos')
      setVideos(response.data)
      setError(null)
    } catch (err) {
      setError('Failed to load videos')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>🎬 Video Music App</h1>
        <p>Watch videos with your favorite background music</p>
      </header>

      <main className="app-main">
        {selectedVideo && (
          <div className="player-section">
            <VideoPlayer video={selectedVideo} onClose={() => setSelectedVideo(null)} />
            <MusicPlayer />
          </div>
        )}

        <div className="content-section">
          <h2>Available Videos</h2>
          {loading && <p>Loading videos...</p>}
          {error && <p className="error">{error}</p>}
          {!loading && videos.length > 0 && (
            <VideoGrid videos={videos} onSelectVideo={setSelectedVideo} />
          )}
          {!loading && videos.length === 0 && (
            <p className="empty">No videos available. Upload some to get started!</p>
          )}
        </div>
      </main>
    </div>
  )
}

export default App