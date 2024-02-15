import {React, createContext, useEffect, useState} from "react"

export const context = createContext();

const AppContext = ({children}) =>{
    const[categories, setCategories] = useState();
    const[products, setProducts] = useState();
    const[cartItems, setCartItems ] = useState([]);
    const[cartCount, setCartCount ] = useState(0);
    const[cartSubtotal, setCartSubtotal ] = useState(0);
  


    useEffect(()=>{
        let count = 0;
        cartItems.map((item)=>(count+=item.attributes.quantity));
        setCartCount(count);

        let subtotal = 0;
        cartItems.forEach((item)=> {
            subtotal += item.attributes.quantity * item.attributes.price;
        });
        setCartSubtotal(subtotal);
    },[cartItems])   

    const handleAddToCart =(product, quantity)=>{
     let items = [...cartItems];
     let index = items.findIndex((p)=>p.id===product.id)
     if(index!==-1){
        items[index].attributes.quantity += quantity
        setCartItems(items);
        alert('Item added to cart')
     }

     else{
        product.attributes.quantity = quantity;
        items = [...items, product]
        setCartItems(items);
        alert('Item added to cart')
     }
    };

    const handleRemoveFromCart =(product)=>{
        let items = [...cartItems]
        items = items.filter((p)=>p.id !== product.id)
        setCartItems(items);
    }
    const handleCartProductQuantity =(type, product)=>{
        let items = [...cartItems];
        let index = items.findIndex((p)=>p.id===product.id)
        if(type==='inc'){
            items[index].attributes.quantity += 1;
        }    
        else if(type==='dec'){
            if(items[index].attributes.quantity===1){
                return 1;
            }
            else{
                items[index].attributes.quantity -= 1;  
            }
        }
        setCartItems(items);
    }


 return <context.Provider
  value={{categories,
    setCategories,
    products,
    setProducts,
    cartItems,
    setCartItems,
    cartCount,
    setCartCount,
    cartSubtotal,
    setCartSubtotal,
    handleAddToCart,
    handleRemoveFromCart,
    handleCartProductQuantity}}
   >{children}</context.Provider>
};

export default AppContext;
