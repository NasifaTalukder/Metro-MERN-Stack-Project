import React from 'react'
import LeshangerLight from "../../assets/./HomePagePic/443.png";


const LedComp = () => {
  return (
    <>
    <div className='w-[640px] h-[330px] bg-slate-100 rounded-sm  backDiv'>
        <div className='pt-10 ml-10'>
          <h1 className='text-2xl font-semibold'>LED HANGER LIGHT</h1>
          <p className='text-lg font-medium mt-1'>Trending 2019</p>
          <span className='SpanBorder w-8 h-[2px] block bg-black mt-2 rounded-sm'></span>
          </div>
          <div className='imgHoverDiv'>
            <img src={LeshangerLight} alt="" className='w-[436px] h-[200px] m-auto'/>
          </div>       
        </div>
    </>
  )
}

export default LedComp

