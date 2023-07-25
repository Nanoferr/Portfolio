import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';


export const ContactForm = ()  => {




    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        showSuccess();
        emailjs.sendForm('service_7ire3qi', 'template_ropva6u', form.current, 'eduRorpdEGTpsFKmZ')
        .then((result) => {
            console.log(result.text);
            
        }, (error) => {
            console.log(error.text);
        });
    };

    const showSuccess= () => {
        Swal.fire(
            'Mensaje Enviado!',
            'success'
          )
    }

    return (
        <section className="justify-content-center">
        <div className="row justify-content-center">
            <div className="col-md-9 mb-md-0 mb-5">
                <form id="contact-form" ref={form} onSubmit={sendEmail} className='justify-center'>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="md-form mb-0">
                                <input type="text" placeholder="Tu nombre" name="user_name" className="form-control"  required/>
                                <label for="user_name" className="">Nombre</label>
                            </div>
                        </div> 
                        <div className="col-md-6">
                            <div className="md-form mb-0">
                                <input type="text" placeholder="Tu Email" name="user_email" className="form-control"  required/>
                                <label for="user_email" className="">Email</label>
                            </div>
                        </div>   
                    </div>
                    <div className="row">
                        <div className="col-md-56">
                            <div className="md-form">
                                <textarea type="text" name="message" rows="2" placeholder="Puedes dejarme un mensaje aqui" className="form-control md-textarea"  required></textarea>
                                <label for="message">Mensaje</label>
                            </div>
                        </div>
                    </div>
                    <div className='row p-2'>
                    <button type="submit" className="btn btn-primary" value="Send">Enviar</button>
                    </div>
                </form>
        </div>     
    </div>
</section>
    )
}

