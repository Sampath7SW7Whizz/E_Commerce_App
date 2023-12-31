import React from 'react';
import useApi from '../hooks/useApi';
import Product from './Product';
import { useParams } from 'react-router-dom';

const ProductList = () => {
  const { categoryName } = useParams();
  const { loading, error, data } = useApi(`https://fakestoreapi.com/products/category/${categoryName}`, []);

  if (loading) {
    return <div>Loading...</div>;
  } else if (error) {
    return <div>Oops, there was an error. Please reload the page.</div>;
  } else if (!data || data.length === 0) {
    return <div>No products found for the category: {categoryName}</div>;
  } else {
    return (
      <div className='flex w-full flex-wrap gap-16 p-16'>
        {data.map((product) => <Product key={product.id} product={product} />)}
      </div>
    );
  }
};

export default ProductList;
