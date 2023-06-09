import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'



const Navbar = () => {

    // const[ChangeH, SetChangeH]=useState(false)
    // const[ChangeS, SetChangeS]=useState(false)
    // const[ChangeA, SetChangeA]=useState(false)
    // const[ChangeC, SetChangeC]=useState(false)
    // // console.log(Change)
    // const HandleChangeH=()=>{return(SetChangeH(!ChangeH))};
    // const HandleChangeS=()=>{return(SetChangeS(!ChangeS))};
    // const HandleChangeA=()=>{return(SetChangeA(!ChangeS))};
    // const HandleChangeC=()=>{return(SetChangeC(!ChangeS))};

    //  har NavLink pr onclick mein ye saare handle add karne pr and sare useState use karne pr bug create ho gya tha ki each 
    //  NavLink tag pr click karne pr har navhar item ki property change ho rhi it overall floop idea tha ye
    //  <NavLink to='/about' className={ChangeA? "action":""} onClick={()=>{ HandleChangeH();HandleChangeS();HandleChangeA();HandleChangeC(); }} >about</NavLink> }
    // className={ChangeC?'action':''} onClick={()=>{ HandleChangeH();HandleChangeS();HandleChangeA();HandleChangeC(); }}

    // const WindowPathname=window.location.pathname;
    // console.log(WindowPathname)
    // const path=document.querySelectorAll('ul li NavLink')
    // path.forEach((pathEvent)=>{
    //     if(pathEvent.href.includes(WindowPathname)){
    //         pathEvent.classList.add('action');
    //         console.log(pathEvent.href)
    //     }
    // })

    // path.forEach(event=>console.log(event.href))
    // console.log(path[2].innerHtml)
    // console.timeLog(NavLink)
    // const Path=document.getElementsByTagName(NavLink);
    // console.log(path[0].href)

    // let post =document.getElementsByTagName('p')
    // post.forEach(element => {console.log(element.children)
    //     // console.log(p)
    // });

    // for mobile
    const [Mobile, SetMobile] = useState(false)
    const handleMobile = () => { SetMobile(!Mobile) }
    const [Click, SetClick] = useState(false)
    const handleClick = () => { SetClick(!Click) }
    // document.addEventListener('touchstart',()=>SetClick(!Click))

    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    const combined = () => {
        handleMobile();
        scrollTop();
    }
    // let home = document.getElementById('home')
    // home.addEventListener('click', function () { combined() });
    return (
        <Wrapper >
            <div>
                <ul className={Mobile ? 'action' : ''}>
                    <li id='home'>
                        <NavLink to='/' onClick={() => { combined()}}  >HOME</NavLink>
                    </li>
                    <div className="dropdown"

                        // onMouseMove={()=>{SetClick(!Click)}}
                        // onMouseEnter works likes hover effect 
                        onMouseEnter={() => SetClick(!Click)}
                        onMouseLeave={() => SetClick(!Click)}
                        // onclik also works on touch in touched device
                        onClick={()=>SetClick(!Click)}

                        // on touch start works on mobile click but not in mouse click
                        // onTouchStart={() => SetClick(!Click)}
                    >
                        <li className='li-on-hover'  >
                            <NavLink to='/service'>SERVICE <i className="fa-solid fa-angle-down"></i> </NavLink>
                        </li>
                        {Click && <ul className='hover-ul'>
                            <li>
                                <NavLink to='/service/seo' onClick={() => { handleClick() }} >SEO </NavLink>
                            </li>
                            <li>
                                <NavLink to='/service/socialmediamarketing' onClick={() => { handleClick() }}>Social Media Marketing</NavLink>
                            </li>

                            <li>
                                <NavLink to='/service/paidads' onClick={() => { handleClick() }}> Paid Ads</NavLink>

                            </li>
                            <li>
                                <NavLink to='/service/webdevelopment' onClick={() => { handleClick() }}>Web Development</NavLink>
                            </li>
                            <li>
                                <NavLink to='/service/design' onClick={() => { handleClick() }}>Design</NavLink>
                            </li>
                            <li>
                                <NavLink to='/service/content' onClick={() => { handleClick() }}> Content</NavLink>
                            </li>

                        </ul>}

                    </div>
                    <li>
                        <NavLink to='/about' onClick={() => { combined()}}  >ABOUT</NavLink>
                    </li>
                    <li>
                        <NavLink to='/contact' onClick={() => { combined()}} >CONTACT</NavLink>
                    </li>

                </ul>
            </div>
            {/* for responsive in mobiel */}
            <div className='mobile'>
                <i className={(Mobile ? "fa-solid fa-x" : "fa-solid fa-bars")} onClick={() => handleMobile()}></i>
                {/* <i class= "fa-solid fa-bars" ></i>
                <i class="fa-solid fa-x"></i> */}
            </div>

        </Wrapper>
    )
}

export default Navbar
const Wrapper = styled.section`
/* border:1px solid red; */
/* z-index: 9999; */

ul{
    display: flex;
    /* justify-content: space-evenly; */
    align-items: center;
    gap: 3.8rem;
}
ul li {
    list-style: none;
    padding: 0.75em 1.5em;
}
ul li a{
    
    text-decoration: none;
    /* font-size: 2rem; */
    font-size: 1.6rem;
    line-height: 1.5;
    /* font-weight: 600; */
    /* text-transform: uppercase; */
    display: inline-block;
    color: #575757;
    transition: 0.2s ease-in-out;
    position: relative;
}
ul li a:hover,
ul li a.active{
    color: #04bf7e;
}
/* .active{
    color: #04bf7e;
} */

ul li a:hover::after,
ul li a.active::after{
    content: "";
    background-color: #04bf7e;
    height: 2px;
    width: 90%;
    position: absolute;
    top: 2rem;
    left: .25rem;
}

/* DROPDOWN  */
/* hover on service section  */

.li-on-hover{
    position: relative;
}
.dropdown{
    display: inline-block;

}
.hover-ul{
    /* border: 1px solid red; */
    position: fixed;
    /* position: absolute; */
    /* overflow: auto; */
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2.5rem;
    font-size: 1.5rem;
    font-weight: 400;
    text-decoration: none;
    background-color: #EDEFF2;
    box-shadow: 0 10px 30px 0 rgba(17,59,81,.2);
    color: #575757;
    box-sizing: border-box;
    padding: 3rem 15rem 3rem 7rem;
    transform: translateX(-1rem);
    /* margin-top: 1rem; */
    /* transform: tra; */
    /* visibility: hidden; */
    /* opacity: 0; */
    /* min-width: 220px; */
    /* max-width: 80rem; */
    z-index: 999;
    transition: 0.3s ease-in-out;
}
.li-on-hover i{
    position: sticky;
    top: .45rem;
}
.hover-ul li{
    padding: 0;
}
/* .dropdown:hover .hover-ul {
    transform: translate3d(0px, 0px, 0px);
    visibility: visible;
    opacity: 1;
    transition: all .3s ease-in-out;
} */
/* .li-on-hover:focus .hover-ul {
    transform: translate3d(0px, 0px, 0px);
    visibility: visible;
    opacity: 1;
    transition: all .2s ease-in-out;
} */





/* responsive mobiel */

.mobile {
    display: none;
}

.mobile i{
    font-size: 4rem;
    align-items: center;
    color: rgb(87 87 87);
    cursor: pointer;
}
@media (max-width:768px) {
    html{
        font-size: 50%;
    }
    ul{
    /* border:1px solid red; */
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 4.8rem;
    padding-top: 3rem;
    padding-left: 2rem;
    position: fixed;
    background-color: white;
    box-shadow: 0 0 10px 0 rgba(0,0,0,.11)!important;
    top: 11.8rem;
    right: -30rem;
    width: 30rem;
    height: 100vh;
    transition: 0.3s ease-in-out;
    
}  
.action{
right: 0px;
}
.mobile{
    display: inline-block;
    position: fixed;
    top: 3.8rem;
    right: 5rem;
}

/* service ke inside option  */
.hover-ul{
    /* border: 1px solid red; */
    /* position: fi; */
    position: sticky;
    /* width: 200rem; */
    height: auto;
    top: 27rem;
    right: -1rem;
    left: 1rem;
    /* width: 100%; */
    /* overflow: auto; */
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5rem;
    font-size: 1.5rem;
    font-weight: 400;
    text-decoration: none;
    background-color: #EDEFF2;
    box-shadow: 0 10px 30px 0 rgba(17,59,81,.2);
    color: #575757;
    box-sizing: border-box;
    padding: 2rem 0rem 2rem 3rem;
    transform: translateX(-1rem);
    margin-top: 0rem;
    /* transition: 0.3s ease-in-out;  */
    /* transform: tra; */
    /* visibility: hidden; */
    /* opacity: 0; */
    /* min-width: 220px; */
    /* max-width: 80rem; */
}
}

`;