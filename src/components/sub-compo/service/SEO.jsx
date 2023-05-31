import React from 'react'
import Footer from '../../Footer'
import HomeQuote from '../../HomeQuote'
import styled from 'styled-components'

const SEO = () => {
  return (
    <Wrapper>
    <h1>  SEO CONTENT HERE</h1>
    <h1>  SEO CONTENT HERE</h1>
      <HomeQuote/>
      <Footer/>
    
    </Wrapper>
  )
}

export default SEO
const Wrapper= styled.section`
border: 2px solid red;
margin-top: 11.8rem;
`;