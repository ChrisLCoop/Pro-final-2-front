import React from "react";
import '../pages/C_FUNCIONA/como_funciona.css'
import svg1 from '../assets/svg_brandon/notebook-background-details.1697220797.svg'
import imagen3 from '../assets/img_brandon/imagen3.png'
const Contenedor4 = () => {
    return (
        <section class="contenedor2">
            <div class="div_img-4">
                <img class="svg1" src={svg1} alt=""/>
                <img class="imagenes_seccion laptop" src={imagen3} alt="imagen"/>
            </div>
            <div class="div_subtitulo">
                <h2 class="seccion_titulos">Como son los cursos?</h2>
                <p class="p_seccion">Un foro con más de <strong>700 mil mensajes </strong>que no para de crecer. Você participa dessa comunidade e não fica estudando online sozinho!</p>
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

export default Contenedor4