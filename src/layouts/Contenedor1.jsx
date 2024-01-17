import React from "react";
import '../pages/C_FUNCIONA/como_funciona.css'

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
                <img class="imagenes_seccion imagen1" src="src/assets/img_brandon/imagen 1.webp" alt="imagen"/>
            </div>
        </section>
    )
}

export default Contenedor1