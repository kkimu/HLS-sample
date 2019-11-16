import React, { useEffect, useRef, useState } from 'react'
import videojs, { VideoJsPlayer, VideoJsPlayerOptions } from 'video.js'


export let VideoPlayer: React.FC<VideoJsPlayerOptions>
VideoPlayer = (props) => {
  const [player, setPlayer] = useState<VideoJsPlayer>()
  const videoNode = useRef(null)

  useEffect(() => {
    setPlayer(
      videojs(videoNode.current, props, () => {
        if (player && props.sources) player.src(props.sources)
        console.log('onPlayerReady')
      })
    )
    return () => {
      if (player) player.dispose()
    }
  }, [player, props])

  return (
    <div data-vjs-player>
      <video
        ref={videoNode}
        className="video-js vjs-default-skin vjs-big-play-centered"
        playsInline
      />
    </div>
  )
}
