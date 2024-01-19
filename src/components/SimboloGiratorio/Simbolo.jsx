import React from 'react'
import './simbolo.css'
import simboloA from '../../assets/simbolo-a.png'
import aureolaA from '../../assets/selo-circle.svg'

const Simbolo = () => {
  return (
    <div className='simbolo-a-giratorio'>
        <img className='letra-sag' src={simboloA} alt="" />
        <img className='aureola-sag' src={aureolaA} alt="" />
    </div>
  )
}

export default Simbolo