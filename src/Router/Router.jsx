import { BrowserRouter, Route, Routes } from 'react-router-dom'
import React from 'react'
import Section2 from '../layouts/SECTION2/Section2'
import Header from '../layouts/HEADER/Header'
import Home from '../pages/HOME/Home'
import Cursos from '../pages/CURSOS/Cursos'
import Cursos2 from '../pages/CURSOS/Cursos2'
import Cursos3 from '../pages/CURSOS/Cursos3'
import Cursos4 from '../pages/CURSOS/Cursos4'
import Cursos5 from '../pages/CURSOS/Cursos5'
import Cursos6 from '../pages/CURSOS/Cursos6'
import Cursos7 from '../pages/CURSOS/Cursos7'
import Cursos8 from '../pages/CURSOS/Cursos8'

const Router = () => {
  return (
    <BrowserRouter>
        <Header></Header>
        <Routes>
            <Route path='/' element={<Home></Home>}> </Route>
            <Route path='/sec2' element={<Section2></Section2>}> </Route>
            <Route path='/cursos' element={<Cursos></Cursos>}> </Route>
            <Route path='/cursos2' element={<Cursos2></Cursos2>}> </Route>
            <Route path='/cursos3' element={<Cursos3></Cursos3>}> </Route>
            <Route path='/cursos4' element={<Cursos4></Cursos4>}> </Route>
            <Route path='/cursos5' element={<Cursos5></Cursos5>}> </Route>
            <Route path='/cursos6' element={<Cursos6></Cursos6>}> </Route>
            <Route path='/cursos7' element={<Cursos7></Cursos7>}> </Route>
            <Route path='/cursos8' element={<Cursos8></Cursos8>}> </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default Router