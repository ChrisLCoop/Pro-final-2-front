import React from 'react'
import './section1.css'
import { Link } from 'react-router-dom'
import Flecha from '../../components/FLECHA/Flecha'
import IconoCmd from '../../components/IconoCmd/IconoCmd'
import IconoAsterisco from '../../components/IconoAsterisco/IconoAsterisco'
import IconoReact from '../../components/IconoReact/IconoReact'
import IconoAi from '../../components/IconoAi/IconoAi'
import IconoGear from '../../components/IconoGear/IconoGear'
import IconoEye from '../../components/IconoEye/IconoEye'
import IconoMobil from '../../components/IconoMobil/IconoMobil'
import IconoBombilla from '../../components/IconoBombilla/IconoBombilla'

const Section1 = () => {
  return (
    <div className='content-section-1'>
        <div className="content-info-section-1">
            <div className="cont-info-s1">
                <h1>Cursos de <span>Tecnologia!</span></h1>
                <p>Contamos con la mejor comunidad de tecnologia del pais.</p>
                <Link className='btn-link-s1' to="">
                    <div className="cont-matricula-now">
                        <p>MATRICULARCE AHORA</p>
                    </div>
                </Link>
            </div>
            <div className="content-cards-s1">
                <div className="cards-s1-content-gr">
                    <Link className='link-card-s1'>
                        <div className="card-s1-t">
                            <IconoCmd></IconoCmd>
                            <h5 className='titulo-card-s1'>Escuela_</h5>
                            <h4 className='subtitulo-card-s1'>PROGRAMACION</h4>
                            <p>Lógica, Python, PHP, Java, .NET, Node JS, c, Computación, Juegos, IoT y más...</p>
                        </div>
                    </Link>
                    <Link className='link-card-s1'>
                        <div className="card-s1-t">
                            <IconoAsterisco></IconoAsterisco>
                            <h5 className='titulo-card-s2'>Escuela_</h5>
                            <h4 className='subtitulo-card-s2'>PROGRAMACION</h4>
                            <p>Lógica, Python, PHP, Java, .NET, Node JS, c, Computación, Juegos, IoT y más...</p>
                        </div>
                    </Link>
                    <Link className='link-card-s1'>
                        <div className="card-s1-t">
                            <IconoReact></IconoReact>
                            <h5 className='titulo-card-s3'>Escuela_</h5>
                            <h4 className='subtitulo-card-s3'>PROGRAMACION</h4>
                            <p>Lógica, Python, PHP, Java, .NET, Node JS, c, Computación, Juegos, IoT y más...</p>
                        </div>
                    </Link>
                    <Link className='link-card-s1'>
                        <div className="card-s1-t">
                            <IconoAi></IconoAi>
                            <h5 className='titulo-card-s4'>Escuela_</h5>
                            <h4 className='subtitulo-card-s4'>PROGRAMACION</h4>
                            <p>Lógica, Python, PHP, Java, .NET, Node JS, c, Computación, Juegos, IoT y más...</p>
                        </div>
                    </Link>
                    <Link className='link-card-s1'>
                        <div className="card-s1-t">
                            <IconoGear></IconoGear>
                            <h5 className='titulo-card-s5'>Escuela_</h5>
                            <h4 className='subtitulo-card-s5'>PROGRAMACION</h4>
                            <p>Lógica, Python, PHP, Java, .NET, Node JS, c, Computación, Juegos, IoT y más...</p>
                        </div>
                    </Link>
                    <Link className='link-card-s1'>
                        <div className="card-s1-t">
                            <IconoEye></IconoEye>
                            <h5 className='titulo-card-s6'>Escuela_</h5>
                            <h4 className='subtitulo-card-s6'>PROGRAMACION</h4>
                            <p>Lógica, Python, PHP, Java, .NET, Node JS, c, Computación, Juegos, IoT y más...</p>
                        </div>
                    </Link>
                    <Link className='link-card-s1'>
                        <div className="card-s1-t">
                            <IconoMobil></IconoMobil>
                            <h5 className='titulo-card-s7'>Escuela_</h5>
                            <h4 className='subtitulo-card-s7'>PROGRAMACION</h4>
                            <p>Lógica, Python, PHP, Java, .NET, Node JS, c, Computación, Juegos, IoT y más...</p>
                        </div>
                    </Link>
                    <Link className='link-card-s1'>
                        <div className="card-s1-t">
                            <IconoBombilla></IconoBombilla>
                            <h5 className='titulo-card-s7'>Escuela_</h5>
                            <h4 className='subtitulo-card-s7'>PROGRAMACION</h4>
                            <p>Lógica, Python, PHP, Java, .NET, Node JS, c, Computación, Juegos, IoT y más...</p>
                        </div>
                    </Link>
                </div>
                <div className="content-animated-arrows">
                    <Flecha></Flecha>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Section1