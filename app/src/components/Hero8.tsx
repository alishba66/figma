import React from 'react'
import Image from 'next/image'
import Hero7 from '@/components/Hero7'
const Hero8 = () => {
  return (<div>
  
            <div className=' text-center text-2xl content-center font-bold text-[#151875] pt-28'>Trending Products  </div>
    <div className='flex ml-4 gap-3 '>
    <Hero7 ImageUrl='/p1.png' heading='Cantilever chair' price='$26.00 '/>
    <Hero7 ImageUrl='/p2.png' heading='Cantilever chair' price='$26.00 '/>
    <Hero7 ImageUrl='/p3.png' heading='Cantilever chair' price='$26.00 '/>
    <Hero7 ImageUrl='/p4.png' heading='Cantilever chair' price='$26.00 '/>
    </div>
    <div className='flex gap-14 p-8'>
    <div className='pt-32'>
      <h1 className='font-semibold text-2xl'>23% off in all products</h1>
      <p className='font-semibold text-base text-pink-700'>Shop Now</p>
    <Image src={'/black.svg'} alt="image"  width={213} height={207 } className=''></Image>
    </div>
    <div className='pt-32'>
      <h1 className='font-semibold text-2xl'>23% off in all products</h1>
      <p className='font-semibold text-base text-pink-700'>View Collection</p>
    <Image src={'/yellow.svg'} alt="image"  width={312} height={173} className='pt-9'></Image></div>
    
    <div>
      <div className='pt-32'>
        <div className='flex  gap-5'>
      <Image src={'/1.svg'} alt="image"  width={64} height={71} className='pt-9'></Image>
      <h2 className='text-base text-blue-950 pt-10'>Executive Seat chair <br></br>$32.00</h2></div>
      <div className='flex  gap-5'>
      <Image src={'/2.svg'} alt="image"  width={64} height={71} className='pt-9'></Image>
      <h2 className='text-base text-blue-950 pt-10'>Executive Seat chair <br></br>$32.00</h2></div>
      <div className='flex  gap-5'>
      <Image src={'/3.svg'} alt="image"  width={64} height={71} className='pt-9'></Image>
      <h2 className='text-base text-blue-950 pt-10'>Executive Seat chair <br></br>$32.00</h2></div>
      </div>
    </div>
    </div>
    
    
    
    
    
    
    </div>
  )
}

export default Hero8
