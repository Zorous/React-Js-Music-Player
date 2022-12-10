import React from 'react'
import '../css/controls.css'


function Controls({
    isPlaying,
    setIsPlaying,
    handleNext,
    handlePrev,
  }) {
  return (
    <div className='controls-wrapper'>
    <div className='action-btn' onClick={handlePrev}><i class="fa-solid fa-backward"></i></div>
    <div className='play-pause-btn' onClick={() => setIsPlaying(!isPlaying)}>
    {isPlaying?<i class="fa-solid fa-pause"></i>:<i class="fa-solid fa-play"></i>}
    </div>
    <div className='action-btn' onClick={handleNext}><i class="fa-solid fa-forward"></i></div>
    </div>
  )
}

export default Controls