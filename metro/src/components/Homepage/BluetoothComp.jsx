import React from 'react'
import Bluetoth from "../../assets/./HomePagePic/electronics_2-360x432.jpg"

const BluetoothComp = () => {
  return (
    <>
      <div className='BluetoothImg'>
          <div>          
              <img src={Bluetoth} alt="" className='relative  w-[308px] rounded'/>
            </div>
            <div className='BluetoothPrice absolute z-[1000] mt-[-60px] ml-6'>
              <h2 className='text-lg font-semibold'>$90.00</h2>
              </div>
               <p className='absolute text-slate-400 font-semibold mt-[-30px] ml-6'>Bluetooth</p>
               <p className='BluetoothAdd absolute z-[1000] mt-[-60px] ml-6 text-black font-bold font-sans text-sm'>BUY FROM AMAZON</p>
            </div>
    </>
  )
}

export default BluetoothComp
