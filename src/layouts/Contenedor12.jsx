import React from "react";
import '../pages/C_FUNCIONA/como_funciona.css'
import calendario from '../assets/svg_brandon/calendarioicono.svg'
import loading from '../assets/svg_brandon/loadingsvg.svg'
import veloz from '../assets/svg_brandon/nochevelozsvg.svg'

const Contenedor12 = () => {
    return (
        <section class="contenedor12">
            <div>
                <img src={calendario} alt=""/>
                <p>Acceso completo durante un anio</p>
            </div>
            <div>
                <img src={loading} alt=""/>
                <p>Estudia las 24 horas del día donde sea y cuando quieras</p>
            </div>
            <div>
                <img src={veloz} alt=""/>
                <p>Nuevos cursos a la semana</p>
            </div>
        </section>
    )
}

export default Contenedor12