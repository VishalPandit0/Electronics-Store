import React from 'react'
import { useParams } from 'react-router-dom'
import Homeproducts from './Homeproducts'
import useFetch from '../hooks/useFetch';


const SingleCategory = () => {

const {id} = useParams();
const {data} = useFetch(`/api/products?populate=*&[filters][categories][id]=${id}`)

  return (
    <>
    <div className='my-[30px] mx-0 md:mx-[75px]'>
        <div className='max-w-[calc(100%-20px)] my-0  mx-auto md:max-w-[1200px]'>
            <div className='text-[24px] md:text-[34px] '>
            {data?.data?.[0]?.attributes?.categories?.data?.[0]?.attributes?.title}
            </div>
            <div  className='my-[20px] mx-0 md:my-[50px]'>
            <  Homeproducts innerpage={true } products={data}/>
            </div>
        </div>
    </div>
    </>
  )
}

export default SingleCategory
