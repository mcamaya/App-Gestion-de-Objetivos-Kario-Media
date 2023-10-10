import React from "react";

import logo from  '../assets/img/kario.png'
import añadir from  '../assets/img/kario.png'
import refres from  '../assets/img/kario.png'
import eliminar from  '../assets/img/kario.png' 
import repor from  '../assets/img/kario.png'
import ayuda from  '../assets/img/kario.png'


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
                    <a class="nav-link active" aria-current="page" href="#">refe</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Features</a>
                    </li>
                    <li class="nav-item">
                    <a class="navbar-brand" href="#"><img src={logo} alt="" srcset="" /></a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Pricing</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link disabled" aria-disabled="true">Disabled</a>
                    </li>
            </ul>
            </div>
        </div>
</nav>
           
        </div>
    )
}