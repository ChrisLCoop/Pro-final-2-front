import React from 'react'
import '../../pages/CURSOS/cursos.css'
import { Link } from 'react-router-dom'
function Sector2() {
  return (
    <>
    <section class="cursos3">
    <div class="hcursos3">
        <ul class="ulcursos3">
            <li class="licursos3"><Link to="/cursos" class="acursos3">Todos los cursos</Link></li >
            <li class="licursos3"><Link to="/cursos"class="acursos3">IA para Creativos</Link></li >
            <li class="licursos3"><Link to="/cursos4"class="acursos3">IA para Programación</Link></li >
            <li class="licursos3"><Link to="/cursos5"class="acursos3">IA para Negocios</Link></li >
            <li class="licursos3"><Link to="/cursos7"class="acursos3">IA para Mobile</Link></li >
            <li class="licursos3" ><Link to="/cursos8"class="acursos3">IA para Marketing Digital</Link></li >
            <li class="licursos3" ><Link to="/cursos2"class="acursos3">IA para Front End</Link></li >
            <li class="licursos3"><Link to="/cursos3"class="acursos3">IA para Datos</Link></li >
            <li class="licursos3"><Link to="/cursos6"class="acursos3">IA para UX & Design</Link></li >
        </ul>
    </div>
</section>
    
    
    
    
    </>
  )
}

export default Sector2