import React, { useState } from 'react'
import {MdClose} from 'react-icons/md'
import prod from '../assets/products/earbuds-prod-3.webp'
import useFetch from '../hooks/useFetch'
import { useNavigate } from 'react-router-dom'


const SearchModal = ({setSearchopened}) => {
  const[query,setQuery]=useState('')
  const navigate = useNavigate();

  let {data} = useFetch(`/api/products?populate=*&filters[name][$contains]=${query}`);

  if(!query.length){
    data = null;
  }



  return (
    <div className='fixed w-full h-full z-[999] top-0 left-0 bg-white animate-slideSearch '>
      <form className='relative w-full flex justify-center py-[5px] px-[50px] border-b-[1px] mb-2 border-[rgba(0,0,0,0.1)] md:py-[6px] md:px-[0] cursor-pointer ' action="/">
        <input
        value={query}
        onChange={(e)=>{setQuery(e.target.value)}}
        className='w-full max-w-[1200px] h-[30px] text-center text-[20px] font-[600] text-black outline-none border-0  md:text-[30px] md:h-[50px] '
         type="text" autoFocus autoComplete='off' placeholder='Search Products Here...' name="" id="" />
        <MdClose className='absolute text-[20px] right-[20px] top-[50%] translate-y-[-50%] border-0 rounded-[50%] cursor-pointer hover:bg-[rgba(0,0,0,0.1)]' onClick={()=>{setSearchopened(false)}}/>
      </form>
      <div className='max-w-[calc(100%-20px)] my-0 mx-auto md:max-w-[800px] border-0 rounded-full cursor-pointer  '>
        <div className='h-[calc(100vh-41px)] my-20px mx-0 md:h-[calc(100vh-63px)] overflow-auto '>
          {
            data?.data?.map(items=>(
          <div onClick={()=>{navigate('/product/' + items.id); setSearchopened(false)}} key={items.id} className='flex items-center gap-[10px] py-[10x] px-0 border-b border-[rgba(0,0,0,0.1)] hover:bg-[rgba(0,0,0,0.06)]'>
            <div  className=" w-[40px] h-[40px] flex-shrink-0 md:w-[60px] md:h-[60px]  ">
              <img className="w-full h-full" src={items?.attributes?.img?.data?.[0]?.attributes?.url} alt="" />
            </div>
            <div className="overflow-hidden flex flex-col justify-center">
            <div className="text-ellipsis whitespace-nowrap overflow-hidden text-[16px] leading-[1] mb-[10px] font-[600] block  ">{items.attributes.name} </div>
            <div className="text-ellipsis whitespace-nowrap overflow-hidden text-[14px] leading-[1] mb-[10px] text-[rgba(0,0,0,0.5)] block ">{items.attributes.desc}</div>
          </div>
            </div>
            ))
          }
        </div>
      </div>
           
      <style>
    {`
  @keyframes slideSearch {
    from {
      transform: translatey(-100%);
    }
    to {
      transform: translatey(0);
    }
  }
  
  .animate-slideSearch {
    animation: slideSearch 0.3s  forwards;
  }

`}
    </style>
    </div>
  )
}

export default SearchModal
