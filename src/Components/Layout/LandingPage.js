import React from 'react'
import { Route,redirect } from 'react-router-dom';
import { Link, Outlet } from "react-router-dom";
import '../../Styling/LandingPage.scss';
import '../../Styling/LandingPage.css';
import { loginEndpoint, setClientToken } from '../../spotify';
import { useEffect, useState } from 'react';

function LandingPage() {

  return (
    <>
    <div style={{
      backgroundImage: `url(${process.env.PUBLIC_URL + '/bg/spacebg2.jpg'})`,
      backgroundSize:"cover",
      minHeight:"100vh",
      zoom: "1",
      backgroundAttachment:"fixed",
      backgroundPosition: "center",
      position:"absolute",
      top:"0px",
      right:"0px",
      bottom:"0px",
      left:"0px",
    }}>
    </div>

      <div class="stars">
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
      </div>
      <div className='container'>

        <div className='row' id="myrow">
          <div className='col col-md-12 col-sm-12 col-lg-6' id="mycol">
            <h1 id="title">
              Welcome to my Music Player <span style={{ color: "#12c2e9" }}>React JS</span> project

            </h1>

            <Link to="main"> <button class="glow-on-hover" type="button">Start Listening</button></Link> <br></br>
            <br></br>
            <br></br>

            <div className="row">
              <div className='col col-md-12 col-lg-12 mb-5' style={{
                backgroundImage: `url(${process.env.PUBLIC_URL + '/Icons/spotify-icon2.png'})`,
                backgroundRepeat:"no-repeat",
                minHeight: "400px",
                zoom:"0.4"
              }}></div>
            </div>
            <div className="col col-lg-12 col-md-12">
              <button id='spotify-btn'>
                <a id="spotify-link" style={{ textDecoration: "none", color: "#fff", fontWeight: "bolder" }} href={loginEndpoint}>Login with spotify</a></button>
            </div>

          </div>
          <div className='col col-md-12 col-lg-6' style={{
            backgroundImage: `url(${process.env.PUBLIC_URL + '/images/LandingPage/music.jpg'})`,
            height: "auto",
            zoom: "0.4",
            borderRadius: "300px",
          }}></div>

        </div>
      </div>
      
      <Outlet />
    </>
  )
}

export default LandingPage
