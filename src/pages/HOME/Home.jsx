import React from 'react'
import './home.css'
import Section1 from '../../layouts/SECTION1/Section1'
import Section2 from '../../layouts/SECTION2/Section2'
import Section3 from '../../layouts/SECTION3/Section3'
import Section4 from '../../layouts/SECTION4/Section4'
import Section5 from '../../layouts/SECTION5/Section5'
import Section7 from '../../layouts/SECTION7/Section7'
import Section8 from '../../layouts/SECTION8/Section8'
import Footer from '../../layouts/FOOTER/Footer'
//import DivisorSection from '../../components/DivisorSection/DivisorSection'
import Section6 from '../../layouts/SECTION6/Section6'




const Home = () => {
  return (
    <>
    <div className="content-home">
       
      <Section1></Section1>
      
      <Section2></Section2>
      
      <Section3></Section3>
      
      <Section4></Section4>
      {/*
      <DivisorSection></DivisorSection>*/}
      
      <Section5></Section5>
      {/*
      <Section6></Section6>
      */}
      <Section7></Section7>
       
      <Section8></Section8>
      
      <Footer></Footer>
    </div>
    </>
  )
}

export default Home