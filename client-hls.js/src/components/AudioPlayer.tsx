import React, { useEffect, useRef } from 'react'
import Hls from 'hls.js'

export const AudioPlayer: React.FC = () => {
  const audioNode = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    if (Hls.isSupported() && audioNode.current) {
      console.log('a')
      const hls = new Hls()
      console.log('b')
      hls.loadSource('http://localhost:8080/index.m3u8')
      console.log('c')
      // @ts-ignore
      hls.attachMedia(audioNode.current as HTMLAudioElement)
      console.log('d')
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        audioNode.current && audioNode.current.play()
      })
      console.log('e')
    }
  }, [])

  return (
    <div>
      <audio ref={audioNode} type="audio/mpegurl"/>
      <audio src="http"></audio>
    </div>
  )
}
