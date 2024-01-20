import React from "react";
import '../pages/C_FUNCIONA/como_funciona.css'
import imagen4 from '../assets/img_brandon/imagen4.webp'
const Contenedor6 = () => {
    return (
        <section class="contenedor2">
            <div class="div_img astronauta-div">
                <img class="imagenes_seccion astronauta" src={imagen4} alt="imagen"/>
            </div>
            <div class="div_subtitulo div6">
                <h2 class="seccion_titulos">¿Cómo ayuda esto a mi carrera?</h2>
                <p class="p_seccion">Adquirirás conocimientos prácticos y participarás en una comunidad <strong>apasionada por la tecnología. </strong>No solo bucearás y profundizarás en tu campo, sino que también navegarás en temas relacionados, un verdadero <strong>profesional en /T. </strong>Queremos que practiques y crees un portafolio increíble.</p>
                <a class="botom" href="">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    QUIERO INSCRIBIRME!
                </a>
            </div>
        </section>
    )
}

export default Contenedor6