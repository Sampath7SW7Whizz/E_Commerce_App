import React from 'react';
import AddToCart from './AddToCart';

const Product = ({ product }) => {
  return (
    <div className='flex w-[200px] flex-wrap flex-col bg-red-200 p-2 rounded-md '>
      {/* Use object-cover to maintain aspect ratio */}
      <img  className="w-full h-48  rounded-md" src={product.image} alt={product.title} />
      <div className='text-sm font-bold '>{product.title}</div>
      <div className='flex items-center justify-between'>
      <div>Price:${product.price}</div>
      <AddToCart product={product}/>
      </div> 
    </div>
  );
};

export default Product;
