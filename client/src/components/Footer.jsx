import React from 'react'
import styled from 'styled-components'
import PrivacyPolicy from './sub-compo/footer/PrivacyPolicy'
import { FaLinkedin } from 'react-icons/fa';
import { BiMobile } from 'react-icons/bi';
import { AiOutlineMail } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <Wrapper>
      <div className="container ">
        <div className='grid-four-column'>
          <div className="footer-content ">
            <h1>< span className='heading-start'><NavLink to={'/'}>Al</NavLink></span><span className='heading-end'><NavLink to={'/'}>digital</NavLink></span></h1>
            <p>Aldigital is an award winning digital marketing agency serving clients globally</p>
            <div className="footer-icon">
              <NavLink to={'https://in.linkedin.com/' }target='-_blank' > <i className="fa-brands fa-instagram"></i> </NavLink> 
              <NavLink to={'https://in.linkedin.com/' }target='-_blank' > <FaLinkedin/> </NavLink> 
            </div>
          </div>
          <div className="footer-content sitemap">
            <h6>Sitemap</h6>

            <li><NavLink to={'/service'}>Services</NavLink></li>
            <li><NavLink to={'/about'}>About</NavLink></li>
            <li><NavLink to={'/contact'}>Contact</NavLink></li>
            <li><NavLink to={'#'}>Blogs</NavLink></li>

          </div>
          <div className="footer-content seo-service">
            <h6>SEO Services</h6>
            <li><NavLink to={'/service/seo'}>SEO</NavLink></li>
            <li><NavLink to={'/service/socialmediamarketing'}>Social Media Marketing</NavLink></li>
            <li><NavLink to={'/service/paidads'}>Paid Ads</NavLink></li>
            <li><NavLink to={'/service/webdevelopment'}>Web Development</NavLink></li>
            <li><NavLink to={'/service/design'}>Design</NavLink></li>
            <li><NavLink to={'/service/content'}>Content</NavLink></li>
          </div>
          <div className="footer-content">
            <h6>Corporate Head Office</h6>
            <p>Pyramid Urban Homes 3 Sec 67 Gurgaon</p>
            <div className='mail-div'>
              <div className='phone'>
                <div ><BiMobile /> </div>
                <p><NavLink to={'tel:+91(8888888888)'}>8888888888</NavLink></p>
              </div>
              <div className='mail'>
                <div ><AiOutlineMail /></div>
                <p> <NavLink to={'mailto:aldigital@gmail.com'} target='_blank'>aldigital@gmail.com</NavLink></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PrivacyPolicy />
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
  /* border: 2px solid red; */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: start;
  gap: 1rem;
  padding-left: 2rem;
}
.sitemap a{
  color: #ffffffc5;
  text-decoration: none;
}
.sitemap li{
  color: #ffffffc5;
  font-size: 1.5rem;
}
.seo-service a{
  color: #ffffffc5;
  text-decoration: none;
}
.seo-service li{
  color: #ffffffc5;
  font-size: 1.5rem;
}
.heading-start a{
  color: white;
  text-decoration: none;
}
.heading-end a{
  color: #ffffff4e;
  text-decoration: none;
}
.footer-content .footer-icon{
  font-size: 1.8rem;
  color: #04bf7e;
  display: flex;
  gap: .6rem;
}
.footer-content .footer-icon a{
  text-decoration: none;
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
.mail-div a{
text-decoration: none;
color: #ffffffc5;
}
.mail-div .mail,.phone{
  color: #ffffffc5;
  display: flex;
  align-items: baseline;
  gap: .7rem;
  font-size: 1.3rem;
}
`;