import React from 'react';

const Product = ({ product }) => {
  return (
    <div className='flex w-[200px] flex-wrap flex-col bg-blue-200 p-2 rounded-md'>
      {/* Use object-cover to maintain aspect ratio */}
      <img  className="w-full h-48  rounded-md" src={product.image} alt={product.title} />
      <div className='text-sm font-bold '>{product.title}</div>
      <div>Price:${product.price}</div>
    </div>
  );
};

export default Product;
