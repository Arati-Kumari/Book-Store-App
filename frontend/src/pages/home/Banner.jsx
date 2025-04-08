import React from 'react'
import bannerImg from "../../assets/banner.png"
const Banner = () => {
  return (
    <div className='flex flex-col md:flex-row-reverse py-16 justify-between items-center gap-12'>
         <div className='md:1/2 w-full flex items-center md:justify-center'>
        <img src={bannerImg} alt=''/>
        </div>
        
        <div>
            <h1 className='md:text-5xl text-2xl font-medium mb-7'>New Releases This week</h1>
            <p className='mb-10'>It's time to update your reading list with some of the latest and greatest releases in the literary world. From heart-pumping thrillers to captivating memoirs, this week's new releases offer something for everyone</p>

            <button className='bg-primary p-1 sm:px-6 px-2 flex items-center rounded-sm'>Subscribe</button>
        </div>
       
    </div>
  )
}

export default Banner;