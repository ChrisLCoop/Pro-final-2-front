import React from 'react'
import './section7.css'
import { Link } from 'react-router-dom'
import MacbookLogo from '../../assets/Macbook_icon.png'
import AppLogoS from '../../assets/apple_festival_app.png'
import LogoPlayStore from '../../assets/application_playstore_android.png'
import LogoApple from '../../assets/social_apple_mac.png'
import DivisorImg from '../../assets/divisor-section-app.png'





const Section7 = () => {
  return (
    <div className='cont-sec-07'>
        <div className="frame-sec07-all">
            <div className="cont-frame-07-bq1">
                <div className="cards-07-abb">
                    <img src={MacbookLogo} alt="" />
                    <h2>1478 cursos</h2>
                    <p>con lanzamientos cada semana y actualizaciones constantes</p>
                </div>
                <div className="cards-07-abb">
                    <img src={AppLogoS} alt="" />
                    <h2>Aplicativos</h2>
                    <p>para Android e iOS, para que puedas descargarlo y estudiarlo sin conexión.</p>
                </div>
            </div>
            <div className="cont-frame-07-bq2">
                <div className="cont-07-btn-scc">
                    <Link className='lnk-07-sspd'>
                        <div className="frame-btn-07sec-a">
                            <img src={LogoPlayStore} alt="" />
                            <span>Google Play</span>
                        </div>
                    </Link>
                </div>
                <div className="cont-07-btn-scc">
                    <Link className='lnk-07-sspd'>
                        <div className="frame-btn-07sec-a">
                            <img src={LogoApple} alt="" />
                            <span>App Store</span>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
        <div className="button-port-sec07">
            <img className='under-section-div-07' src={DivisorImg} alt="" />
        </div>
    </div>
  )
}

export default Section7