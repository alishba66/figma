import React from 'react'
import Image from 'next/image'
const page = () => {
  return (
    <div>
    <div className='w-[full] h-[286px] bg-[#F6F5FF]'>
<h1 className='text-4xl relative left-24 top-16 text-blue-950 font-bold '>404 Not Found</h1>
<p className='font-medium text-base text-blue-950 relative left-24 top-16 '>Home Shop <span className='text-pink-700'>404 Not Found</span></p>
      </div>  
<Image src={'/Group 123.png'} alt='error' width={913} height={526}/>
<button className='bg-pink-500 w-[157px] h-[44px] text-white ml-[450px]'>Back To Home</button>

<div>
    <Image
  src={"/last.png"}
  alt='last'
  height={93}
  width={904}
  className='relative bottom ml-16 pb-20 pt-12'
 />
    </div>
    </div>
  )
}

export default page
