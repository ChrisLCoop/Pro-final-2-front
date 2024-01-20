import { Formulario } from '../INGRESO_REGISTRO/Formulario'
import { useState } from 'react'


import React from 'react'
import Ingresar from '../INGRESAR/Ingresar'

const Dashboard = () => {
    const [user, setUser] = useState([])

  return (
    <div className='content-dashboard'>
        {
            !user.length >0 ? <Formulario setUser={setUser}></Formulario> : <Ingresar user={user} setUser={setUser} ></Ingresar>
        }
        
        
    </div>
  )
}

export default Dashboard