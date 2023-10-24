import React from 'react'
import cardHeadphone from "../../assets/./HomePagePic/p_5-111-360x432.jpg";

const HeadPhoneComp = () => {
  return (
   <>
     <div className='HeadPhoneImg'>
            <div>
              <p className='pl-2 pr-2 rounded bg-black text-white absolute z-[1000] mt-5 ml-6'>-4%</p>
            </div>
            <div>           
              <img src={cardHeadphone} alt="" className='relative  w-[308px] rounded'/>
            </div>
            <div className='HeadPhonePrice absolute z-[1000] mt-[-60px] ml-6'>
              <h2 className='text-xl font-semibold'>$35.00</h2>
              </div>
            <p className='absolute text-slate-400 font-semibold mt-[-30px] ml-6'>Headphone</p>
            <p className='HeadPhoneAdd absolute z-[1000] mt-[-60px] ml-6 text-black font-bold font-sans text-sm'>ADD TO CART</p>

          
            </div>
   </>
  )
}

export default HeadPhoneComp
