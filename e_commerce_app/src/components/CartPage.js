import React,{useMemo} from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CartProduct from './CartProduct';
import { cartItemsSelector, totalItemsSelector } from '../selectors/cart';

const CartPage = () => {
  const cart=useSelector((state)=>state.cart);

  const cartTotal=useSelector(totalItemsSelector);
 
  const cartItems=useSelector(cartItemsSelector);

  /**
   * const cartItems = useMemo(() => {
    let totalItems = 0;
    if (Object.keys(cart).length > 0) {
      Object.keys(cart).forEach((productId) => {
        totalItems += cart[productId].quantity;
      });
    }
    return totalItems;
  }, [cart]);

   */


  

  if(cartItems===0){
    return(
        <div>
            Hey your cart is Empty! Please add Something
            <Link className="text-blue-600 underline ml-10" to="/products/electronics">Go to Products</Link>
        </div>
    )
  }else{
    return(
        <div className='flex flex-col p-4 gap-4'>
           { Object.keys(cart).map((productId)=>(
            <CartProduct key={productId} product={cart[productId]}/>
           ))}
           <div className='cart-total'>
            Total for this cart would be ${cartTotal}
           </div>
        </div>
    )
  }
}

export default CartPage;