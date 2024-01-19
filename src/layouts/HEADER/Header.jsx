import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'
import lupa from '../../assets/search-icon.png'
import logo from '../../assets/alura-logo.svg'


const Header = () => {
  return (
    <div className="content-header">
        <div className="comp-st">
            <Link className='img-logo'  to="/">
                <img src={logo} alt="" />
            </Link>
            <div className="content-search">
                <input className='input-search' type="search" name="" id="" placeholder='Que le gustaria aprender?' />
                <img src={lupa} alt="" />
            </div>
        </div>
        <div className="comp-st-1">
            <div className="cont-ld-iz">
                <Link className='btn-link-a' to="/c_funciona">
                    <div className="cont-btn-t">
                        <p>COMO FUNCIONA</p>
                    </div>
                </Link>
                <Link className='btn-link-a' to="/cursos">
                    <div className="cont-btn-t">
                        <p>PARA EMPRESAS</p>
                    </div>
                </Link>
            </div>
            <div className="cont-ld-rg">
                <Link className='btn-link-a' to="">
                    <div className="cont-btn-login">
                        <p>INGRESAR</p>
                    </div>
                </Link>
                <Link className='btn-link' to="">
                    <div className="cont-matricula">
                        <p>MATRICULARCE</p>
                    </div>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Header