import React from 'react'
import MenuSec from './Homepage/MenuSec'
import CartSec from './CartPage/CartSec'
import Productprice from './CartPage/Productprice';
import CouponSec from './CartPage/CouponSec';
import PRoductPriceHead from './CartPage/PRoductPriceHead';
import TotalCardSec from './CartPage/TotalCardSec';
import AddessSec from './Homepage/AddessSec';
import InformationSec from './Homepage/InformationSec';
import MyAccountSec from './Homepage/MyAccountSec';
import HelpandSupSec from './Homepage/HelpandSupSec';
import CopyRightSec from './Homepage/CopyRightSec';
import SocialIcons from './Homepage/SocialIcons';
import PaymentMethod from './Homepage/PaymentMethod'


const Cart = () => {
  return (
   <>
    <div className='w-full h-[4000px] font-[Josefin Sans, sans-serif] p-0 m-0 bg-white'>
       <div className='w-[1300px] m-auto'>
        <div className='h-24 bg-white'>
       {/* ------------Menu Section--------- */}
       <MenuSec/>
       </div>
       </div>
       <div>
        {/* ------------Cart Hero Section---------    */}
        <CartSec/>       
        </div>
        <div>
            <div className='w-[1300px] m-auto'>
                <div className='w-full h-12 bg-slate-100 p-3 flex flex-wrap justify-around mt-20'>
                    {/* -----------product Price Heading-------- */}
                    <PRoductPriceHead/>
                </div>

                <div className='flex flex-wrap mt-10'>
                 {/* ---------Product Price Section--------- */}
                 <Productprice/>
                </div>
                <hr className='mt-8'/>
                <div className='flex flex-wrap mt-14 justify-between'>
                  {/* ----------Coupon Section------------- */}
                  <CouponSec/>
                </div>
                 

                 <div className='mt-20 flex flex-wrap space-x-12'>
                  {/* -----------Total Cart Section----------- */}
                  <TotalCardSec/>
                 </div>
            </div>
        </div>

        {/* ---------Page Bottom Section------------- */}
        <div className='w-full h-[570px] bg-[#111111] mt-16'>
        <div className='w-[1310px] m-auto'>
          <div className='pt-20 flex flex-wrap'>
           {/* ------------Metro Addess Section---------- */}
           <AddessSec/>
           {/* -------------------Information section---------- */}
           <InformationSec/>
           {/* -------------------My Account section---------- */}
           <MyAccountSec/>
           {/* -------------------Help & support scetion section---------- */}
           <HelpandSupSec/>
          </div>
        </div>
        <hr className='mt-16' />

        <div className='w-[1310px] m-auto'>
          <div className='pt-14 flex flex-wrap'>
           {/* --------Copy Right----------- */}
          <CopyRightSec/>
            {/* --------Social Icons--------- */}
          <SocialIcons/>
            {/* --------Payment Method Section--------- */}
          <PaymentMethod/>
          </div>
        </div>
        </div>


       </div>
   </>
  )
}

export {Cart}
