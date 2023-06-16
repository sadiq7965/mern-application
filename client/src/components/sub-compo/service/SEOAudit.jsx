import React from 'react'
import styled from 'styled-components'
import Footer from '../../Footer'
import HomeQuote from '../../HomeQuote'

const SEOAudit = () => {
  return (
  <Wrapper>
        <h1>SEO audit CONTENT HERE</h1>
        <HomeQuote/>
      <Footer/>
  </Wrapper>
  )
}

export default SEOAudit
const Wrapper = styled.section`
border: 2px solid red;
margin-top: 11.8rem;
`;