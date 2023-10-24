import React from 'react'

const SizeSec = () => {
  return (
    <>
    <h1 className='text-xl font-semibold'>Size</h1>
            <div className='space-x-2 mt-5 cursor-pointer'>
              <button className='pl-2 pr-2 pt-[6px] pb-1 bg-white rounded border border-slate-400 hover:border-black'>L</button>
              <button className='pl-2 pr-2 pt-[6px] pb-1 bg-white rounded border border-slate-400 hover:border-black'>S</button>
              <button className='pl-2 pr-2 pt-[6px] pb-1 bg-white rounded border border-slate-400 hover:border-black'>M</button>
            </div>
    </>
  )
}

export default SizeSec
