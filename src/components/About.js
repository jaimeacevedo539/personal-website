import React from "react";
import AnimatedTitle from "./AnimatedTitle";

function About(){
    return(
        <section id="about" className="about">
            <AnimatedTitle text='Sobre mi'/>
            <p>Estudiante de ingeniería de software en mi penúltimo semestre, apasionado por el desarrollo de software.</p>
        </section>
    );

}

export default About;