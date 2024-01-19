import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'
import AluraLogoFooter from '../../assets/alura-logo-footer.svg'
import LogoTiktok from '../../assets/tiktok_logo_icon.png'
import LogoYoutube from '../../assets/youtube_icon_social.png'
import LogoFacebook from '../../assets/social_facebook_fb.png'
import LogoTwitter from '../../assets/social_Twitter.png'
import LogoInstagram from '../../assets/instagram_black_logo_icon.png'
import LogoPlayStoreAndroid from '../../assets/application_playstore_logo.png'
import LogoAppleMac from '../../assets/apple_mac.png'
import LogoEndeavor from '../../assets/scale-up-endeavor.png'
import LogoGoogle from '../../assets/google-alumni-2021.png'



const Footer = () => {
  return (
    <div className='content-footer-f'>
        <div className="frame-footer-01-app-link">
            <div className="cont-all-sec01-footer-inf">
                <div className="cards-sect-a-frt">
                    <div className="cont-ff-tnl-inf">
                        <img src={AluraLogoFooter} alt="" />
                        <p>AOVS Sistemas e informática S.A</p>
                        <p>CNPJ 05.555.382/0001-33</p>
                    </div>
                    <div className="cont-ff-tnl-inf-02">
                        <h3>NUESTRAS REDES Y APPS</h3>
                        <div className="cont-link-footer-redes-sociales">
                            <div className="cont-link-r-social-ttr">
                                <Link className="lnk-footer-bql1a">
                                    <img src={LogoYoutube} alt="" />
                                </Link>
                            </div>
                            <div className="cont-link-r-social-ttr">
                                <Link className="lnk-footer-bql1a">
                                    <img src={LogoFacebook} alt="" />
                                </Link>
                            </div>
                            <div className="cont-link-r-social-ttr">
                                <Link className="lnk-footer-bql1a">
                                    <img src={LogoTwitter} alt="" />
                                </Link>
                            </div>
                            <div className="cont-link-r-social-ttr">
                                <Link className="lnk-footer-bql1a">
                                    <img src={LogoInstagram} alt="" />
                                </Link>
                            </div>
                            <div className="cont-link-r-social-ttr">
                                <Link className="lnk-footer-bql1a">
                                    <img src={LogoPlayStoreAndroid} alt="" />
                                </Link>
                            </div>
                            <div className="cont-link-r-social-ttr">
                                <Link className="lnk-footer-bql1a">
                                    <img src={LogoAppleMac} alt="" />
                                </Link>
                            </div>
                            <div className="cont-link-r-social-ttr">
                                <Link className="lnk-footer-bql1a">
                                    <img src={LogoTiktok} alt="" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/*
                <div className="cards-sect-b-frt">
                    <div className="cont-link-fo-cards-gen">
                        <div className="cards-sec0a-footer-b-frt">
                            <div className="cards-sec0a-blq1-footer-b-frt">
                                <h4>Intitucional</h4>
                                <div className="cont-lnk-footer-sc01">
                                    <Link className="lnk-footer-bql1a">
                                        <p>Sobre nosotros</p>
                                    </Link>
                                </div>
                                <div className="cont-lnk-footer-sc01">
                                    <Link className="lnk-footer-bql1a">
                                        <p>Trabaje con nosotros</p>
                                    </Link>
                                </div>
                                <div className="cont-lnk-footer-sc01">
                                    <Link className="lnk-footer-bql1a">
                                        <p>Para Empresas</p>
                                    </Link>
                                </div>
                                <div className="cont-lnk-footer-sc01">
                                    <Link className="lnk-footer-bql1a">
                                        <p>Para su escuela</p>
                                    </Link>
                                </div>
                                <div className="cont-lnk-footer-sc01">
                                    <Link className="lnk-footer-bql1a">
                                        <p>Politica de privacidad</p>
                                    </Link>
                                </div>
                                <div className="cont-lnk-footer-sc01">
                                    <Link className="lnk-footer-bql1a">
                                        <p>Compromiso de integridad</p>
                                    </Link>
                                </div>
                                <div className="cont-lnk-footer-sc01">
                                    <Link className="lnk-footer-bql1a">
                                        <p>Terminos de uso</p>
                                    </Link>
                                </div>
                                <div className="cont-lnk-footer-sc01">
                                    <Link className="lnk-footer-bql1a">
                                        <p>Status</p>
                                    </Link>
                                </div>
                            </div>
                            <div className="cards-sec0a-blq1-footer-b-frt">
                                <h4>A Alura</h4>
                                <div className="cont-lnk-footer-sc01">
                                    <Link className="lnk-footer-bql1a">
                                        <p>Formaciones</p>
                                    </Link>
                                </div>
                                <div className="cont-lnk-footer-sc01">
                                    <Link className="lnk-footer-bql1a">
                                        <p>Como Funciona</p>
                                    </Link>
                                </div>
                                <div className="cont-lnk-footer-sc01">
                                    <Link className="lnk-footer-bql1a">
                                        <p>Todos los cursos</p>
                                    </Link>
                                </div>
                                <div className="cont-lnk-footer-sc01">
                                    <Link className="lnk-footer-bql1a">
                                        <p>Departamentos</p>
                                    </Link>
                                </div>
                                <div className="cont-lnk-footer-sc01">
                                    <Link className="lnk-footer-bql1a">
                                        <p>Instructores</p>
                                    </Link>
                                </div>
                                <div className="cont-lnk-footer-sc01">
                                    <Link className="lnk-footer-bql1a">
                                        <p>Dev em T</p>
                                    </Link>
                                </div>
                                <div className="cont-lnk-footer-sc01">
                                    <Link className="lnk-footer-bql1a">
                                        <p>Lury by ChatGPT</p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="cards-sec0a-footer-b-frt">
                            <div className="cards-sec0a-blq1-footer-b-frt">
                                <h4>Contenido</h4>
                                <div className="cont-lnk-footer-sc01">
                                    <Link className="lnk-footer-bql1a">
                                        <p>Alura Clases</p>
                                    </Link>
                                </div>
                                <div className="cont-lnk-footer-sc01">
                                    <Link className="lnk-footer-bql1a">
                                        <p>Inversiones</p>
                                    </Link>
                                </div>
                                <div className="cont-lnk-footer-sc01">
                                    <Link className="lnk-footer-bql1a">
                                        <p>Artículos</p>
                                    </Link>
                                </div>
                                <div className="cont-lnk-footer-sc01">
                                    <Link className="lnk-footer-bql1a">
                                        <p>Podcasts</p>
                                    </Link>
                                </div>
                                <div className="cont-lnk-footer-sc01">
                                    <Link className="lnk-footer-bql1a">
                                        <p>Artículos sobre educación corporativo</p>
                                    </Link>
                                </div>
                            </div>
                            <div className="cards-sec0a-blq1-footer-b-frt">
                                <h4>Hable con nosotros</h4>
                                <div className="cont-lnk-footer-sc01">
                                    <Link className="lnk-footer-bql1a">
                                        <p>Email y telefono</p>
                                    </Link>
                                </div>
                                <div className="cont-lnk-footer-sc01">
                                    <Link className="lnk-footer-bql1a">
                                        <p>Preguntas frecuentes</p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cards-sec0a-footer-b-frt-input">
                        <h4 className='titulo-input-footer'>Noticias y lanzamientos</h4>
                        <div className="cont-input-footer-suscrib">
                            <input className='input-email' type="email" name="" id="" placeholder='Email*' />
                            <button className='btn-footer-015'>ENVIAR</button>
                        </div>
                    </div>
                </div>
                <div className="cards-sect-c-frt">
                    <div className="cont-socios-footer-bq">
                        <h3>Socios</h3>
                        <div className="content-socios-1fr">
                            <div className="corp-01soc-bq">
                                <img className='logo-endeavor-fot' src={LogoEndeavor} alt="" />
                                <p>Nosotros, en Alura, somos uno de los Scale-Ups seleccionados por Endeavor, un programa de aceleración para las empresas de mayor crecimiento en el país.</p>
                            </div>
                            <div className="corp-01soc-bq">
                                <img className='logo-google-fot' src={LogoGoogle} alt="" />
                                <p>Fuimos una de las 7 startups seleccionadas por Google For Startups para participar en el programa Growth Academy en 2021.</p>
                            </div>
                        </div>
                    </div>
                </div>*/}
            </div>
        </div>
        {/*
        <div className="frame-footer-02-app-link">
            <div className="cont-all-sec02-footer-inf">
                <h3>CURSOS</h3>
                <div className="cont-link-03-foo-rt">
                    <Link className='lnk-fot-end-tm titulo-list-crlsd'>
                        <h4>Cursos de Programacion</h4>
                    </Link>
                    <ul className="ul-fot-lnk">
                        <li><Link className='lnk-fot-end-tm'>Lógica</Link></li>
                        <li><Link className='lnk-fot-end-tm'>Python</Link></li>
                        <li><Link className='lnk-fot-end-tm'>PHP</Link></li>
                        <li><Link className='lnk-fot-end-tm'>Java</Link></li>
                        <li><Link className='lnk-fot-end-tm'>.NET</Link></li>
                        <li><Link className='lnk-fot-end-tm'>Node JS</Link></li>
                        <li><Link className='lnk-fot-end-tm'>C</Link></li>
                        <li><Link className='lnk-fot-end-tm'>Computación</Link></li>
                        <li><Link className='lnk-fot-end-tm'>Juegos</Link></li>
                        <li><Link className='lnk-fot-end-tm'>IoT</Link></li>
                    </ul>
                </div>
                <div className="cont-link-03-foo-rt">
                    <Link className='lnk-fot-end-tm titulo-list-crlsd'>
                        <h4>Cursos de Front-end</h4>
                    </Link>
                    <ul className="ul-fot-lnk">
                        <li><Link className='lnk-fot-end-tm'>HTML, CSS</Link></li>
                        <li><Link className='lnk-fot-end-tm'>React</Link></li>
                        <li><Link className='lnk-fot-end-tm'>Angular</Link></li>
                        <li><Link className='lnk-fot-end-tm'>JavaScript</Link></li>
                        <li><Link className='lnk-fot-end-tm'>jQuery</Link></li>
                    </ul>
                </div>
                <div className="cont-link-03-foo-rt">
                    <Link className='lnk-fot-end-tm titulo-list-crlsd'>
                        <h4>Cursos de Data Science</h4>
                    </Link>
                    <ul className="ul-fot-lnk">
                        <li><Link className='lnk-fot-end-tm'>Ciéncia de datos</Link></li>
                        <li><Link className='lnk-fot-end-tm'>BI</Link></li>
                        <li><Link className='lnk-fot-end-tm'>SQL y Banco de Datos</Link></li>
                        <li><Link className='lnk-fot-end-tm'>Excel</Link></li>
                        <li><Link className='lnk-fot-end-tm'>Machine Learning</Link></li>
                        <li><Link className='lnk-fot-end-tm'>NoSQL</Link></li>
                        <li><Link className='lnk-fot-end-tm'>Estadística</Link></li>
                    </ul>
                </div>
                <div className="cont-link-03-foo-rt">
                    <Link className='lnk-fot-end-tm titulo-list-crlsd'>
                        <h4>Cursos de Inteligéncia Artificial</h4>
                    </Link>
                    <ul className="ul-fot-lnk">
                        <li><Link className='lnk-fot-end-tm'>IA para Programación</Link></li>
                        <li><Link className='lnk-fot-end-tm'>IA para Datos</Link></li>
                    </ul>
                </div>
                <div className="cont-link-03-foo-rt">
                    <Link className='lnk-fot-end-tm titulo-list-crlsd'>
                        <h4>Cursos de DevOps</h4>
                    </Link>
                    <ul className="ul-fot-lnk">
                        <li><Link className='lnk-fot-end-tm'>AWS</Link></li>
                        <li><Link className='lnk-fot-end-tm'>Azure</Link></li>
                        <li><Link className='lnk-fot-end-tm'>Docker</Link></li>
                        <li><Link className='lnk-fot-end-tm'>Seguridad</Link></li>
                        <li><Link className='lnk-fot-end-tm'>IaC</Link></li>
                        <li><Link className='lnk-fot-end-tm'>Linux</Link></li>
                    </ul>
                </div>
                <div className="cont-link-03-foo-rt">
                    <Link className='lnk-fot-end-tm titulo-list-crlsd'>
                        <h4>Cursos de UX & Design</h4>
                    </Link>
                    <ul className="ul-fot-lnk">
                        <li><Link className='lnk-fot-end-tm'>Usabilidades de UX</Link></li>
                        <li><Link className='lnk-fot-end-tm'>Video y Animación</Link></li>
                        <li><Link className='lnk-fot-end-tm'>3D</Link></li>
                    </ul>
                </div>
                <div className="cont-link-03-foo-rt">
                    <Link className='lnk-fot-end-tm titulo-list-crlsd'>
                        <h4>Cursos de Mobile</h4>
                    </Link>
                    <ul className="ul-fot-lnk">
                        <li><Link className='lnk-fot-end-tm'>React Native</Link></li>
                        <li><Link className='lnk-fot-end-tm'>Flutter</Link></li>
                        <li><Link className='lnk-fot-end-tm'>iOS y Swift</Link></li>
                        <li><Link className='lnk-fot-end-tm'>Android, Kotlin</Link></li>
                        <li><Link className='lnk-fot-end-tm'>Juegos</Link></li>
                    </ul>
                </div>
                <div className="cont-link-03-foo-rt">
                    <Link className='lnk-fot-end-tm titulo-list-crlsd'>
                        <h4>Cursos de Innovación y Gestión</h4>
                    </Link>
                    <ul className="ul-fot-lnk">
                        <li><Link className='lnk-fot-end-tm'>Métodos ágiles</Link></li>
                        <li><Link className='lnk-fot-end-tm'>Habilidades blandas</Link></li>
                        <li><Link className='lnk-fot-end-tm'>Liderazgo y Gestión</Link></li>
                        <li><Link className='lnk-fot-end-tm'>Nuevas Empresas</Link></li>
                        <li><Link className='lnk-fot-end-tm'>Ventas</Link></li>
                    </ul>
                </div>
            </div>
        </div>*/}
    </div>
  )
}

export default Footer

