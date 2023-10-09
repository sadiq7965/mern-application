import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'
import {useNavigate} from 'react-router-dom'
import {ButtonWrapper} from './Button'
import {HashLink} from 'react-router-hash-link'

const Header = () => {

    const Nav= useNavigate()

    return (
        <Wrapper>
            <div className='header'>
                <div className="logo">
                  <img src='/image/ALDIGITAL.png' alt='Aldigital' onClick={()=>{Nav('/')}} />
                  {/* <div className='logo-data'>
                     <h1  onClick={()=>{Nav('/')}} >ALDIGITAL</h1>
                    <p>Virtual Communications</p>
                   </div> */}
                </div>
              <Navbar/>
             
             <HashLink to='#service' smooth><ButtonWrapper className='header-btn'>Get a quote</ButtonWrapper> </HashLink>
             {/* <button className='nav-btn'>Get a quote</button> */}
             </div>
             {/* get a quote button */}
        </Wrapper>
    )
}

export default Header
const Wrapper = styled.section`
/* border: 10rem solid green; */

.header{
/* display: grid; */
/* grid-template-columns: repeat(3, 1fr); */
/* grid-template-columns:repeat(3,1fr); */
/* gap: 7rem; */
    /* border:1px solid red; */
    height: 12rem;
    padding: 0rem 5.8rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 0 10px 0 rgba(0,0,0,.11)!important;
    z-index: 999;
    /* position: fixed; */
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
   
    background: white;
    /* color: white; */
}
.header img{
    width: 9rem;
    cursor: pointer;
}
.logo{
    /* border:1px solid red; */
    display: flex;
    /* justify-content: center; */
    align-items: center;
}
.logo-data h1{
    font-size:3rem;
    cursor: pointer;
/* font-weight: ; */
}
.header-btn:hover{
        color: #fff!important;
        background: linear-gradient(90deg,#12a5aa 0,#00d774);
        transition: all .2s ease in ease-in-out;
    }
/* .header-btn:hover{
        color: #fff!important;
        background: linear-gradient(90deg,#12a5aa 0,#00d774);
        transition: all 10.2s ease in ease-in-out;
    } */

.logo-data p:nth-child(2){font-size:1.3rem;}


@media (max-width: 768px){
    .nav-btn{
        display: none;
    }
    .header-btn{
        display: none;
    }
}

`;