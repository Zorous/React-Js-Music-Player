import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import apiClient from '../../../spotify';
import '../css/Player.css'
import Sidebar from '../Sidebar/Sidebar_spotify'
import Queue from '../_Queue/Queue';
import Song from '../_Song/Song';
function Player() {
  const [tracks,setTracks]=useState([])
  const [CurrentTrack,setCurrentTrack]=useState({})
  const [CurrentIndex,setCurrentIndex]=useState(0)

    const location = useLocation();
    console.log(location)
    useEffect(()=>{
        if(location.state){
            apiClient.get(`playlists/${location.state?.id}/tracks`)
            .then(res=>{
              setTracks(res.data.items);
              setCurrentTrack(res.data.items[0].track)
            })
        }
    },[location.state])
  return (
    <>
    <Sidebar />
    <div className='content-wrapper player'>
        <div className="left-side"></div>
        <div className="right-side">
        <Song />
        <Queue />
        </div>
    </div>
    
    </>
  )
}

export default Player