// this page render when click on ' My Account' in footer


import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div>
         <div className='w-[full] h-[286px] bg-[#F6F5FF]'>
<h1 className='text-4xl relative left-24 top-16 text-blue-950 font-bold '>My Account</h1>
<p className='font-medium text-base text-blue-950 relative left-24 top-16 '>Home Shop <span className='text-pink-700'>My Account</span></p>
      </div>
      <div className='container w-[544px] h-[474px] bg-[#FFFFFF] ml-72'>
        <div className='container w-[433px] h-[374px] bg-[#FFFFFF] ml-14 relative top-10'>
            <h1 className='font-bold text-center text-3xl'>Login</h1>
            <p className='text-gray-500 text-center'>Please login using account detail bellow.</p>
            <div className='pt-5 w-44 '>
            <input className=' w-[432px] h-[47px]  border-2' placeholder='Email Address'></input></div>
           <div className='pt-5'> <input className=' w-[432px] h-[47px] border-2' placeholder='Password'></input></div>
            
            <p className='text-gray-500 text-sm pt-5 pb-5'>Forgot your password?</p>
            
<div><button className='w-[432px] h-[47px] bg-[#FB2E86] text-white text-center '>Sign In</button></div>
<p className='text-gray-500 text-sm text-center pt-12'>Don’t have an Account?Create account</p>
        </div>

      </div>
      <div>
    <Image
  src={"/last.png"}
  alt='last'
  height={93}
  width={904}
  className='relative bottom ml-16 pb-10'
 />
    </div>
    
      
    </div>
  )
}

export default page

