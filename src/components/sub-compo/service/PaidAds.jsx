import React from 'react'
import styled from 'styled-components'
import Footer from '../../Footer'
import HomeQuote from '../../HomeQuote'

const PaidAds = () => {
  return (
    <Wrapper>
      <h1>paid ads</h1>
        <HomeQuote/>
        <Footer/>
    </Wrapper>
  )
}

export default PaidAds
const Wrapper=styled.section`
margin-top: 11.8rem;
`;