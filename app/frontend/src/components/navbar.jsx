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
        <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav mx-auto">
                    <li class="nav-item">
                    <a class="nav-link active grup-a" aria-current="page" href="#"><img className="nav-logo"  src={mas} alt="" />Añadir</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link active grup-a" aria-current="page" href="#"><img className="nav-logo" src={refres} alt="" />Refrescar</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link active grup-a" aria-current="page" href="#"><img className="nav-logo" src={eliminar} alt="" />Eliminar</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-item" href="#"><img src={logo} className="logo" alt="" srcset="" /></a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link active grup-a" aria-current="page" href="#"><img className="nav-logo" src={repor} alt="" />Eliminar</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link active grup-a" aria-current="page" href="#"><img className="nav-logo" src={ayuda} alt="" />Ayuda</a>
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