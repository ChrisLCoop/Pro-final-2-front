import React from 'react'
import './section8.css'
import { Link } from 'react-router-dom'
import IconPlus from '../../assets/icon-plus.svg'
import IconComoFunciona from '../../assets/icon-como-funciona.svg'
import IconCheck from '../../assets/icon-check.svg'
import IconBackgroundCard from '../../assets/icon-plan-plus-background.svg'
import IconBackgroundCardPro from '../../assets/icon-plan-pro-background.svg'
import IconLabelLuri from '../../assets/icon-label-luri.svg'
import IconLuri from '../../assets/icon-luri-mobile.svg'
import IconAluraLengua from '../../assets/icon-alura-lingua.svg'
import DividerLuri from '../../assets/formations-divider-luri.svg'



const Section8 = () => {
  return (
    <div className='content-section-08'>
        <div className="cont-frm-tt-s8">
            <h2>Comienza a estudiar <span>ahora</span> en la escuela de tecnología más grande del país.</h2>
        </div>
        <div className="cont-self-cuenta-pv-08">
            <div className="cards-sell-cursos-s01">
                <div className="detail-sell-cursos-al">
                    <img src={IconPlus} alt="" />
                    <h3>PLUS</h3>
                    <h4>De <span className='precio-descuento-08'>R$1800</span> por</h4>
                    <h4>12x <span className='precio-descuento-02-08'>R$109</span></h4>
                    <h4>En efectivo R$1.308</h4>
                </div>
                <div className="dtl-info-cursos-08">
                    <img className='icono-check-s08' src={IconCheck} alt="" />
                    <div className="rsm-sell-curso-ttg">
                        <p>Acceso a TODOS los cursos de Alura <img src={IconComoFunciona} alt="" /></p>
                    </div>
                </div>
                <div className="dtl-info-cursos-08">
                    <img className='icono-check-s08' src={IconCheck} alt="" />
                    <div className="rsm-sell-curso-ttg">
                        <p>Alura Challenges <img src={IconComoFunciona} alt="" /></p>
                    </div>
                </div>
                <div className="dtl-info-cursos-08">
                    <img className='icono-check-s08' src={IconCheck} alt="" />
                    <div className="rsm-sell-curso-ttg">
                        <p>Alura Casos<img src={IconComoFunciona} alt="" /></p>
                    </div>
                </div>
                <div className="dtl-info-cursos-08">
                    <img className='icono-check-s08' src={IconCheck} alt="" />
                    <div className="rsm-sell-curso-ttg">
                        <p>Certificado <img src={IconComoFunciona} alt="" /></p>
                    </div>
                </div>
                <div className="btn-sell-curso-link-oferta-08">
                    <Link className='btn-08-sec-buy-sell'>
                        <div className="cont-inf-btn-link-cursos-08">
                            <p>Matricuarlce</p>
                        </div>
                    </Link>
                </div>
                <div className="img-bkg-card-08">
                    <img src={IconBackgroundCard} alt="" />
                </div>
            </div>
            <div className="cards-sell-cursos-s02">
                <div className="detail-sell-cursos-al">
                    <img src={IconPlus} alt="" />
                    <h3>PRO</h3>
                    <h4>De <span className='precio-descuento-08'>R$2400</span> por</h4>
                    <h4>12x <span className='precio-descuento-02-08'>R$149</span></h4>
                    <h4>En efectivo R$1.788</h4>
                </div>
                <div className="dtl-info-cursos-08">
                    <img className='icono-check-s08' src={IconCheck} alt="" />
                    <div className="rsm-sell-curso-ttg">
                        <p>Acceso a TODOS los cursos de Alura <img src={IconComoFunciona} alt="" /></p>
                    </div>
                </div>
                <div className="dtl-info-cursos-08">
                    <img className='icono-check-s08' src={IconCheck} alt="" />
                    <div className="rsm-sell-curso-ttg">
                        <p>Alura Challenges <img src={IconComoFunciona} alt="" /></p>
                    </div>
                </div>
                <div className="dtl-info-cursos-08">
                    <img className='icono-check-s08' src={IconCheck} alt="" />
                    <div className="rsm-sell-curso-ttg">
                        <p>Alura Casos<img src={IconComoFunciona} alt="" /></p>
                    </div>
                </div>
                <div className="dtl-info-cursos-08">
                    <img className='icono-check-s08' src={IconCheck} alt="" />
                    <div className="rsm-sell-curso-ttg">
                        <p>Certificado <img src={IconComoFunciona} alt="" /></p>
                    </div>
                </div>
                <div className="cont-chat-ia-sell">
                    <div className="frame-luri-info-08">
                        <img src={IconLabelLuri} alt="" />
                        <div className="frm-int-luri-dtl">
                            <img className='icono-check-s08-02' src={IconCheck} alt="" />
                            <h3><span>Luri</span> powered by ChatGPT <img src={IconComoFunciona} alt="" /></h3>
                        </div>
                    </div>
                    <div className="frame-luri-info-02-08">
                        <img className='label-luri' src={IconLabelLuri} alt="" />
                        <div className="frm-int-luri-dtl">
                            <img className='icono-check-s08-02' src={IconCheck} alt="" />
                            <h3 className='texto-luri'><span>Lengua Alura</span> (Incluido curso Inglés para Devs) <img src={IconComoFunciona} alt="" /></h3>
                        </div>
                    </div>
                </div>
                <div className="btn-sell-curso-link-oferta-08">
                    <Link className='btn-08-sec-buy-sell'>
                        <div className="cont-inf-btn-link-cursos-08">
                            <p>Matricuarlce</p>
                        </div>
                    </Link>
                </div>
                <div className="img-bkg-card-08">
                    <img src={IconBackgroundCardPro} alt="" />
                </div>
            </div>
        </div>
        <div className="link-empresas-oferta-08">
            <Link className='lnk-empresas-08-dt'>
                <h3>Descubre Planes especiales para EMPRESAS</h3>
            </Link>
        </div>
        <div className="cont-fly-cards-luri-in">
            <div className="inf-dtl-pro-luri">
                <h5>el plan más elegido</h5>
                <h2>Ventajas de ser <span>PRO</span></h2>
                <p className='pr-luri-ttls'>Además de todos los beneficios del plan PLUS, recibe los beneficios EXCLUSIVOS del plan PRO y sumérgete aún más en la tecnología, el conocimiento y las posibilidades.</p>
                <Link className='btn-08-sec-buy-sell'>
                        <div className="cont-inf-btn-link-cursos-08">
                            <p>Quiero ser PRO</p>
                        </div>
                </Link>
            </div>
            <div className="inf-dtl-pro-luri-cards">
                <div className="card-luri-prop-ctn">
                    <div className="luri-bkg-fond-logo">
                        <img src={IconLuri} alt="" />
                    </div>
                    <div className="luri-cont-inf-dtl">
                        <h6>VENTAJAS DE ALURA PRO</h6>
                        <div className="content-ttl-luri-lgt">
                            <h2>LURI</h2>
                            <div className="cont-text-luri-08">
                                <p>powered</p>
                                <p className='ult-inf-08-luri'>by chat GPT</p>
                            </div>
                        </div>
                        <h5>Nuestra Inteligencia Artificial basada en ChatGPT que te ayuda a estudiar y profundizar en los temas sobre los que tienes dudas, ¡siempre lista para escucharte!</h5>
                        <div className="tnr-lkn-luri-08">
                            <Link className='luri-know-link-08'>
                                <p>Conoce a Luri</p>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="card-luri-prop-ctn-02">
                    <div className="luri-bkg-fond-logo-02">
                        <img src={IconAluraLengua} alt="" />
                    </div>
                    <div className="luri-cont-inf-dtl">
                        <h6 className='top-text-luri-inf'>VENTAJAS DE ALURA PRO</h6>
                        <div className="content-ttl-luri-lgt">
                            <h3>ALURA LENGUA</h3>
                        </div>
                        <h5>La plataforma de cursos de idiomas online de Alura. ¡Aquí tienes la libertad de aprender un nuevo idioma cuando y donde quieras!</h5>
                    </div>
                </div>
            </div>
        </div>
        <div className="cont-divider-luri-sec08">
            <img src={DividerLuri} alt="" />
        </div>
    </div>
  )
}

export default Section8