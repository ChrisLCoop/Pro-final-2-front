import React from "react";
import '../pages/C_FUNCIONA/como_funciona.css'
import imagen6 from '../assets/img_brandon/imagen6.webp'
const Contenedor8 = () => {
    return (
        <section class="contenedor2 contenedor8">
            <div class="div_img">
                <img class="imagenes_seccion imagen-seccion8" src={imagen6} alt="imagen"/>
            </div>
            <div class="div_subtitulo">
                <h2 class="seccion_titulos">Como son los cursos?</h2>
                <p class="p_seccion">Tienes acceso a <strong>más de 1450 cursos</strong> de tecnología, diseño y negocios digitales, con nuevos lanzamientos todas las semanas. En Alura encontrarás cursos que van de programación ao diseño, pasando por front-end, móvil y marketing digital. Aprendizado estruturado, com a didática de quem sabe ensinar y é reconhecido no mercado de trabajo.</p>
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

export default Contenedor8