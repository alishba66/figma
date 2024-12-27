import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const page = () => {
  return (
    <div>
      <div className='w-[full] h-[286px] bg-[#F6F5FF] '>
<h1 className='text-4xl relative left-24 top-16 text-blue-950 font-bold '>Shopping Curt</h1>
<p className='font-medium text-base text-blue-950 relative left-24 top-16 '>Home Shop <span className='text-pink-700'> . shopping curt</span></p>
      </div>
      <div className='flex'>
<div>
    <ul className=''>
        <li className='text-blue-900 font-bold pt-8 ml-3'>Products</li>
        <li className='pt-4  ml-3 flex'><Image src={'/e1.png'} alt='bag' width={83} height={87}/><div className=' text-sm w-64 ml-2 pt-3'>Ut diam consequat</div><div className='text-gray-400 relative top-7 text-sm  right-44 pt-2'>Color:Brown<br></br>Size:XL</div></li>
        <li className='pb-4 ml-3 pt-4 flex'><Image src={'/e2.png'} alt='bag' width={83} height={87}/><div className=' text-sm ml-2 pt-3'>Vel faucibus posuere</div><br></br><div className='text-gray-400 relative top-7  text-sm right-32 pt-2'>Color:Brown<br></br>Size:XL</div></li>
        <li className='pb-4 ml-3 pt-4 flex'><Image src={'/e3.png'} alt='bag' width={83} height={87}/><div className=' text-sm ml-2 pt-3'>Ac vitae vestibulum</div><br></br><div className='text-gray-400 relative top-7  text-sm right-28 pt-2'>Color:Brown<br></br>Size:XL</div></li>
        <li className='pb-4 ml-3 pt-4 flex'><Image src={'/e4.png'} alt='bag' width={83} height={87}/><div className='text-sm ml-2 pt-3'>Elit massa diam</div><br></br><div className='text-gray-400 relative top-7  text-sm right-24 pt-2'>Color:Brown<br></br>Size:XL</div></li>
        <li className='pb-4 ml-3 pt-4 flex'><Image src={'/e5.png'} alt='bag' width={83} height={87}/><div className=' text-sm ml-2 pt-3'>Proin pharetra elementum</div><br></br><div className='text-gray-400 text-sm relative top-8 right-40 pt-2'>Color:Brown<br></br>Size:XL</div></li>
    </ul>
</div>
  <div><button className='w-[110px] h-[34px] bg-[#FB2E86] text-white text-center relative top-[700px] right-80'>Update Curt</button></div>
<div>
    <ul className=''>
        <li className='text-blue-900 font-bold pt-8 relative right-32 '>Price</li>
        <li className='pb-20 pt-14 relative right-32'>$32.00</li>
        <li className='pb-20 relative right-32'>$32.00</li>
        <li className='pb-20 relative right-32'>$32.00</li>
        <li className='pb-20 relative right-32'>$32.00</li>
        <li className='pb-20 relative right-32'>$32.00</li>
    </ul>
</div>
      
      <div>
        <ul>
            <li className='text-blue-900 font-bold pt-8 relative right-12'>Quantity</li>
            <li><Image src={'/+-.png'} alt='quantity' width={51} height={15} className='pb-24 pt-14 relative right-12'/></li>
            <li><Image src={'/+-.png'} alt='quantity' width={51} height={15} className='pb-24 relative right-12'/></li>
            <li><Image src={'/+-.png'} alt='quantity' width={51} height={15} className='pb-24 relative right-12'/></li>
            <li><Image src={'/+-.png'} alt='quantity' width={51} height={15} className='pb-24 relative right-12'/></li>
            <li><Image src={'/+-.png'} alt='quantity' width={51} height={15} className='pb-24 relative right-12'/></li>
        </ul>
      </div>

      <div>
    <ul className=''>
        <li className='text-blue-900 font-bold ml-6 pt-8'>Totle</li>
        <li className='pb-20 pt-14 ml-6'>£219.00</li>
        <li className='pb-20 ml-6'>£219.00</li>
        <li className='pb-20 ml-6'>£219.00</li>
        <li className='pb-20 ml-6'>£219.00</li>
        <li className='pb-20 ml-6'>£219.00</li>
    </ul>
</div>
<div><button className='w-[110px] h-[34px] bg-[#FB2E86] text-white text-center relative top-[650px] right-16'>Clear Curt</button></div>

<div  className='text-blue-900 font-bold text-center pt-8 '>Cart Totals
    <div className='container w-[290px] h-[284px] bg-[#F4F4FC] relative top-7'>
    <div className='text-blue-900 flex gap-16 text-2xl pt-8 ml-5'>Subtotals:<p>£219.00</p></div>
    <div className='text-blue-900 flex gap-16 text-2xl pt-8 ml-5'>Totals:<p>£325.00</p></div>
    <p className='text-gray-400 text-sm pt-8 ml-5'>Shipping & taxes calculated at checkout</p>
    <div className='pt-8 '>
    <button className='w-[250px] h-[40px] bg-[#19D16F] text-white text-center'>Proceed To Checkout</button></div>
    </div></div>
    <div className='relative top-7 right-[290px] pt-96 '>
    <div className='text-blue-900 font-bold ml-10 text-center flex relative bottom-3'>Calculate Shopping</div>
    <div className='bg-[#F4F4FC] w-[290px] h-[284px] '>
        <p className='text-gray-400 pt-8 pb-4 ml-6'>Bangladesh</p>
        <p className='text-gray-400 pb-8 ml-6'>Mirpur Dhaka - 1200</p>
        <p className='text-gray-400 pb-8 ml-6'>Postal Code</p>
        <div className='pt-6 ml-6'>
    <Link href='./ordercompleted'><button className='w-[179px] h-[41px] bg-[#FB2E86] text-white text-center'>Calculate Shiping</button></Link></div>
    </div>
    </div>
</div>
<div className='pb-36'></div>
    </div>
   
  
  
  )
}

export default page
