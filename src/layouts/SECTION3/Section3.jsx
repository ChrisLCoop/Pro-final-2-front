import React from 'react'
import './section3.css'
import submarinoImg from '../../assets/formations-sub.png'
import Stripes from '../../components/STRIPES/Stripes'
import Flecha from '../../components/FLECHA/Flecha'
import Simbolo from '../../components/SimboloGiratorio/Simbolo'
import lineaDivisora from '../../assets/divider-line.svg'
import { Link } from 'react-router-dom'
import IconoCmd from '../../components/IconoCmd/IconoCmd'
import IconoAsterisco from '../../components/IconoAsterisco/IconoAsterisco'
import IconoReact from '../../components/IconoReact/IconoReact'
import IconoGear from '../../components/IconoGear/IconoGear'
import IconoEye from '../../components/IconoEye/IconoEye'
import IconoMobil from '../../components/IconoMobil/IconoMobil'
import IconoBombilla from '../../components/IconoBombilla/IconoBombilla'
import fotoFiap from '../../assets/fiap_alura.png'



const Section3 = () => {
  return (
    <div className='content-section-3'>
        <div className="cont-ct3bla">
            <div className="ct3-blq-1-a">
                <div className="ct3-blq1-a">
                    <p>Nuestras formaciones, tu guía</p>
                    <h2>Secuencias de cursos organizados en <span>Capacitaciones</span></h2>
                    <h5>Formación con contenidos para el mercado laboral: secuencias de cursos y contenidos para formarte en tecnología y negocios digitales.</h5>
                </div>
            </div>
            <div className="ct3-blq-1-b">
                <div className="content-ct3-img-submarine">
                    
                    <div className="barras-ct3">
                        <Stripes></Stripes>
                    </div>
                    <div className="flecha-ct3">
                        <Flecha></Flecha>
                    </div>
                    <div className="simbolo-ct3">
                        <Simbolo></Simbolo>
                    </div>
                </div>
            </div>
        </div>
        <div className="cont-divider-bloq">
            <img src={lineaDivisora} alt="" />
        </div>
        <div className="content-ct3blb">
            <div className="card-ct3-link-cursos">
                <div className="titulo-card-lrn cl-ct3-tt-crd-1">
                    <div className="cont-img-ct3-link-card ">
                        <IconoCmd></IconoCmd>
                    </div>
                    <h5>PROGRAMACIÓN</h5>
                </div>
                <Link className="lnk-sc3-crd-st" >Desde cero: principiante en programación</Link>
                <Link className="lnk-sc3-crd-st" >APIs con Node.js e Express</Link>
                <Link className="lnk-sc3-crd-st" >Aprende a programar en C# con Orientación a Objetos</Link>
                <Link className="lnk-sc3-crd-st" >Aprende a programar en Java con Orientación a Objetos</Link>
                <Link className="lnk-sc3-crd-st" >Aprenda a programar en JavaScript con enfoque en el back-end</Link>
                <Link className="lnk-sc3-crd-st" >Aprende a programar en PHP</Link>
                <Link className="lnk-sc3-crd-st" >Aprende a programar en Python con Orientación a Objetos</Link>
                <Link className="lnk-sc3-crd-st" >Profundice en .NET con Arquitectura de Microservicios y RabbitMQ</Link>
                <div className="link-direct-escuela-direction">
                    <Link className="lnk-sc3-crd-st-sch" >Ver Centro</Link>
                </div>
            </div>
            <div className="card-ct3-link-cursos">
                <div className="titulo-card-lrn cl-ct3-tt-crd-2">
                    <div className="cont-img-ct3-link-card ">
                        <IconoAsterisco></IconoAsterisco>
                    </div>
                    <h5>PROGRAMACIÓN</h5>
                </div>
                <Link className="lnk-sc3-crd-st" >Desde cero: principiante en programación</Link>
                <Link className="lnk-sc3-crd-st" >APIs con Node.js e Express</Link>
                <Link className="lnk-sc3-crd-st" >Aprende a programar en C# con Orientación a Objetos</Link>
                <Link className="lnk-sc3-crd-st" >Aprende a programar en Java con Orientación a Objetos</Link>
                <Link className="lnk-sc3-crd-st" >Aprenda a programar en JavaScript con enfoque en el back-end</Link>
                <Link className="lnk-sc3-crd-st" >Aprende a programar en PHP</Link>
                <Link className="lnk-sc3-crd-st" >Aprende a programar en Python con Orientación a Objetos</Link>
                <Link className="lnk-sc3-crd-st" >Profundice en .NET con Arquitectura de Microservicios y RabbitMQ</Link>
                <div className="link-direct-escuela-direction">
                    <Link className="lnk-sc3-crd-st-sch" >Ver Centro</Link>
                </div>
            </div>
            <div className="card-ct3-link-cursos">
                <div className="titulo-card-lrn cl-ct3-tt-crd-3">
                    <div className="cont-img-ct3-link-card ">
                        <IconoReact></IconoReact>
                    </div>
                    <h5>PROGRAMACIÓN</h5>
                </div>
                <Link className="lnk-sc3-crd-st" >Desde cero: principiante en programación</Link>
                <Link className="lnk-sc3-crd-st" >APIs con Node.js e Express</Link>
                <Link className="lnk-sc3-crd-st" >Aprende a programar en C# con Orientación a Objetos</Link>
                <Link className="lnk-sc3-crd-st" >Aprende a programar en Java con Orientación a Objetos</Link>
                <Link className="lnk-sc3-crd-st" >Aprenda a programar en JavaScript con enfoque en el back-end</Link>
                <Link className="lnk-sc3-crd-st" >Aprende a programar en PHP</Link>
                <Link className="lnk-sc3-crd-st" >Aprende a programar en Python con Orientación a Objetos</Link>
                <Link className="lnk-sc3-crd-st" >Profundice en .NET con Arquitectura de Microservicios y RabbitMQ</Link>
                <div className="link-direct-escuela-direction">
                    <Link className="lnk-sc3-crd-st-sch" >Ver Centro</Link>
                </div>
            </div>
            <div className="card-ct3-link-cursos">
                <div className="titulo-card-lrn cl-ct3-tt-crd-4">
                    <div className="cont-img-ct3-link-card ">
                        <IconoGear></IconoGear>
                    </div>
                    <h5>PROGRAMACIÓN</h5>
                </div>
                <Link className="lnk-sc3-crd-st" >Desde cero: principiante en programación</Link>
                <Link className="lnk-sc3-crd-st" >APIs con Node.js e Express</Link>
                <Link className="lnk-sc3-crd-st" >Aprende a programar en C# con Orientación a Objetos</Link>
                <Link className="lnk-sc3-crd-st" >Aprende a programar en Java con Orientación a Objetos</Link>
                <Link className="lnk-sc3-crd-st" >Aprenda a programar en JavaScript con enfoque en el back-end</Link>
                <Link className="lnk-sc3-crd-st" >Aprende a programar en PHP</Link>
                <Link className="lnk-sc3-crd-st" >Aprende a programar en Python con Orientación a Objetos</Link>
                <Link className="lnk-sc3-crd-st" >Profundice en .NET con Arquitectura de Microservicios y RabbitMQ</Link>
                <div className="link-direct-escuela-direction">
                    <Link className="lnk-sc3-crd-st-sch" >Ver Centro</Link>
                </div>
            </div>
            <div className="card-ct3-link-cursos">
                <div className="titulo-card-lrn cl-ct3-tt-crd-5">
                    <div className="cont-img-ct3-link-card ">
                        <IconoEye></IconoEye>
                    </div>
                    <h5>PROGRAMACIÓN</h5>
                </div>
                <Link className="lnk-sc3-crd-st" >Desde cero: principiante en programación</Link>
                <Link className="lnk-sc3-crd-st" >APIs con Node.js e Express</Link>
                <Link className="lnk-sc3-crd-st" >Aprende a programar en C# con Orientación a Objetos</Link>
                <Link className="lnk-sc3-crd-st" >Aprende a programar en Java con Orientación a Objetos</Link>
                <Link className="lnk-sc3-crd-st" >Aprenda a programar en JavaScript con enfoque en el back-end</Link>
                <Link className="lnk-sc3-crd-st" >Aprende a programar en PHP</Link>
                <Link className="lnk-sc3-crd-st" >Aprende a programar en Python con Orientación a Objetos</Link>
                <Link className="lnk-sc3-crd-st" >Profundice en .NET con Arquitectura de Microservicios y RabbitMQ</Link>
                <div className="link-direct-escuela-direction">
                    <Link className="lnk-sc3-crd-st-sch" >Ver Centro</Link>
                </div>
            </div>
            <div className="card-ct3-link-cursos">
                <div className="titulo-card-lrn cl-ct3-tt-crd-6">
                    <div className="cont-img-ct3-link-card ">
                        <IconoMobil></IconoMobil>
                    </div>
                    <h5>PROGRAMACIÓN</h5>
                </div>
                <Link className="lnk-sc3-crd-st" >Desde cero: principiante en programación</Link>
                <Link className="lnk-sc3-crd-st" >APIs con Node.js e Express</Link>
                <Link className="lnk-sc3-crd-st" >Aprende a programar en C# con Orientación a Objetos</Link>
                <Link className="lnk-sc3-crd-st" >Aprende a programar en Java con Orientación a Objetos</Link>
                <Link className="lnk-sc3-crd-st" >Aprenda a programar en JavaScript con enfoque en el back-end</Link>
                <Link className="lnk-sc3-crd-st" >Aprende a programar en PHP</Link>
                <Link className="lnk-sc3-crd-st" >Aprende a programar en Python con Orientación a Objetos</Link>
                <Link className="lnk-sc3-crd-st" >Profundice en .NET con Arquitectura de Microservicios y RabbitMQ</Link>
                <div className="link-direct-escuela-direction">
                    <Link className="lnk-sc3-crd-st-sch" >Ver Centro</Link>
                </div>
            </div>
            <div className="card-ct3-link-cursos">
                <div className="titulo-card-lrn cl-ct3-tt-crd-7">
                    <div className="cont-img-ct3-link-card ">
                        <IconoBombilla></IconoBombilla>
                    </div>
                    <h5>PROGRAMACIÓN</h5>
                </div>
                <Link className="lnk-sc3-crd-st" >Desde cero: principiante en programación</Link>
                <Link className="lnk-sc3-crd-st" >APIs con Node.js e Express</Link>
                <Link className="lnk-sc3-crd-st" >Aprende a programar en C# con Orientación a Objetos</Link>
                <Link className="lnk-sc3-crd-st" >Aprende a programar en Java con Orientación a Objetos</Link>
                <Link className="lnk-sc3-crd-st" >Aprenda a programar en JavaScript con enfoque en el back-end</Link>
                <Link className="lnk-sc3-crd-st" >Aprende a programar en PHP</Link>
                <Link className="lnk-sc3-crd-st" >Aprende a programar en Python con Orientación a Objetos</Link>
                <Link className="lnk-sc3-crd-st" >Profundice en .NET con Arquitectura de Microservicios y RabbitMQ</Link>
                <div className="link-direct-escuela-direction">
                    <Link className="lnk-sc3-crd-st-sch" >Ver Centro</Link>
                </div>
            </div>
        </div>
        <div className="content-ct3blc">
            <div className="cont-blq54">
                <div className="cont-bqq1a">
                    <h4>FIAP + Alura</h4>
                    <h2>¡Sé parte del la major enseñanza tecnológica de Brasil!</h2>
                    <p>¿Sabías que Alura se incorporó al Centro Universitario,<span> referencia en tecnología en Brasil?</span></p>
                    <p><span>DISCOVER POST TECH,</span> un proyecto inédito de la asociación<span> FIAP + ALURA</span>: cursos de posgrado únicos, 100% digitales, prácticos y asíncronos en las áreas de Dev, Cyber ​​Security y Data.</p>
                    <p>¡Vacantes limitadas!</p>
                    <Link className='btn-link-s3' to="">
                        <div className="cont-matricula-s3c">
                            <p>SABER MÁS</p>
                        </div>
                    </Link>
                </div>
                <div className="cont-bqq1b">
                    <div className="cont-sup-brd">
                        <hr className='bs-line-abvh' color='#696969' />
                        <p>//FUTURE SKILLS</p>
                    </div>
                    <img src={fotoFiap} alt="" />
                </div>
            </div>
            <div className="cont-blq56">
            <hr className='bs-line-abvm1' color='#696969' />
                <div className="bmn-info-inf">
                    <h5>DEEP TECH, DEPP DIVE</h5>
                    <div className="frm-inf-sign">
                        <hr className='bs-line-abvm2' color='#696969' />
                        <h5>FIAP + ALURA</h5>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Section3