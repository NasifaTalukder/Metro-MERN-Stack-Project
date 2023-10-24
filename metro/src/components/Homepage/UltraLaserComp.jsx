import React from 'react'
import ultraLense from "../../assets/./HomePagePic/l-360x432.jpg"

const UltraLaserComp = () => {
  return (
    <>
      <div className='laserImg'>
            <div>
              <p className='pl-2 pr-2 rounded bg-black text-white absolute z-[1000] mt-5 ml-6'>-4%</p>
            </div>
            <div>           
              <img src={ultraLense} alt="" className='relative  w-[308px] rounded'/>
            </div>
            <div className='laserPrice absolute z-[1000] mt-[-60px] ml-6'>
              <h2 className='text-xl font-semibold'>$630.00</h2>
              </div>
            <p className='absolute text-slate-400 font-semibold mt-[-30px] ml-6'>Ultra Lense</p>
            <p className='laserAdd absolute z-[1000] mt-[-60px] ml-6 text-black font-bold font-sans text-sm'>BUY FROM AMAZON</p>
            </div>
    </>
  )
}

export default UltraLaserComp
