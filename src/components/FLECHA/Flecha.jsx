import React from 'react'
import './flecha.css'
import flechas from '../../assets/speed_fast_arrows_icon.svg'

const Flecha = () => {
  return (
    <div className='triple-flecha-animado'>
        <img className='triple-flecha' src={flechas} alt="" />
    </div>
  )
}

export default Flecha