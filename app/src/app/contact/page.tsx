import React from 'react'
import Image from 'next/image';

const page = () => {
  return (
    <div>
      <div className='w-[full] h-[286px] bg-[#F6F5FF]'>
<h1 className='text-4xl relative left-24 top-16 text-blue-950 font-bold '>Contact Us</h1>
<p className='font-medium text-base text-blue-950 relative left-24 top-16 '>Home Shop <span className='text-pink-700'>Contact Us</span></p>
      </div>
     <div className=' text-blue-900 text-3xl font-bold ml-5 pt-7 pb-5'>Information About us
     <p className='text-sm text-gray-400 pt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices<br></br>
      mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae<br></br> eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.</p></div>
    <Image src={'/purple.png'} alt='dots' width={103} height={25} className='ml-5 pt-5'

    />
    <div>
    <div className=' text-blue-900 text-3xl font-bold relative bottom-44 left-[600px]'>Contact Way</div>
    <Image src={'/group.png'} alt='dots' width={380} height={100} className=' relative bottom-40 left-[600px]'

    />
    </div>
    <div className=' text-blue-900 text-3xl font-bold ml-5 pt-7 pb-5'>Get In Touch
    <p className='text-gray-400 text-sm pt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices<br></br>
      tristique amet erat vitae eget dolor los vitae lobortis quis bibendum quam.</p>
     </div>
     <div className='container w-[534px] h-[414px] ml-5 pt-4'>
     <input className='border-4 ' placeholder='Your Name*'></input>
     <input className='border-4 flex relative bottom-8 left-80' placeholder='Your Email*'></input>
     <input className='border-4 w-[520px] ' placeholder='Subject*'></input>
     <div className='pt-8'>
     <input className='border-4 w-[520px] h-[164px]' placeholder='Type Your Message*'></input></div>
     <div className='pt-4'>
     <button className='bg-pink-500 w-[157px] h-[44px] text-white '>Send Mail</button></div>
     </div>
     <Image src={'/contactus.png'} alt='contact' width={463} height={422} className=' flex relative bottom-[450px] left-[550px]'

/>
     </div>
   
  )
}

export default page
