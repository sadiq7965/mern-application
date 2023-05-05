import React from 'react'
import styled from 'styled-components'
import { ButtonWrapper } from '../../Button'

const Intro = () => {
  return (
    <Wrapper>
<div className="container">
<div className="intro">
            <p className='intro-para'>ABOUT US</p>
            <h1>We are <br /> a team</h1>
            <p>Aldigital is a team of the best experts in the area of long tail SEO and performance-based advertising</p>
            <ButtonWrapper className='intro-btn'>Meet us</ButtonWrapper>
        </div>
</div>
    </Wrapper>
  )
}

export default Intro
const Wrapper=styled.section`
padding:9rem 0;


.intro{
    /* border: 1px solid black; */
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 2.2rem;
    max-width: 55rem;
    margin: 0 auto;
}
h1{
    /* font-size: 4rem; */
    line-height: 1.2
    Gilroy-ExtraBold,sans-serif;
}

p{
    line-height: 1.75;
}
.intro-btn{
    width: 80%;
    /* padding: 0.5rem; */
    font-size: 1.6rem;
    font-weight: 600;
    &:hover{
        color: white;
        background-color: #04bf7e;
        transition: all .2s ease-in-out;
    }
}
`;