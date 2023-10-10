import React from 'react';
import { BrowserRouter as Link } from 'react-router-dom';
import './css/saludo.css'
import logo2 from '../assets/img/kario-media.png';
import logo from '../assets/img/kario.png';
import userImage from '../assets/img/user-image.jpg';

export default function Saludo(){
    return (
        <div className='container'>
            <img id="img-animated" src={logo} alt="..."/>
            <div className="saludo-loged">
                <div className="logo-login">
                    <img src={logo2} alt="..."/>
                </div>
                <div className='bienvenida-loged'>
                    <h1>Bienvenido de vuelta</h1>
                </div>
                <div className="user-loged">
                    <img src={userImage} alt="..."/>
                </div>
                <div className='username-loged'>
                    <h1>Pedro Felipe Gómez Bonilla</h1>
                </div>
                <div className='user-role'>
                    <p>Usuario Administrador</p>
                </div>
            </div>
        </div>
    );
}