import React, { useContext, useEffect, useState } from 'react';
import { MdClose } from 'react-icons/md';
import { BsCartX, BsMarkdown } from 'react-icons/bs';
import Cartitems from './Cartitems';
import { context } from '../utils/Context'; 
import { loadStripe } from '@stripe/stripe-js' ;
import { makePaymentReq } from '../utils/api';

const CartModal = ({ setCartopened }) => {
  const { cartSubtotal, cartItems } = useContext(context);
  const [stripe, setStripe] = useState(null); // State to store the Stripe instance

  useEffect(() => {
    const initializeStripe = async () => {
      const stripeInstance = await loadStripe(
        import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY
      );
      setStripe(stripeInstance);
    };

    initializeStripe();
  }, []);

  const handlePayment = async () => {
    try {      
      if (!stripe) {
        console.error('Stripe has not been initialized.');
        return;
      }
  
      const res = await makePaymentReq.post("/api/orders", {
        products: cartItems,
      });
      console.log('Response:', res);
      
      // Log res.data to see its structure
      console.log('Response data:', res.data);
  
      // Check if res.data exists and contains stripeSession
      if (!res.data || !res.data.stripeSession || !res.data.stripeSession.id) {
        console.error('No session ID found in the response:', res);
        return;
      }
  
      const sessionId = res.data.stripeSession.id;
  
      console.log('Redirecting to checkout page with session ID:', sessionId);
      await stripe.redirectToCheckout({
        sessionId: sessionId
      });
  
    } catch (error) {
      console.error('Error occurred while handling payment:', error);
    }
  };
  
  
  
  return (
    <>
      <div className='fixed top-0 left-0 w-full h-full flex justify-end z-[99] '>
        <div onClick={() => { setCartopened(false) }} className='bg-[rgba(0,0,0,0.5)] absolute top-0 left-0 w-full h-full '></div>
        <div className='w-full h-full bg-white flex flex-col animate-slideCart relative z-[1] md:w-[340px] animate-slideCart'>
          <div className='flex items-center justify-end py-[20px] px-[15px] border border-b-[rgba(0,0,0,0.3)]'>
            <span className='flex-grow mb-0 text-[20px] font-[700] uppercase'>
              Shopping Cart
            </span>
            <span className='flex cursor-pointer items-center justify-center gap-[5px] hover:opacity-[0.5]' onClick={() => { setCartopened(false) }}>
              <MdClose className='text-[18px]' />
              <span className='uppercase text-[14px]'>Close</span>
            </span>
          </div>

          {cartItems?.length > 0 ? (
            <>
              <Cartitems />
              <div className='border border-t-[rgba(0,0,0,0.3)]'>
                <div className='py-[20px] px-[15px] border-t-[rgba(0,0,0,0.1)] flex justify-between'>
                  <span className='mb-0 text-[20px] font-[700] uppercase'>Subtotal:</span>
                  <span className='text-[#8e2de2] mb-0 text-[20px] font-[700] uppercase'>&#8377; {cartSubtotal}</span>
                </div>
                <div className='py-[20px] px-[15px]'>
                  <button onClick={handlePayment} className='outline-0 border-0 h-[50px] w-full items-center justify-center text-[15px] text-white bg-[#8e2ed2] border-1 rounded-full border-[#6516aa] hover:bg-white hover:text-[#8e2ed2] hover:border hover:border-[#8e2ed2] '>Checkout</button>
                </div>
              </div>
            </>
          ) : (
            <div className='flex flex-col items-center gap-[20px] mt-[100px]'>
              <BsCartX className='text-[120px] opacity-[0.1]' />
              <span className='uppercase'>No Products in the Cart.</span>
              <button onClick={() => { setCartopened(false) }} className='outline-0 border-0 h-[40px] w-[150px] items-center justify-center text-[13px] text-white bg-[#8e2ed2] border-b-[3px] border-[#6516aa]'>RETURN TO SHOP</button>
            </div>
          )}
        </div>
      </div>

      <style>
        {`
          @keyframes slideCart {
            from {
              transform: translateX(100%);
            }
            to {
              transform: translateX(0);
            }
          }

          .animate-slideCart {
            animation: slideCart 0.3s forwards;
          }
        `}
      </style>
    </>
  );
};

export default CartModal;
