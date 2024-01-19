import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'
import AluraLogoFooter from '../../assets/alura-logo-footer.svg'
import LogoTiktok from '../../assets/tiktok_logo_icon.png'
import LogoYoutube from '../../assets/youtube_icon_social.png'
import LogoFacebook from '../../assets/social_facebook_fb.png'
import LogoTwitter from '../../assets/social_Twitter.png'
import LogoInstagram from '../../assets/instagram_black_logo_icon.png'
import LogoPlayStoreAndroid from '../../assets/application_playstore_logo.png'
import LogoAppleMac from '../../assets/apple_mac.png'



const Footer = () => {
  return (
    <div className='content-footer-f'>
        <div className="frame-footer-01-app-link">
            <div className="cont-all-sec01-footer-inf">
                <div className="cards-sect-a-frt">
                    <div className="cont-ff-tnl-inf">
                        <img src={AluraLogoFooter} alt="" />
                        <p>AOVS Sistemas e informática S.A</p>
                        <p>CNPJ 05.555.382/0001-33</p>
                    </div>
                    <div className="cont-ff-tnl-inf-02">
                        <h3>NUESTRAS REDES Y APPS</h3>
                        <div className="cont-link-footer-redes-sociales">
                            <div className="cont-link-r-social-ttr">
                                <Link>
                                    <img src={LogoYoutube} alt="" />
                                </Link>
                            </div>
                            <div className="cont-link-r-social-ttr">
                                <Link>
                                    <img src={LogoFacebook} alt="" />
                                </Link>
                            </div>
                            <div className="cont-link-r-social-ttr">
                                <Link>
                                    <img src={LogoTwitter} alt="" />
                                </Link>
                            </div>
                            <div className="cont-link-r-social-ttr">
                                <Link>
                                    <img src={LogoInstagram} alt="" />
                                </Link>
                            </div>
                            <div className="cont-link-r-social-ttr">
                                <Link>
                                    <img src={LogoPlayStoreAndroid} alt="" />
                                </Link>
                            </div>
                            <div className="cont-link-r-social-ttr">
                                <Link>
                                    <img src={LogoAppleMac} alt="" />
                                </Link>
                            </div>
                            <div className="cont-link-r-social-ttr">
                                <Link>
                                    <img src={LogoTiktok} alt="" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Footer