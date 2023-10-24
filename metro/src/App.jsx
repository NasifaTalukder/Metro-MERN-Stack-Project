import React from 'react';
import './App.css';
import MenuSec from './components/Homepage/MenuSec';
import MenuBottom from './components/Homepage/MenuBottom';
import HeroSec from './components/Homepage/HeroSec';
import LedComp from "./components/Homepage/LedComp"
import HeadPhoneSec from './components/Homepage/headPhone';
import GameControllerSec from './components/Homepage/GameControllerSec';
import KeyboardComp from './components/Homepage/KeyboardComp';
import SpeakerComp from './components/Homepage/SpeakerComp';
import HeadPhoneComp from './components/Homepage/HeadPhoneComp';
import UltraLaserComp from './components/Homepage/UltraLaserComp';
import BluetoothComp from './components/Homepage/BluetoothComp';
import GadgetsComp from './components/Homepage/GadgetsComp';
import WatchComp from './components/Homepage/WatchComp';
import GraphicsCardComp from './components/Homepage/GraphicsCardComp';
import SignUpSec from './components/Homepage/SignUpSec';
import InspireCompOne from './components/Homepage/InspireCompOne';
import InspireCompTwo from './components/Homepage/InspireCompTwo';
import InspireCompTre from './components/Homepage/InspireCompTre';
import AddessSec from './components/Homepage/AddessSec';
import InformationSec from './components/Homepage/InformationSec';
import MyAccountSec from './components/Homepage/MyAccountSec';
import HelpandSupSec from './components/Homepage/HelpandSupSec';
import CopyRightSec from './components/Homepage/CopyRightSec';
import SocialIcons from './components/Homepage/SocialIcons';
import PaymentMethod from './components/Homepage/PaymentMethod';






function App() {

  return (
    <>
    <div className='w-full font-[Josefin Sans, sans-serif] p-0 m-0 bg-white'>
       <div className='w-[1300px] m-auto'>
        <div className='h-48 bg-white'>
          {/* ------menusection------ */}
           <MenuSec/>           
           <MenuBottom/>       
       </div>
       </div>
       <div>
        {/* --------HeroSec Slider----- */}
          <HeroSec/>
        </div> 
    <div className='w-[1310px] m-auto' >
      <div className='mt-8'>
        <div className='flex flex-wrap space-x-6'>
        {/* ---------Led Laser Light-------- */}
        <LedComp/>
        {/* ------------Headphone-------- */}
        <HeadPhoneSec/>
        </div>    
        </div>            
      <div className='mt-20'>
        <h1 className='text-2xl font-semibold text-center'>Featured Products</h1>
      </div>
      <div className=''>
        <div className='flex flex-wrap justify-start mt-14'>
          {/* ------Game Controller Comp---- */}
          <GameControllerSec/>
          <div className='flex flex-wrap space-x-6 ml-6 h-96'>
           {/* ------KeyBoard Comp---------- */}
           <KeyboardComp/>
           {/* ------------Speaker Comp------------ */}
          <SpeakerComp/>
            </div>           
        <div className='flex flex-wrap space-x-6 ml-[660px] mt-[-370px]'>
          {/* ------------HeadPhoneComp-------- */}
          <HeadPhoneComp/>
          {/* -------------UltraLaserComp------------- */}
          <UltraLaserComp/>
        </div>
        <div/>
        </div>         
        </div>

      <div className='flex flex-wrap space-x-5 mt-5'>
      {/* -----------Bluetooth Comp--------- */}
      <BluetoothComp/>
      {/* -------------Gadgets Comp------------- */}
      <GadgetsComp/>
      {/* ----------Watch Comp------------ */}
      <WatchComp/>
      {/* -----------GraphicsCard Comp----------- */}
      <GraphicsCardComp/>
          </div>
      </div>

      <div className='bg-slate-100 w-full h-96 mt-24'>
        <div className='w-[1310px] m-auto'>       
        {/* ----------SignUp section----------     */}
        <SignUpSec/>
        </div>
      </div>
      <div>
        <div className='w-[1310px] m-auto'>
          <div className='mt-24 h-[520px]'>
          <div>
            <h1 className='text-3xl font-semibold text-center'>Inspirational Posts</h1>
          </div>
          <div className='flex flex-wrap space-x-7 mt-7'>
           {/* ------------InpireSec CompOne----------- */}
           <InspireCompOne/>
            {/* ------------InpireSec CompTwo----------- */}
           <InspireCompTwo/>
             {/* ------------InpireSec CompTre----------- */}
            <InspireCompTre/>
          </div>
          </div>
        </div>
      </div>

      <div className='w-full h-[570px] bg-[#111111]'>
        <div className='w-[1310px] m-auto'>
          <div className='pt-20 flex flex-wrap'>
           {/* ------------Metro Addess Section---------- */}
           <AddessSec/>
           {/* -------------------Information section---------- */}
           <InformationSec/>
           {/* -------------------My Account section---------- */}
           <MyAccountSec/>
           {/* -------------------Help & support scetion section---------- */}
           <HelpandSupSec/>
          </div>
        </div>
        <hr className='mt-16' />

        <div className='w-[1310px] m-auto'>
          <div className='pt-14 flex flex-wrap'>
           {/* --------Copy Right----------- */}
          <CopyRightSec/>
            {/* --------Social Icons--------- */}
          <SocialIcons/>
            {/* --------Payment Method Section--------- */}
          <PaymentMethod/>
          </div>
        </div>
      </div>

      </div> 
    </>

  )
}

export default App
