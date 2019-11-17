import React, { useEffect, useRef, useState } from 'react'
import videojs, { VideoJsPlayer,  } from 'video.js'

export const AudioPlayer: React.FC = () => {
  const audioNode = useRef(null)
  useEffect(() => {
    videojs(audioNode.current)
  }, [])

  return (
    <div data-vjs-player>
      <audio
        ref={audioNode}
        className="video-js vjs-default-skin vjs-audio"
        controls
        preload="auto"
      >
        <source
          src="http://localhost:8080/index.m3u8"
          type="application/x-mpegURL"
        />
      </audio>
    </div>
  )
}
