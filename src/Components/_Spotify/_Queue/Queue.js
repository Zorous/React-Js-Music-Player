import React from 'react'
import '../css/Queue.css'


function Queue({ tracks, setCurrentIndex }) {
  console.log(tracks)
  // console.log(tracks[0].track.name)
  return (
    <div className='Queue-container'>
      <div className='queue'>
        <p className='next-track'>
          Up Next
        </p>

        <div className='queue-list'></div>
        {tracks?.map((track, index) => {
          return (
            <div className='queue-item' key={index} onClick={() => {
              setCurrentIndex(index);
              // alert(index)
            }}>
              <p className='track-name-Upnext'>{track?.track?.name}</p>
              <p>{(track?.track?.duration_ms/1000/60).toFixed(2)}</p>
            </div>)
        })}
      </div>
    </div>
  )
}

export default Queue