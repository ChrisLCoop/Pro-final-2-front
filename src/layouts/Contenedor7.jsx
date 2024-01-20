import React from "react";
import '../pages/C_FUNCIONA/como_funciona.css'
import imagen5 from '../assets/img_brandon/imagen5.webp'
const Contenedor7 = () => {
    return (
        <section class="contenedor">
            <div class="div_subtitulo">
                <h2 class="seccion_titulos">¿Con qué curso empezaré?</h2>
                <p class="p_seccion">¿Preocupado por la gran cantidad de opciones? Están organizados en planes de estudio, llamados cursos de <strong>formación,</strong> donde tendrás una secuencia estructurada de cursos, además de podcasts, artículos y vídeos extra.</p>
                    <a class="botom" href="">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        QUIERO INSCRIBIRME!
                    </a>
            </div>
            <div class="div_img div7-img">
                <img class="imagenes_seccion imagen7" src={imagen5} alt="imagen"/>
            </div>
        </section>

    )
}

export default Contenedor7