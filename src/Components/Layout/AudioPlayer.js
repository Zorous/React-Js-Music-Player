import React, { useEffect, useState, useRef } from 'react'
import SideBar from './SideBar'
import { useParams } from 'react-router-dom'
import '../../Styling/AudioPlayer.css'
import SidebarB from './_Sidebar/SidebarB'
import Songs from '../../Data/All_Songs.json'


function AudioPlayer() {
  const [firstSong, setFirstSong] = useState()
  const [coverImage, setCoverImage] = useState()
  const [isPlaying, setIsPlaying] = useState(false)
  const [CurrentIndex, setCurrentIndex] = useState(0)

  let { id } = useParams()
  const CurrentSong = useRef(new Audio())


  useEffect(()=>{
    setCurrentIndex(id - 1)
  },[])

  useEffect(() => {
    console.log(CurrentIndex)
    // console.log(Songs.Songs[CurrentIndex].src)
    setCoverImage(Songs.Songs[CurrentIndex].image)
    CurrentSong.current.src = Songs.Songs[CurrentIndex].src


  }, [CurrentIndex])



  useEffect(() => {
    if (isPlaying) {
      CurrentSong.current.play()
    }
    else {
      CurrentSong.current.pause()
    }
  }, [isPlaying])

  useEffect(()=>{
  },[CurrentSong.current.src])


  const handleNext = () => {
    console.log(Songs.Songs.length)
   if(Songs.Songs.length > CurrentIndex){
      CurrentSong.current.pause()
      CurrentSong.current.src = Songs.Songs[CurrentIndex + 1].src
      setCoverImage(Songs.Songs[CurrentIndex + 1].image)
      CurrentSong.current.play()

    
}
else{
  console.log('that why')
  CurrentSong.current.src = Songs.Songs[CurrentIndex].src
}


  }
  const handlePrev = () => {
if(CurrentIndex - 1 > 0){
  CurrentSong.current.pause()
      CurrentSong.current.src = Songs.Songs[CurrentIndex - 1].src
            CurrentSong.current.play()

}
  }



  return (
    <>
     <div style={{ marginLeft: "15vw" }}>
        <h1> Audio Player, audio : {id}</h1>


        <div className="audio-wrapper">
          <div className=''>
            <img className='img-cover' src={coverImage} alt="cover" />
          </div>
          <div className='controls-wrapper'>
            <div className='action-btn' onClick={handlePrev}><i class="fa-solid fa-backward"></i></div>
            <div className='' onClick={() => setIsPlaying(!isPlaying)}>
              {isPlaying ? <i class="fa-solid fa-pause"></i>:<i class="fa-solid fa-play"></i>   }
            </div>
            <div className='action-btn' onClick={handleNext}><i class="fa-solid fa-forward"></i></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AudioPlayer