import React from 'react'
import styled from 'styled-components'
import Footer from '../../Footer'
import HomeQuote from '../../HomeQuote'

const Webdevelopment = () => {
  return (
    <Wrapper>
      <h1>web development</h1>
        <HomeQuote/>
        <Footer/>
    </Wrapper>
  )
}

export default Webdevelopment
const Wrapper=styled.section`
margin-top: 11.8rem;
`;