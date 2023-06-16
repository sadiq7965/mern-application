import React from 'react'
import styled from 'styled-components'
// import { ButtonWrapper } from './Button'
// import ServiceButton from './button/Service_Button'
import { useNavigate } from 'react-router-dom'
import { ButtonWrapper } from '../../Button'
import ServiceButton from '../../button/Service_Button'


const ServiceHome = () => {
    const nav=useNavigate()

  return (
    <Wrapper>
      <div className='container service-container'>
        <div className="service">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            <h2>What We Do</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod vero necessitatibus quasi ipsum obcaecati praesentium facilis nemo, repudiandae porro id!</p>
          </div>
          <div className="service-box grid-three-column" >
            <div className="service-box-inner">
              <h4>SEO</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab nulla perspiciatis asperiores? Qui eveniet unde cumque aliquam voluptatibus?</p>
              <ServiceButton onClick={()=>nav('/service/seo')}>Explore...</ServiceButton>
              {/* <ServiceButton onClick={()=>Seo('/service/seo')}>Explore...</ServiceButton> */}
            </div>
            <div className="service-box-inner ">
              <h4>Social Media Marketing</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab nulla perspiciatis asperiores? Qui eveniet unde cumque aliquam voluptatibus?</p>
              <ServiceButton onClick={()=>nav('/service/socialmediamarketing')}>Explore...</ServiceButton>
            </div>
            <div className="service-box-inner">
              <h4>Paid Ads</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab nulla perspiciatis asperiores? Qui eveniet unde cumque aliquam voluptatibus?</p>
              <ServiceButton onClick={()=>nav('/service/paidads')}>Explore...</ServiceButton>
            </div>
            <div className="service-box-inner">
              <h4>Web Development</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab nulla perspiciatis asperiores? Qui eveniet unde cumque aliquam voluptatibus?</p>
              <ServiceButton onClick={()=>nav('/service/webdevelopment')}>Explore...</ServiceButton>
            </div>
            <div className="service-box-inner">
              <h4>Design</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab nulla perspiciatis asperiores? Qui eveniet unde cumque aliquam voluptatibus?</p>
              <ServiceButton onClick={()=>nav('/service/design')}>Explore...</ServiceButton>
            </div>
            <div className="service-box-inner">
              <h4>Content</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab nulla perspiciatis asperiores? Qui eveniet unde cumque aliquam voluptatibus?</p>
              <ServiceButton onClick={()=>nav('/service/content')}>Explore...</ServiceButton>
            </div>
            <div className="service-box-inner">
              <h4>Heading</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab nulla perspiciatis asperiores? Qui eveniet unde cumque aliquam voluptatibus?</p>
              <ServiceButton onClick={()=>nav('#')}>Explore...</ServiceButton>
            </div>
          </div>
          <ButtonWrapper className='service-btn'>Explore</ButtonWrapper>
        {/* <ButtonWrapper className='service-btn'>Explore</ButtonWrapper> */}
        </div>
      </div>
    </Wrapper>

  )
}

export default ServiceHome
const Wrapper = styled.section`
border: 2px solid yellow;
background-color: white;
/* margin-top: 12.8rem; */

.service-container{
  padding: 9rem 0;
}

.service{
  display: flex;
  flex-direction: column;
  gap: 4rem;
  text-align: center;
  align-items: center;
}
h2{
  color: #0e2b5c;
    font-size: 2.9rem;
    letter-spacing: -0.4px;
    letter-spacing: -0.4px;
}
p{
  color: #627792;
    font: 400 1.6rem/1.625rem "Rubik", sans-serif;
    line-height: 1.5;
}

.service-box-inner{
  background: #EDEFF2;
  text-align: start;
  align-items: start;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 9rem 2rem 3rem;

}
.service-btn  {
  width: 30%;
  &:hover{
    color: white;
  background: linear-gradient(90deg, #00d774 0,#12a5aa );
  transition: all .2s ease in ease-in-out;
}
}
`;