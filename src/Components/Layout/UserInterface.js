import React from 'react'
import Footer from './Footer'
// import Header from './Header'
import Main from './Main'
import SideBar from './SideBar'
import { Link } from 'react-router-dom'

function UserInterface() {
  return (
    <>
      <SideBar />
      <div style={{ marginLeft: "10vw" }}>
        <Link to="/audio/1" >1</Link> <br />
        <Link to="/audio/2" >2</Link><br />
        <Link to="/audio/3" >3</Link><br />
      </div>
    </>
  )
}

export default UserInterface