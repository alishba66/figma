import React from 'react'
import Image from 'next/image'

type Props2 = {
    ImageUrl: string,
    heading: string,
    price:string
  }
  
const Hero7 = ({ImageUrl, heading, price}:Props2) => {
  return (
    <div className='flex'>
       
        <div className=' container w-[250px] h-[350px] pt-7'>
        <Image src={ ImageUrl} alt='image' width={247} height={244} className=' pt-14' />
        <div className='ml-16 text-blue-950 pt-3'>{heading}</div>
        <div  className='ml-24 text-blue-950 '>{price}</div>
        </div>
        </div>
      
   
  )
}

export default Hero7
