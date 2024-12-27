import React from 'react'
import Image from 'next/image'
const page = () => {
  return (
    <div>
        <div className='w-[full] h-[286px] bg-[#F6F5FF]'>
<h1 className='text-4xl relative left-24 top-16 text-blue-950 font-bold '>FAQ</h1>
<p className='font-medium text-base text-blue-950 relative left-24 top-16 '>Home Shop <span className='text-pink-700'>FAQ</span></p>
      </div>
      <div className='ml-5'>
        <h1 className='text-blue-900 text-2xl font-bold pt-6'>Generel Information</h1>
        <h3 className='text-blue-900 pt-10'>Eu dictumst cum at sed euismood condimentum?</h3>
        <p className='text-gray-400 text-sm pt-3 pb-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed<br></br>
         tristique mollis vitae, consequat gravida sagittis.</p>

         <h3 className='text-blue-900 pt-10'>Magna bibendum est fermentum eros.</h3>
        <p className='text-gray-400 text-sm pt-3 pb-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed<br></br>
         tristique mollis vitae, consequat gravida sagittis.</p>

         <h3 className='text-blue-900 pt-10'>Odio muskana hak eris conseekin sceleton?</h3>
        <p className='text-gray-400 text-sm pt-3 pb-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed<br></br>
         tristique mollis vitae, consequat gravida sagittis.</p>

         <h3 className='text-blue-900 pt-10'>Elit id blandit sabara boi velit gua mara?</h3>
        <p className='text-gray-400 text-sm pt-3 pb-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed<br></br>
         tristique mollis vitae, consequat gravida sagittis.</p>

         
      </div>

      <div className='container w-[550px] h-[700px] bg-[#CDCEDC] relative bottom-[600px] left-[470px]'>
        <h2 className='text-2xl text-blue-900 pt-14 font-bold ml-10 '>Ask a Question</h2>

        
      
      <div><div className='pt-12'>
      <input className='border-4 ml-4 w-[520px] ' placeholder='Your Name*'></input></div>
      <div className='pt-12'>
     <input className='border-4 ml-4 w-[520px] ' placeholder='Your Email*'></input></div>
     
     <div className='pt-12'>
     <input className=' ml-4 border-4 w-[520px] h-[164px]' placeholder='Type Your Message*'></input></div>
     <div className='pt-12'>
     <button className='bg-pink-500 w-[157px] h-[44px] text-white ml-4 '>Send Mail</button></div>
     </div>
    </div>
    <div>
    <Image
  src={"/last.png"}
  alt='last'
  height={93}
  width={904}
  className=' ml-16  '
 />
    </div></div>
  )
}

export default page
