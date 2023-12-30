import React, { useCallback, useEffect, useState } from 'react';
import useApi from '../hooks/useApi';

const NavBar = ({ setSelectedCategory, selectedCategory }) => {
  const { loading, error, data: categories } = useApi("https://fakestoreapi.com/products/categories", null);

  // Move the useCallback hook outside of any conditionals
  const handleClick = useCallback((category) => {
    setSelectedCategory(category);
  }, [setSelectedCategory]);

  if (loading === null) {
    return <div>Loading status is not available.</div>;
  }

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
          <div
            onClick={() => handleClick(category)}
            className="bg-black bg-opacity-10 p-4 rounded-md hover:bg-blue-700 cursor-pointer"
            key={category}
          >
            {category}
          </div>
        ))}
      </div>
    );
  }
};

export default NavBar;


