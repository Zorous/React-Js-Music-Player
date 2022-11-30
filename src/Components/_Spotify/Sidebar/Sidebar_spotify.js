import React, { useState } from 'react';
import '../css/index.css';
// import { Link,useLocation } from 'react-router-dom';
import '../css/SideBar.css'
import SidebarButton from './SidebarButton';
import { useEffect } from 'react';
import apiClient from '../../../spotify';

function Sidebar() {
const [userimage,setUserimage] = useState();
const [Username,setUsername] =  useState("User")
  useEffect(() => {
    apiClient.get("me").then(response =>{
      setUsername(response.data.display_name);
      response.data.images.length>0?setUserimage(response.data.images[0].url):setUserimage("https://i.pinimg.com/564x/54/ef/be/54efbe41a8e81cebf4ff119aca2b7259.jpg");

    })
})
  const logout = () => {
    window.localStorage.removeItem("token")
    window.location.reload(false); 
  }
  return (
    <div className="sidebar-container">
      <img src={userimage}
        className='profile-img' alt='profile' /> 
      <div>
       <SidebarButton to="/" icon={<i class="fa-solid fa-house"></i>}  title="Home" />
       <SidebarButton to="/player" icon={<i class="fa-solid fa-play"></i>}  title="Player" />
       <SidebarButton to="/playlists" icon={<i class="fa-solid fa-compact-disc"></i>}  title="Playlists" />
       <SidebarButton to="/search" icon={<i class="fa-solid fa-magnifying-glass"></i>}  title="Search" />
      </div>
      <div onClick={logout} className="btn-container" id="logout">
        <i class="fa-solid fa-right-from-bracket"></i>
         log out
      </div>
    </div>

  );
}

export default Sidebar