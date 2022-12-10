import React from 'react'
import { Link,useLocation } from 'react-router-dom'

function SidebarButton(props) {
  const location = useLocation();
  const isActive = location.pathname === props.to;
  const btnClass = isActive? "btn-container active": "btn-container";
  const titleClass = isActive? "title active" : "title"

  return (
    <Link className='lien' to={props.to}>
    <div className={btnClass}>
{props.icon}     
<p className={titleClass}>{props.title}</p>
    </div> </Link>  )
}

export default SidebarButton