import React from 'react'
import styled from 'styled-components'
import HomeQuote from '../../HomeQuote'
import Footer from '../../Footer'

const Content = () => {
  return (
<Wrapper>
  <h1>content</h1>
    <HomeQuote/>
    <Footer/>
</Wrapper>
  )
}

export default Content
const Wrapper=styled.section`
margin-top: 11.8rem;
`;