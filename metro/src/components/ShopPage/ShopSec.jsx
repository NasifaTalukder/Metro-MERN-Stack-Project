import React from 'react'
import HeroSecBack from "../../assets/ShopPagePic/banner.jpg"
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import {
  Link,
} from "react-router-dom";

const ShopSec = () => {
  return (
    <>
    <div>
            <img src={HeroSecBack} alt="" className='w-full h-[350px] relative' />
        </div>
        <div className='w-[1310px] m-auto'>
        <div className='absolute top-56 '>
        <h1 className='text-4xl font-semibold ml-[610px]'>Shop</h1>
        <div className='flex flex-wrap mt-5 ml-[600px]'>
        <li className='list-none text-slate-500 font-sans'><Link to="/">Home<KeyboardArrowRightIcon fontSize='small'/></Link></li>
        <p className='font-sans'>Shop</p>
        </div>  
        </div>
        </div>  
    </>
  )
}

export default ShopSec
