import React from 'react'
import Stripes from '../../components/STRIPES/Stripes'
import PlayBtn from '../../components/PlayBtn/PlayBtn'
import NumerosImg from '../../components/NumerosVarios/NumerosImg'
import velero from '../../assets/velero-icon.svg'
import submarino from '../../assets/submarino-icon.svg'
import mascara from '../../assets/mascara-de-buso-icon.svg'
import { Link } from 'react-router-dom'
import './section2.css'


const Section2 = () => {
  return (
    <div className="content-section-2">
        <div className="content-2-blq1">
            <div className="cont2-fr-a">
                <div className="frame-info-ct2-a">
                    <div className="dtl-cr2-tt">
                        <h3>¡Hola bienvenido! ¿Qué tecnología quieres estudiar? </h3>
                    </div>
                    <div className="dtl-cr2-st-ct">
                        <ul>
                            <li><Link className='link-reference-st2'>Front-end</Link></li>
                            <li><Link className='link-reference-st2'>Programación</Link> </li>
                            <li><Link className='link-reference-st2'>Mobile</Link></li>
                            <li><Link className='link-reference-st2'>Devops</Link></li>
                            <li><Link className='link-reference-st2'>UX & Design</Link></li>
                            <li><Link className='link-reference-st2'>Data Science</Link></li>
                            <li><Link className='link-reference-st2'>Innovación y Gestion</Link></li>
                            <li><Link className='link-reference-st2'>Inteligencia Artificial</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="cont2-fr-b">
                <h2>¿Qué tecnología quieres profundizar? </h2>
                <p>Utilice la terminal lateral para descubrir las tecnologías y temas que puede explorar.</p>
            </div>
        </div>
        <div className="content-2-blq2">
            <div className="cont2-fr-c">
                <div className="cont-fr-c-t">
                    <h2>La mejor escuela online de tecnología del Perú</h2>
                    <p>Sumérgete más profundamente y navega por otras áreas de la tecnología. Conviértete en profesional.</p>
                </div>
                <Link className='btn-link-s2' to="">
                        <div className="cont-matricula-s2c">
                            <p>MIRA COMO FUNCIONA</p>
                        </div>
                </Link>
            </div>
            <div className="cont2-fr-d">
                <div className="frame-info-ct2-b">
                    <div className="cont-ct2-trui-dt">
                        <Stripes></Stripes>
                        <NumerosImg></NumerosImg>
                    </div>
                    <div className="cont-ct2-trui-dt-b">
                        <div className="content-video-link-ct2">
                            <Link className='btn-play-sect-2-dtl'>
                                <PlayBtn></PlayBtn>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="content-2-blq3">
            <div className="cont-cards-sct2">
                <div className="card-sct2-dt">
                    <img className='img-sect2-ic-d' src={velero} alt="" />
                    <h3>AVANCE EN SU CARRERA</h3>
                    <p>Hay más de 1467 cursos y lanzamientos cada semana para que transformes tu futuro con la escuela de referencia en educación tecnológica.</p>
                </div>
            </div>
            <div className="cont-cards-sct2">
                <div className="card-sct2-dt">
                    <img className='img-sect2-ic-d' src={submarino} alt="" />
                    <h3>PROFUNDIZA TUS CONOCIMIENTOS</h3>
                    <p>Aquí tienes acceso a un proceso de aprendizaje accesible y específico en tu viaje de estudio, para que puedas convertirte en un profesional en T.</p>
                </div>
            </div>
            <div className="cont-cards-sct2">
                <div className="card-sct2-dt">
                    <img className='img-sect2-ic-d' src={mascara} alt="" />
                    <h3>CONÉCTATE CON LA COMUNIDAD</h3>
                    <p>Sé parte de la comunidad más grande de amantes de la tecnología. Conozca y conéctese con miles de profesionales del mercado.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Section2