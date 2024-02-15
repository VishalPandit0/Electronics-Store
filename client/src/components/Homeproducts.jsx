import React from 'react'
import SameCatProducts from './SameCatProducts'

const Homeproducts = ({innerpage,Heading,products}) => {
  return (
    <div className='my-[50px] mx-[0] md:my-[75px]'>
     {!innerpage && <div className='mb-[20px] text-[18px] font-[500] uppercase md:mb-[35px] md:text-[24px] after:content-[""] after:block after:bg-[#8e2de2] after:w-[50px] after:h-[3px] after:mt-[5px] md:after:mt-[10px]   '>
       {Heading}
       
      </div>}
      <div className='flex flex-wrap gap-[10px] md:gap-[20px]'>
        {
          products?.data?.map((items)=>(
            <SameCatProducts key={items.id} id={items.id} data={items.attributes}   />
          ))
        }
      </div>
    </div>
  )
}

export default Homeproducts
