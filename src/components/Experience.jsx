import React from 'react'
import styled from 'styled-components'
// import { ButtonWrapper } from './button/Button'
import { ButtonWrapper } from './Button'
import {HashLink} from 'react-router-hash-link'

const Experience = () => {
  return (
    <Wrapper>
      <div className="service-top">
      <div className="container">
        <div className="expre">
          <h2>EXPERIENCE</h2>
          <div className="expre-box grid-four-column">
            <div className="expre-box1">
              <div className='expre-box1-num'> 1800</div>
              <h3>SEO Keywords</h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae, vero.</p>
            </div>
            <div className="expre-box2">
              <div className='expre-box1-num'> 1800</div>
              <h3>SEO Keywords</h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae, vero.</p>
            </div>
            <div className="expre-box3">
              <div className='expre-box1-num'> 1800</div>
              <h3>SEO Keywords</h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae, vero.</p>
            </div>
            <div className="expre-box4">
              <div className='expre-box1-num'> 1800</div>
              <h3>SEO Keywords</h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae, vero.</p>
            </div>
          </div>
          <HashLink to='#service' smooth><ButtonWrapper id='expre-btn'>Get a free quote</ButtonWrapper> </HashLink>
        
        </div>
      </div>
      </div>
    </Wrapper>
  )
}
// down in css service-top works in place of wrapper

export default Experience
const Wrapper = styled.section`
  /* border: 2px solid yellow; */
  /* margin-top: 17rem;  */
  padding-top: 17rem; 
  .service-top{
  position: relative;
  background: #113b51 ;
  /* height: auto; */
  /* width: auto; */
  /* padding: 9rem 0; */
  box-sizing: border-box;
  height:60rem;
  overflow: visible;
}

.container{
  background: linear-gradient(90deg,#12a5aa 0,#00d774);
  color: white;
  /* transform: translateY(-17rem); */
  position: absolute;
  top: -15rem;
  /* bottom: 10rem; */
  right: .35rem;
  left: .35rem; 
  /* opacity: 1; */
}
.expre{
  display: flex;
  flex-direction: column;
  gap: 6rem;
  align-items: center;
  padding: 10rem 0;
}
.expre-box{
  /* below is grid gap  */
  gap: 3rem;
  padding: 0 4rem;
}
.expre-box1,.expre-box2,.expre-box3,.expre-box4{
  /* border: 1px solid black; */
max-width: 28rem;
background: hsla(0,0%,100%,.15);
box-shadow:0 10px 30px 0 rgba(17,59,81,.02);
display: flex;
flex-direction: column;
gap: 2rem;
align-items: center;
padding: 5rem 2rem;
text-align: center;
}
.expre-box1-num{
  font-size: 5.2rem;
  display: block;
  padding-top: 1rem;
}
.expre-box p{
    color: white;
}
.container #expre-btn{
  width: 60rem;
  color: white;
  border: 1px solid white;
  &:hover{
  color: #04bf7e;
  background-color: white;
}
}

/* TAB RESPONSIVE  */
@media (max-width:968px){
 .container #expre-btn{
  width: 28rem;
 } 
 .service-top{
height: 95rem;
 }
}

/* MOBILE RESPONSIVE  */
@media (max-width:768px){
  .service-top{
 height: 162rem;
  } 
  .container{
    top: -12rem;
  }
  .expre{
    gap: 5rem;
    padding: 7rem 0;
  }
  .container #expre-btn{
   width: 28rem;
  }
}

`;




// import React from 'react'
// import styled from 'styled-components'

// const Experience = () => {
//   return (
//     <div>Experience</div>
//   )
// }

// export default Experience
// const Wrapper=styled.section`
  
// `;