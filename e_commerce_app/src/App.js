import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ProductList from './components/ProductList';
import Home from './components/Home';
import NotFound from './components/NotFound';
import ProductsProvider from './context/ProductContext';
import CartProvider from './context/CartContext';

function App() {
  return (
    <Router>
      <ProductsProvider>
        <CartProvider>
      <div className="App">
        <NavBar />
        {/* Place Routes as a child of the div containing NavBar */}
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Use the categoryName parameter from the route */}
          <Route path="/products/:categoryName" element={<ProductList />} />
          <Route path="/not-found" element={<NotFound />} />
        </Routes>
      </div>
      </CartProvider>
      </ProductsProvider>
    </Router>
  );
}

export default App;


