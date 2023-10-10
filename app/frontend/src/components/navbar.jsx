import React from "react";
import "./css/nav.css";

import logo from  '../assets/img/kario.png'
import mas from  '../assets/img/mas.svg'
import refres from  '../assets/img/res.svg'
import eliminar from  '../assets/img/borrar.svg' 
import repor from  '../assets/img/error.svg'
import ayuda from  '../assets/img/question.svg'


export default function Navbar(){
    return(
        <div className="d-flex align-items-center vw-100">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto ">
                    <li className="nav-item">
                    <a className="nav-link active grup-a d-flex justify-content-center align-items-center gap-3" aria-current="page" href="#"><img className="nav-logo ms-3"  src={mas} alt="" />Añadir</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link active grup-a d-flex justify-content-center align-items-center gap-3" aria-current="page" href="#"><img className="nav-logo" src={refres} alt="" />Refrescar</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link active grup-a d-flex justify-content-center align-items-center gap-3" aria-current="page" href="#"><img className="nav-logo" src={eliminar} alt="" />Eliminar</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-item" href="#"><img src={logo} className="logo-nav" alt="" srcset="" /></a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link active grup-a d-flex justify-content-center align-items-center gap-3" aria-current="page" href="#"><img className="nav-logo" src={repor} alt="" />Eliminar</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link active grup-a d-flex justify-content-center align-items-center gap-3" aria-current="page" href="#"><img className="nav-logo" src={ayuda} alt="" />Ayuda</a>
                    </li>
            </ul>
            <form class="d-flex" role="search">
                <img src="" alt="" />
                <h1>hola</h1>
             <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
            </div>
        </div>
</nav>
           
        </div>
    )
}