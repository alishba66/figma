
import React from 'react'
import Image from 'next/image'
const Heropage1 = () => {
  return (
      <div className='w-full h-[700px] bg-[#F2F0FF] pt-6'>
    <div className='flex'>
   <div className='ml-1'>  <Image
      src='/1 pics.png'
      alt='img'
      width={387}
      height={387}
      />
      
      </div> 
      <div className=''>
      <div className='  w-[444px] h-[248px] mt-32 relative right-20'>
      <div className='  mr-42   text-pink-600'>Best Furniture For Your Castle....</div>
      <span className='text-black text-3xl font-bold  '>New Furniture Collection  Trends in 2020</span>
      <div className=' pt-2 text-gray-400 text-sm' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing
      in phasellus non in justo.</div>
<div className='w-[163px] h-[50px] bg-[#FB2E86] mt-10'>
<button className='w-[83px] h-[]17px text-center mt-3 ml-8 text-white'>Shop Now</button>
</div>
      </div></div>
     
    
 <div className=''>


 <p className='relative left-44 top-16'>50%off</p>
 <Image
      src='/50.png'
      alt='img'
      width={136}
      height={138}
      className='ml-36 '
      
      />


      <Image src={'/cccc.png'}
                alt='circle'
                width={550}
                height={550}
                className='relative bottom-20 right-12'/>

               

      <Image
                 src='/chair.png'
                 alt='img'
                 width={400}
                 height={400}
                 className='pt-32 relative bottom-[500px] right-20'
      />
                
 </div>

 
 </div>
 
 <Image src={'/square.png'} alt='image' width={76} height={2} className='relative bottom-96 left-[500px]'/>


</div>



  )
}

export default Heropage1
