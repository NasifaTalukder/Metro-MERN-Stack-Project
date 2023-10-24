import React from 'react'

const CouponSec = () => {
  return (
   <>
     <div className='flex flex-wrap'>
                        <div>
                            <input type="text" placeholder='Coupon Code' className='pl-4 pr-16 pt-4 pb-4 font-sans border border-slate-300 outline-0 rounded-sm' />
                        </div>
                        <div>
                            <p className='font-sans text-lg mt-4'>Coupon:</p>
                            </div>
                            <div>
                            <button className='font-sans font-bold pt-5 pb-5 pl-6 pr-6 bg-black text-white rounded-r ml-1'>APPLY COUPON</button>
                        </div>
                    </div>
                    <div>
                    <button className='font-sans font-bold pt-5 pb-5 pl-8 pr-8 bg-black text-white rounded'>UPDATE CART</button>
                    </div>
   </>
  )
}

export default CouponSec
