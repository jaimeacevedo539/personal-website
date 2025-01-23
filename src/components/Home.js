import React from "react";
import AnimatedTitle from "./AnimatedTitle";

function Home(){
    return(
        <section id="home" className="home">
            <AnimatedTitle text='Bienvenidos'/>
            <p>Mi nombre es Jaime Acevedo, Técnico en procesamiento de pruebas de software y estudiante de septimo (penultimo) semestre de Ingenieria de software.
            </p>
        </section>
    );
};

export default Home;