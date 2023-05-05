import React from 'react'
import styled from 'styled-components'
// import Services from './ServicesBox'
import Main from './Main'
import Experience from './Experience'
import HomeQuote from './HomeQuote'
import Footer from './Footer'

const Home = () => {

    const MainObj={
        heading:'Your Digital Marketing Partner',
        p:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. khan Sed, neque! Lorem ipsum dolor sit amet consectetur adipisicing',
        url:'image/home1.png',
        bg:'#EDEFF2',
        Containerbg:'#EDEFF2'
    }

    return (
        <Wrapper>
            {/* <div className='container grid-two-column' >
                <div className="intro-data">
                    <h1>Your Digital Marketing Partner</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed, neque! Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                    <ButtonWrapper className='home-btn'>Get a quote</ButtonWrapper>
                </div>
                <div className="intro-img">
                <img src='image/home1.png' alt='info'/>

                </div>
            </div> */}
            <Main {...MainObj}/>
            <Experience/>
            <Main heading='We Gives Results You Deserve' p='my name lorem30 is khanmy name lorem30 is khanmy name lorem30 is khanmy name lorem30 is khanmy name lorem30 is khan' url='image/info.svg' bg='#EDEFF2' Containerbg='#EDEFF2'/>
            {/* <Services/> */}
            <HomeQuote/>
            <Footer/>
            
        </Wrapper>
    )
}

export default Home
const Wrapper=styled.section`
  
/* background-color: #EDEFF2; */
margin-top: 11.8rem;  
`;
