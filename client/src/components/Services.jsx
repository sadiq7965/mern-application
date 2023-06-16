import React from 'react'
import styled from 'styled-components'
import ServiceHome from './sub-compo/service/ServiceHome'
import HomeQuote from './HomeQuote'
import Footer from './Footer'
// import { ButtonWrapper } from './Button'
// import ServiceButton from './button/Service_Button'
// import { useNavigate } from 'react-router-dom'
// import HomeQuote from './HomeQuote'
// import Footer from './Footer'


const Services = () => {

  // const Seo=useNavigate()

  return (
    <Wrapper>
      <ServiceHome />
      <HomeQuote />
      <Footer />
    </Wrapper>
    // <Wrapper>
    //   <div className='container service-container'>
    //     <div className="service">
    //       <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
    //         <h2>What We Do</h2>
    //         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod vero necessitatibus quasi ipsum obcaecati praesentium facilis nemo, repudiandae porro id!</p>
    //       </div>
    //       <div className="service-box grid-three-column" >
    //         <div className="service-box-inner">
    //           <h4>Heading</h4>
    //           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab nulla perspiciatis asperiores? Qui eveniet unde cumque aliquam voluptatibus?</p>
    //           <ServiceButton onClick={()=>Seo('/service/seo')}>Explore...</ServiceButton>
    //         </div>
    //         <div className="service-box-inner ">
    //           <h4>Heading</h4>
    //           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab nulla perspiciatis asperiores? Qui eveniet unde cumque aliquam voluptatibus?</p>
    //           <ServiceButton onClick={()=>Seo('/service/seo')}>Explore...</ServiceButton>
    //         </div>
    //         <div className="service-box-inner">
    //           <h4>Heading</h4>
    //           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab nulla perspiciatis asperiores? Qui eveniet unde cumque aliquam voluptatibus?</p>
    //           <ServiceButton onClick={()=>Seo('/service/seo')}>Explore...</ServiceButton>
    //         </div>
    //         <div className="service-box-inner">
    //           <h4>Heading</h4>
    //           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab nulla perspiciatis asperiores? Qui eveniet unde cumque aliquam voluptatibus?</p>
    //           <ServiceButton onClick={()=>Seo('/service/seo')}>Explore...</ServiceButton>
    //         </div>
    //         <div className="service-box-inner">
    //           <h4>Heading</h4>
    //           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab nulla perspiciatis asperiores? Qui eveniet unde cumque aliquam voluptatibus?</p>
    //           <ServiceButton onClick={()=>Seo('/service/seo')}>Explore...</ServiceButton>
    //         </div>
    //         <div className="service-box-inner">
    //           <h4>Heading</h4>
    //           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab nulla perspiciatis asperiores? Qui eveniet unde cumque aliquam voluptatibus?</p>
    //           <ServiceButton onClick={()=>Seo('/service/seo')}>Explore...</ServiceButton>
    //         </div>
    //         <div className="service-box-inner">
    //           <h4>Heading</h4>
    //           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab nulla perspiciatis asperiores? Qui eveniet unde cumque aliquam voluptatibus?</p>
    //           <ServiceButton onClick={()=>Seo('/service/seo')}>Explore...</ServiceButton>
    //         </div>
    //       </div>
    //     <ButtonWrapper className='service-btn'>Explore</ButtonWrapper>
    //     </div>
    //   </div>  
    //   {/* <HomeQuote/> */}
    //   {/* <Footer/> */}
    // </Wrapper>
  )
}

export default Services
const Wrapper = styled.section`
margin-top: 11.8rem;
`;
// const Wrapper = styled.section`
// border: 2px solid yellow;
// background-color: white;
// margin-top: 12.8rem;

// .service-container{
//   padding: 9rem 0;
// }

// .service{
//   display: flex;
//   flex-direction: column;
//   gap: 4rem;
//   text-align: center;
//   align-items: center;
// }
// h2{
//   color: #0e2b5c;
//     font-size: 2.9rem;
//     letter-spacing: -0.4px;
//     letter-spacing: -0.4px;
// }
// p{
//   color: #627792;
//     font: 400 1.6rem/1.625rem "Rubik", sans-serif;
//     line-height: 1.5;
// }

// .service-box-inner{
//   background: #EDEFF2;
//   text-align: start;
//   align-items: start;
//   display: flex;
//   flex-direction: column;
//   gap: 2rem;
//   padding: 9rem 2rem 3rem;

// }
// .service-btn  {
//   width: 30%;
//   &:hover{
//     color: white;
//   background: linear-gradient(90deg, #00d774 0,#12a5aa );
//   transition: all .2s ease in ease-in-out;
// }
// }
// `;