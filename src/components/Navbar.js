import React from "react";
//import './Navbar.css';


function Navbar(){
    return(
        <nav className="navbar">
            <h1>Jaime Acevedo</h1>
            <ul>
                <li><a href="#home">Inicio</a></li>
                <li><a href="#about">Sobre mi</a></li>
                <li><a href="#portfolio">Portafolio</a></li>
                <li><a href="#contact">Contacto</a></li>
            </ul>
        </nav>
    );
};

export default Navbar; 