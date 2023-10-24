import React from 'react'
import LightLogo from "../../assets/./HomePagePic/logo-light.png"
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';

const AddessSec = () => {
  return (
    <>
     <div>
              <div>
                <img src={LightLogo} alt="" className='w-36'/>
              </div>
              <div className=''>
                <ul className='flex flex-wrap'>
                <span className='text-slate-300 mt-10'><LocationOnOutlinedIcon sx={{ fontSize:30 }}/></span>
                  <li className='text-slate-300 mt-11 w-72 list-outside ml-4 font-sans font-normal '>59 Street, Newyork City, Rose Town, 05 Rive House</li>
                </ul>
                <ul className='flex flex-wrap'>
                <span className='text-slate-300 mt-4'><PhoneInTalkOutlinedIcon sx={{ fontSize:30 }}/></span>
                  <li className='text-slate-300 mt-5 w-72 list-outside ml-4 font-sans font-normal cursor-pointer'>+123 456 7890</li>
                </ul>
                <ul className='flex flex-wrap'>
                <span className='text-slate-300 mt-4'><MailOutlineOutlinedIcon sx={{ fontSize:30 }}/></span>
                  <li className='text-slate-300 mt-5 w-72 list-outside ml-4 font-sans font-normal cursor-pointer'>info@example.com</li>
                </ul>
              </div>           
            </div>
    </>
  )
}

export default AddessSec
