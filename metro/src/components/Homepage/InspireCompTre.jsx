import React from 'react'
import InspireImagetre from "../../assets/./HomePagePic/blog-j-465x290.jpg"

const InspireCompTre = () => {
  return (
  <>
   <div>
              <div className='box-border overflow-hidden InpireImageTreImg'>
                <img src={InspireImagetre} alt="" className='relative w-[415px] rounded align-middle overflow-hidden transition ease-in-out delay-150 hover:rotate-6 hover:scale-110  origin-center duration-300...' />
                <div className='InpireImageTreCircle w-[70px] h-[70px] rounded-full bg-white absolute -mt-24 ml-7 '>
                  <div className=' mt-4 '>
                  <p className='font-sans ml-7 font-medium leading-4'>23</p>
                <h2 className='font-sans font-bold ml-5'>Dec</h2>
                  </div>              
              </div>
              </div>
              <div className='mt-5'>
                <p className='font-sans text-slate-600'>Finger Ring, Jewellery</p>
                <h1 className='text-[22px] font-semibold mt-2 w-[390px]'>The City of London Wants To Have Brexit Cake available</h1>
              </div>            
            </div>
  </>
  )
}

export default InspireCompTre
