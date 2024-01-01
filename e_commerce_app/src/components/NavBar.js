import React, { useEffect, useMemo } from 'react';
import useApi from '../hooks/useApi';
import { Link, NavLink } from 'react-router-dom';
import { useProductsContext } from '../context/ProductContext';
import { useDispatch, useSelector } from 'react-redux';
import { loadUser } from '../store/user';
import { BsCart3 } from 'react-icons/bs';
import Product from './Product';

const NavBar = () => {
  const { loading, error, data: categories } = useApi('https://fakestoreapi.com/products/categories', null);

  const data = useProductsContext();

  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);

  
  const cartItems = useMemo(() => {
    let totalItems = 0;
    if (Object.keys(cart).length > 0) {
      Object.keys(cart).forEach((productId) => {
        totalItems += cart[productId].quantity;
      });
    }
    return totalItems;
  }, [cart]);

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  if (loading) {
    return <div>Categories is Loading....</div>;
  } else if (error) {
    return <div>Oops, please reload the page!!</div>;
  } else if (!categories || categories.length === 0) {
    return <div>No Categories found.</div>;
  } else {
    return (
      <div>
        <div className="flex gap-16 p-16 bg-blue-500 capitalize items-center ">
          {categories.map((category) => (
            <NavLink
              key={category}
              to={`/products/${category}`}
              className={({ isActive }) =>
                isActive
                  ? 'p-4 rounded-md text-white hover:bg-blue-700 cursor-pointer bg-yellow-500'
                  : 'p-4 rounded-md text-white hover:bg-blue-700 cursor-pointer bg-black bg-opacity-50'
              }
            >
              {category}
            </NavLink>
          ))}
          <Link to="/cart" className="bg-white p-5 rounded-full cursor-pointer relative">
            <BsCart3 size={30} />
            {cartItems > 0 && (
              <div className="absolute top-[-15px] right-[-15px] rounded-full p-3 bg-yellow-500 text-white text-xs">
                {cartItems}
              </div>
            )}
          </Link>
        </div>
      </div>
    );
  }
};

export default NavBar;
