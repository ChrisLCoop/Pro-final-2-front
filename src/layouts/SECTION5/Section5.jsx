import React from 'react'
import './section5.css'
import { Link } from 'react-router-dom'
import LineaDivisoraAlum from '../../assets/divisor-destaque-alumnos.png'
import AluraLogoEmpresa from '../../assets/alura-para-empresas.svg'
import LogoSuzano from '../../assets/suzano.png'
import BancoPan from '../../assets/banco-pan.png'
import LogoLocaliza from '../../assets/logo-localiza.svg'
import LogoGlobo from '../../assets/logo-globo.svg'
import LogoOracle from '../../assets/logo-oracle.svg'
import LogoBankBrasil from '../../assets/logo-banco-do-brasil.svg'
import LogoBradesco from '../../assets/logo-bradesco.svg'
import LogoQuintoAndar from '../../assets/logo-quintoandar.svg'
import LogoVotorantim from '../../assets/logo-votorantim.svg'
import LogoSerpro from '../../assets/logo-serpro.svg'
import LogoThoughtworks from '../../assets/logo-thoughtworks.svg'
import LogoMeta from '../../assets/logo-meta.svg'
import LogoClaro from '../../assets/logo-claro.svg'
import LogoDasa from '../../assets/logo-dasa.svg'
import LogoNubank from '../../assets/logo-nubank.svg'
import LogoTelefonica from '../../assets/logo-telefonica.svg'
import LogoCarrefour from '../../assets/logo-carrefour.svg'
import LogoViaVarejo from '../../assets/logo-via-varejo.svg'


const Section5 = () => {
  return (
    <div className="content-section-sc5">
        <div className="cont-int-sct5-bk">
            <div className="blq-cs5-bq1">
                <div className="fr-ttl-cs5">
                    <div className="logo-cs5-tll">
                        <img className='logo-sect-sc5-alura-e' src={AluraLogoEmpresa} alt="" />
                    </div>
                    <h5>Altura a medir</h5>
                    <h2>Para tu empresa</h2>
                    <h4>Capacite a sus equipos con capacitación continua, lanzamientos semanales, paneles e informes de participación, así como guías de estudio personalizadas según sus necesidades.</h4>
                    <h4 className='p-btp-spc'>Descubra nuestra propuesta para su empresa:</h4>
                    <Link className='btn-cs5-refer-a'>
                        <div className="cont-btn-alg-c5">
                            <p>Descubre los recursos</p>
                        </div>
                    </Link>
                </div>
                <div className="fr-ttl-cs5-2">
                    <div className="rt-blq-78">
                        <div className="cont-img-sct5-logo-tn">
                            <img className='logo-sect-sc5-suzano' src={LogoSuzano} alt="" />
                        </div>
                        <p>Haber participado en la Data Science Academy y traducir un problema empresarial en software fue sin duda una experiencia única y desafiante. Pasar de tener conocimientos muy básicos en programación a comprender técnicas de optimización y modelado matemático ciertamente agrega mucho a mi vida diaria.</p>
                    </div>
                    <h5>Letícia Strini - Suzano</h5>
                    <div className="cont-signal-base-s5">
                        <img src={LineaDivisoraAlum} alt="" />
                    </div>
                    <div className="rt-blq-88">
                        <div className="cont-img-sct5-logo-tn">
                            <img className='logo-sect-sc5-suzano' src={BancoPan} alt="" />
                        </div>
                        <p>La plataforma hoy nos ayuda mucho. Me ayuda mucho, no sólo como gerente de área, [ya que] mi equipo puede desarrollarse mucho con la plataforma Alura Para Empresas. También lo uso para hacer entrenamiento.</p>
                    </div>
                    <h5>Rodrigo Trevisan Rodrigues - Banco PAN</h5>
                </div>
            </div>
            <div className="blq-cs5-bq2">
                <h2>Empresas que ya cuentan con nosotros</h2>
                <div className="cont-cliente-logo-sc5">
                    <img className='img-sc5-cl-s589' src={LogoLocaliza} alt="" />
                    <img className='img-sc5-cl-s589' src={LogoGlobo} alt="" />
                    <img className='img-sc5-cl-s589' src={LogoOracle} alt="" />
                    <img className='img-sc5-cl-s589' src={LogoBankBrasil} alt="" />
                    <img className='img-sc5-cl-s589' src={LogoBradesco} alt="" />
                    <img className='img-sc5-cl-s589' src={LogoQuintoAndar} alt="" />
                    <img className='img-sc5-cl-s589' src={LogoVotorantim} alt="" />
                    <img className='img-sc5-cl-s589' src={LogoSerpro} alt="" />
                    <img className='img-sc5-cl-s589' src={LogoCarrefour} alt="" />
                    <img className='img-sc5-cl-s589' src={LogoTelefonica} alt="" />
                    <img className='img-sc5-cl-s589' src={LogoNubank} alt="" />
                    <img className='img-sc5-cl-s589' src={LogoViaVarejo} alt="" />
                    <img className='img-sc5-cl-s589' src={LogoDasa} alt="" />
                    <img className='img-sc5-cl-s589' src={LogoClaro} alt="" />
                    <img className='img-sc5-cl-s589' src={LogoMeta} alt="" />
                    <img className='img-sc5-cl-s589' src={LogoThoughtworks} alt="" />
                </div>
                <div className="content-frm-sc-link-bt">
                    <Link className='link-btp-cs5-aa'>
                        <p>Mira lo que ofrecemos para empresas</p>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Section5