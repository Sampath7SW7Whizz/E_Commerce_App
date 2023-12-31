import React, { useEffect } from 'react';
import useApi from '../hooks/useApi';
import { NavLink } from 'react-router-dom';
import { useProductsContext } from '../context/ProductContext';

const NavBar = () => {
  const { loading, error, data: categories } = useApi("https://fakestoreapi.com/products/categories", null);
  
 
  const data=useProductsContext();



  if (loading) {
    return <div>Categories is Loading....</div>;
  } else if (error) {
    return <div>Oops, please reload the page!!</div>;
  } else if (!categories || categories.length === 0) {
    return <div>No Categories found.</div>;
  } else {
    return (
      <div className="flex gap-16 p-16 bg-blue-100 capitalize">
        {categories.map((category) => (
          <NavLink
            key={category}
            to={`/products/${category}`}
            className={({ isActive }) =>
            isActive ? "p-4 rounded-md hover:bg-blue-700 cursor-pointer bg-yellow-500" : 
            "p-4 rounded-md hover:bg-blue-700 cursor-pointer bg-black bg-opacity-50"
          }
          > 
            {category}
          </NavLink>
        ))}
      </div>
    );
  }
};

export default NavBar;