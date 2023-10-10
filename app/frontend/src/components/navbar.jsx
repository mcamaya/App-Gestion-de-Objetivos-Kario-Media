import React from "react";
import "./css/nav.css";

import logo from "../assets/img/kario.png";
import mas from "../assets/img/mas.svg";
import refres from "../assets/img/res.svg";
import eliminar from "../assets/img/borrar.svg";
import repor from "../assets/img/error.svg";
import ayuda from "../assets/img/question.svg";
import campana from "../assets/img/campana.svg";
import ajustes from "../assets/img/ajustes.svg";
import imgen from "../assets/img/user-image.jpg";

export default function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a
                  class="nav-link active grup-a d-flex align-items-center gap-2"
                  aria-current="page"
                  href="#"
                >
                  <img className="nav-logo" src={mas} alt="" /> Agregar
                </a>
              </li>
              <li class="nav-item ">
                <a
                  class="nav-link active grup-a d-flex align-items-center gap-2 "
                  aria-current="page"
                  href="#"
                >
                  <img className="nav-logo" src={refres} alt="" /> Referescar
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link active grup-a d-flex align-items-center gap-2"
                  aria-current="page"
                  href="#"
                >
                  <img className="nav-logo" src={eliminar} alt="" /> Eliminar
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active grup-a" aria-current="page" href="#">
                  <img className="logo-nav " src={logo} alt="" />
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link active grup-a d-flex align-items-center gap-2"
                  aria-current="page"
                  href="#"
                >
                  <img className="nav-logo" src={repor} alt="" /> Reportar
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link active grup-a d-flex align-items-center gap-2"
                  aria-current="page"
                  href="#"
                >
                  <img className="nav-logo" src={ayuda} alt="" /> Ayuda
                </a>
              </li>
            </ul>

            <ul class="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-center">
              <li class="nav-item ">
                <a class="nav-link active" aria-current="page" href="#">
                  <img className="ajustes-nav" src={ajustes} alt="" />
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active " aria-current="page" href="#">
                  <img className="ajustes-nav" src={campana} alt="" />
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active " aria-current="page" href="#">
                  <img className="imagen-nav" src={imgen} alt="" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
