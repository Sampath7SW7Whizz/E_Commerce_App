import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
        <h1>MyStore App</h1>
        <Link to="/products">Go to Products</Link>
        <br/>
        <Link to="/not-found">Go to Not found</Link>
    </div>
  )
}

export default Home;