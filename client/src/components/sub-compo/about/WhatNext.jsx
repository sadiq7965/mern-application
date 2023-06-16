import React from 'react'
import styled from 'styled-components'
import { ButtonWrapper } from '../../Button'
import {HashLink} from 'react-router-hash-link'

const WhatNext = () => {
    return (
        <Wrapper>
            <div className="container">
                <h2>NEXT WHAT?</h2>
                <p>Are you interested in our services? Email us and we will arrange a meeting or a phone call</p>

                <div className=" grid-four-column">
                    <div className="next-content">
                    {/* <i className="fa-regular fa-message"></i> */}
                        <h4>Leave a message</h4>
                        <p>Send us the address of your website and your contact number –we will get in touch with you within 48 hours.</p>
<HashLink to='#service' smooth><ButtonWrapper>Write to us</ButtonWrapper> </HashLink>
                        
                    </div>
                    <div className="next-content">
                    {/* <i className="fa-light fa-reply"></i> */}
                        <h4>Let's talk!</h4>
                        <p>We will then call you or meet to talk about your business goals and priorities. We will also talk in detail about your website.</p>
                        </div>
                    <div className="next-content">
                        <h4>Receive action steps proposal</h4>
                        <p>Based on the analysis of need and your website, we will prepare proposals for specific actions tailored to your goals, along with a quote.</p>
                        </div>
                    <div className="next-content">
                    {/* <i class="fa-thin fa-arrows-spin"></i> */}
                        <h4>Get ready for changes</h4>
                        <p>If you like the strategy we prepared for your website and want to start the cooperation – prepare for the changes! We’re starting the journey for higher ranks and increasing your site’s conversion!</p>
                        
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

export default WhatNext
const Wrapper = styled.section`
/* border: 2px solid red; */
background-color: #113b51;
padding: 9rem 0;

.container{
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 3.2rem;
}
h2{
    font-size: 2.6;
    line-height: 1.5;
}
.grid-four-column{
    /* border: 1px solid yellow; */
    align-items: center;
    text-align: center;
    gap: 5rem;
    max-width: 120rem;
    margin: 0 auto;
    margin-top: 1.4rem;
    /* padding: 10rem 0; */
    box-sizing: border-box;
    background-color: #1a465e;
    box-shadow:0 10px 30px 0 rgba(17,59,81,.02);
}
.next-content{
    /* border: .2px solid red; */
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 2.5rem;
    padding: 8rem 0.2rem;
}
h4{
    color: white;
    font-size: 1.6;
    font-weight: 550;
}
.next-content i{
    font-size: 4rem;
}
p{
    color: #ffffffc5;
}
`;