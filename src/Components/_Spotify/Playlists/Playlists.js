import React, { useEffect, useState } from 'react'
import Sidebar from '../Sidebar/Sidebar_spotify'
import APIKit from '../../../spotify'

//Css
import '../css/Playlists.css'
import { useNavigate } from 'react-router-dom';

function Playlists() {
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    APIKit.get('me/playlists').then(function (response) {
      console.log(response.data)
      setPlaylists(response.data.items)
    })

  }, [])
  const navigate= useNavigate()
  const playPlaylist = (id)=>{
navigate('/player',{state:{id:id}})
  }
  return (
    <>
      <Sidebar />
      <div className='content-wrapper'>
        <h1>Here are your Playlists</h1>
        <div className='container'>
          <div className='row'>
            {playlists?.map((playlist) => {
              return (
                <div className='col col-sm-12 col-md-4 col-lg-3 m-5'>
                  <div className="card playlist" key={playlist.id} style={{ width: "18rem" }} onClick={()=>{playPlaylist(playlist.id)}}>
                    <img className="card-img-top playlist" src={playlist.images[0].url} alt="playlist" />
                    <div className="card-body">
                      <h5 className="card-title playlist">{playlist.name}</h5>
                      <p className="card-text playlist">
                        {playlist.tracks.total} Songs
                      </p>
                      <div className="Play-btn">
                        <i className="fa-solid fa-circle-play"></i></div>
                    </div>
                  </div>        </div>)
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default Playlists