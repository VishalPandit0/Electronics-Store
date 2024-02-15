import React from 'react'
import bannerimg from '../assets/category/banner-img.png'

const Banner = () => {
    return (
        <div className='bg-gradient-to-r from-[#8e2de2] to-[#4a00e0] relative md:h-[calc(100vh-80px)] py-[40px]'>
            <div className='h-[100%] flex relative justify-end flex-col-reverse  items-center  max-w-[calc(100%-20px)] my-0 mx-auto md:flex-row md:max-w-[1208px]'>
                <div className='text-white flex items-center text-center flex-col  md:absolute md:top-[50%] md:left-[50px] md:translate-y-[-50%]'>
                    <h1 className='text-[80px] font-[700] leading-[1] mb-[20px] md:text-[180px]'>
                        SALES
                    </h1>
                    <p className='max-w-[300px] text-[14px] leading-[20px] mb-[20px] md:max-w-[500px] md:text-[18px] md:leading-[24px] md:mb-[40px]  '>

                        "Discover unbeatable deals on cutting-edge electronics! Upgrade your gadgets today and elevate your tech game. Limited-time offers"
                    </p>
                    <div className='flex justify-center space-x-[20px] '>
                        <button className='uppercase text-[13px] font-[600] border-[2px] border-white py-[10px] px-[28px] hover:opacity-[0.6]'>
                            Read more
                        </button>
                        <button className='uppercase text-[13px] font-[700] border-[2px] border-white py-[10px] px-[28px] bg-white text-black hover:opacity-[0.6] '>
                            Shop now
                        </button>
                    </div>
                </div>
                <img className='z-10 relative w-[200px] mb-[20px] md:w-[400px] md:mr-[60px] md:mt-[50px] md:mb-[20px] ' src={bannerimg} alt="" />
            </div>
        </div>
    )
}

export default Banner
