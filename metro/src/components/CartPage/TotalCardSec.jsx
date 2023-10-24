import React from 'react'
import KeyboardDoubleArrowRightOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowRightOutlined';

const TotalCardSec = () => {
  return (
   <>
     <div className='w-[650px] bg-white h-80'>

</div>
<div className='w-[600px]'>
    <h1 className='text-3xl font-semibold'>Cart totals</h1>
    <div className='flex flex-wrap space-x-40 mt-14'>
        <p className='font-sans font-semibold text-lg text-slate-500'>Subtotal</p>
        <p className='text-xl font-sans'>$160.00</p>
    </div>
    <hr className='mt-4'/>
    <div className='flex flex-wrap space-x-48 mt-5'>
        <p className='font-sans font-semibold text-lg text-slate-500'>Total</p>
        <p className='text-xl font-sans font-bold'>$160.00</p>
    </div>
    <div className='mt-12'>
        <button className='pt-4 pb-4 pl-[185px] pr-[185px] bg-black text-white font-semibold rounded'>
            PROCEED TO CHECKOUT<KeyboardDoubleArrowRightOutlinedIcon fontSize='small' className='-mt-1'/>
        </button>
    </div>
</div>
   </>
  )
}

export default TotalCardSec
