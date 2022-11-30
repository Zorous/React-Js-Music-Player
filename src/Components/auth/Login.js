import React from 'react'
import { loginEndpoint } from '../../spotify';
import '../../Styling/Login.css';

function Login() {
    return (
        <div>
            <div className='row' id='container-login'>
                <div className='col col-md-6 col-lg-6'>
<img src="./images/spotify-icon.png" alt='logo'/>                    
                </div>
                <div className='col col-md-6 col-lg-6'>

                    <a href={loginEndpoint} className="login-btn">Log in with spotify</a>
            </div>
            </div>
        </div>
    )
}

export default Login