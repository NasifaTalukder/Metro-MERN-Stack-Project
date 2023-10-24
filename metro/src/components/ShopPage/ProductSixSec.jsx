import React from 'react'
import ProductSix from "../../assets/ShopPagePic/part_12-360x432.jpg"
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const ProductSixSec = () => {
  return (
    <>
    
    <div className='productSixHover'>
            <div className='overflow-hidden'>           
              <img src={ProductSix} alt="" className=' w-[308px] rounded transition ease-in-out delay-150 hover:-translate-y-16 hover:scale-105 duration-500...'/>
            </div>
            <div className='latterSix'>
            <p className=' text-slate-400 mt-3'>Alozin Headlight</p>
              <h2 className='text-xl font-semibold font-sans'>$34.00</h2>
            </div>          
            <div className='space-x-1 mt-3 bottomButtonSix'>
                <button className='p-2 bg-black text-white rounded hover:opacity-70'><FavoriteBorderIcon/></button>
                <button className='pl-16 pr-16 pt-3 pb-3 bg-black text-white rounded text-xs font-bold font-sans hover:opacity-70'>ADD TO CART</button>
                <button className='p-2 bg-black text-white rounded hover:opacity-70'><SearchIcon/></button>                               
            </div>        
          </div>
    </>
  )
}

export default ProductSixSec
