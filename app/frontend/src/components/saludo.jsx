import React from 'react';
import { BrowserRouter as Router, Route, Switch, useLocation, Link } from 'react-router-dom';
import './css/saludo.css'
import logo2 from '../assets/img/kario-media.png';
import logo from '../assets/img/kario.png';

export default function Saludo(){
    return (
        <div className='container'>
            <div className="saludo-loged">
                <div className="logo-login">
                    <img src={logo2} alt="..."/>
                </div>
            </div>
        </div>
    );
}