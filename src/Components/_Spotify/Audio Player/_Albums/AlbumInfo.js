import React from 'react'
import '../../css/albumInfo.css';

function AlbumInfo({ album }) {
  // console.log("album",album)
  const artists = []
  album?.artists?.forEach((element) => {
    artists.push(element.name);
  })
  return (
    <div>
      <div className='album-name'>
        <div className='marque'>  <p>{album ? album.name + " - " + artists?.join(', ') : ""}</p></div>
      </div>
      <div className='album-info'>
        <p>
          {album ? `${album.name} is an ${album?.album_type} by ${artists?.join(', ')}
      with ${album?.total_tracks} tracks` : "loading"}
        </p>
      </div>
      <div className='album-releases'>
        <p>
          Release Date : {album?.release_date}
        </p>
      </div>
    </div>
  )
}

export default AlbumInfo