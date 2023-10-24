import React, { useState } from 'react'
import {Auth} from "./Firebase";
import {signInWithEmailAndPassword} from "firebase/auth"

const LoginSec = () => {

  const [user,setUser]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  const userHandle=(e)=>{
    setUser(e.target.value);

  }
  const emailHandle=(e)=>{
    setEmail(e.target.value);

  }
  const passwordHandle=(e)=>{
    setPassword(e.target.value);
  }

  const submitHandle =(e)=>{
    e.preventDefault();
    signInWithEmailAndPassword(Auth,email,password)
    .then((userCred) =>{
       const userPeople = userCred.userPeople;
       console.log(userPeople);
      })
    .catch((error)=>{
      console.log(error)
    }) 
  }

  return (
    <>
    <div>
                   <h1 className='text-3xl font-semibold'>Login</h1>
                   <div className='w-[620px] h-[420px] border-2 border-slate-200 p-5 rounded mt-7'>
                    <form onSubmit={submitHandle}>
                    <div>
                    <label className='text-base font-sans font-semibold text-slate-600'>Username or email address *</label>
                    <input type="email" value={email} onChange={emailHandle} required className='w-full p-3 outline-0 bg-slate-100 mt-3'/>
                    </div>
                    <div className='mt-4'>
                    <label className='text-base font-sans font-semibold text-slate-600'>Password *</label>
                    <input type="password" value={password} onChange={passwordHandle} required className='w-full p-3 outline-0 bg-slate-100 mt-3'/>
                    </div>
                    <div className='mt-5 flex flex-wrap space-x-1'>
                        <input type="checkbox" name="" id="" />
                       <label htmlFor="" className='text-base font-sans font-semibold text-slate-600'>Remember me</label> 
                    </div>
                    <div className='mt-6'>
                        <button onClick={submitHandle} className='font-sans text-white bg-black pl-10 pr-10 pt-3 pb-3 rounded font-semibold'>LOG IN</button>
                    </div>
                    <div className='mt-5'>
                        <p className='text-lg font-sans text-slate-600'>Lost your password?</p>
                    </div>
                    </form>
                   </div>
                </div>
    </>
  )
}

export default LoginSec
