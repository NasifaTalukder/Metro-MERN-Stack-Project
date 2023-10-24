import React from 'react'
import Gadgets from "../../assets/./HomePagePic/p_11-360x432.jpg"

const GadgetsComp = () => {
  return (
    <>
     <div className='GadgetImg'>
            <div>
              <p className='pl-2 pr-2 rounded bg-black text-white absolute z-[1000] mt-5 ml-6'>-0%</p>
            </div>
            <div>           
              <img src={Gadgets} alt="" className='relative w-[308px] rounded'/>
            </div>
            <div className='GadgetPrice flex flex-wrap absolute z-[1000] mt-[-60px] space-x-1 ml-6'>
              <p className='text-lg font-semibold'>$35.00 -</p>
              <h2 className='text-lg font-semibold'>$375.00</h2>
            </div>
            <p className='absolute z-[1000] mt-[-30px] ml-6 text-slate-400 font-semibold'>Gadgets Collection</p>
            <p className='GadgetAdd absolute z-[1000] mt-[-60px] ml-6 text-black font-bold font-sans text-sm'>VIEW PRODUCTS</p>
          </div>
    
    </>
  )
}

export default GadgetsComp
