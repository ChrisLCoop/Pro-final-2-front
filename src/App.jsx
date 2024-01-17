import { useState } from 'react'
import React from 'react'
import './App.css'
import Como_funciona from './pages/C_FUNCIONA/Como_funciona'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Como_funciona></Como_funciona>
    </>
  )
}

export default App
