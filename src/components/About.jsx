import React from 'react'
import styled from 'styled-components'
import Intro from './sub-compo/about/Intro'
import WhatNext from './sub-compo/about/WhatNext'
import Footer from './Footer'
import HomeQuote from './HomeQuote'

const About = () => {
  return (
    
<Wrapper>
  <div >
    <Intro/>
    <WhatNext/>
    <HomeQuote/>
    <Footer/>
  </div>
</Wrapper>
  )
}

export default About
const Wrapper=styled.section`
border: 2px solid yellow;
margin-top: 11.8rem; 
`;