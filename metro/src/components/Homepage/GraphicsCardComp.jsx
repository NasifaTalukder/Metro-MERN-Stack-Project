import React from 'react'
import GraphicsCard from "../../assets/./HomePagePic/card-360x432.jpg"

const GraphicsCardComp = () => {
  return (
    <>
      <div className='GraphicsImg'>
          <div>          
              <img src={GraphicsCard} alt="" className='relative  w-[308px] rounded'/>
            </div>
            <div className='GraphicsPrice absolute z-[1000] mt-[-60px] ml-6'>
              <h2 className='text-lg font-semibold'>$180.00</h2>
              </div>
               <p className='absolute text-slate-400 font-semibold mt-[-30px] ml-6'>Graphics Card</p>
               <p className='GraphicsAdd absolute z-[1000] mt-[-60px] ml-6 text-black font-bold font-sans text-sm'>BUY FROM AMAZON</p>
            </div>
    </>
  )
}

export default GraphicsCardComp
