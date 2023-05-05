import React from 'react'
import styled from 'styled-components'
import PrivacyPolicy from './sub-compo/footer/PrivacyPolicy'
import { FaBeer,FaLinkedin,FaWodu } from 'react-icons/fa';

const Footer = () => {
  return (
    <Wrapper>
      <div className="container ">
        <div className='grid-four-column'>
          <div className="footer-content ">
            <h1>< span className='heading-start'>Al</span><span className='heading-end'>digital</span></h1>
            <p>seoplus+ is an award winning digital marketing agency serving clients globally</p>
            <div className="footer-icon">
              <i className="fa-brands fa-instagram"></i>
              <FaBeer />
              <FaWodu/>
              <FaLinkedin/>
            </div>
          </div>
          <div className="footer-content">
            <h6>Sitemap</h6>
            <p>Services</p>
            <p>About</p>
            <p>Contact</p>
            <p>Clients</p>
            <p>Privacy Policy</p>
          </div>
          <div className="footer-content">
            <h6>SEO Services</h6>
            <p>SEO Audit</p>
            <p>Core Web Vitals Audit</p>
            <p>SEO Consulting</p>
            <p>SEO Setup</p>
            <p>SEO Copywriting</p>
            <p>Content Plan</p>
            <p>Link Building Audit</p>
          </div>
          <div className="footer-content">
            <h6>Corporate Head Office</h6>
            <p>Pyramid Urban Homes 3 Sec 67 Gurgaon</p>
            <div className='mail-div'>
              <p>8888888888</p>
              <p>aldigital@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <PrivacyPolicy/>
    </Wrapper>
  )
}

export default Footer
const Wrapper = styled.section`
background: #113b51 ;
padding: 9rem 0 0 0;

.grid-four-column{
  gap:3rem
}
.footer-content{
  border: 2px solid red;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: start;
  gap: 1rem;
  padding-left: 2rem;
}
h1{
  color: white;
}
.heading-end{
  color: #ffffff4e;
}
.footer-content .footer-icon{
  font-size: 3rem;
  color: #04bf7e;
}
h6{
  color: white;
  font-size: 1.7rem;
  letter-spacing: .2rem;
  padding-bottom: 1rem;

}
p{
  color: #ffffffc5;
}
.mail-div{
  /* text-decoration: underline; */
  padding-top: 2rem;
}

`;