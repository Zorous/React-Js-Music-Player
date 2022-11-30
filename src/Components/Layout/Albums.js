import React from 'react';
import SideBar from './SideBar';
import '../../Styling/Albums.css'

function Albums() {
  return (
<>
<SideBar />
<div>
<div className='row'>

<div className="col col-sm-12 col-md-6 col-lg-3">
<div className="card mb-5" style={{width: "300px",height:"300px",marginBottom:"200px"}}>
<img className="card-img-top" src="" alt="Card image cap" />
  <div className="card-body">
    <p className="card-text">
ALbums
    </p>
  </div>
</div>
</div>


</div>
</div>
</>
  )
}

export default Albums