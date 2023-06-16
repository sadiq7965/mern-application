import React from 'react'
import styled from 'styled-components'
import HomeQuote from '../../HomeQuote'
import Footer from '../../Footer'

const Design = () => {
  return (
<Wrapper>
  <h1>design</h1>
    <HomeQuote/>
    <Footer/>
</Wrapper>
  )
}

export default Design
const Wrapper=styled.section`
margin-top: 11.8rem;
`;