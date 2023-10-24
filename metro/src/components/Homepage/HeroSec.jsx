import React from 'react'
import slideBackground from "../../assets/./HomePagePic/slide backgrnd.jpg"
import slideImgOne from "../../assets/./HomePagePic/homeslide_1.png"
import slideImgTwo from "../../assets/./HomePagePic/home_03_slide_2.png"
import slideImgTre from "../../assets/./HomePagePic/home_03_slide_3.png"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

const HeroSec = () => {
  return (
    <>
      {/* <div>
    <img src={slideBackground} alt="" className='relative w-full h-[585px] bg-cover bg-fixed'/>
    
      <div className='w-[1300px] m-auto'>  
       
       <div className='flex flex-wrap space-x-44 absolute top-60'>
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
        </div>
      </div>
    </div> */}

<Carousel responsive={responsive}

swipeable={false}
  draggable={false}
  showDots={true}
  ssr={false} 
  infinite={true}
  autoPlay={true}
  autoPlaySpeed={1000}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={500}
   animateOut= 'fadeOut'
    smartSpeed= {1000}

>
  <div>
     <div>
    <img src={slideBackground} alt="" className='relative w-full h-[500px] bg-cover bg-fixed'/>
    
      <div className='w-[1300px] m-auto'>  
       
       <div className='flex flex-wrap space-x-44 absolute top-24'>
        <div className='mt-10'>
          <h2 className='text-2xl font-normal'>SOUNDBOX</h2>
          <h1 className='text-6xl font-bold mt-4'>Bluetooth Speaker</h1>
          <p className='mt-6 text-lg w-[430px]'>New Modern Stylist Fashionable Men's Wearholder
              bag maxcan weather holder.</p>
            <h2 className='text-lg mt-6 font-medium'>EXPLORE NOW</h2>

        </div>
        <div>
            <img src={slideImgOne} alt="" className='w-[380px]'/>
        </div>
        </div>
      </div>
    </div>
  </div>
  <div>
    <div>
     <div>
    <img src={slideBackground} alt="" className='relative w-full h-[500px] bg-cover bg-fixed'/>
    
      <div className='w-[1300px] m-auto'>  
       
       <div className='flex flex-wrap space-x-52 absolute top-24'>
        <div className='mt-10'>
          <h2 className='text-2xl font-normal'>SOUNDBOX</h2>
          <h1 className='text-6xl font-bold mt-4'>Bluetooth Speaker</h1>
          <p className='mt-6 text-lg w-[430px]'>New Modern Stylist Fashionable Men's Wearholder
              bag maxcan weather holder.</p>
            <h2 className='text-lg mt-6 font-medium'>EXPLORE NOW</h2>

        </div>
        <div>
            <img src={slideImgTwo} alt="" className='w-[280px]'/>
        </div>
        </div>
      </div>
    </div>
  </div></div>
  <div>   
    <div>
    <img src={slideBackground} alt="" className='relative w-full h-[500px] bg-cover bg-fixed'/>
    
      <div className='w-[1300px] m-auto'>  
       
       <div className='flex flex-wrap space-x-44 absolute top-24'>
        <div className='mt-10'>
          <h2 className='text-2xl font-normal'>SOUNDBOX</h2>
          <h1 className='text-6xl font-bold mt-4'>Bluetooth Speaker</h1>
          <p className='mt-6 text-lg w-[430px]'>New Modern Stylist Fashionable Men's Wearholder
              bag maxcan weather holder.</p>
            <h2 className='text-lg mt-6 font-medium'>EXPLORE NOW</h2>

        </div>
        <div>
            <img src={slideImgTre} alt="" className='w-[400px]'/>
        </div>
        </div>
      </div>
    </div></div>
</Carousel>;
    
    </>
  )
}

export default HeroSec
