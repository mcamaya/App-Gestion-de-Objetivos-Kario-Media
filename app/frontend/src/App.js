import logo from './assets/img/kario.png';
import logo2 from './assets/img/kario-media.png';
import './App.css';

function App() {
  return (
    <div className="contenedor">
        <div className="logo">
          <img id="img-animated" src={logo} alt="..."/>
          <div className="login">
            <div className="header-login">
              <div className="logo-login">
                <img src={logo2} alt="..."/>
              </div>
              <div className="title-login">
                <h1>Bienvenido al panel digital de KARIO Media</h1>
              </div>
              <div className="subtitle-login">
                <p>Por favor ingresa los siguientes datos para ingresar a la plataforma</p>
              </div>
            </div>
            <div className="inputs-login">
              <div className="inputs-container">
                <label>Usuario</label>
                <input type="text" />
              </div>
              <div className="inputs-container">
                <label>Contraseña</label>
                <input type="text" />
              </div>
            </div>
            <div className="button-login">
              <button>Ingresar al panel</button>
            </div>
            <div className="info-login">
              <p>Tienes problemas para ingresar? Por favor contactarse con asistencia técnica lo más pronto posible</p>
            </div>
          </div>
        </div>
    </div>
  );
}

export default App;
