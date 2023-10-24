import React from 'react'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PinterestIcon from '@mui/icons-material/Pinterest';
import RssFeedIcon from '@mui/icons-material/RssFeed';

const SocialIcons = () => {
  return (
    <>
    <div>
              <ul className='text-slate-300 flex flex-wrap space-x-4 ml-40'>
                <li><a href="#"><FacebookOutlinedIcon/></a></li>
                <li><a href="#"><TwitterIcon/></a></li>
                <li><a href="#"><LinkedInIcon/></a></li>
                <li><a href="#"><YouTubeIcon/></a></li>
                <li><a href="#"><PinterestIcon/></a></li>
                <li><a href="#"><RssFeedIcon/></a></li>
              </ul>
            </div>
    </>
  )
}

export default SocialIcons
