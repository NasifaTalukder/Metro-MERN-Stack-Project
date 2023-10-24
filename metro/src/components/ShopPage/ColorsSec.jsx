import React from 'react'

const ColorsSec = () => {
  return (
   <>
    <h1 className='text-xl font-semibold'>Color</h1>
              <div className='space-x-2 mt-6 cursor-pointer'>               
                <button className='bg-white border-2 border-slate-300 rounded hover:border-black'><span className='w-4 h-4 rounded-full bg-[#111111] block'></span></button>
                <button className='bg-white border-2 border-slate-300 rounded hover:border-blue-700'><span className='w-4 h-4 rounded-full bg-blue-500 block'></span></button>
                <button className='bg-white border-2 border-slate-300 rounded hover:border-gray-600'><span className='w-4 h-4 rounded-full bg-gray-500 block'></span></button>
                <button className='bg-white border-2 border-slate-300 rounded hover:border-orange-700'><span className='w-4 h-4 rounded-full bg-orange-600 block'></span></button>
                <button className='bg-white border-2 border-slate-300 rounded hover:border-red-700'><span className='w-4 h-4 rounded-full bg-red-600 block'></span></button>
                <button className='bg-white border-2 border-slate-300 rounded hover:border-yellow-700'><span className='w-4 h-4 rounded-full bg-yellow-600 block'></span></button>
               </div>
   </>
  )
}

export default ColorsSec
