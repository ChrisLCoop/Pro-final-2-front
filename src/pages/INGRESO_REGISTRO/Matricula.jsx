import React from 'react'
import './ingreso-registro.css'
import { Link } from 'react-router-dom'


const Matricula = () => {
  return (
    <div className='cont-registro-matricula'>
        <div className="content">

            <h1 className="logo">Matriculate en <span>Alura</span></h1>
            <br />
            <div className="contact-wrapper animated bounceInUp">
                <div className="contact-form">
                    <h3>Contactenos</h3>
                    <form action="">
                        <p>
                            <label>Nombre Completo</label>
                            <input type="text" name="fullname"/>
                        </p>
                        <p>
                            <label>Correo Electronico</label>
                            <input type="email" name="email"/>
                        </p>
                        <p>
                            <label>Telefono:</label>
                            <input type="tel" name="phone"/>
                        </p>
                        <p>
                            <label>Codigo Postal</label>
                            <input type="text" name="affair"/>
                        </p>
                        <p className="block">
                        <label>Mensaje</label> 
                            <textarea name="message" rows="3"></textarea>
                        </p>
                        <p className="block">
                            <button>
                                Enviar
                            </button>
                        </p>
                    </form>
                </div>
                <div className="contact-info">
                    <h4>Mas Informacion</h4>
                    <ul>
                        <li><i className="fas fa-map-marker-alt"></i> Baker Street</li>
                        <Link className='link-contacto' to="https://wa.link/tgxqso">
                            <p className='link-wht'>Escribenos al WhatasApp : 912-485-345 o click aqui</p>
                        </Link>
                        <li><i className="fas fa-phone"></i> (111) 111 111 111</li>
                        <li><i className="fas fa-envelope-open-text"></i> contact@website.com</li>
                    </ul>
                    <p>Nosotros validaremos tus datos y nos pondremos en contacto contigo.</p>
                    <p>Alura.com</p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Matricula