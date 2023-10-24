import React from 'react'
import MenuSec from './Homepage/MenuSec';
import ChechOutSec from './CheckOutPage/ChechOutSec';
import AddessSec from './Homepage/AddessSec';
import InformationSec from './Homepage/InformationSec';
import MyAccountSec from './Homepage/MyAccountSec';
import HelpandSupSec from './Homepage/HelpandSupSec';
import CopyRightSec from './Homepage/CopyRightSec';
import SocialIcons from './Homepage/SocialIcons';
import PaymentMethod from './Homepage/PaymentMethod'

const CheckOut = () => {
  return (
    <>
      <div className='w-full font-[Josefin Sans, sans-serif] p-0 m-0 bg-white'>
       <div className='w-[1300px] m-auto'>
        <div className='h-24 bg-white'>
       {/* ------------Menu Section--------- */}
       <MenuSec/>
       </div>
       </div>
       <div>
        {/* ------------CheckOut Hero Section---------    */}
        <ChechOutSec/>       
        </div>
        <div className='w-[1300px] m-auto'>
            <div className='mt-24 h-10'>
                <h1 className='font-sans text-[17px] text-slate-500'>You must be logged in to checkout.</h1>
            </div>
        </div>

       {/* ---------Page Bottom Section------------- */}
       <div className='w-full h-[570px] bg-[#111111] mt-20'>
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

export {CheckOut}
