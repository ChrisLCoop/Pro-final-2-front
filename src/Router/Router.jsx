import { BrowserRouter, Route, Routes } from 'react-router-dom'
import React from 'react'
import Section2 from '../layouts/SECTION2/Section2'
import Home from '../pages/HOME/Home'
import ParaEmpresas from '../pages/EMPRESAS/ParaEmpresas'




const Router = () => {
  return (
    <BrowserRouter>
        
       
        <Routes>
            <Route path='/' element={<Home></Home>}> </Route>
            <Route path='/sec2' element={<Section2></Section2>}> </Route>
            <Route path='/para-empresas' element={<ParaEmpresas></ParaEmpresas>}> </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default Router