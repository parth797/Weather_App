import { useState } from "react";
import {useDispatch} from 'react-redux'
import { setName1,setSurname1,setemail1,setPassword1,setAddress1 } from "./counterSlice";
import { useNavigate } from "react-router-dom";

function signUp(){

    const rejexname = /^[A-Za-z]+$/;
    const rejexemail= /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    const [name,setName]=useState('');
    const[surname,setSurname]=useState('');
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const[address,setAddress]=useState('');
    
    const dispatch=useDispatch();
    const navigate=useNavigate();

    const nameHandle=(e)=>{
        setName(e.target.value)
    }
    const surnameHandle=(e)=>{
        setSurname(e.target.value)
    }
    const emailHandle=(e)=>{
        setEmail(e.target.value)
    }
    const passwordHandle=(e)=>{
        setPassword(e.target.value)
    }
    const addressHandle=(e)=>{
        setAddress(e.target.value)
    }
    const submit=()=>{
        dispatch(setName1(name)),
        dispatch(setSurname1(surname)),
        dispatch(setemail1(email)),
        dispatch(setPassword1(password)),
        dispatch(setAddress1(address))
        

        if(rejexname.test(name))
            { 
                if(rejexemail.test(email))
                    {
                       
                        alert("User Added Successfully");
                        navigate("/");
                    }
                else{
                    alert("Invalid Email")
                }
                
            }
            else
            {
                alert("Invalid Name")
            }
    }

    return(
        <>
           <div className="mx-auto " style={{width:'320px'}}>
           <input type='text' className='form-control mt-5 mb-3  border-0 border-bottom ' placeholder='Enter Name' onChange={nameHandle} />
            <input type='text' className='form-control my-3  border-0 border-bottom ' placeholder='Enter Surname' onChange={surnameHandle}/>
            <input type='email' className='form-control my-3  border-0 border-bottom ' placeholder='Enter Email' onChange={emailHandle} />
            <input type='password' className='form-control my-3 border-0 border-bottom ' placeholder='Create a Password' onChange={passwordHandle} />
            <input type='text' className='form-control my-3 border-0 border-bottom ' placeholder='Address' onChange={addressHandle} />

            <button type="button" className="btn btn-primary mt-4" onClick={submit}>Submit</button>
           </div>

        </>
    );
}
export default signUp;