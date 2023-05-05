import React from 'react'
import styled from 'styled-components'

const HomeQuote = () => {
    return (
        <Wrapper id='service'>
            <div className='container'>
                <h2>Personalize free quote for your business</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti iusto, deserunt perferendis vitae error nobis doloribus quo nisi rem laboriosam ipsam praesentium doloremque illo ut possimus corrupti reprehenderit odio libero cupiditate dolor. Facilis placeat optio accusantium quasi modi consequatur ad?</p>
                <div className="form grid-wala-two-column">
                    <div className="form-img">
                        <img src="./image/image1.jpg" alt="" />
                    </div>
                    <form>
                    <div className="form-box">
                        <input className='form-control' type='text' placeholder='Your domain'/>
                        <input className='form-control' type='email' placeholder='Email' required/>
                        <input className='form-control' type='text' placeholder='Phone'/>
                      <div className='checkbox-div'>
                      <input style={{marginTop:'3px'}} type='checkbox' name='forcheck' required/>
                        <label  htmlFor='forcheck'>I consent to the processing of my personal data by Aldigital Marketing sp z o.o. for marketing purposes</label>
                      </div>
                      <input type='submit'className='input-btn'/>
                    </div>
                    </form>
                </div>
            </div>
        </Wrapper>
    )
}

export default HomeQuote
const Wrapper = styled.section`

background-color: white;
border: 1px solid purple;

.container{
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 4rem;
    padding: 9rem 0;
}
h2{
    color: #0e2b5c;
    text-transform: uppercase;
}

.form{
    align-items: center;
    padding-top: 2rem;
}
.form-img{
    border: 1px solid purple;
    /* max-width: 48%; */
}
.form-img img{
    max-width:70%
}
.form-box{
    border: 1px solid purple;
    /* width: 48%; */
    padding: 0 2rem;
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