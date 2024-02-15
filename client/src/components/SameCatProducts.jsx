import { useNavigate } from 'react-router-dom';
import React from 'react';

const SameCatProducts = ({ id, data }) => {
    const navigate = useNavigate();
    
    const handleClick = () => {
        navigate(`/product/${id}`);
    };
    
    
    return (
        <div onClick={handleClick} className='w-[calc(50%-5px)] mb-[20px] md:w-[calc(25%-15px)]'>
            <div className='bg-[rgba(0,0,0,0.07)] w-full h-[180px] flex items-center p-[25px] mb-[10px] md:h-[350px] '>
                <img className='transition-all ease-in-out duration-300 hover:scale-125 block w-full' src={data.img.data[0].attributes.formats.small.url} alt="" />
            </div>
            <div>
                <div className='text-[14px] block text-ellipsis text-nowrap overflow-hidden md:text-[16px] md:mb-[10px] '>
                    {data?.name}
                </div>
                <div className='text-[18px] md:text-[24px]'>
                    &#8377; {data?.price}
                </div>
            </div>
        </div>
    );
};

export default SameCatProducts;
