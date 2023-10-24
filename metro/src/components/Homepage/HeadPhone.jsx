import React from 'react'
import HeadPhone from "../../assets/./HomePagePic/444.png";

const headPhone = () => {
  return (
    <>
    <div className='w-[640px] h-[330px] bg-slate-100 rounded-sm HeadDiv'> 
        <div className='flex flex-wrap space-x-20'>
        <div className='HeadPhoneImg pt-3 overflow-hidden '>
            <img src={HeadPhone} alt="" className='w-[300px] ml-20'/>
          </div>   
          <div className='pt-56'>
          <h1 className='text-2xl font-semibold'>HEADPHONE</h1>
          <p className='text-lg font-medium mt-1'>Collection 2019</p>
          <span className='HeadSpanBorder w-8 h-[2px] bg-black block mt-2 rounded-sm '></span>
          </div> 
          </div>                 
        </div>
    </>
  )
}

export default headPhone
