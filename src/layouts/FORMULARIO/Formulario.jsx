import React from 'react'
import './formulario.css'

const Formulario = () => {
  return (
    <div className='content-all-formulario'>
        <div className="cont-form">
            <h1>Formulario de solicitud de ingreso</h1>
            <form
                target="_blank"
                action="https://formsubmit.co/christian.limas.e@email.com"
                method="POST"
              >
                <div className="form-group">
                  <div className="form-row">
                    <div className="col">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Nombre Completo"
                        required
                      />
                    </div>
                    <div className="col">
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Tu dirección de correo electronico"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    placeholder="Tu mensaje"
                    className="form-control"
                    name="message"
                    rows="10"
                    required
                  ></textarea>
                </div>
                
                <input type="hidden" name="_captcha" value="false" />
                <input
                  type="hidden"
                  name="_next"
                  value="https://www.google.com"
                />
                <button type="submit" className="btn btn-lg btn-dark btn-block">
                  Enviar
                </button>
            </form>
        </div>
    </div>
  )
}

export default Formulario