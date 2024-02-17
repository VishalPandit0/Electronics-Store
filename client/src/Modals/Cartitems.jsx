import {React,useContext} from "react";
import { MdClose } from "react-icons/md";
import {context} from '../utils/Context.jsx'

const Cartitems=()=>{

  const {cartItems, handleRemoveFromCart, handleCartProductQuantity, cartSubtotal} = useContext(context)


    return(
        <div className="flex-grow overflow-auto ">
          {
            cartItems.map((items)=>(

         <div key={items.id} className="py-[20px] px-[15px] flex gap-[10px] hover:bg-[rgba(0,0,0,0.08)]">
            <div className=" w-[60px] h-[60px] flex-shrink-0  ">
                <img className="w-full h-full" src={ items?.attributes?.img?.data?.[0]?.attributes?.url} alt="" />
            </div>
            <div className="overflow-hidden relative">
                <span className="text-ellipsis whitespace-nowrap overflow-hidden text-[16px] leading-[1] mb-[10px] font-[600] block pr-[25px] ">{items?.attributes?.name}</span>
                <MdClose onClick={()=>{handleRemoveFromCart(items)}} className="flex top-0 right-0 absolute cursor-pointer"/>
                <div className="w-[fit-content] flex border-[1px] border-[rgba(0,0,0,0.2)] mb-[8px] h-[30px] ">
                <span onClick={()=>{handleCartProductQuantity('dec',items)}} className='text-[18px] flex w-[30px] items-center justify-center cursor-pointer text-[#6b6b6b] border-r-[1px] border-[rgba(0,0,0,0.2)] hover:bg-[rgba(0,0,0,0.07)]  '>-</span>
                <span className='text-[18px] flex w-[40px] items-center justify-center cursor-pointer text-[#6b6b6b] '>{items?.attributes?.quantity}</span>
                <span onClick={()=>{handleCartProductQuantity('inc',items)}} className='text-[18px] flex w-[40px] items-center justify-center cursor-pointer text-[#6b6b6b] border-l-[2px] border-[rgba(0,0,0,0.2)] hover:bg-[rgba(0,0,0,0.07)]'>+</span>
              </div>
              <div className="flex items-center gap-[5px] text-[12px] font-[600] ">
                <span className="text-[#8e2de2]">{items?.attributes?.quantity}</span> <span>x</span> <span className="text-[#8e2de2]">&#8377;{items?.attributes?.price}</span>
              </div>
            </div>
         </div>
            ))
          }
        </div>
    )
}

export default Cartitems