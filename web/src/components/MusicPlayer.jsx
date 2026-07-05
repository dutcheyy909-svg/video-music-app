import { useRef, useState, useEffect } from 'react'
import api from '../utils/api'
import './MusicPlayer.css'

const MusicPlayer = () => {
  const audioRef = useRef(null)
  const [tracks, setTracks] = useState([])
  const [currentTrack, setCurrentTrack] = useState(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState(0.5)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetchTracks()
  }, [])

  const fetchTracks = async () => {
    try {
      setLoading(true)
      const response = await api.get('/music')
      setTracks(response.data)
      if (response.data.length > 0) {
        setCurrentTrack(response.data[0])
      }
    } catch (err) {
      console.error('Failed to load music', err)
    } finally {
      setLoading(false)
    }
  }

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const selectTrack = (track) => {
    setCurrentTrack(track)
    setIsPlaying(false)
  }

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value)
    setVolume(newVolume)
    if (audioRef.current) {
      audioRef.current.volume = newVolume
    }
  }

  return (
    <div className="music-player">
      <h3>🎵 Background Music</h3>
      
      {currentTrack && (
        <>
          <audio
            ref={audioRef}
            src={currentTrack.url}
            onEnded={() => setIsPlaying(false)}
          />
          
          <div className="current-track">
            <div className="track-info">
              <p className="track-title">{currentTrack.title}</p>
              <p className="track-artist">{currentTrack.artist || 'Unknown'}</p>
            </div>
          </div>

          <div className="music-controls">
            <button className="play-button" onClick={togglePlay}>
              {isPlaying ? '⏸ Pause' : '▶ Play'}
            </button>
          </div>

          <div className="volume-section">
            <label>Volume</label>
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={volume}
              onChange={handleVolumeChange}
              className="volume-slider"
            />
            <span className="volume-value">{Math.round(volume * 100)}%</span>
          </div>
        </>
      )}

      <div className="playlist">
        <h4>Tracks</h4>
        {loading && <p className="loading">Loading...</p>}
        {!loading && tracks.length > 0 ? (
          <div className="track-list">
            {tracks.map((track) => (
              <button
                key={track.id}
                className={`track-item ${currentTrack?.id === track.id ? 'active' : ''}`}
                onClick={() => selectTrack(track)}
              >
                <span className="track-name">{track.title}</span>
                <span className="track-duration">3:45</span>
              </button>
            ))}
          </div>
        ) : (
          <p className="empty">No tracks available</p>
        )}
      </div>
    </div>
  )
}

export default MusicPlayer