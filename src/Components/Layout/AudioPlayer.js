import React, { useEffect, useState, useRef } from 'react'
import { Link, useParams } from 'react-router-dom'
import '../../Styling/AudioPlayer.css'
import Songs from '../../Data/All_Songs.json'


function AudioPlayer() {
  const [firstSong, setFirstSong] = useState()
  const [coverImage, setCoverImage] = useState()
  const [isPlaying, setIsPlaying] = useState(false)
  const [CurrentIndex, setCurrentIndex] = useState(0)
  const [CurrentTitle, setCurrentTitle] = useState("")

  // const [Src, setSrc] = useState()


 useEffect(() => {
    setCurrentIndex(id - 1)
if(CurrentIndex == 0)
    {setFirstSong(Songs.Songs[CurrentIndex].src)}
else{
  CurrentSong.current.pause()
}

    setIsPlaying(true)
  }, [])


  let { id } = useParams()
  const CurrentSong = useRef(new Audio(firstSong))

 

  // const intervalRef = useRef();

  // const isReady = useRef(false);




  useEffect(() => {
    CurrentSong.current.pause()

    CurrentSong.current = new Audio(Songs.Songs[CurrentIndex].src)    
    CurrentSong.current.play()

    setCoverImage(Songs.Songs[CurrentIndex].image)
    setCurrentTitle(Songs.Songs[CurrentIndex].title)


  }, [CurrentIndex])



  useEffect(() => {
    if (isPlaying) {
      CurrentSong.current.play()
    }
    else {
      CurrentSong.current.pause()
    }
  }, [isPlaying])

  useEffect(() => {
  }, [CurrentSong.current.src])


  const handleNext = () => {
    if (Songs.Songs.length >= CurrentIndex) {

      setCurrentIndex(CurrentIndex + 1)


    }
    else {
      console.log('thats why')
      CurrentSong.current.src = Songs.Songs[CurrentIndex].src
    }


  }
  const handlePrev = () => {
    if (CurrentIndex - 1 >= 0) {
      setCurrentIndex(CurrentIndex - 1)
    }
    else{
      setCurrentIndex(0)
    }
  }



  return (
    <>
      <div class="global-wrapper">
        <Link to="/main"> <div class="back-row">
          <i class="fa-solid fa-chevron-left"></i>
        </div>
        </Link>
      <div className="audio-wrapper">
      <div class="img-wrappers-container">
      <div className='image-blur' style={{background:`url(${coverImage})`}}></div>
      <div className='img-wrapper'>
          <img className='img-cover' src={coverImage} alt="cover" />
          <img className='img-bg' src={coverImage} alt="cover" />
        </div></div>
        <div className='track-name'>
      <marquee><p className='track-namep'> {CurrentTitle}</p></marquee> 
        </div>
        <div className='controls-wrapper'>
          <div className='action-btn' onClick={handlePrev}><i class="fa-solid fa-backward"></i></div>
          <div className='pause-play' onClick={() => setIsPlaying(!isPlaying)}>
            {isPlaying ? <i class="fa-solid fa-pause"></i> : <i class="fa-solid fa-play"></i>}
          </div>
          <div className='action-btn' onClick={handleNext}><i class="fa-solid fa-forward"></i></div>
        </div>
      </div>
    </div>
    </>
  )
}

export default AudioPlayer