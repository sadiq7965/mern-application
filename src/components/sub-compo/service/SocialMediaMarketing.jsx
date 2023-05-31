import React from 'react'
import styled from 'styled-components'
import HomeQuote from '../../HomeQuote'
import Footer from '../../Footer'

const SocialMediaMarketing = () => {
  return (
    <Wrapper>
      <h1>social media marketing content</h1>
      <HomeQuote />
      <Footer />
    </Wrapper>
  )
}

export default SocialMediaMarketing
const Wrapper = styled.section`
border: 2px solid red;
margin-top: 11.8rem;
`;