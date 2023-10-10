import React, {useEffect} from 'react';
import { useLocation } from "react-router-dom";
import { BrowserRouter as Link, useHistory } from 'react-router-dom';
import './css/saludo.css'
import logo2 from '../assets/img/kario-media.png';
import logo from '../assets/img/kario.png';
import userImage from '../assets/img/user-image.jpg';


export default function Saludo() {
	const location = useLocation();
  const history = useHistory();
	const {state: {nombre, rol}} = location;

  useEffect(()=>{
      const timer = setTimeout(()=>{
          history.push('/home')
      }, 4000)

      return () => clearTimeout(timer);
  }, [history]);

  return (
    <div className="container">
      <img id="img-animated" src={logo} alt="..." />
      <div className="saludo-loged">
        <div className="logo-login">
          <img src={logo2} alt="..." />
        </div>
        <div className="bienvenida-loged">
          <h1>Bienvenido de vuelta</h1>
        </div>
        <div className="user-loged">
          <img src={userImage} alt="..." />
        </div>
        <div className="username-loged">
          <h1>{nombre}</h1>
        </div>
        <div className="user-role">
          <p>Usuario {rol.map((role) => (`${role}`))}</p>
        </div>
      </div>
    </div>
  );
}
