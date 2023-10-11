import React from "react";
import { useHistory } from "react-router-dom";
import logo from "../assets/img/kario.png";
import mas from "../assets/img/mas.svg";
import refres from "../assets/img/res.svg";
import eliminar from "../assets/img/borrar.svg";
import repor from "../assets/img/error.svg";
import ayuda from "../assets/img/question.svg";
import campana from "../assets/img/campana.svg";
import ajustes from "../assets/img/ajustes.svg";

import "../components/css/nav.css";

export default function Navbar() {
  const imagen = localStorage.getItem("userImage");
  const history = useHistory();
  
  const displayBorrar = () => {
    const textHome = document.querySelector("#text-home");
    const textDelete = document.querySelector("#text-delete");
    const textInfo = document.querySelector("#text-info");
    const textInfoDelete = document.querySelector("#text-info-delete");
    const btnCrearMetas = document.querySelector("#crear-metas");
    const btnCancel = document.querySelector("#cancelar-borrar");
    const linkBorrar = document.querySelector("#remover");

    if (textHome.classList.contains("ver")) {
      textHome.classList.replace("ver", "no-ver");
      textDelete.classList.replace("no-ver", "ver");
    } else {
      textHome.classList.replace("no-ver", "ver");
      textDelete.classList.replace("ver", "no-ver");
    }

    if (textInfo.classList.contains("ver")) {
      textInfo.classList.replace("ver", "no-ver");
      textInfoDelete.classList.replace("no-ver", "ver");
    } else {
      textInfo.classList.replace("no-ver", "ver");
      textInfoDelete.classList.replace("ver", "no-ver");
    }

    if (btnCrearMetas.classList.contains("ver")) {
      btnCrearMetas.classList.replace("ver", "no-ver");
      btnCancel.classList.replace("no-ver", "ver");
    } else {
      btnCrearMetas.classList.replace("no-ver", "ver");
      btnCancel.classList.replace("ver", "no-ver");
    }
  };

  const handleEliminarClick = () => {
    if (history.location.pathname === "/home") {
      // Coloca aquí la lógica que deseas ejecutar cuando la ruta es "/home"
      displayBorrar();
    }
  };

  return (
    <div style={{ width: "100%" }}>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active grup-a d-flex align-items-center gap-2"
                  aria-current="page"
                  href="/home/formulario"
                >
                  <img className="nav-logo" src={mas} alt="" /> Agregar
                </a>
              </li>
              <li className="nav-item" onClick={() => window.location.reload()}>
                <a
                  className="nav-link active grup-a d-flex align-items-center gap-2"
                  aria-current="page"
                  href="#"
                >
                  <img className="nav-logo" src={refres} alt="" /> Refrescar
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active grup-a d-flex align-items-center gap-2"
                  aria-current="page"
                  href="#"
                  onClick={handleEliminarClick}
                >
                  <img className="nav-logo" src={eliminar} alt="" /> Eliminar
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active grup-a"
                  aria-current="page"
                  href="/home"
                >
                  <img className="logo-nav" src={logo} alt="" />
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active grup-a d-flex align-items-center gap-2"
                  aria-current="page"
                  href="#"
                >
                  <img className="nav-logo" src={repor} alt="" /> Reportar
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active grup-a d-flex align-items-center gap-2"
                  aria-current="page"
                  href="#"
                >
                  <img className="nav-logo" src={ayuda} alt="" /> Ayuda
                </a>
              </li>
            </ul>

            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-center">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  <img className="ajustes-nav" src={ajustes} alt="" />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  <img className="ajustes-nav" src={campana} alt="" />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  <img className="imagen-nav" src={`${imagen}`} alt="" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <hr />
    </div>
  );
}
