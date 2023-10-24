import React from 'react'
import GameController from "../../assets/./HomePagePic/vr.jpg";

const GameControllerSec = () => {
  return (
   <>
   <div className='GameControllerImg'>            
          <div>
              <p className='pl-2 pr-2 rounded bg-black text-white absolute z-[1000] mt-5 ml-6'>-4%</p>
            </div>
            <div className=''>           
              <img src={GameController} alt="" className='relative rounded'/>
            </div>
            <div className='GameContollerPrice flex flex-wrap absolute z-[1000] mt-[-60px] space-x-3 ml-6'>
              <p className='text-lg text-slate-400 font-semibold'><del>$390.00</del></p>
              <h2 className='text-xl font-semibold'>$375.00</h2>
            </div>
            <p className='absolute z-[1000] mt-[-30px] ml-6 text-slate-400 font-semibold'>Game Controller</p>
            <p className='GameAdd absolute z-[1000] mt-[-60px] ml-6 text-black font-bold font-sans text-sm'>ADD TO CART</p>
          </div>
   </>
  )
}

export default GameControllerSec
