





import React from 'react'
import styled from 'styled-components'
import Footer from './Footer'

const Contact = () => {
    return (
        <Wrapper>
            <div className='container' id='service'>
              <p className='top-para'>CONTACT</p>
                <h1>Need some help with your site?</h1>
                <p>Contact us today and let’s chat about your digital marketing goals. Find out how we can help you take your online presence to the next level with our strategies and services in SEO, PPC, paid ads, social media, digital PR, content marketing, web development, UX design, and more</p>
                <div className="form grid-wala-two-column">
                    <div className="form-img">
                        <img src="./image/image1.jpg" alt="" />
                    </div>
                    <form>
                    <div className="form-box">
                        <input className='form-control' type='text' placeholder='Your domain'/>
                        <input className='form-control' type='email' placeholder='Email'/>
                        <input className='form-control' type='text' placeholder='Phone'/>
                        <textarea className='form-control resize' name="" id="" cols="30" rows="4"></textarea>
                      <div className='checkbox-div'>
                      <input style={{marginTop:'3px'}} type='checkbox' name='forcheck'/>
                        <label  htmlFor='forcheck'>I consent to the processing of my personal data by Aldigital Marketing sp z o.o. for marketing purposes</label>
                      </div>
                      <input type='submit'className='input-btn'/>
                    </div>
                    </form>
                </div>
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3510.350324413174!2d77.05332407392719!3d28.378485095574785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19247bd726c7%3A0x2d2f35640917c057!2sPyramid%20Urban%20Homes%203%20Sec%2067%20Gurgaon!5e0!3m2!1sen!2sin!4v1682951877161!5m2!1sen!2sin" 
            width="100%" 
            height="450" 
            style={{border:0, padding:'9rem 0 0 0'}} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"></iframe>
            <Footer/>
        </Wrapper>
    )
}

export default Contact
const Wrapper = styled.section`
margin-top: 11.8rem; 
padding: 9rem 0 0 0;

background-color: white;
border: 1px solid purple;

.container{
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 2rem;
}
.top-para{
  Letter-spacing: .275em
}
h2{
    color: #0e2b5c; 
}

.form{
    align-items: center;
    padding-top: 3rem;
}
.form-img{
    /* border: 1px solid purple; */
    /* max-width: 48%; */
}
.form-img img{
    max-width:70%
}
.form-box{
    /* border: 1px solid purple; */
    /* width: 48%; */
    padding: 0 2rem 0 4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.form-control{
    border: none;
    border-bottom: 2px solid rgba(17,59,81,.3);
    outline: none;
    width: 100%;
    transition: border .4s ease;
    padding: 8px 0;
    margin: 25px 0 8px;
    letter-spacing: .03em;
    font-size: 1.6rem;
    border-radius: 0;
    background: transparent;

}
.resize{resize:none}
.form-control:focus{
    border-bottom: 2px solid rgba(17,59,81,.6);
}

.checkbox-div{
    font-size: 1.4rem;
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    color: #627792;
    padding: 2rem 0 4rem 0;
    text-align: start;

}
/* label{
    text-align: right;
    padding-left: 2rem;
} */
.input-btn{
    font-size: 1.5rem;
    padding-top: 0.6125em;
    padding-bottom: 0   .6125em;
    /* height: 100%; */
    width: 80%;
    /* margin-top: 3rem; */
    color: #04bf7e;
    background: transparent;
    transition:  0.2s ease,color .2s ease;
    box-shadow: 0 4px 15px 0 rgba(0,0,0,.13);
    border: 1px solid #04bf7e;
    display: inline-block;
    padding: 0.75em 2em;
    min-width: 120px;
    /* font-size: 1em; */
    font-weight: 400;
    transform: translateZ(0);
    font-family: Gilroy-ExtraBold,sans-serif;
    text-align: center;
    vertical-align: middle;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    border-radius: 0;
    cursor: pointer;
    transition: all .2s ease in ease-in-out;
    :hover{
        color: #fff!important;
        background: linear-gradient(90deg,#12a5aa 0,#00d774);
        transition: all .2s ease in ease-in-out;
    }
}
`;