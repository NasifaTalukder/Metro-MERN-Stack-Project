import React, { useState } from 'react'

const ContactFrom = () => {

  let dataStore={
    name:"",
    email:"",
    subject:"",
    phone:"",
    message:""
}
let[data,setData]=useState(dataStore);
// let[show,setShow]=useState("");

const FormHandle=(event)=>{
  setData({...data,[event.target.name]:event.target.value})
  // console.log(data)
}
const SubmitHandle= async(e)=>{
  e.preventDefault();
  // setShow(data)
  let Data= fetch("https://metro-website-2d893-default-rtdb.firebaseio.com/userData.json",
  {
    method:"POST",
    headers:{
      "Content-Type":"application/json",
    },
    body:JSON.stringify({
      data
    })
  })
  console.log(Data)
}

  return ( 
    <>
      <div>
                <div className='bg-white h-[690px] rounded pl-14 pr-14'>
                    <h1 className='text-3xl font-semibold text-center pt-20'>Send Us a Message</h1>
                    <form action="">
                    <div className='flex space-x-7 mt-10'>
                        <input 
                        id='input'
                        type="text" 
                        placeholder='Name *'
                         name='name' 
                         onChange={FormHandle} 
                         autoComplete='off'
                         required 
                         className='pt-[6px] pb-[6px] pl-4 pr-[380px] outline-0 border border-slate-300 rounded font-sans text-slate-700'/>
                        <input 
                        id='input'
                        type="text"
                         placeholder='Email *'
                         name='email' 
                         onChange={FormHandle} 
                         autoComplete='off'
                         required 
                         className=' pt-[6px] pb-[6px] pl-4 pr-[380px]  outline-0 border border-slate-300 rounded font-sans text-slate-700'/>
                    </div>
                    <div className='flex space-x-7 mt-5'>
                        <input 
                        id='input' 
                        type="text" 
                        placeholder='Subject *'
                        name='subject' 
                        onChange={FormHandle} 
                        autoComplete='off'
                        required 
                        className='pt-[6px] pb-[6px] pl-4 pr-[380px] outline-0 border border-slate-300 rounded font-sans text-slate-700'/>
                        <input 
                        id='input'
                        type="number" 
                        placeholder='Phone *' 
                        name='phone' 
                        onChange={FormHandle} 
                        autoComplete='off'
                        required 
                        className='pt-[6px] pb-[6px] pl-4 pr-[380px]  outline-0 border border-slate-300 rounded font-sans text-slate-700'/>
                    </div>
                    <div>
                        <input 
                        id='input'
                        type="text" 
                        placeholder='Message *' 
                        name='message'
                        onChange={FormHandle} 
                        autoComplete='off'
                        required 
                        className='pt-[6px] pb-56 pl-4 pr-[990px]  outline-0 border border-slate-300 rounded font-sans text-slate-700 mt-5' />
                    </div>
                    <div className='mt-10 text-center'>
                        <button type='submit' onClick={SubmitHandle} className='pt-3 pb-3 pl-7 pr-7 text-white bg-black font-sans font-semibold rounded '>Submit</button>
                    </div>
                    </form>
                </div>
                </div>
    </>
  )
}

export default ContactFrom
