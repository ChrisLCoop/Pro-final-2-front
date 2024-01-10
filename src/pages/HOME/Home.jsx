import React from 'react'
import './home.css'
import Section1 from '../../layouts/SECTION1/Section1'
import Section2 from '../../layouts/SECTION2/Section2'
import Section3 from '../../layouts/SECTION3/Section3'
import Section4 from '../../layouts/SECTION4/Section4'
import Section5 from '../../layouts/SECTION5/Section5'


const Home = () => {
  return (
    <>
    <div className="content-home">
      <Section1></Section1>
      <Section2></Section2>
      <Section3></Section3>
      <Section4></Section4>
      <Section5></Section5>
    </div>
    </>
  )
}

export default Home