import React from 'react'
import { useState } from 'react'
import {Link,useNavigate} from 'react-router-dom'

export default function Login({user}) {
    const [name,setName]=useState(' ')
    const [email,setEmail]=useState(' ')
    const navigate=useNavigate()
    const handleSubmit=async(e)=>{
        e.preventDefault();
        name===' '||email===' ' ? ('') : (setUser={name:name,email:email} && navigate('checkout') && console.log(name)) ;
    };
    return (
        <section>
            <form className='form' onSubmit={handleSubmit}>
                <h3>Login</h3>
                <div className="form-row">
                    <label htmlFor='name' className='form-label'>name</label>
                    <input type='text' className='form-input' id='name' value={name} onChange={(e)=>setName(e.target.value)}/>
                </div>
                <div className="form-row">
                    <label htmlFor='email' className='form-label'>email</label>
                    <input type='email' className='form-input' id='name' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <button type='submit' className='btn btn-block' onClick={<Link to='checkout'/>}>
                    login
                </button>
            </form>
        </section>
    )
}
