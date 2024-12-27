import React from 'react'
import { FaCheck } from "react-icons/fa"
import Image from 'next/image'

const Hero9 = () => {
  return (
    <div>
      <div >
        <h1 className='text-4xl text-blue-950 text-center pt-11 '>Discount Item</h1>
     <ul className='list-none gap-6 flex items-center justify-center text-blue-900 pt-7'>
      <li>Wood Chair</li>
      <li>Plastic Chair</li>
      <li>Sofa Colletion</li></ul>
      
        <div  className='p-20'>
        
        
        <div>
      <h1 className='text-4xl text-blue-950 pt-28 '>20% Discount Of All Products</h1>
      <p className='text-xl text-pink-600 pt-3'>Eams Sofa Compact</p></div>
      <div className='flex' > <div>
        <p className='text-lg font-normal text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br></br>Eu eget eugiat habitasse nec, bibendum condimentum.</p>
      <div className=' flex gap-16 pt-10'><div className='text-lg font-normal text-gray-500 flex'><FaCheck /> Material expose like metals</div>
      <div className='text-lg font-normal text-gray-500 flex'><FaCheck />Clear lines and geomatric figures</div>
      </div>
      <div className=' flex gap-20 pt-7'> <div className='text-lg font-normal text-gray-500 flex'><FaCheck />Simple neutral colours.</div>
      <div className='text-lg font-normal text-gray-500 flex'><FaCheck />Material expose like metals</div>
      </div>
      <div className='pt-12'><button className='w-48 h-14 rounded bg-pink-700 text-white text-base'>Shop now</button></div>
      </div>
      <div className='pb-24'>
        <Image src={'/sofa.svg'} alt="image"  width={699} height={597} ></Image>
      </div></div>
      
      
      </div> </div>

<div>

  <div className=''>
  <h1 className='text-4xl text-blue-950 text-center pt-11'>Top Categories</h1>

  <div className='flex items-center content-center justify-center pt-14'>
    <div><Image src={'/chair3.png'} alt='image' width={178} height={178}></Image>
    <p className='text-blue-950 text-center'> mini LCW chair<br></br> $56.00</p></div>
   <div> <Image src={'/chair4.png'} alt='image' width={178} height={178}></Image>
   <p className='text-blue-950 text-center'> mini LCW chair<br></br> $56.00</p> </div>
   <div> <Image src={'/p1.png'} alt='image' width={178} height={178}></Image>
   <p className='text-blue-950 text-center'> mini LCW chair<br></br> $56.00</p> </div>
   <div> <Image src={'/chair3.png'} alt='image' width={178} height={178}></Image>
   <p className='text-blue-950 text-center'> mini LCW chair<br></br> $56.00</p></div>
  </div>
  </div>
</div>


</div>
  )
}

export default Hero9
