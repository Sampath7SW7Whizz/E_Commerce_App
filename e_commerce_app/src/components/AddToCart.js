import React, { useCallback } from 'react';
import { useCartContext } from '../context/CartContext';

function AddToCart({ product }){
  const { cart, addToCart,removeItems} = useCartContext();

  const handleAddToCart = useCallback(() => {
    addToCart(product);
  }, [addToCart, product]);  // Ensure that 'addToCart' and 'product' are the only dependencies


  const handleRemoveFromCart = useCallback(() => {
    removeItems(product);
  }, [removeItems, product]);


  if (cart?.[product?.id]) {
    return (
      <div className='flex justify-between text-xs items-center m-2 gap-2'>
        <div
          onClick={handleRemoveFromCart}
          className='bg-green-500 rounded-md p-2 cursor-pointer items-center'>
          -
        </div>
        <div>{cart[product.id].quantity}</div>
        <div
          onClick={handleAddToCart}
          className='bg-green-500 rounded-md p-2 cursor-pointer items-center'>
          +
        </div>
        
      </div>
    );
  } else {
    return (
      <div
        onClick={handleAddToCart}
        className='bg-green-500 rounded-md p-2 cursor-pointer items-center'>
        Add to Cart
      </div>
    );
  }
};

export default AddToCart;
