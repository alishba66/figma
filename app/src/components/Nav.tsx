import React from 'react'
import { MdOutlineMailOutline } from "react-icons/md"
import { FiPhoneCall } from "react-icons/fi"
import { FaAngleDown } from "react-icons/fa"
import { LuUser } from "react-icons/lu"
import { CiHeart } from "react-icons/ci"
import { IoCartOutline } from "react-icons/io5"
import Link from "next/link"
import { IoSearchSharp } from "react-icons/io5"

const Nav = () => {
  return (
   <div>
    <div className='bg-[#7E33E0] max-w-7xl w-full h-[44px]  text-white flex gap-16 '>
<div className='flex gap-4 ml-10 pt-3'><MdOutlineMailOutline/> mhhasanul@gmail.com</div>
<div className='flex gap-4 pt-3'> < FiPhoneCall/> (12345)67890</div>
<div className='flex list-none gap-14 relative top pt-3'><li className='flex'>ENGLISH <FaAngleDown /></li>
   <li className='flex '>USD <FaAngleDown /></li>
   <li className='flex'>Login <LuUser /></li>
   <li className='flex'>wishlist <CiHeart /> </li>
   <li><IoCartOutline /></li>
   </div>
    </div>

    <div className='flex'>
      <div className='w-[1177px] h-[40px]  text-3xl font-bold flex ml-48 pt-2'>Hekto</div>
      <ul className='flex gap-10 pt-3 mr-40'>
        <Link href={'/'}><li><span className='text-pink-600'>Home</span></li></Link>
        <Link href={'./aboutus'}><li>Pages</li></Link>
       <Link href='./Product'> <li>Products</li></Link>
        <Link href='./blog'><li>Blog</li></Link>
        <Link href='./Shoppingcurt'><li>Shop</li></Link>
        <Link href='./contact'><li>Contact</li></Link>
        <li className='bg-pink-600 w-[41px] h-[30px]  content-center   text-white'><IoSearchSharp /></li>
      </ul>
    </div>
      
   
    
   </div>
  )
}

export default Nav
