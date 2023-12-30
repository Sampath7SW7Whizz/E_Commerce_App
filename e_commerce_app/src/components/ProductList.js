import React from 'react'
import useApi from '../hooks/useApi';
import Product from './Product';

const ProductList = ({selectedCategory}) => {
  const{loading,error,data}=useApi(`https://fakestoreapi.com/products/category/${selectedCategory}`,[]);

  console.log({loading,error,data});

  if (loading) {
    return <div>Categories is Loading....</div>;
  } else if (error) {
    return <div>Oops, please reload the page!!</div>;
  }else if (!data || data.length === 0){
    return <div>No Products Found! Select a category!!</div>
  }else{
    return(
       <div className='flex  w-full flex-wrap gap-16 p-16'>
        {data.map((product)=><Product key={product.id} product={product}/>)}
       </div>
    );
  }
}

export default ProductList;