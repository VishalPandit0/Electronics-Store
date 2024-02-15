import React, { useEffect, useState, useContext } from 'react';
import { IoSearch } from "react-icons/io5";
import { MdFavoriteBorder } from "react-icons/md";
import { FiShoppingCart } from "react-icons/fi";
import CartModal from '../Modals/CartModal';
import SearchModal from '../Modals/SearchModal';
import { useLocation, useNavigate } from 'react-router-dom';
import { context } from '../utils/Context';

const Header = () => {
  const { cartCount } = useContext(context);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
    setActiveLink('home')
  };

  const handleCategoryClick = () => {
    const categorySection = document.getElementById('categories-section');
    if (categorySection) {
      categorySection.scrollIntoView({ behavior: 'smooth' });
      setActiveLink('categories');
    }
  };

  const [scrolled, setScrolled] = useState(false);
  const [cartopened, setCartopened] = useState(false);
  const [Searchopened, setSearchopened] = useState(false);
  const [activeLink, setActiveLink] = useState('home'); 
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {cartopened && <CartModal setCartopened={setCartopened} />}
      {Searchopened && <SearchModal setSearchopened={setSearchopened} />}
      <header className={`flex justify-evenly font-Montserrat bg-black text-white ${scrolled ? 'sticky top-0 z-50 animate-slideDown' : ''}`}>
        <div className='hidden sm:flex m-2 p-5'>
          <ul className='flex justify-evenly space-x-4'>
            <li className={`cursor-pointer relative ${activeLink === 'home' ? 'text-[#8e2de2]' : ''}`} onClick={handleClick}>Home</li>
            <li className={`cursor-pointer relative ${activeLink === 'about' ? 'text-[#8e2de2]' : ''}`}>About</li>
            <li className={`cursor-pointer relative ${activeLink === 'categories' ? 'text-[#8e2de2]' : ''}`} onClick={handleCategoryClick}>Categories</li>
          </ul>
        </div>

        <div onClick={handleClick} className='p-5 text-2xl sm:text-3xl font-bold cursor-pointer mr-0 sm:mr-[7%]'>
          UrbanBazaar
        </div>

        <div className='flex justify-evenly font-bold space-x-4 m-2 p-5'>
          <IoSearch onClick={() => { setSearchopened(true) }} className='cursor-pointer h-5 w-5' />
          <MdFavoriteBorder className='cursor-pointer h-5 w-5' />
          <span onClick={() => { setCartopened(true) }}>
            <FiShoppingCart className='relative cursor-pointer h-5 w-5' />
            {!!cartCount && (<span onClick={() => { setCartopened(true) }} className='absolute p-[2.5px] min-w-[20px] border-0 rounded-[10px] bg-[#8e2de2] text-[12px] text-center ml-[12px] mt-[-30px] cursor-pointer'>
              {cartCount}
            </span>)}
          </span>
        </div>
        <style>{`
          @keyframes slideDown {
            from {
              transform: translateY(-80%);
            }
            to {
              transform: translateY(0);
            }
          }

          .animate-slideDown {
            animation: slideDown 0.5s forwards;
          }
        `}</style>
      </header>
    </>
  );
};

export default Header;
