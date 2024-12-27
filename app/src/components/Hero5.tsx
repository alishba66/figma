import React, { Component } from 'react'
import  Hero4 from '../components/Hero4'
const Hero5 = () => {
  return (
    <div>
      <div className=' text-center text-2xl font-bold text-[#151875] pt-28'>What Shopex Offer!   </div>
    <div className=' flex mr-10'>
    <  Hero4 ImageUrl='/s1.png' heading='24/7 Support' para='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.'/>
    <  Hero4 ImageUrl='/s2.png' heading='24/7 Support' para='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.'/>
    <  Hero4 ImageUrl='/s3.png' heading='24/7 Support' para='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.'/>
    <  Hero4 ImageUrl='/s4.png' heading='24/7 Support' para='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.'/>
    </div>
  
     </div>
  )
}

export default Hero5