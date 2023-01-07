import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar/Sidebar_spotify'
import axios from 'axios';
import apiClient from '../../spotify';
import './css/index.css'
import './css/Search.css'

function SearchSp(props) {
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


    const CollectArtists = () => {

        return (
            <div className="row" id="results_row">
                {artists.map(artist => (
                    <div className="col col-sm-12 col-md-4 col-lg-4 m-5">

                        <div className="card mb-3">
                            <img className="card-img-top" style={{ height: "320px" }} src={artist.images[0].url} alt="Card cap" />
                            <div className="card-body">
                                <p className="card-text">{artist.name}</p>
                            </div>
                        </div>
                    </div>
                ))}</div>)
    }

    return (
        <>
            <div style={{ display: "flex" }}>
                <Sidebar />
                <div style={{ width: "80vw", height: "100vh", marginLeft: "20vw" }}>
                    {token ? (<form onSubmit={searchArtists}>
                        <div className='main'>
                            <h2>Type your favorite Artist/Track :</h2>
                            <input type="text" id='input' placeholder='Search...' onChange={(e) => { setKey(e.target.value) }} />
                            <button id="search" type={"submit"}>search</button></div>
                    </form>) :
                        <h2>Please log in</h2>
                    }
                    <div className='results'>
                    <h2>Results :</h2>
                    {CollectArtists()}
                </div>
            </div>
        </div> </>
    )
}

export default SearchSp