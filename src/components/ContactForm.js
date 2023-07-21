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
        <section >
    <div className="row">
        <div className="col-md-9 mb-md-0 mb-5">
            <form id="contact-form" ref={form} onSubmit={sendEmail}>
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
                    <div className="col-md-12">
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
            <div className="status"></div>
        </div>     
        <div className="col-md-3 text-center">
            <ul className="list-unstyled mb-0">
                <li>
                    <svg id="svg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z" />
                </svg>
                    <p>Mi Celular: 11-6736-9257</p>
                </li>
                <li>
                <svg id="svg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 3.75H6.912a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859M12 3v8.25m0 0l-3-3m3 3l3-3" />
                    </svg>
                    <p>Mi Email: f_mmaldonado@hotmail.com</p>
                </li>
            </ul>
        </div>
    </div>
</section>
    )
}

