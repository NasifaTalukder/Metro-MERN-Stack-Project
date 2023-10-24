import React, { useState } from 'react'
import {createUserWithEmailAndPassword , updateProfile} from "firebase/auth"
import { collection, doc, setDoc } from "firebase/firestore";
import { Auth, db } from "./Firebase";


const RegisterSec = () => {

  const [username,setUsername]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  const userHandle=(e)=>{
    setUsername(e.target.value);
  }
  const emailHandle=(e)=>{
    setEmail(e.target.value);

  }
  const passwordHandle=(e)=>{
    setPassword(e.target.value);

  }
  const submitHandle =(e)=>{
     e.preventDefault()
    createUserWithEmailAndPassword(Auth,email,password)
          .then((userCred) => {
          
      const userRef = doc(db, "users", userCred.user.uid);
        setDoc(userRef, {
             username: username,
             email: email,
        })
        .then(() => {
         console.log("User data stored in Firestore.");
        })
      .catch((error) => {
         console.log("Error storing user data in Firestore:", error);
        });
    })
    .catch((error) => {
   console.log("Error creating user:", error);
     });
    }
  return (
   <>
   <div>
                   <h1 className='text-3xl font-semibold'>Register</h1>
                   <div className='w-[620px] h-[420px] border-2 border-slate-200 p-5 rounded mt-7'>
                    <form onSubmit={submitHandle}>
                    <div>
                    <label className='text-base font-sans font-semibold text-slate-600'>Username *</label>
                    <input type="text" value={username} onChange={userHandle}className='w-full p-3 outline-0 bg-slate-100 mt-3'/>
                    </div>
                    <div className='mt-4'>
                    <label className='text-base font-sans font-semibold text-slate-600'>Email address *</label>
                    <input type="email" value={email} onChange={emailHandle} className='w-full p-3 outline-0 bg-slate-100 mt-3'/>
                    </div>
                    <div className='mt-4'>
                    <label className='text-base font-sans font-semibold text-slate-600'>Password *</label>
                    <input type="password" value={password} onChange={passwordHandle} className='w-full p-3 outline-0 bg-slate-100 mt-3'/>
                    </div>
                    
                    <div className='mt-6'>
                        <button onClick={submitHandle} className='font-sans text-white bg-black pl-12 pr-12 pt-3 pb-3 rounded font-semibold'>REGISTER</button>
                    </div>
                    </form>
                   </div>
                </div>
   </>
  )
}

export default RegisterSec

    
