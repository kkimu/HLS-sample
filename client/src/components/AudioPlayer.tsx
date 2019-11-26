import React, { useCallback, useEffect, useRef, useState } from 'react'
import videojs, { VideoJsPlayer, VideoJsPlayerOptions } from 'video.js'

export const AudioPlayer: React.FC = () => {
  const audioNode = useRef<HTMLAudioElement | null>(null)
  const [player, setPlayer] = useState<VideoJsPlayer>()

  useEffect(() => {
    if (!audioNode) return
    const options: VideoJsPlayerOptions = {
      autoplay: false,
    }
    setPlayer(videojs(audioNode.current, options))
  }, [])

  // useEffect(() => {
  //   if (!player) return
  //   player.autoplay(true)
  // }, [player])

  const handleClick = useCallback(() => {
    if (player) {
      window.setTimeout(() => {
        console.log('a')
        player.bufferedEnd()
        player.play()
      }, 3000)
    }
  }, [player])

  return (
    <div>
      <button onClick={handleClick}>button</button>
      <audio
        ref={audioNode}
        style={{ display: 'none' }}
        controls
        // preload="auto"
        // autoPlay
      >
        <source
          src="http://localhost:8080/index.m3u8"
          type="application/x-mpegURL"
        />
      </audio>
    </div>
  )
}
