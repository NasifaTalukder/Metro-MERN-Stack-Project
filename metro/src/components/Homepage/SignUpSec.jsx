import React from 'react'

const SignUpSec = () => {
  return (
    <>
    <div className='text-center pt-28'>
          <div>
          <h1 className='text-3xl font-semibold'>Signup Newsletter!</h1>
          <p className='font-normal text-slate-600 mt-3 font-sans'> It only takes a second to be the first to find out about our latest news</p>
          </div>
          <div className='mt-8 font-sans flex flex-wrap space-x-1 ml-[300px]'>
            <input type="email" name="" id="" placeholder='Your email address' className='pl-6 pr-[338px] pt-4 pb-4  rounded'/>
            <div>
              <button type='submit' className='pl-10 pr-10 pt-4 pb-4 bg-black text-white font-bold font-sans rounded'>Submit</button>
            </div>
          </div>
          </div>  
    </>
  )
}

export default SignUpSec
