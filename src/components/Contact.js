import React, { useState } from "react";
import AnimatedTitle from "./AnimatedTitle";
import { footer } from "framer-motion/client";
import { FaLinkedin } from "react-icons/fa6";


function Contact(){
    const [formData, setFormData] = useState({name: '', email: '', message:'', errors: {}});
    

    const validate =() => {
        const errors={};
        if(!formData.name) errors.name = 'El nombre es obligatorio';
        if(!formData.email.includes('@')) errors.email = 'Correo Invalido';
        if(!formData.message) errors.message = 'El mensaje no puede estar vacio';
        return errors;
    };

    const handleSubmit=(e)=>{
        e.preventDefault();
        const validationErrors = validate();
        if(Object.keys(validationErrors).length===0){
            alert('Formulario enviado con exito');
            setFormData({name: '', email:'',message: '', errors: {}});
        }else{
            setFormData(prevState => ({...prevState,errors: validationErrors}))
        }
    }
    return(
        <section id="contact" className="contact">
            <AnimatedTitle text='Contacto'/>
            <form onSubmit={handleSubmit}>
                <div id="forma" className="forma">
                <label>
                    Nombre:
                    <input type="text" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                    {formData.errors.name && <span className="error">{formData.errors.name}</span>}
                </label>
                <label>
                    Correo:
                    <input type="email" 
                    value={formData.email}
                    onChange={(e)=> setFormData({...formData, email: e.target.value})}
                    />
                    {formData.errors.email&& <span className="error">{formData.errors.email}</span>}
                </label>
                <label>
                    Mensaje:
                    <textarea 
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    ></textarea>
                    {formData.errors.message && <span className="erorr">{formData.errors.message}</span>}
                </label>
                </div>
                <button type="submit">Enviar</button>
            </form>
        </section>
    )

    
}






export default Contact;

export function Footer(){
    const linkedInLink ='https://www.linkedin.com/in/jaime-acevedo-746b8b24a/';

    return(
        <footer style={{textAlign: 'center', padding:'20px', backgroundColor: '#f8faa'}}>
        <a
        href={linkedInLink}
        target="_blank"
        rel="noopener noreferrer"
        style={{
            color: '#0077b5',
            textDecoration: 'none',
            fontSize:'24px',
            display: 'flex',
            alignItems: 'left',
            justifyContent: 'left',
            gap: '10px',
    
        }}
        >
            <FaLinkedin/>
            Visita mi linkedin
        </a>
        </footer>
    )
}

