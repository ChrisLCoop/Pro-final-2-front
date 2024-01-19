import React from 'react'
import './section4.css'
import { Link } from 'react-router-dom'
import fondoLuz from '../../assets/selo-animation-luz.png'
import simboloA from '../../assets/selo-animation-simbolo.png'
import PlayBtn from '../../components/PlayBtn/PlayBtn'
import Roger from '../../assets/roger-tuma.png'
import Natalia from '../../assets/natalia-francisco.png'
import Jean from '../../assets/jean-rodrigues.png'
import Dayane from '../../assets/dayane-garcia.png'
import Lopes from '../../assets/iago-lopes.png'
import Angela from '../../assets/angela-caldas.jpg'



const Section4 = () => {
  return (
    <div className='content-sct-4'>
        <div className="sect-a-sct4-crt">
            <div className="sct-aad-s1">
                <p>¿Vale la pena Alura?</p>
                <h2>Conoce los <span>testimonios e historias</span> de quienes estudian con nosotros</h2>
            </div>
            <div className="cont-bkg-sct4-la">
                <img className='fondo-luz-sct4' src={fondoLuz} alt="" />
                <div className="fondo-logo-mov-sct4">
                    <img className='fondo-logo-mov' src={simboloA} alt="" />
                </div>
            </div>
        </div>
        <div className="sect-a-sct4-ss6">
            <div className="cards-gen-sct4-ww">
                <div className="card-sct4-dtl">
                    <div className="inf-card-ph">
                        <img src={Angela} alt="" />
                        <h5>Angela Emanoelle</h5>
                    </div>
                    <Link>
                        <div className="cont-bkg-card-qw">
                            <div className="btn-play-sct4-crd">
                                <PlayBtn></PlayBtn>
                            </div>
                        </div>
                    </Link>
                    <p>La arquitecta Ángela trabajaba en la industria de la construcción...</p>
                    <Link className='link-sct4-cards-w'>Ver testimonio completo en YouTube</Link>
                </div>
            </div>
            <div className="cards-gen-sct4-ww">
                <div className="card-sct4-dtl">
                    <div className="inf-card-ph">
                        <img src={Roger} alt="" />
                        <h5>Roger Tuma</h5>
                    </div>
                    <Link>
                        <div className="cont-bkg-card-qw">
                            <div className="btn-play-sct4-crd">
                                <PlayBtn></PlayBtn>
                            </div>
                        </div>
                    </Link>
                    <p>¡Roger comenzó en el campo de la tecnología cuando tenía 17 años! Como hombre trans, enfrentó varios desafíos en el mercado laboral...</p>
                    <Link className='link-sct4-cards-w'>Ver testimonio completo en YouTube</Link>
                </div>
            </div>
            <div className="cards-gen-sct4-ww">
                <div className="card-sct4-dtl">
                    <div className="inf-card-ph">
                        <img src={Natalia} alt="" />
                        <h5>Natalia Francisco</h5>
                    </div>
                    <Link>
                        <div className="cont-bkg-card-qw">
                            <div className="btn-play-sct4-crd">
                                <PlayBtn></PlayBtn>
                            </div>
                        </div>
                    </Link>
                    <p>Natália F. Silva se inició en la tecnología porque le apasionaban los juegos y quería aprender a hacer uno...</p>
                    <Link className='link-sct4-cards-w'>Ver testimonio completo en YouTube</Link>
                </div>
            </div>
            <div className="cards-gen-sct4-ww">
                <div className="card-sct4-dtl">
                    <div className="inf-card-ph">
                        <img src={Lopes} alt="" />
                        <h5>Iago Alves</h5>
                    </div>
                    <Link>
                        <div className="cont-bkg-card-qw">
                            <div className="btn-play-sct4-crd">
                                <PlayBtn></PlayBtn>
                            </div>
                        </div>
                    </Link>
                    <p>¿Alguna vez has escuchado que para trabajar con tecnología es necesario tener un “don”? Yago es la prueba...</p>
                    <Link className='link-sct4-cards-w'>Ver testimonio completo en YouTube</Link>
                </div>
            </div>
            <div className="cards-gen-sct4-ww">
                <div className="card-sct4-dtl">
                    <div className="inf-card-ph">
                        <img src={Dayane} alt="" />
                        <h5>Dayane Garcia</h5>
                    </div>
                    <Link>
                        <div className="cont-bkg-card-qw">
                            <div className="btn-play-sct4-crd">
                                <PlayBtn></PlayBtn>
                            </div>
                        </div>
                    </Link>
                    <p>¡Dayane dejó el área de RRHH para sumergirse en la tecnología! La transición no fue fácil, pero...</p>
                    <Link className='link-sct4-cards-w'>Ver testimonio completo en YouTube</Link>
                </div>
            </div>
            <div className="cards-gen-sct4-ww">
                <div className="card-sct4-dtl">
                    <div className="inf-card-ph">
                        <img src={Jean} alt="" />
                        <h5>Jean Rodrigues</h5>
                    </div>
                    <Link>
                        <div className="cont-bkg-card-qw">
                            <div className="btn-play-sct4-crd">
                                <PlayBtn></PlayBtn>
                            </div>
                        </div>
                    </Link>
                    <p>Jean tuvo su primer contacto con la tecnología siendo un joven aprendiz, a los 15 años...</p>
                    <Link className='link-sct4-cards-w'>Ver testimonio completo en YouTube</Link>
                </div>
            </div>
        </div>
        <div className="frame-link-mr-tst-sct4">
            <Link className='btn-final-sct-tst-m'>
                <div className="btn-mr-tst-end-sct4">
                    <p>CONOCE MAS DECENAS DE HISTORIAS DE ALUMNOS Y ALUMNAS DE ALURA</p>
                </div>
            </Link>
        </div>
    </div>
  )
}

export default Section4