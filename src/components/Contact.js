import React from "react";


function Contact(){
    return(
        <section id="contact" className="contact">
            <h2>Contacto</h2>
            <form>
                <label>
                    Nombre:
                    <input type="text" name="name"/>
                </label>
                <label>
                    Correo:
                    <input type="email" name="email"/>
                </label>
                <label>
                    Mensaje:
                    <textarea name="message"></textarea>
                </label>
                <button type="submit">Enviar</button>
            </form>
        </section>
    )
}

export default Contact;