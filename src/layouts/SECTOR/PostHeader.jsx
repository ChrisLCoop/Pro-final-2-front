import React from 'react'
import '../../pages/CURSOS/cursos.css'
import { Link } from 'react-router-dom'
 function PostHeader() {
  return (
   <>
    <section  class="cursos">
    <div class="hcursos">
        <ul class="ulcursos">
            <li class="licursos"><Link class="acursos" to="/cursos">INTELIGENCIA ARTIFICIAL</Link></li>
            <li class="licursos"><Link class="acursos" to="/cursos2">FRONT-END</Link></li>
            <li class="licursos"><Link class="acursos" to="/cursos3">DATA SCIENCE</Link></li>
            <li class="licursos"><Link class="acursos" to="/cursos4">PROGRAMACION</Link></li>
            <li class="licursos"><Link class="acursos" to="/cursos5">DEVOPS</Link></li>
            <li class="licursos"><Link class="acursos" to="/cursos6">UX AND DESIGN</Link></li>
            <li class="licursos"><Link class="acursos" to="/cursos7">MOBILE</Link></li>
            <li class="licursos"><Link class="acursos" to="/cursos8">INNOVACION Y GESTION</Link></li>
        </ul>
    </div>
    </section>
    </> 
  )
}

export default PostHeader;
