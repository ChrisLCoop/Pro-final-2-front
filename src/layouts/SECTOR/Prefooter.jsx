import React from 'react'
import '../../pages/CURSOS/cursos.css'
import imagen11 from '../../assets/imgcurso/icon-plan-calendar.1686744881.svg'
import imagen12 from '../../assets/imgcurso/icon-plan-moon.1686744881.svg'
import imagen13 from '../../assets/imgcurso/icon-plan-reload.1686744881.svg'


function prefooter() {
  return (
    <>
    
    <section class="cursos9">
    <div class="hcursos9">
        <div class="cursos9-1"><img src={imagen11} alt="" /><p>Acceso completo
            durante 1 año</p></div>
        <div class="cursos9-1"><img src={imagen12} alt=""/><p>Acceso completo
            durante 1 año</p></div>
        <div class="cursos9-1"><img src={imagen13} alt=""/><p>Acceso completo
            durante 1 año</p></div>
    </div>
</section>
    
    </>
  )
}

export default prefooter