import React from 'react'
import '../App.css';
import MenuSec from './Homepage/MenuSec';
import ShopSec from './ShopPage/ShopSec';
import ProductHead from './ShopPage/ProductHead';
import ProductOneSec from './ShopPage/ProductOneSec'
import ProductTwoSec from './ShopPage/ProductTwoSec'
import ProductTreSec from './ShopPage/ProductTreSec'
import ProductFourSec from './ShopPage/ProductFourSec'
import ProductFiveSec from './ShopPage/ProductFiveSec'
import ProductSixSec from './ShopPage/ProductSixSec'
import ProductSevenSec from './ShopPage/ProductSevenSec';
import ProductEightSec from './ShopPage/ProductEightSec';
import ProductNineSec from './ShopPage/ProductNineSec';
import CategoryListSec from './ShopPage/CategoryListSec';
import ColorsSec from "./ShopPage/ColorsSec";
import SizeSec from "./ShopPage/SizeSec";
import PriceSec from "./ShopPage/PriceSec"
import AddessSec from './Homepage/AddessSec';
import InformationSec from './Homepage/InformationSec';
import MyAccountSec from './Homepage/MyAccountSec';
import HelpandSupSec from './Homepage/HelpandSupSec';
import CopyRightSec from './Homepage/CopyRightSec';
import SocialIcons from './Homepage/SocialIcons';
import PaymentMethod from './Homepage/PaymentMethod'



const Shop = () => {
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
        {/* ------------Shop Hero Section---------    */}
        <ShopSec/>
        </div>
     <div className='w-[1310px] m-auto'>
        <div className='mt-20'>
           {/* -----------ProductHead Section------- */}
           <ProductHead/>
            <div className='flex flex-wrap space-x-11'>
            <div className='h-[1400px]'>
            <div className='flex flex-wrap space-x-6 mt-14 cursor-pointer'>
            {/* ------------Product one-------- */}
            <ProductOneSec/>
             {/* ------------Product Two-------- */}
             <ProductTwoSec/>
            {/* ------------Product Three-------- */}
             <ProductTreSec/>
           </div>

           <div className='flex flex-wrap space-x-6 mt-5 cursor-pointer'>
            {/* ------------Product Four-------- */}
            <ProductFourSec/>
            {/* ------------Product Five-------- */}
            <ProductFiveSec/>
             {/* ------------Product Six-------- */}
             <ProductSixSec/>
           </div>

           <div className='flex flex-wrap space-x-6 mt-5 cursor-pointer'>
          {/* ------------Product Seven-------- */}
          <ProductSevenSec/>
            {/* ------------Product Eight-------- */}
            <ProductEightSec/>
             {/* ------------Product Nine-------- */}
            <ProductNineSec/>
           </div>
           </div>

           <div className='-mt-10'>
            <div>
                <h1 className='text-xl font-semibold'>Categories</h1>
            </div>
            <div>
               {/* -----------Shop Category List------- */}
               <CategoryListSec/>
            </div>
            <div className='mt-10'>
             {/* -----------Colors--------- */}
             <ColorsSec/>
            </div>            
            <div className='mt-10'>
            {/* ---------------Size------------ */}
            <SizeSec/>
            </div>

            <div className='mt-10'>
              {/* -------------Price----------------- */}
              <PriceSec/>
            </div>          

           </div>
            
        </div>
        </div>
        <div className='mt-20 ml-[425px]'>
          <button className='pl-5 pr-5 pt-2 pb-2 rounded bg-black text-white font-sans font-medium hover:opacity-70'>Load More</button>
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

export default Shop
