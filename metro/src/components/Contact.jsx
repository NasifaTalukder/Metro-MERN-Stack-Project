import React from 'react'
import MenuSec from './Homepage/MenuSec'
import ContactSec from './ContactPage/ContactSec'
import MapSec from "./ContactPage/MapSec"
import ContactInfoSec from './ContactPage/ContactInfoSec'
import ContactFrom from './ContactPage/ContactFrom'
import AddessSec from './Homepage/AddessSec';
import InformationSec from './Homepage/InformationSec';
import MyAccountSec from './Homepage/MyAccountSec';
import HelpandSupSec from './Homepage/HelpandSupSec';
import CopyRightSec from './Homepage/CopyRightSec';
import SocialIcons from './Homepage/SocialIcons';
import PaymentMethod from './Homepage/PaymentMethod'



const Contact = () => {
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
        {/* ------------Contact Hero Section---------    */}
        <ContactSec/>       
        </div>

        <div className='flex flex-wrap'>
           {/* -------------Map Section---------- */}
           <MapSec/>
           {/* -------------Contact Information Sec----- */}
           <ContactInfoSec/>
        </div>
        <div className='bg-slate-100 h-[900px] pt-24'>
            <div className='w-[1300px] m-auto'>
             {/* -------------Contact Form Section-----------  */}
              <ContactFrom/>       
            </div>
        </div>

        {/* ---------Page Bottom Section------------- */}
        <div className='w-full h-[570px] bg-[#111111]'>
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

export {Contact} 
