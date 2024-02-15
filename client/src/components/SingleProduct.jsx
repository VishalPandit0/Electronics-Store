import React, { useState,useContext } from 'react'
import { useParams } from 'react-router-dom'
import RelatedProducts from './RelatedProducts'
import { FaFacebook, FaInstagram, FaLinkedin, FaCartPlus, FaTwitter, FaPinterest } from 'react-icons/fa'
import useFetch from '../hooks/useFetch';
import {context} from '../utils/Context.jsx'

const SingleProduct = () => {
  
const {id} = useParams();
const {data} = useFetch(`/api/products?populate=*&[filters][id]=${id}`)
const product = data?.data?.[0]?.attributes;
const[quantity,setQuantity]=useState(1);
const {handleAddToCart}= useContext(context)

const increment =()=>{
  setQuantity(prevState=>prevState+1);
}
const decrement = () => {
  setQuantity(prevQuantity => {
    if (prevQuantity > 1) {
      return prevQuantity - 1;
    } else {
      return prevQuantity; // Keeps the quantity at 1 if already 1
    }
  });
};

  return (
    <>
    <div className='my-[20px] mx-0 md:my-[75px] '>
      <div className='max-w-[calc(100%-20px)] my-0 mx-auto md:max-w-[1200px] '>
        <div className='flex flex-col md:flex-row'>
          <div className='w-[100%] bg-[rgba(0,0,0,0.07)] md:w-[600px] md:h-[600px] flex-shrink-0 '>
            <img className='w-full block' src={ product?.img?.data?.[0]?.attributes?.url} alt="" />
          </div>
          <div className='flex flex-col pt-[20px] md:py-0 md:px-[35px] '>
            <div className="text-[20px] leading-[28px] mb-[20px] md:text-[24px] md:leading-[32px] ">
             {product?.name}
            </div>
            <span className='text-[24px] leading-[32px] mb-[20px] '>
            &#8377; {product?.price}
            </span>
            <span className='text-[14px] leading-[20px] mb-[20px] md:text-[16px] md:leading-[20px]  ' >
              {product?.desc}
            </span>
            <div className='flex md: mt-[30px]'>
              <div className="w-[fit-content] flex border-[2px] border-[rgba(0,0,0,0.2)] mr-[18px] h-[50px] ">
                <span onClick={decrement} className='text-[18px] flex w-[40px] items-center justify-center cursor-pointer text-[#6b6b6b] border-r-[2px] border-[rgba(0,0,0,0.2)] hover:bg-[rgba(0,0,0,0.07)]  '>-</span>
                <span className='text-[18px] flex w-[60px] items-center justify-center cursor-pointer text-[#6b6b6b] '>{quantity}</span>
                <span onClick={increment} className='text-[18px] flex w-[40px] items-center justify-center cursor-pointer text-[#6b6b6b] border-l-[2px] border-[rgba(0,0,0,0.2)] hover:bg-[rgba(0,0,0,0.07)]'>+</span>
              </div>
              <button onClick={()=>{handleAddToCart(data?.data?.[0], quantity); setQuantity(1)} } className='flex outline-none h-[50px] w-[180px] items-center justify-center text-[16px] text-white bg-[#8e2de2] border-b-[3px] border-[#8e2de2] flex-grow-[1] md:flex-grow-[unset] '>
               <FaCartPlus size={20} />
                ADD TO CART
              </button>
            </div>

            <span className='my-[20px] mx-0 h-[1px] w-full bg-[rgba(0,0,0,0.1)] ' />

            <div className='text-[18px] font-[500] block '>
              <span className='mb-[20px]' >
                Category:
                <span className='text-[16px] ml-[5px] font-[400] text-[#6b6b6b]' >{data?.data?.[0]?.attributes?.categories?.data?.[0]?.attributes?.title}</span>
              </span>

              <span className='mb-[20px] flex'>
                Share:
                <span className='flex relative mt-[5px] text-[16px] font-[400] text-[#6b6b6b]'>
                  <FaFacebook size={16} className='my-0 mx-[5px]' />
                  <FaInstagram size={16}className='my-0 mx-[5px]' />
                  <FaTwitter size={16} className='my-0 mx-[5px]'/>
                  <FaLinkedin size={16} className='my-0 mx-[5px]' />
                  <FaPinterest size={16} className='my-0 mx-[5px]'/>
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <RelatedProducts productID={id} categoryID={product?.categories?.data?.[0]?.id}/>
    </div>
    </>
  )
}

export default SingleProduct
