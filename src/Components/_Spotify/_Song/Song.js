import React from 'react'
import '../css/Song.css'
import AlbumImage from '../Audio Player/_Albums/AlbumImage'
import AlbumInfo from '../Audio Player/_Albums/AlbumInfo'

function Song({album}) {
  // console.log("test",album.images[0].url)
  return (
    <div className='SongCard-body'>
    <AlbumImage url={album?.images[0]?.url} />
    <AlbumInfo album={album} />
    </div>
  )
}

export default Song