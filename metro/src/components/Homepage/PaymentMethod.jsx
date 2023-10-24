import React from 'react'
import VisaCard from "../../assets/./HomePagePic/payment1.png"
import MasterCard from "../../assets/./HomePagePic/payment2.png"
import Discover from "../../assets/./HomePagePic/payment3.png"
import AmericalExpress from "../../assets/./HomePagePic/payment4.png"

const PaymentMethod = () => {
  return (
    <>
       <div className='flex flex-wrap ml-[165px] space-x-3 '>
            <div>
              <img src={VisaCard} alt="" className='w-[60px] grayscale hover:grayscale-0 ' />
            </div>
            <div>
              <img src={MasterCard} alt="" className='w-[60px] grayscale hover:grayscale-0 ' />
            </div>
            <div>
              <img src={Discover} alt="" className='w-[60px] grayscale hover:grayscale-0'/>
            </div>
            <div>
              <img src={AmericalExpress} alt="" className='w-[60px] grayscale hover:grayscale-0 mt-1'/>
            </div>
          </div>
    </>
  )
}

export default PaymentMethod
