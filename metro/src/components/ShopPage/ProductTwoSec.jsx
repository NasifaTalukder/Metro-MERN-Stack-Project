import React from 'react'
import Producttwo from "../../assets/ShopPagePic/img_13-360x432.jpg"
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const ProductTwoSec = () => {
  return (
    <>
       <div className='productTwoHover'>
            <div>
              <p className='pl-2 pr-2 rounded bg-black text-white absolute z-[1000] mt-5 ml-6 font-sans'>-11%</p>
            </div>
            <div className='overflow-hidden'>           
              <img src={Producttwo} alt="" className=' w-[308px] rounded transition ease-in-out delay-150 hover:-translate-y-16 hover:scale-105 duration-500...'/>
            </div>
            <div className='latterTwo'>
            <p className=' text-slate-400 mt-3'>Herbal Shampoo</p>
            <div className='flex flex-wrap space-x-3 '>
              <p className=' text-slate-400 font-sans'><del>$999.00</del></p>
              <h2 className='text-xl font-semibold font-sans'>$888.00</h2>
            </div> 
            </div>          
            <div className='space-x-1 mt-3 bottomButtonTwo'>
                <button className='p-2 bg-black text-white rounded hover:opacity-70'><FavoriteBorderIcon/></button>
                <button className='pl-16 pr-16 pt-3 pb-3 bg-black text-white rounded text-xs font-bold font-sans hover:opacity-70'>ADD TO CART</button>
                <button className='p-2 bg-black text-white rounded hover:opacity-70'><SearchIcon/></button>                               
            </div>        
          </div>
    </>
  )
}

export default ProductTwoSec
