import { useNavigate } from 'react-router-dom';
import React from 'react';

const Category = ({ categories }) => {
  const navigate = useNavigate();
  
  const handleClick = (categoryId) => {
    navigate(`category/${categoryId}`);
  };

  return (
    <div className='my-[25px] mx-0 md:my-[50px]'>
      <div className='flex flex-wrap gap-[10px]'>
        {categories?.data?.map((items) => (
          <div className='bg-black w-[calc(50%-5px)] cursor-pointer overflow-hidden md:w-[calc(25%-10px)]' onClick={() => handleClick(items.id)} key={items.id}>
            <img className='w-[100%] block transition ease-linear duration-[0.2s] hover:scale-[1.2]' src={items?.attributes?.cat_img?.data?.attributes?.formats?.thumbnail?.url} alt='' />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
