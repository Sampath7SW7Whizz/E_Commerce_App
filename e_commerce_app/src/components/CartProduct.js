import React from 'react'
import AddToCart from './AddToCart';

const CartProduct = ({product}) => {
  return (
    <div class="cart product" className='items-center flex justify-between p-4 bg-[#e9e9e9] rounded-md'>
        <div className="flex gap-4 items-center">
            <img className="h-16 rounded-md" src={product.image} alt="product-image"/>
            <div className="" >{product.title}</div>
            <div className='font-bold'>${product.price}</div>
        </div>
        <div class="cart product-left">
            <AddToCart product={product}/>
        </div>
    </div>
  );
}

export default CartProduct;