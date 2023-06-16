import React from 'react'
import styled from 'styled-components'

const PrivacyPolicy = () => {
  return (
<Wrapper>
<div className="container privacy-policy ">
 <p>©2023 Aldigital.  All Rights Reserved. Privacy Policy</p>
</div>
</Wrapper>
  )
}

export default PrivacyPolicy
const Wrapper=styled.section`
    background-color: #0c2836;
    margin-top: 9rem;
.privacy-policy p{
  text-align:center;
  color: white;
  padding: 2.5rem 0;
}
`;