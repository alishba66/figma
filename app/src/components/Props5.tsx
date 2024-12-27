import React from 'react'
import Image from 'next/image'
type Props5={
    Image1:string,
    name:string,
    Image2:string,
    price:string
}


const Props5 = ({Image1,name,Image2,price}:Props5) => {
  return (
    <div>
       <div className="container w-[210px] h-[500px] ml-12">
            <Image src={Image1} alt='dress' width={270} height={340}/>
            <p className=" text-blue-950 text-[12px] ml-2 font-bold ">{name}</p>
            <Image src={Image2} alt='stars' width={70} height={30} className='flex relative bottom-4 ml-36'/>
            <p className="text-sm text-blue-900 ml-2">{price}</p>
    
        </div>
    </div>
  )
}

export default Props5
