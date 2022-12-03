import React from 'react'
import '../../css/albumimage.css'

function AlbumImage({ url }) {
  return (

    <div>
      <div className='album_image'>
        <img src={url} alt="album" className='albumImage-Ar' />
        <div className='album_image_shadow'>
          <img src={url} alt="album" className='albumImage-shading' />
        </div>
      </div>
    </div>
  )
}

export default AlbumImage