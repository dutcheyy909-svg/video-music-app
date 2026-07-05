import './VideoGrid.css'

const VideoGrid = ({ videos, onSelectVideo }) => {
  return (
    <div className="video-grid">
      {videos.map((video) => (
        <div key={video.id} className="video-card" onClick={() => onSelectVideo(video)}>
          <div className="video-thumbnail">
            <img src={video.thumbnail || '/placeholder.png'} alt={video.title} />
            <div className="play-overlay">
              <span className="play-icon">▶</span>
            </div>
          </div>
          <div className="video-meta">
            <h4>{video.title}</h4>
            <p className="duration">Duration: {video.duration || 'N/A'}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default VideoGrid