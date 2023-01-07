import './App.css';
import UserInterface from './Components/Layout/UserInterface';
import { Link,Routes,Route,BrowserRouter } from "react-router-dom";
import React,{useState,useEffect} from 'react';
import LandingPage from './Components/Layout/LandingPage';
import Search from './Components/Layout/Search';



import SearchSp from './Components/_Spotify/Search';

import Home from './Components/_Spotify/index'
import Albums from './Components/Layout/Albums';
import Main from './Components/Layout/Main'
import AudioPlayer from './Components/Layout/AudioPlayer';
import Login from './Components/auth/Login';
import { setClientToken } from './spotify';
import Playlists from './Components/_Spotify/Playlists/Playlists';
import Player from './Components/_Spotify/Audio Player/Player';
function App() {
  const [token,setToken] = useState("")

useEffect(() =>{
  const hash = window.location.hash
  // console.log(hash.split("&")[0].split("=")[1])

  let token = window.localStorage.getItem("token")
  window.location.hash=""
  if(!token && hash){
    const _token = hash.split("&")[0].split("=")[1];
    window.localStorage.setItem("token",_token)
    setToken(_token);
    setClientToken(_token);
  }
  
  else{
    setToken(token)
    setClientToken(token)
  }
},[])
  return (
    !token ?
      (
        <Routes>
            <Route index  element={<LandingPage />} />         
            <Route path='main' element={<Main />} />         
            <Route path='/AudioPlayer/:id' element={<AudioPlayer />} />         
          </Routes>
        
    ):
    (
      <Routes>
          <Route path="/welcome" element={<LandingPage />} />
          <Route index element={<Home />} />
          <Route path="/search" element={<SearchSp token={token}/>} />
          <Route path="/playlists" element={<Playlists />} />
          <Route path="/player" element={<Player />} />
          <Route path="Login_with_spotify" element={<Login />} />
          <Route path="audio/:num" element={<AudioPlayer />} />
        </Routes>
    
    )
  );
}

export default App;
