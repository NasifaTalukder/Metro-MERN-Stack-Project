import React from 'react'
import keyBoard from "../../assets/./HomePagePic/Keyboard.jpg"

const KeyboardComp = ({data}) => {
  return (
    <>
     <div className='KeyBoardImg'>
            <div>
              <p className='pl-2 pr-2 rounded bg-black text-white absolute z-[1000] mt-5 ml-6'>-4%</p>
            </div>
            <div>           
              <img src={keyBoard} alt="" className='relative w-[308px] rounded'/>
            </div>
            <div className='KeyBoardPrice flex flex-wrap absolute z-[1000] mt-[-60px] space-x-3 ml-6'>
              <p className='text-lg text-slate-400 font-semibold'><del>{data.productPrice}</del></p>
              <h2 className='text-xl font-semibold'>{data.productDics}</h2>
            </div>
            <p className='absolute z-[1000] mt-[-30px] ml-6 text-slate-400 font-semibold'>{data.productName}</p>
            <p className='KeyBoardAdd absolute z-[1000] mt-[-60px] ml-6 text-black font-bold font-sans text-sm'>{data.productType}</p>
          </div>
    </>
  )
}

export default KeyboardComp
