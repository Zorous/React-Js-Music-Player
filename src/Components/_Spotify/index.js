import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar/Sidebar_spotify'
import axios from 'axios';
import apiClient from '../../spotify';
import './css/index.css'

function Home() {
   
   return(
         <>
 <Sidebar />
 <div className='content'>
 <h1>Main</h1>
</div>
        </>
    )
}

export default Home