import React from 'react'
import './section5.css'
import { Link } from 'react-router-dom'

const Section5 = () => {
  return (
    <div className="content-section-sc5">
        <div className="blq-cs5-bq1">
            <div className="fr-ttl-cs5">
                <div className="logo-cs5-tll">
                    <img src="" alt="" />
                    <div className="sth-cs-ttl-a">
                        <p>Para</p>
                        <br />
                        <p>Empresas</p>
                    </div>
                </div>
                <h5>Altura a medir</h5>
                <h5>Temporal</h5>
                <h2>Para tu empresa</h2>
                <h4>Capacite a sus equipos con capacitación continua, lanzamientos semanales, paneles e informes de participación, así como guías de estudio personalizadas según sus necesidades.</h4>
                <h4>Descubra nuestra propuesta para su empresa:</h4>
                <Link className='btn-cs5-refer-a'>
                    <p>Descubre los recursos</p>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Section5