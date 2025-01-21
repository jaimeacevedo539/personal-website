import React from "react";
//import './Navbar.css';
import {Link} from 'react-scroll';


function Navbar(){
    return(
        <nav className="navbar">
            <h1>Jaime Acevedo</h1>
            <ul>
                <li><Link to="home" smooth duration={500}>Inicio</Link></li>
                <li><Link to="about" smooth duration={500}>Sobre mi</Link></li>
                <li><Link to="portfolio" smooth duration={500}>Portafolio</Link></li>
                <li><Link to="contact" smooth duration={500}>Contacto</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar; 