import React from 'react'
import { VideoPlayer } from './components/VideoPlayer'
import { VideoJsPlayerOptions } from 'video.js'

const videoJsOptions: VideoJsPlayerOptions = {
  autoplay: false,
  playbackRates: [0.5, 1, 1.25, 1.5, 2],
  width: 1280,
  height: 720,
  controls: true,
  sources: [
    {
      src: 'http://localhost:8080/index.m3u8',
      type: 'application/x-mpegURL',
    },
  ],
}

const App: React.FC = () => {
  return (
    <div>
      <h2>HLS Sample</h2>
      <VideoPlayer {...videoJsOptions} />
    </div>
  )
}

export default App
