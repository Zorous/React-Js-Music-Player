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
    <div className='action-btn' onClick={handlePrev}>prev</div>
    <div className='' onClick={() => setIsPlaying(!isPlaying)}>
    {isPlaying?<i class="fa-solid fa-pause"></i>:<i class="fa-solid fa-play"></i>}
    </div>
    <div className='action-btn' onClick={handleNext}>next</div>
    </div>
  )
}

export default Controls