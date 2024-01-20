import React from 'react'
import './ingresar.css'


const Ingresar = ({user , setUser}) => {

  const handleLogout = () =>{
    setUser([])
  }

  return (
    <div className="cont-ingresar-login">
        <div className='content-gen-ingresar'>
          <h1>Gracias por logearte correctamente</h1>
          <h2>Usuario: {user} </h2>
          <button onClick={handleLogout}> Cerrar Sesion</button>
          
        </div>
        
    </div>
  )
}

export default Ingresar