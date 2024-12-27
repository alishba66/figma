import React from 'react'
import Image from 'next/image'
import Hero4 from '@/components/Hero4'
const page = () => {
  return (
    <div>
      <div className='w-[full] h-[286px] bg-[#F6F5FF]'>
<h1 className='text-4xl relative left-24 top-16 text-blue-950 font-bold '>About Us</h1>
<p className='font-medium text-base text-blue-950 relative left-24 top-16 '>Home Shop <span className='text-pink-700'>About Us</span></p>
      </div>
      <div className='ml-10 pt-8'>
        <Image src={'/aboutus.png'} alt='aboutus' width={500} height={390}/>
      </div>
      <h1 className='text-2xl text-blue-900 flex relative bottom-80 left-[550px] font-bold'>Know About Our Ecomerce<br></br>
Business, History</h1>
<p className='flex relative bottom-80 left-[550px] pt-3 text-gray-400 text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices <br></br>mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae<br></br>
 eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.</p>
 <button className='w-[110px] h-[40px] bg-pink-500 relative bottom-64 left-[550px] text-white'>Contact us</button>




 <div className=' text-center ml-20 text-3xl font-bold text-[#151875] pt-20'>Our Features</div>
    <div className='flex pb-5 '>
    <  Hero4 ImageUrl='/s1.png' heading='24/7 Support' para='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.'/>
    <  Hero4 ImageUrl='/s2.png' heading='24/7 Support' para='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.'/>
    <  Hero4 ImageUrl='/s3.png' heading='24/7 Support' para='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.'/>
    <  Hero4 ImageUrl='/s4.png' heading='24/7 Support' para='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.'/>
    </div>

    <h1 className='text-4xl text-center pt-16 font-bold'>Our Client Say!</h1>
  <Image src={'/client.png'} alt='clients' width={191} height={64} className='pt-10 ml-[435px]'/>
  <h2 className='text-2xl font-bold pt-10 ml-[450px] '>Selina Gomez</h2>
  <p className='pt-1 text-gray-400 ml-[450px]'>Ceo At Webecy Digital</p>
  <div className='text-gray-400 pt-6'>
  <p className='ml-52'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis ultrices quam vel dui sollicitudin <br></br></p>
 <p className='ml-56'> aliquet id arcu. Nam vitae a enim nunc, sed sapien egestas ac nam. Tristique ultrices dolor<br></br></p>
  <p className='ml-[420px]'> aliquam lacus volutpat praesent.</p>
    </div>
    <Image src={'/pink.png'} alt='line' width={73} height={3} className='ml-[500px] pt-10 pb-32'/>
    </div>
  )
}

export default page
