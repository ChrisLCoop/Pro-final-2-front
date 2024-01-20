import React from 'react'
import '../../pages/CURSOS/cursos.css'
import imagen11 from '../../assets/imgcurso/image-removebg-preview.png'
function Sector15() {
  return (
    <>
    <section class="cursos2">
    <div class="cursos2-1">
        <div class="cursos2-1-1">
            <strong>
                Cursos de la Academia
                <h1>DevOps</h1>
            </strong>
            <p>Aprenda Git, Docker y Kubernetes y comprenda la entrega continua. Estudia administración de redes, Linux y administra servidores en la nube. Explora el mundo del Internet de las cosas y la robótica. sepa cómo empezar con DevOps. Encuentra mas sobreEscuela DevOps navega por esta página para ver todos nuestros cursos y capacitaciones.</p>
        </div>
        <div class="cursos2-1-2">
            <img src={imagen11} alt=""/>
        </div>
    </div>
    </section>
    </>
  )
}

export default Sector15;