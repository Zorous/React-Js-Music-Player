import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar/Sidebar_spotify'
import axios from 'axios';
import apiClient from '../../spotify';
import ArtistsSearch from './ArtistsSearch';
import './css/index.css'

function Home(props) {
    const [searchKey, setKey] = useState("");
    const [artists, setArtists] = useState([]);
    const { token } = props
    // console.log('token',token)

    const searchArtists = async (e) => {
        e.preventDefault()
        const { data } = await axios.get("https://api.spotify.com/v1/search", {
            headers: {
                Authorization: `Bearer ${token}`
            },
            params: {
                q: searchKey,
                type: "track,artist"
            }
        })
        console.log(data)
        setArtists(data.artists.items)

        // console.log(artists)
    }

    useEffect(() => {
        apiClient.get("me").then(response => console.log('response', response))
    })

    const CollectArtists = () => {

        return (
            <div className="row" id="results_row">
                {artists.map(artist => (
                    <div className="col col-sm-12 col-md-4 col-lg-4 m-5">

                        <div className="card mb-3">
                            <img className="card-img-top" style={{ height: "200px" }} src={artist.images[0].url} alt="Card cap" />
                            <div className="card-body">
                                <p className="card-text">{artist.name}</p>
                            </div>
                        </div>
                    </div>
                ))}</div>)
    }

    return (
        <>
                <Sidebar />
 <div className='content'>
 <h1>Main</h1>
</div>
        </>
    )
}

export default Home