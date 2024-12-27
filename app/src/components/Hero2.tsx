import React from 'react'
import Image from 'next/image'

const Hero2 = () => {
  return (
    <div className='pt-24'>
      <div className='w-[367px] h-[42px] top-[1015px] left-[777px] text-center ml-96 text-2xl font-bold pb-20'>Featured Products</div>
      <div className='flex gap-12'>
      <div className='flex gap-12'>
        <div className='container w-[200px] h-[361px] bg-[#F6F7FB] ml-16 '>
  <div className='w-[200px] h-[236px]'>
        <Image
        src='/seat1.png'
        alt='seat'
        width={178}
        height={178}
         /></div>
         <div className='text-pink-600 ml-11'>Cantilever chair
         <Image
        src='/3dash.png'
        alt='img'
        width={52}
        height={4}
        className='ml-8 mt-6'
         /></div>
<div className='w-[140px] h-[14px] mt-6 ml-10'>Code - Y523201</div>
<div className='w-[44px] h-[17px] mt-4 ml-20 justify-center'>$42.00</div>
</div>


<div className='container w-[200px] h-[361px] bg-[#F6F7FB]  '>
  <div className='w-[200px] h-[236px]'>
        <Image
        src='/seat2.png'
        alt='seat'
        width={178}
        height={178}
         />
         <div className='bg-[#2F1AC4] w-[200px] h-[160px] '>
<div className='w-[128px] h-[22px] text-white mb-4 ml-12 mt-7'>Cantilever chair </div>
<div className='w-[52px] h-[4px]  ml-20 '>
    <Image
    src='/dash2.png'
    alt=''
    width={52}
    height={4}
    />
</div>
<div className='w-[129px] h-[14px] text-white mt-5 ml-10'>Code - Y523201</div>
<div className='w-[44px] h-[17px] text-white mt-4 ml-20'>$42.00</div>
   
    </div>
         
         
         </div>


</div>
         
<div className='container w-[200px] h-[361px] bg-[#F6F7FB]  '>
  <div className='w-[200px] h-[236px]'>
        <Image
        src='/seat3.png'
        alt='seat'
        width={178}
        height={178}
         />
</div>
<div className='text-pink-600 ml-11'>Cantilever chair
         <Image
        src='/3dash.png'
        alt='img'
        width={52}
        height={4}
        className='ml-8 mt-6'
         /></div>
<div className='w-[140px] h-[14px] mt-6 ml-10'>Code - Y523201</div>
<div className='w-[44px] h-[17px] mt-4 justify-center ml-20'>$42.00</div>

    </div>
  
</div>
<div className='container w-[200px] h-[361px] bg-[#F6F7FB]  '>
  <div className='w-[200px] h-[236px]'>
        <Image
        src='/seat4.png'
        alt='seat'
        width={178}
        height={178}
         />
</div>
<div className='text-pink-600 ml-11'>Cantilever chair
         <Image
        src='/3dash.png'
        alt='img'
        width={52}
        height={4}
        className='ml-8 mt-6'
         /></div>
<div className='w-[140px] h-[14px] mt-6 ml-10'>Code - Y523201</div>
<div className='w-[44px] h-[17px] mt-4 ml-20 justify-center'>$42.00</div>


</div>
</div>
<Image src={'/1line.png'} alt='image' width={91} height={4} className='relative top-20 left-[500px]'/>
</div>
    
  )
}

export default Hero2

