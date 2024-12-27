import React from 'react'
import Image from 'next/image'
import { GoDotFill } from "react-icons/go"
const Hero6 = () => {
  return (
    <div className='flex container bg-[#F1F0FF] mt-28 w-[1920px h-[579px]'>
     
            <div className=''>
                
                <Image src={'/circle.png'}
                alt='circle'
                width={481}
                height={449}
                className='relative top-20'/>

<Image src={'/sofa.png'}
                alt='safa'
                width={509}
                height={550}
                className='relative bottom-96 pl-14'/>
                
               
                </div>
                <div className='text-4xl  pt-24 text-blue-900 '>Unique Features Of leatest &<br/>
Trending Poducts
<div className='text-sm relative top-7'>
<div className='flex text-pink-800'><GoDotFill /><p className='text-black mb-5'>All frames constructed with hardwood solids and laminates</p></div>
<div  className='flex text-blue-800'><GoDotFill /><p className='text-black mb-5'>Reinforced with double wood dowels, glue, screw - nails corner<br/>
blocks and machine nails</p></div>
<div  className='flex text-green-500'><GoDotFill /><p className='text-black mb-5'>Arms, backs and seats are structurally reinforced</p></div>  </div>
<div className='flex gap-5'>
<div className='w-[157px] h-[45px] bg-[#FB2E86] mt-10'>
<button className='w-[109px] h-[17px] content-center mt-3 ml-8 text-sm text-white'>Add To Cart</button>
</div>
<p className='text-sm text-blue-900 pt-11 '>B&B Italian Sofa <br/>$32.00</p> 
</div>
</div>

            </div>
        
      
  )
}

export default Hero6
