import React from 'react'
import './section6.css'

import ImgIzquierda from '../../assets/arrow-left.png'
import ImgDerecha from '../../assets/arrow-right.png'
import { Link } from 'react-router-dom'
import LogoRoberta from '../../assets/logo-stack-roberta.svg'
import LogoIsabel from '../../assets/logo-nubank-isabel.svg'
import LogoRenan from '../../assets/logo-luiza-renan.svg'
import LogoMarco from '../../assets/logo-hotmart-marco.svg'
import Logoana from '../../assets/logo-itau-ana.svg'
import LogoEduardo from '../../assets/logo-globo-eduardo.svg'
import LogoCases from '../../assets/logo-cases.svg'



const Section6 = () => {
  return (
    <div className='content-sect-06-gn'>
        <div className="fram-vsnl-sct-06">
            <div className="frame-blq1-sc-gb">
                <img src={LogoCases} alt="" />
                <h2>Estudios de tecnología avanzada.</h2>
                <p>Conversaciones en profundidad con líderes tecnológicos para que puedas aprender de situaciones reales.</p>
                <div className="btn-sct6-upc-s">
                    <Link>
                        <div className="cont-p-btn-th">
                            <h5>CONOZCA ALGUNOS CASOS</h5>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="frame-blq2-gb-sc">
                <div className="wrapper">
                    <img id='left' className='fa-solid fa-angle-left img-sec06-arrow' src={ImgIzquierda} alt="" />
                    <ul className='carousel'>
                        <li className='card-06sc'>
                            <Link className='link-sc06-cr-tech'>
                                <div className="cont-info-sect-card-06">
                                    <h2>ROBERTA ARCOVERDE</h2>
                                    <h5>Tech Lead in Stack Overflow</h5>
                                    <img src={LogoRoberta} alt="" />
                                </div>
                            </Link>
                        </li>
                        <li className='card-06sc'>
                            <Link className='link-sc06-cr-tech'>
                                <div className="cont-info-sect-card-06">
                                    <h2>ISABEL GONCALVES</h2>
                                    <h5>Software Engineer in Nubank</h5>
                                    <img src={LogoIsabel} alt="" />
                                </div>
                            </Link>
                        </li>
                        <li className='card-06sc'>
                            <Link className='link-sc06-cr-tech'>
                                <div className="cont-info-sect-card-06">
                                    <h2>RENAN MARTINS</h2>
                                    <h5>Engineering Manager in Luizalabs</h5>
                                    <img src={LogoRenan} alt="" />
                                </div>
                            </Link>
                        </li>
                        <li className='card-06sc'>
                            <Link className='link-sc06-cr-tech'>
                                <div className="cont-info-sect-card-06">
                                    <h2>MARCO AURÉLIO</h2>
                                    <h5>Development Specialist in Hotmart</h5>
                                    <img src={LogoMarco} alt="" />
                                </div>
                            </Link>
                        </li>
                        <li className='card-06sc'>
                            <Link className='link-sc06-cr-tech'>
                                <div className="cont-info-sect-card-06">
                                    <h2>ANA GENARI</h2>
                                    <h5>Tech Manager in Itaú</h5>
                                    <img src={Logoana} alt="" />
                                </div>
                            </Link>
                        </li>
                        <li className='card-06sc'>
                            <Link className='link-sc06-cr-tech'>
                                <div className="cont-info-sect-card-06">
                                    <h2>EDUARDO AMARAL</h2>
                                    <h5>AdTech Senior Manager in Globo</h5>
                                    <img src={LogoEduardo} alt="" />
                                </div>
                            </Link>
                        </li>
                    </ul>
                    <img id='right' className='fa-solid fa-angle-right img-sec06-arrow' src={ImgDerecha} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Section6