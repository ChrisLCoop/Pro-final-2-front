import React from "react";
import '../pages/C_FUNCIONA/como_funciona.css'
import imagen1 from '../assets/img_brandon/imagen1.webp'

const Contenedor1 = () => {
    return (
        <section class="contenedor">
            <div class="div_subtitulo">
                <h2 class="seccion_titulos">Como son los cursos?</h2>
                <p class="p_seccion">Estudiarás con <strong>videoclases de alta calidad,</strong> ejercicios prácticos, proyectos y en una comunidad activa con muchas discusiones. Cursos creados y producidos por profesionales brasileños.</p>
                    <a class="botom" href="">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        QUIERO INSCRIBIRME!
                    </a>
            </div>
            <div class="div_img">
                <img class="imagenes_seccion imagen1" src={imagen1} alt="imagen"/>
            </div>
        </section>
    )
}

export default Contenedor1