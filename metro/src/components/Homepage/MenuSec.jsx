import React, { useEffect } from 'react';
import darkLogo from "../../assets/./HomePagePic/logo-dark.png";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import {
  Link,
} from "react-router-dom";
import { getProduct} from '../../helper/helper';


const MenuSec = () => {
// --------Data show when OnClick on My Account Route----
//   const dataShowHandler = async () => {
//     let DbShow=await getProduct();
//     console.log(DbShow.products);
//    };
// useEffect(()=>{
//   dataShowHandler();
// },[]);
  return (
    <>
     <div className='flex flex-wrap justify-between pt-5 overflow-hidden'>
          <div className=''>
            <img src={darkLogo} alt="" className='w-[130px]'/>
          </div>
          <div>
            <div className='ml-[150px]'>
              <ul className='flex flex-wrap space-x-2 text-medium font-medium  mt-3'>
                <li><Link to="/">Home<KeyboardArrowDownIcon fontSize='small'/></Link></li>
                <li><Link to="/Shop">Shop<KeyboardArrowDownIcon fontSize='small'/></Link></li>
                <li><Link to="/dashboard">Cart<KeyboardArrowDownIcon fontSize='small'/></Link></li>
                <li><Link to="/CheckOut">Checkout<KeyboardArrowDownIcon fontSize='small'/></Link></li>
                <li><Link to="/404">Error<KeyboardArrowDownIcon fontSize='small'/></Link></li>
                <li><Link to="/My Account">My Account<KeyboardArrowDownIcon fontSize='small'/></Link></li>
                <li><Link to="/Contact">Contact</Link></li>
              </ul>
            </div>
            </div>
            <div className='flex flex-wrap space-x-3 mt-2 ml-28 font-sans cursor-pointer'>
            <SearchIcon fontSize='large'/>
            <PersonOutlineIcon fontSize='large'/>
            <FavoriteBorderIcon fontSize='large'/>            
            <ShoppingCartIcon fontSize='large'/>
            <p className='text-xl mt-2 font-sans'>$160.00</p>
            </div>         
        </div>
    </>
  )
}

export default MenuSec

{/* <div className='flex flex-wrap space-x-44 absolute top-60'>
        <div className='mt-10'>
          <h2 className='text-2xl font-normal'>SOUNDBOX</h2>
          <h1 className='text-6xl font-bold mt-4'>Bluetooth Speaker</h1>
          <p className='mt-6 text-lg w-[430px]'>New Modern Stylist Fashionable Men's Wearholder
              bag maxcan weather holder.</p>
            <h2 className='text-lg mt-6 font-medium'>EXPLORE NOW</h2>

        </div>
        <div>
            <img src={slideImgOne} alt="" className='w-[400px]'/>
        </div>
        </div> */}


        // <Carousel responsive={responsive}
        // draggable={false}
        // showDots={true}
        // ssr={true} // means to render carousel on server-side.
        // infinite={true}
        // autoPlay={true }
        // autoPlaySpeed={1000}
        // // customTransition="all .5"
        // animateOut= 'fadeOut'
        // transitionDuration={500}>