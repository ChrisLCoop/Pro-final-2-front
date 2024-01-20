import React from 'react'
import './ingreso-registro.css'
import { useState } from 'react'

export function Formulario  ({setUser})  {
    const [nombre, setNombre] =useState("")
    const [password, setPassword] =useState("")
    const [error, setError] = useState("false")


    const handleSubmit =(e) =>{
        e.preventDefault()
        if(nombre ==="" || password === ""){
            setError(true)
            return
        }
        setError(false)

        setUser([nombre])
    }

    
    

  return (
    <div className='content-login' onSubmit={handleSubmit}>
        <h1>Login</h1>
        <form className='form-login'>
            <input type="text" value={nombre} onChange={e =>setNombre(e.target.value)} />
            <input type="password" value={password} onChange={e =>setPassword(e.target.value)}/>
            <button>Iniciar sesion</button>
        </form>
        {error && <p>Todos los campos son obligatorios XD</p> }
        
    </div>
  )
}

