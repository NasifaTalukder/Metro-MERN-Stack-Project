import React from 'react'
import MenuSec from './Homepage/MenuSec';
import AccountSec from './AccountPage/AccountSec';
import LoginSec from './AccountPage/LoginSec';
import RegisterSec from './AccountPage/RegisterSec';
import AddessSec from './Homepage/AddessSec';
import InformationSec from './Homepage/InformationSec';
import MyAccountSec from './Homepage/MyAccountSec';
import HelpandSupSec from './Homepage/HelpandSupSec';
import CopyRightSec from './Homepage/CopyRightSec';
import SocialIcons from './Homepage/SocialIcons';
import PaymentMethod from './Homepage/PaymentMethod'

const Account = () => {
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
        {/* ------------Account Hero Section---------    */}
          <AccountSec/>
        </div>

        <div className='w-[1300px] m-auto'>
          <div className='h-[550px]'>   
            <div className='mt-24 flex flex-wrap space-x-14'>
                {/* -----------Login Section------------- */}
                <LoginSec/>
                 {/* -----------Register Section------------- */}
                <RegisterSec/>              
            </div>
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

export{ Account};
