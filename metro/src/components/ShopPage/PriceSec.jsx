import React from 'react'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value) {
  return `${value}°C`;
}
const PriceSec = () => {
  const [value, setValue] = React.useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
    <h1 className='text-xl font-semibold'>Price</h1>
              <div className='mt-5'>
              <Box sx={{ width: 250}}>
            <Slider
            getAriaLabel={() => 'Price range'}
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
           />
            </Box>
                <div className='flex flex-wrap mt-5 space-x-28'>
                  <p className='font-sans'>Price:$0-$860</p>
                  <button className='font-sans font-semibold pt-[6px] pb-[6px] pl-4 pr-4 bg-black text-white rounded-sm cursor-pointer hover:opacity-70'>Filter</button>
                </div>
              </div>

              
    </>
  )
}

export default PriceSec
