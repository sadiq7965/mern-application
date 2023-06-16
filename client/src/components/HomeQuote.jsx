import React, { useState } from 'react'
import styled from 'styled-components'
import Axios from 'axios';

const HomeQuote = () => {

    const [domain, setDomain] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [checkbox, setCheckbox] = useState(true)
    // in below function we fetch data and send it to back end but data humne form mein se collect nhi kiya simply input mein se hi collect kiya h 
    // const addFriend = ()=>{
    //             Axios.post('http://localhost:3001/add',{domain:domain,email:email,}).then(()=>{alert('worked successfullly')})
    //             .catch(()=>{alert('not worked')})}


    // this function is to get data from form we stop default behaviour of form and after summition clear input value of form input
    const handle = (e) => {
        e.preventDefault();

        //check input fields validation wheater feilds are filled or empty
        // if (!domain || !email ) {
        //     alert('Please fill in all the field');
        //     // ye ruturn handle wale main function ko axios wale function tak jane hi nhi dega ishka yahi se return karne ke liye force kar dega 
        //     return;
        // }

        // Email validation using regular expression
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address');
            return;
        }
        // Phone number validation using regular expression
        const phoneRegex = /^\d{10}$/;
        if (!phoneRegex.test(phone)) {
            alert('Please enter a valid 10-digit phone number');
            return;
        }

        // submit the form 
        Axios.post('http://127.0.0.1:3001/add', { domain: domain, email: email, phone: phone, checkbox: checkbox }).then((response) => {
            // console.log(response)
            if (response.status === 200) {
                alert('Form Submitted successfully')
            }
            // else if (response.status === 400) {
            //     // alert('email already register')
            //     // email resubmit hone se to ruk gya h but error and alert manage nhi ho paya h aleert mein email alredy exist nhi mila abhi tak
            //     alert(response.data.message);
            //     return;
            // }
            // alert('Form submitted successfully')
        })
        
            // .catch((response) => {
            //     // console.log(err)
            //     alert('fail to submitted form ')
            //     if(response.status===500){
            //         alert('Fail to submit form')
            //     }
            // })
            .catch((error) => {
                
                // console.error(error);
                // alert('Failed to submit form');
                if (error.response && error.response.status === 400) {
                    alert(error.response.data.message);
                  } else {
                    alert('Internal Server Error');
                  }
            })
        // to clear form field 
        setDomain('');
        setEmail('');
        setPhone('')
    }

    return (
        <Wrapper id='service'>
            <div className='container'>
                <h2>Personalize free quote for your business</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti iusto, deserunt perferendis vitae error nobis doloribus quo nisi rem laboriosam ipsam praesentium doloremque illo ut possimus corrupti reprehenderit odio libero cupiditate dolor. Facilis placeat optio accusantium quasi modi consequatur ad?</p>
                <div className="form grid-wala-two-column">
                    <div className="form-img">
                        <img src="./image/image1.jpg" alt="" />
                    </div>

                    {/* --input k jo name h ishke according ki post request mein content filed hota h 
                           name se hi history wala input mein suggestion show karta h.
                           submit ke liye button mein nhi form mein rakhna h or onclick nhi onsubmit rakhna h form 
                           mein like <form onsubmit={handle}.
                     --in form methord action or form mein hi onsubmit lgane ki zaroorat nhi padi thi.
                     functon mein preventDefault() function bhi hoga or ye complete functionn onsubmit pr form pr hi lga raha hoga
                     --sumbittion ke bad input field ko clear karne ke liye pehle input ki value kuch eshe(value={domain}) 
                       set ki form input mein and than handle function mein state hook ko empty set kar diya kuch eshe(setDomain('') 
                     */}
                    <form
                        // to send data we dont need action and method
                        action='/add'
                        // action='/formdata'
                        onSubmit={handle}
                        method='post'

                    >
                        <div className="form-box">
                            <input className='form-control'
                                type='text'
                                name='domain'
                                placeholder='Your domain'
                                required
                                value={domain}
                                onChange={(e) => setDomain(e.target.value)}
                            />
                            <input className='form-control'
                                type='email'
                                name='email'
                                placeholder='Email'
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <input className='form-control'
                                type='text'
                                name='phone'
                                placeholder='Phone'
                                required
                                value={phone}
                                onChange={(e) =>
                                    setPhone(e.target.value)}
                            />
                            <div className='checkbox-div'>
                                <input style={{ marginTop: '3px' }}
                                    type='checkbox'
                                    name='forcheck'
                                    checked
                                    value={checkbox}
                                    required
                                    onChange={(e) => setCheckbox(e.target.checked)}
                                />
                                <label htmlFor='forcheck'>I consent to the processing of my personal data by Aldigital Marketing sp z o.o. for marketing purposes</label>
                            </div>
                            <button type='submit' className='input-btn'  >Submit</button>
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
/* border: 1px solid purple; */

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
    /* border: 1px solid purple; */
    /* max-width: 48%; */
}
.form-img img{
    max-width:70%
}
.form-box{
    /* border: 1px solid purple; */
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