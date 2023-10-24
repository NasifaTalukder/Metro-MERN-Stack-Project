import React from 'react'
import Background from "../../assets/ErrorPagePic/404bg.jpg"
import ErrorPic from "../../assets/ErrorPagePic/404.png"
import { Link } from 'react-router-dom';
import "../../App.css"

const ErrorSec = () => {
  return (
   <>
         <div className='ErorBg'>
            {/* <img src={Background} alt="" className='w-full h-[830px] bg-fixed bg-center bg-no-repeat  bg-cover'/> */}
          </div>
          <div className='w-full h-[830px] bg-black absolute z-50 top-24 opacity-60 bg-no-repeat bg'>             
          </div>
          <div className='w-[1310px] m-auto'>
            <div>
                <div>
                    <img src={ErrorPic} alt="" className='z-[1000] absolute top-[380px] ml-[410px] '/>
                </div>
                 <h1 className='text-6xl font-medium absolute z-[1000] top-[620px] text-white ml-[300px]'>OPS! Under Construction</h1>
                <p className='text-lg font-medium absolute z-[1000] top-[700px] text-white ml-[440px]'>Try going to Home Page by using the button below.</p>
                <div className='absolute z-[1000] top-[780px] text-white ml-[530px]'>
                    <button className='text-lg font-bold font-sans pl-10 pr-10 pt-3 pb-3 border border-white rounded hover:bg-white hover:text-black'><Link to="/App">Go To Home Page</Link></button>
                </div>               
               </div>
            </div>
   </>
  )
}

export default ErrorSec
