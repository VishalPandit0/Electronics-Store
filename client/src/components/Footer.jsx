import React from 'react'
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from 'react-icons/fa';
import Payments from '../assets/category/payments.png'


const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  
  return (
    <div className='w-full' >
      <div className='flex py-[50px] px-[20px] max-w-[1200px] my-0 mx-auto flex-wrap space-x-[20px] md:justify-between md:px-0  '>

    <div className='max-w-[300px] ml-[20px]'>
      <div className='mb-[20px] text-[14px]  '>About</div>
      <div className='text-[rgba(0,0,0,0.5)] text-[14px] '>"Welcome to UrbanBazaar! Your go-to online store for everything you need. Shop now and experience convenience at your fingertips!"</div>
    </div>

    <div className='max-w-[300px]  mt-3 md:mt-0'>
      <div className='mb-[20px] text-[14px] '>
      Contact
      </div>

      <div className='max-w-[300px]'>
        <div className='flex mb-[10px]'>
          < FaLocationArrow className='flex-shrink-0 text-[14px] mr-[10px] mt-[4px] text-[rgba(0,0,0,0.5)] '/>
          <p className='text-[rgba(0,0,0,0.5)] text-[14px] '>23 Main Street, NewDelhi, DELHI</p>
        </div>
        <div className='flex mb-[10px]'>
          <FaMobileAlt className='flex-shrink-0 text-[14px] mr-[10px] mt-[4px] text-[rgba(0,0,0,0.5)] '/>
          <p className='text-[rgba(0,0,0,0.5)] text-[14px] '>Phone: +91 555-123-4567</p>
        </div>
        <div className='flex mb-[10px]'>
          <FaEnvelope className='flex-shrink-0 text-[14px] mr-[10px] mt-[4px] text-[rgba(0,0,0,0.5)] '/>
          <p className='text-[rgba(0,0,0,0.5)] text-[14px] '>Email: info@urbanbazaar.com</p>
        </div>
      </div>
    </div>

    <div className='max-w-[300px]  mt-3 md:mt-0'>
      <div className='mb-[20px] text-[14px] '>
        Categories
      </div>
      <div className='text-[rgba(0,0,0,0.5)] text-[14px] flex flex-col space-y-[10px] '>
          <span>Headphone</span>
          <span>Smart Watches</span>
          <span>Bluetooth Speaker</span>
          <span>Wireless Earbuds</span>
          <span>Home Threatre</span>
          <span>Projectors</span>          
      </div>
    </div>
    <div className='max-w-[300px] mt-3 md:mt-0 '>
      <div className='mb-[20px] text-[14px] '>
      Pages
      </div>
      <div className='text-[rgba(0,0,0,0.5)] text-[14px] flex flex-col mb-[10px] space-y-[10px]'>
         <span>Home</span>
         <span>About</span>
         <span>Privacy Policy</span>
         <span>Returns</span>
         <span>Terms & Conditions</span>
         <span>Contact Us</span>
      </div>
    </div>

      </div>
    
      <div className='p-[15px] md:p-[17px] space-y-[10px] md:space-y-0 md:border-t border-t-2 border-[rgba(0,0,0,0.1)] flex flex-col md:flex-row text-center md:text-left items-center justify-center md:justify-between capitalize '>
        <div className='text-[12px] text-[rgba(0,0,0,0.5)]'> 
        {`URBANBAZAAR ${year} CREATED BY VISHAL. PREMIUM E-COMMERCE STORE`}
        </div>
        <img className='h-[20px] ' src={Payments} alt="" />
      </div>
    
    </div>
  )
}

export default Footer
