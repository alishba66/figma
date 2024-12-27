import React from 'react' 
import Image from 'next/image'

type Props = {
  ImageUrl: string,
  heading: string,
  para:string
}


const Hero4 = ({ImageUrl, heading, para}:Props) => {
  return (
    <div>
      
     
      <div className='container w-[250px] h-[320px]  bg-[#FFFFFF]'>
      <Image src={ ImageUrl} alt='image' width={65} height={65} className='ml-28 pt-20' />
      <div className='ml-20 text to-blue-900 text-2xl pt-10'>{heading}</div>
      <p className='pt-6 text-gray-400 ml-14'>{para}</p>
    </div>
   

    </div>
  )
}

export default Hero4
