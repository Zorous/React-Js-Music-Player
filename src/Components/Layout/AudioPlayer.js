import React from 'react'
import SideBar from './SideBar'
import { useParams } from 'react-router-dom'
import {IconContext} from 'react-icons'
import '../../Styling/AudioPlayer.css'

function AudioPlayer({
  isPlaying,
  setIsPlaying,
  handleNext,
  handlePrev
}) {
  let {id} = useParams()
  return (
   <>
   <SideBar />
   <div style={{ marginLeft: "10vw" }}>
 <h1> Audio Player, audio : {id}</h1> 


 <IconContext.Provider value={{size:"35px",color:"red"}}>
 <div className="controls-wrapper">
 <div className="action-btn">
 
 </div>
 </div>
 </IconContext.Provider>
   </div>
   </>
  )
}

export default AudioPlayer