import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'
import lupa from '../../assets/search-icon.png'
import logo from '../../assets/alura-logo.svg'
import IconHamburgerOpen from '../../assets/icon-menu-open.svg'


const Header = () => {
  return (
    <div className="frame-princ-header-all">
        <div className="content-header">
            <div className="comp-st">
                <button className='btn-header-open-icon'>
                    <img className='btn-opne-h' src={IconHamburgerOpen} alt="" />
                </button>
                <Link className='img-logo'  to="/">
                    <img src={logo} alt="" />
                </Link>
                <div className="content-search content-search-mbl">
                    <input className='input-search' type="search" name="" id="" placeholder='Que le gustaria aprender?' />
                    <img src={lupa} alt="" />
                </div>
            </div>
            <div className="comp-st-1">
                <div className="cont-ld-iz">
                    <Link className='btn-link-a btn-hdr-mobile' to="/c_funciona">
                        <div className="cont-btn-t">
                            <p>COMO FUNCIONA</p>
                        </div>
                    </Link>
                    <Link className='btn-link-a btn-hdr-mobile' to="/para-empresas">
                        <div className="cont-btn-t">
                            <p>PARA EMPRESAS</p>
                        </div>
                    </Link>
                </div>
                <div className="cont-ld-rg">
                    <Link className='btn-link-a btn-hdr-mobile' to="">
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
    </div>
  )
}

export default Header