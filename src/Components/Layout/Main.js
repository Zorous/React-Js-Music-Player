import React, { useState } from 'react'
import '../../Styling/AudioPlayer.css';
// import Songs from '../../Data/SongsData.json';
import SideBar from './SideBar';
import { Link } from 'react-router-dom';
import '../../Styling/Main.css';
import ENG_Songs from '../../Data/ENG_Songs.json'
import FR_Songs from '../../Data/FR_Songs.json'
import DTS_Songs from '../../Data/DTS_Songs.json'
import All_Songs from '../../Data/All_Songs.json'
import Sidebar from '../_Spotify/Sidebar/Sidebar_spotify';
import SidebarB from './_Sidebar/SidebarB';
// import Sidebar from '../_Spotify/Sidebar/Sidebar_spotify';

// const host = "http://localhost:3000"

function Main() {
  const [langue, setLangue] = useState("All");
  const [Switch,setSwitch] = useState(false);
  // const token = window.localStorage.get("token")
  const SelectLang = (e) => {
    setLangue(e.target.value);
    // let langue=e.target.value;
    // console.log(e.target.value)
  }
  const switchDark =(e)=>{
   setSwitch(!Switch);
   document.body.classList.toggle("light-mode");
   document.getElementById('title').classList.toggle("title-switch")
   document.getElementById('lang').classList.toggle('switch-lang');
   document.getElementsByClassName('card').classList.toggle('card-switch');
   document.getElementsByClassName('card-title').classList.toggle('card-text-switch');
   document.getElementsByClassName('option').classList.toggle('light-mode');
   
  }

  return (
    <>
<SidebarB />
      <div className='lang'>
        <div class="form-group">
          <label for="lang">Select a language : </label>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <select name="lang" id="lang" onChange={SelectLang}>
            <option value="All">All available languages</option>
            <option value="ENG">English</option>
            <option value="FR">French</option>
            <option value="DTS">German</option>

          </select>
        </div>

        <div id="switch" onClick={switchDark}>{Switch ? <i class="fa-solid fa-moon"></i> : <i class="fa-solid fa-sun"></i>}        
        </div>
      </div>
      <div id="content" className="pt-5">
        <div className="bg-overlay" style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/bg/bg0.jpg)`,
        }}></div>
        <div className="row" id="cards-container">
          <div id='title'> <h2 className="mb-4"><i class="fa-solid fa-music"></i> &nbsp;&nbsp; My Songs</h2></div>

          {
            langue == "All" ?
              All_Songs.Songs.map((s) => {
                return (
                  <div className="col col-sm-12 col-md-4 col-lg-3 m-5">

                <Link to={`/AudioPlayer/${s.id}`}>
                 <div className="card mb-5 mr-5" style={{ width: "300px", height: "300px", marginBottom: "200px" }}>
                    <img className="card-img-top" style={{ height: "200px" }} src={s.image} alt="Card image cap" />
                    <div className="card-body">
                      <p className="card-text">{s.title}</p>
                      <p className="card-text">

                      </p>
                    </div>
                  </div></Link> 
                </div>
                )
              }) :


              langue == "ENG" ?
                ENG_Songs.Songs.map((s) => {
                  return (

                    <div className="col col-sm-12 col-md-4 col-lg-3 m-5">

                      <div className="card mb-5" style={{ width: "300px", height: "300px", marginBottom: "200px" }}>
                        <img className="card-img-top" style={{ height: "200px" }} src={s.image} alt="Card image cap" />
                        <div className="card-body">
                          <p className="card-text">{s.title}</p>
                          <p className="card-text">

                          </p>
                        </div>
                      </div>
                    </div>

                  )
                }) : langue == "FR" ?
                  FR_Songs.Songs.map((s) => {
                    return (

                      <div className="col col-sm-12 col-md-4 col-lg-3 m-5">

                      <Link to={`/AudioPlayer/${s.id}`}>  <div className="card mb-5" style={{ width: "300px", height: "300px", marginBottom: "200px" }}>
                          <img className="card-img-top" style={{ height: "200px" }} src={s.image} alt="Card cap" />
                          <div className="card-body">
                            <p className="card-text">{s.title}</p>
                            <p className="card-text">

                            </p>
                          </div>
                        </div></Link>
                      </div>

                    )
                  })
                  : langue == "DTS" ?
                    DTS_Songs.Songs.map((s) => {
                      return (

                        <div className="col col-sm-12 col-md-4 col-lg-3 m-5">
                        <Link to={`/AudioPlayer/${s.id}`}> 
                          <div className="card mb-5" style={{ width: "300px", height: "300px", marginBottom: "200px" }}>
                            <img className="card-img-top" style={{ height: "200px" }} src={s.image} alt="Card cap" />
                            <div className="card-body">
                              <p className="card-text">{s.title}</p>
                              <p className="card-text">

                              </p>
                            </div>
                          </div>
                          </Link>
                        </div>

                      )
                    }) : null


          }
        </div>
      </div>
    </>
  )
}

export default Main