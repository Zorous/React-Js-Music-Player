import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import apiClient from "../../../spotify";
import "../css/Player.css";
import Sidebar from "../Sidebar/Sidebar_spotify";
import Queue from "../_Queue/Queue";
import Song from "../_Song/Song";
import Audioplayer from "./Audioplayer";

function Player() {

  const [tracks, setTracks] = useState([])
  const [CurrentTrack, setCurrentTrack] = useState({})
  const [CurrentIndex, setCurrentIndex] = useState(0)
  const [isDone, setisDone] = useState(0)

  const location = useLocation();
  useEffect(() => {
      apiClient.get(`playlists/${location.state?.id}/tracks`)
      .then((res) => {

        let CurrentTr=res.data.items[0].track
        let Tr=res.data.items

        setTracks(Tr)
        setCurrentTrack(CurrentTr)
        setisDone(1)
        console.log(tracks)
        
      });
  },[location.state]);



    useEffect(()=>{
      isDone?setCurrentTrack(tracks[CurrentIndex].track):console.log("error")
  },[CurrentIndex, tracks])



  return (
    <>
      <Sidebar />
      <div className="content-wrapper player">
        <div className="left-side">
        <Audioplayer currentTrack={CurrentTrack} />
        </div>
        <div className="right-side">
          <Song album={CurrentTrack.album} />
          <Queue tracks={tracks} setCurrentIndex={setCurrentIndex}/>
        </div>
      </div>
    </>
  );
}

export default Player;
