import React from 'react'
import '../src/css/Login.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link, useNavigate} from 'react-router-dom'
import { useSelector } from 'react-redux';
import { useState } from 'react';



function Login(){

  const[username,setUsername]=useState('');
  const[password,setPassword]=useState('')

  let checkUsername=useSelector(state=>state.counter.email)
  let checkPassword=useSelector(state=>state.counter.password)
  const navigate=useNavigate();

  const usernameHandle=(e)=>{
    setUsername(e.target.value)
  }
  const passwordHandle=(e)=>{
    setPassword(e.target.value)
  }
  const submit=()=>{
    if(username==checkUsername && password==checkPassword){
      alert('logged in')
      navigate('/HomePage')
    }
    else{
      alert('some error')
    }
  }
    return(
        <>
           
      <h2 className='mt-3'>Welcome To Real Time Weather Forecasting App</h2>

    <div className='mx-auto ps-2 pe-5 py-5 mt-5' id='page'>
      

    <input type='email' className='form-control mx-3 mt-4 mb-4 border-0 border-bottom shadow ' placeholder='Username' onChange={usernameHandle} />
    <input type='password' className='form-control mx-3 border-0 border-bottom shadow' placeholder='Password' onChange={passwordHandle} />
    <button type="button" className="btn btn-primary my-4" onClick={submit} >Submit</button>

        <p className='text-white mx-5 mt-5'>Create a new account ? <span className='text-primary'><Link to='/signUp'>Sign Up</Link></span></p>
    </div>
        </>
    );
}
export default Login;