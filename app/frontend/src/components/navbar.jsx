import React from "react";
import logo from "../assets/img/kario.png";
import mas from "../assets/img/mas.svg";
import refres from "../assets/img/res.svg";
import eliminar from "../assets/img/borrar.svg";
import repor from "../assets/img/error.svg";
import ayuda from "../assets/img/question.svg";
import campana from "../assets/img/campana.svg";
import ajustes from "../assets/img/ajustes.svg";
import imgen from "../assets/img/user-image.jpg";

import '../components/css/nav.css'

export default function Navbar() {
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
                  href="#"
                >
                  <img className="nav-logo" src={mas} alt="" /> Agregar
                </a>
              </li>
              <li className="nav-item">
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
                >
                  <img className="nav-logo" src={eliminar} alt="" /> Eliminar
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active grup-a"
                  aria-current="page"
                  href="#"
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
                  <img className="imagen-nav" src={imgen} alt="" />
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
