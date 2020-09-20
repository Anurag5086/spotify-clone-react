import React from 'react'
import './Login.css'
import { loginUrl } from './spotify'



function Login() {
    return (
        <div className="login">
            <img src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt=""/>
        <h2 className="head__text">Sign up for free to start listening.</h2>
            <a href={loginUrl} className="login__button">LOGIN WITH SPOTIFY</a>
        </div>
    )
}

export default Login;
