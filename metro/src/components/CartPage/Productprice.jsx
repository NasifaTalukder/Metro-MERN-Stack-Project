import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import littleWatch from "../../assets/CartPagePic/p_4-1-360x432.jpg"
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';

const Productprice = () => {
  return (
    <>
       <div className='flex space-x-12'>  
                    <div className='mt-16'>
                        <button className='p-2 rounded-full border border-slate-600 hover:bg-black hover:text-white'><CloseIcon/></button>
                    </div>
                    <div className='flex'>
                     <img src={littleWatch} alt="" className='w-36'/>
                     <p className='text-lg mt-20 ml-8'>Hobbyist Watch</p>
                    </div>
                    </div>
                    <div>
                        <h1 className='text-xl font-sans ml-[330px] mt-16'>$160.00</h1>
                    </div>
                    <div className='flex ml-32 mt-12'>
                        <div className='w-16 h-[55px] border border-slate-300 rounded-sm'>
                            <h1 className='font-sans text-2xl text-center mt-2'>1</h1>
                        </div>
                        <div>
                        <div>
                            <button className='pl-2 pr-2 border border-slate-300'><AddOutlinedIcon/></button>                         
                        </div>
                        <div> 
                        <button className='pl-2 pr-2 border border-slate-300'><RemoveOutlinedIcon/></button>
                       </div>
                       </div>
                    </div>
                    <div>
                        <h1 className='text-xl font-sans ml-32 mt-16'>$160.00</h1>
                    </div>
    </>
  )
}

export default Productprice
