import React from 'react'
import '../css/Audioplayer.css'
import ProgressCircle from './ProgressCircle'

function Audioplayer({ currentTrack }) {
    console.log(currentTrack)
  return (
    <div className='player-body'>
    <div className='player-left-body'>
    <ProgressCircle
    percentage={75}
    isPlaying={true}
    image={currentTrack?.album?.images[0]?.url}
    size={300}
    color={"#1ed760"}/>
    </div>
    <div className='player-right-body'>
<p className='song-title'>{currentTrack?.name}</p>
    </div>
    </div>
  )
}

export default Audioplayer