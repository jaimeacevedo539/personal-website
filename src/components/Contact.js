import React, { useState } from "react";


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
            <h2>Contacto</h2>
            <form onSubmit={handleSubmit}>
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
                <button type="submit">Enviar</button>
            </form>
        </section>
    )
}

export default Contact;