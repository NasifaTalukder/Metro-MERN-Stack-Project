import React from 'react'
import Watch from "../../assets/./HomePagePic/p_4-1-360x432.jpg"

const WatchComp = () => {
  return (
    <>
      <div className='WatchImg'>
          <div>          
              <img src={Watch} alt="" className='relative  w-[308px] rounded'/>
            </div>
            <div className='WatchPrice absolute z-[1000] mt-[-60px] ml-6'>
              <h2 className='text-lg font-semibold'>$160.00</h2>
              </div>
               <p className='absolute text-slate-400 font-semibold mt-[-30px] ml-6'>Hobbyist Watch</p>
               <p className='WatchAdd absolute z-[1000] mt-[-60px] ml-6 text-black font-bold font-sans text-sm'>ADD TO CART</p>
            </div>
    </>
  )
}

export default WatchComp
