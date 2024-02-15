import React from 'react'
import newsletter from '../assets/category/newsletter-bg.jpeg';
import {FaFacebook ,  FaInstagram , FaLinkedin} from 'react-icons/fa'
import { AiFillTwitterCircle } from "react-icons/ai";


const Newsletter = () => {
  return (
    <div className='w-[100%] h-[400px] md:bg-center flex items-center'  style={{backgroundImage: `url(${newsletter})`,  backgroundRepeat: `no-repeat` , backgroundsize:`cover`}}>
      <div className='flex flex-col text-center items-center w-full my-0 mx-auto'>
        <div className='mb-[15px] uppercase text-[rgba(0,0,0,0.5)]'>NEWSLETTER</div>
        <div className='mb-[28px] text-[22px] leading-[30px] font-[500] uppercase py-0 px-[30px] md:text-[28px]'>SIGN UP FOR LATEST UPDATES AND OFFER</div>
        <div className='flex space-x-[5px] mb-[10px] '>
          <input className='w-[200px] h-[40px] border-[1px] border-[rgba(0,0,0,0.2)] py-0 px-[12px] text-[16px] outline-none md:w-[300px]' type="text" /> 
          <button className='outline-[0] border-0 h-[40px] w-[100px] flex items-center justify-center text-[16px] text-white bg-[#8e2de2] border-b-[3px] border-[#8e2de2] md:w-[120px]'>SUBSCRIBE</button>
        </div>
        <div className='mb-[20px] text-[14px] text-[rgba(0,0,0,0.5)]'>Will be used in accordance with our Privacy Policy</div>

        <div className='flex space-x-[10px]'>
          <FaFacebook size={20}/> 
          <AiFillTwitterCircle size={21} />
          <FaInstagram size={20}/> 
          <FaLinkedin size={20}/>
          </div>
      </div>
    </div>
  )
}

export default Newsletter
