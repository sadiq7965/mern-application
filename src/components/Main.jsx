import React from 'react'
import styled from 'styled-components'
import { ButtonWrapper } from './Button'
import { HashLink} from 'react-router-hash-link'

const Main = (MainObj) => {
  return (
    <Wrapper style={{backgroundColor:MainObj.bg}} >
        <div className='container grid-wala-two-column' style={{backgroundColor:MainObj.Containerbg}} >
                <div className="intro-data">
                    <h1>{MainObj.heading}</h1>
                    <p>{MainObj.p}</p>
                    <HashLink to='#service' smooth><ButtonWrapper className='home-btn'>Get a quote</ButtonWrapper> </HashLink>
                    
                </div>
                <div className="intro-img">
                <img src={MainObj.url} alt='info'/>

                </div>
            </div>
    </Wrapper>
  )
}

export default Main
const Wrapper = styled.section`
/* border: 2px solid red; */
padding: 9rem 0;
width: 100%;

/* background-color */
.container{
    align-items: center;
}
.intro-data{
    /* border: 3px solid yellow; */
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 3rem;
    padding: 0 5rem;
    /* width: 34%; */
}
.intro-data h1{
    /* border: 3px solid yellow; */
    max-width: 38rem;
}

.intro-img{
    /* background: url('image/home1.png' ); */
    /* background-repeat: no-repeat; */
    /* background-position-x: 30%; */
    /* padding: 0 0rem 0 50rem; */
    /* border: 3px solid yellow; */
    /* width: 85%; */
    /* margin-left: -10rem; */
    /* padding-left: 10rem; */

    /* background-position: right-top;
    margin-left: 40%; */
/* background-size: auto; */
/* height: 100vh; */
/* width: 100%; */
}
.intro-img img{
    /* border: 2px solid blue; */
    width: 100%;
    /* height: 100vh; */
}
.home-btn{
    /* background: linear-gradient(90deg,#12a5aa 0,#00d774); */
    max-width: 100%;
    &:hover{
        color: #fff!important;
        background: linear-gradient(90deg,#12a5aa 0,#00d774);
        transition: all .2s ease in ease-in-out;
    }
}



    /* RESPONSIVE  */
    @media (max-width: 768px){
        .grid-two-column{
            flex-direction: column;

        }
}
    @media (max-width: 968px){
        
        .intro-data{
            padding: 0;
    }
    .intro-data h1{
max-width: 60rem;
    }
    
}
`;