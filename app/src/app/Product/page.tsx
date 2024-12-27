//this page is render when click the the navbar on 'product'//


import React from 'react'
import Props3 from "@/components/Props3"
import Image from  'next/image'


const page = () => {
  return (
    <div >
      <div className='w-[full] h-[286px] bg-[#F6F5FF]'>
<h1 className='text-4xl relative left-24 top-16 text-blue-950 font-bold '>Shop Grid Default</h1>
<p className='font-medium text-base text-blue-950 relative left-24 top-16 '>Home Shop <span className='text-pink-700'> Shop Grid Default</span></p>
      </div>
      <div className='flex gap-4'><div>
        <h2 className='text-xl text-blue-900 pl-16 pt-24'>Ecommerce Acceories & Fashion item </h2>
        <p className=' text-gray-500 pl-16 pb-24'>About 9,620 results (0.62 seconds)</p>
      </div>
      <div className='flex relative top-28 gap-9'>
      <div>PerPage:
        <input id='Per Page' type='text' className='border-2 w-[60px] '/>
      </div>
      <div>Sort By:
        <input id='Sort By' type='text' placeholder='Best Match' className='border-2 w-[100px] '/>
      </div>
      <div>View:
        <input id='View:' type='text' className='border-2 w-[130px] '/>
      </div>
    </div></div>
<div className='flex '>
    <Props3 Image1='/c1.png' heading='Vel elit euismod 'price='$26.00 $42.00' />
    <Props3 Image1='/c2.png' heading='Vel elit euismod 'price='$26.00 $42.00' />
    <Props3 Image1='/c3.png' heading='Vel elit euismod 'price='$26.00 $42.00'  />
    <Props3 Image1='/c4.png' heading='Vel elit euismod 'price='$26.00 $42.00' />
    </div>
    <div className='flex'>
    <Props3 Image1='/c5.png' heading='Vel elit euismod 'price='$26.00 $42.00'  />
    <Props3 Image1='/c6.png' heading='Vel elit euismod 'price='$26.00 $42.00'/>
    <Props3 Image1='/c7.png' heading='Vel elit euismod 'price='$26.00 $42.00' />
    <Props3 Image1='/c8.png' heading='Vel elit euismod 'price='$26.00 $42.00' />
    </div>
    <div className='flex'>
    <Props3 Image1='/c9.png' heading='Vel elit euismod 'price='$26.00 $42.00'   />
    <Props3 Image1='/c10.png' heading='Vel elit euismod 'price='$26.00 $42.00' />
    <Props3 Image1='/c11.png' heading='Vel elit euismod 'price='$26.00 $42.00'  />
    <Props3 Image1='/c12.png' heading='Vel elit euismod 'price='$26.00 $42.00' />
  
    </div>
    
    <div className='flex'>
    
    </div>
    <div>
    <Image
  src={"/last.png"}
  alt='last'
  height={93}
  width={904}
  className='relative bottom ml-16'
 />
    </div>
    
    </div>
  )
}

export default page
