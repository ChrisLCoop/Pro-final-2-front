import { BrowserRouter, Route, Routes } from 'react-router-dom'
import React from 'react'
import Section2 from '../layouts/SECTION2/Section2'
import Header from '../layouts/HEADER/Header'
import Home from '../pages/HOME/Home'
import Cursos from '../pages/CURSOS/Cursos'
import Como_funciona from '../pages/C_FUNCIONA/Como_funciona'

const Router = () => {
  return (
    <BrowserRouter>
        <Header></Header>
        <Routes>
            <Route path='/' element={<Home></Home>}> </Route>
            <Route path='/sec2' element={<Section2></Section2>}> </Route>
            <Route path='/cursos' element={<Cursos></Cursos>}> </Route>
            <Route path='/C_funciona' element={<Como_funciona></Como_funciona>}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default Router