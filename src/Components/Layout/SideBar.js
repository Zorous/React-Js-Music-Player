import React, { useState, useEffect } from 'react'
import '../../Styling/SideBarStyle.css';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import 'bootstrap/dist/css/bootstrap.min.css';


function SideBar() {
    const [token, setToken] = useState("")

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [image, setImage] = useState("https://i.pinimg.com/564x/02/70/e8/0270e8f9ebb8e674a65e6657f5d5849a.jpg");
    const [userName, setUsername] = useState("Music Player")

    return (
        <>
            <div style={{ position: "fixed", top: "0px" }}>
                <span onClick={handleShow} className="side-nav">
                    <i className="fa fa-user" style={{ color: "#fff", fontSize: "36px" }} aria-hidden="true"></i>
                </span>
                <div>
                    <Offcanvas style={{ backgroundColor: "#000" }} show={show} onHide={handleClose}>
                        <Offcanvas.Header className='sidebarHeader' closeButton>
                            <Offcanvas.Title>
                                <div className="user-logo" style={{ display: "flex" }}>
                                    <div className="img img-rounded" style={{
                                        backgroundImage: `url(${image})`,
                                        width: "90px",
                                        height: "90px",
                                        zoom: "1",
                                        backgroundRepeat: "no-repeat round",
                                        borderRadius: '200px'
                                    }}>
                                    </div>
                                    <span className='nav-title'>{userName}</span>

                                </div>

                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body className="nav-body" style={{ padding: "0px", position: "relative" }}>

                            <div className="bg-layer" style={{
                                backgroundImage: `url(${process.env.PUBLIC_URL}/bg/bg8.jpg)`,
                            }}></div>

                            <ul className="nav justify-content-center" id='sidebar-ul'>
                                <li className="nav-item">
                                    <Link to="/" className='link'>Welcome</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/Main" className='link'>Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/Albums" className='link'>Albums </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/Search" className='link'>Search</Link>
                                </li>
                                <li className="nav-item">

                                    {
                                        !token ? "" :
                                            "Logout"
                                    }
                                </li>

                            </ul>

                        </Offcanvas.Body>
                    </Offcanvas>
                </div>
            </div>
        </>
    )
}

export default SideBar