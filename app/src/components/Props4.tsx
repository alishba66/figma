import React from 'react'
import Image from 'next/image'

type Props4 = {
    Image1: string,
    heading: string,
    price:string,
    para:string,
    Image2:string,
     }
     const  Shoplist = ({Image1, heading,price, para,Image2}:Props4) => {
        return (
          <div>
           


<div className=" container flex w-[1141px] h-[254px] items-center space-x-8 pl-28">
  <Image src={Image1} alt="chair" width={313} height={217} />

  <div className="flex flex-col space-y-4">
    <p className="text-blue-800 font-bold text-2xl pt-20">{heading}</p>
    <p className="text-sm text-blue-900">{price}</p>
    <p className="text-sm text-gray-400 ">{para}</p>
    <Image src={Image2} alt="chair" width={150} height={100} className='pb-16'/>
</div>
</div>
          </div>
       
          )
        }
        export default Shoplist