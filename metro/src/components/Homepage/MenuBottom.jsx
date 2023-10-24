import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import SortIcon from '@mui/icons-material/Sort';

const MenuBottom = () => {
  return (
    <>
    <div className='mt-7 flex flex-wrap'>
          <div>
            {/* <img src={Menubar} alt="" className='text-black'/> */}
            <button className='pl-6 pr-[110px] pt-3 pb-3 bg-black text-white text-2xl rounded-t'><SortIcon fontSize='large' className='mr-2'/>CATEGORIES</button>
          </div>
          <div>
            <input type="text" name="" id="" placeholder='Search Products Here' className='font-sans pl-6 pr-[730px] pt-4 pb-4 ml-4 rounded border-2 font-semibold border-solid border-[#ddd] relative outline-0' />
            </div>           
            <span className='w-[1px] h-8 bg-[#ddd] absolute ml-[950px] mt-3 '></span>                    
            <div className='absolute ml-[980px] mt-4'>           
            <select name="" id="" className='pl-4 pr-8 text-lg outline-0 text-slate-600 font-sans cursor-pointer'>             
               <option value="">All categories</option>
               <option value="">Air Filter</option>
               <option value="">Body Engine</option>
               <option value="">Brake Part</option>
               <option value="">Cosmetics</option>
               <option value="">Covid-19</option>
               <option value="">Electronics</option>
               <option value="">Frame Sunglasses</option>
               <option value="">Furniture</option>
               <option value="">Genuine Leather</option>
               <option value="">Gift Corner</option>
               <option value="">Jewellery</option> 
               <option value="">Kid's wear</option>
               <option value="">Medical</option>
               <option value="">Medical Accessories</option>
               <option value="">Men</option>
               <option value="">Modern Furniture</option>
               <option value="">Other Medical</option>
            </select>
            </div>
            <div>
              <button className='pl-5 pr-5 pt-3 pb-3 bg-black absolute text-white ml-[-75px] rounded-r hover:opacity-80'><SearchIcon fontSize='large'/></button>
            </div>
        </div>
    </>
  )
}

export default MenuBottom
