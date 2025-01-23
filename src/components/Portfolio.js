import React from "react";
import AnimatedTitle from "./AnimatedTitle";

function Portfolio(){
    return(
        <section id="portfolio" className="portfolio">
            <AnimatedTitle text= 'Portafolio'/>
            <p>Aca puedes ver algunos de mis proyectos: </p>
            <ul>
                <li><a href="#1"></a>Proyecto 1</li>
                <li><a href="#1"></a>Proyecto 2</li>
                <li><a href="#1"></a>Proyecto 3</li>
            </ul>
        </section>
    )
}

export default Portfolio;