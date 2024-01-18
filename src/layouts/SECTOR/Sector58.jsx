import React from 'react'
import '../../pages/CURSOS/cursos.css'
import imagen11 from '../../assets/imgcurso/DOCENTES/guilherme-silveira.1686744882.jpeg'
import imagen12 from '../../assets/imgcurso/DOCENTES/NAME2.png'
import imagen13 from '../../assets/imgcurso/DOCENTES/NAME3.jpg'
import imagen14 from '../../assets/imgcurso/DOCENTES/NAME4.jpg'
import imagen15 from '../../assets/imgcurso/DOCENTES/NAME5.jpg'
import imagen16 from '../../assets/imgcurso/DOCENTES/NAME6.jpg'

function Sector58() {
  return (
    <>
    <section class="cursos7">
    <div class="hcursos7">
        <div class="cursos7-1">
            <p>Líderes de Academia</p>
            <h2>IINNOVACIÓN Y GESTIÓN</h2>
        </div> <br/><br/>
        <div class="hcursos7-1"> 
        <div class="cursos7-2">
            <img src={imagen11} alt=""/>
            <strong>Guilherme Silveira</strong><br/>
            <p>Chief Education Officer</p>
        </div>
        <div class="cursos7-2">
            <img src={imagen12} alt=""/>
            <strong>Valquíria Alencar</strong><br/>
            <p>Instructora</p>
        </div>
        <div class="cursos7-2">
            <img src={imagen13} alt=""/>
            <strong>Monica Hillman</strong><br/>
            <p>Instructora</p>
        </div>
        <div class="cursos7-2">
            <img src={imagen14} alt=""/>
            <strong>Guilherme Lima</strong><br/>
            <p>Instructor</p>
        </div>
        <div class="cursos7-2">
            <img src={imagen15} alt=""/>
            <strong>Aline Roque Klein</strong><br/>
            <p>Agile Chapter Leader</p>
        </div>
        <div class="cursos7-2">
            <img src={imagen16} alt=""/>
            <strong>Roberto Sabino</strong><br/>
            <p>Instructor</p>
        </div>
        </div>
    </div>
</section>
    </>
  )
}

export default Sector58;