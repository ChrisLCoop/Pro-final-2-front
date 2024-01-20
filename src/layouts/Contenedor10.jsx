import React from "react";
import '../pages/C_FUNCIONA/como_funciona.css'
import libro1 from '../assets/img_brandon/libro1.svg'
import logolibro from '../assets/img_brandon/logolibro1.svg'
import check from '../assets/svg_brandon/CHECK.svg'
import interrogacion from '../assets/svg_brandon/interrogacion.svg'
const Contenedor10 = () => {
    return (
        <section class="contenedor10">
        <h1>¿Sabes cuándo puedes empezar? <strong>¡Ahora!</strong></h1>
        <div class='cuadros'>
                    <div class="card">
                        <img src={libro1} class="icono-card" alt=""/>
                        <img src={logolibro} class="imagen-card" alt=""/>
                        <h3 class="card-text-plus">PLUS</h3>
                        <div class="linea1-precio">
                            <div class="card-precios">
                                <div class="precio1">
                                    <div>De</div>
                                    <span class="precios linea-precios">PE$ 1.400</span>
                                    <div>por</div>
                                </div>
                                <div class="precio2">
                                    <span class="span12x">12x</span>
                                    <span class="precios precio80">PE$80</span>
                                </div>
                            </div>
                        </div>
                        <p class="efectivo">en efectivo PE$ 1.300</p>
                        <ul>
                            <li><img class="check" src={check} alt=""/>Acesso a TODOS los cursos de alura <img src={interrogacion} alt=""/></li>
                            <li><img class="check" src={check} alt=""/>Alura challenges <img src={interrogacion} alt=""/></li>
                            <li><img class="check" src={check} alt=""/>Casos alura <img src={interrogacion} alt=""/></li>
                            <li><img class="check" src={check} alt=""/>Certificado <img src={interrogacion} alt=""/></li>
                        </ul>
                        <a class="MATRICULATE" href="">MATRICULATE</a>
                    </div>
                    <div class="card2">
                        <div class="texto-img"></div>
                        <div class="icono-img"></div>
                        <img src={libro1} class="icono-card" alt=""/>
                        <img src={logolibro} class="imagen-card" alt=""/>
                        <h3 class="card-text-plus">PLUS</h3>
                        <div class="linea1-precio">
                            <div class="card-precios">
                                <div class="precio1">
                                    <div>De</div>
                                    <span class="precios linea-precios">PE$ 1.800</span>
                                    <div>por</div>
                                </div>
                                <div class="precio2">
                                    <span class="span12x">12x</span>
                                    <span class="precios precio80">PE$140</span>
                                </div>
                            </div>
                        </div>
                        <p class="efectivo">en efectivo PE$ 1.300</p>
                        <ul>
                            <li><img class="check" src={check} alt=""/>Acesso a TODOS los cursos de alura <img src={interrogacion} alt=""/></li>
                            <li><img class="check" src={check} alt=""/>Alura challenges <img src={interrogacion} alt=""/></li>
                            <li><img class="check" src={check} alt=""/>Casos alura <img src={interrogacion} alt=""/></li>
                            <li><img class="check" src={check} alt=""/>Certificado <img src={interrogacion} alt=""/></li>
                            <li class="borde-lista"><img class="check" src={check} alt=""/><strong>Luri</strong> Impulsado por ChatGPT<img src={interrogacion} alt=""/></li>
                            <li class="borde-lista"><img class="check" src={check} alt=""/><strong>Alura idioma</strong> (Incluido curso de ingles para Devs) <img src={interrogacion} alt=""/></li>
                        </ul>
                        <a class="MATRICULATE" href="">MATRICULATE</a>
                    </div>
            </div>
        <a class="planos-para-empresa" href="">descubre los planes para empresas</a>
    </section>
    )
}

export default Contenedor10