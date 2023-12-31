import { createContext, useContext, useState,useCallback } from "react";

const CartContext=createContext();

function CartProvider({children}){
    const[cart,setCart]=useState({});

    const addToCart=useCallback((product)=>{
        // case 1 we dont have that product in the cart
        //by using spread we copy cart obj to new cart newly now it point to newboj alone
        const newCart={...cart};
        if(newCart[product.id]){
         const newProduct={...newCart[product.id]};
         newProduct.quantity+=1;
         newCart[product.id]=newProduct;
        }else{
         const newProduct={
             ...product,
             quantity:1
         }
         newCart[newProduct.id]=newProduct;
        }
        setCart(newCart);
        //i have that product in the cart
        
     },[setCart,cart]);

    //remove item--------------->
     const removeItems=useCallback((product)=>{
        const newCart={...cart};

        //guardclause
        if(!newCart[product.id]) return;

        if(newCart[product.id].quantity===1 ){
           delete newCart[product.id];
        }else{
            const newProduct={...newCart[product.id]};
            newProduct.quantity-=1;
         newCart[product.id]=newProduct;
        }
        setCart(newCart);
       },[setCart,cart])

   return (
   <CartContext.Provider value={{cart,addToCart,removeItems}}>
    {children}
    </CartContext.Provider>
   );
}

export const useCartContext=()=>useContext(CartContext);

export default  CartProvider;