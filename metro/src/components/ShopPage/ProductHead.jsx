import React from 'react'
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import ViewListIcon from '@mui/icons-material/ViewList';

const ProductHead = () => {
  return (
  <>
 <div className='flex flex-wrap space-x-2'>
                <div className='font-sans flex flex-wrap'>
                <p className='font-sans'>Showing 1–9 of 103 results</p>
                <div className='ml-[520px]'>
                <select name="" id="" placeholder='Latest' className='pl-2 pr-2 pt-2 pb-2 border-2 border-[#ddd] font-sans cursor-pointer outline-0 rounded'>
                    <option value="" className='font-sans'>Popularity</option>
                    <option value="" className='font-sans'>Average rating</option>
                    <option value="" className='font-sans'>Latest</option>
                    <option value="" className='font-sans'>Price:low to high</option>
                    <option value="" className='font-sans'>Price:high to low</option>
                </select>
                </div>               
                </div>
                <div className='flex flex-wrap justify-end space-x-2'>
                <span className='border-2 border-[#ddd] p-2 rounded  text-slate-400 cursor-pointer'><ViewModuleIcon/></span>  
               <span  className='border-2 border-[#ddd] p-2 rounded text-slate-400 cursor-pointer'> <ViewListIcon  />  </span>             
                </div>
            </div>
  </>
  )
}

export default ProductHead
