import Image from "next/image"


type Props3 = {
    Image1: string,
    heading: string,
    price:string,
    
    
   
  }
  const  products = ({Image1, heading,price}:Props3) => {
    return (
      <div>
        <div className="container w-[270px] h-[363px]">
            <Image src={Image1} alt='chair' width={201} height={201}/>
            <p className="text-blue-950 text-2xl ml-8">{heading}</p>
           <p className="text-sm text-blue-900 ml-16">{price}</p>
         
        </div>
      </div>
   
      )
    }
    
    export default products
    