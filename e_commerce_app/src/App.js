import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import ProductList from './components/ProductList';
import Home from './components/Home';
import NotFound from './components/NotFound';
import { useState } from 'react';


function App() {

  //why we kept here selectedcategory instead of inside navbar 
  //is we want to use it in products list as well
  const[selectedCategory,setSelectedCategory]=useState(null);

  return (
    <Router>

    <div className="App">
     
     <NavBar
     selectedCategory={selectedCategory}
     setSelectedCategory={setSelectedCategory}
     />
    </div>
    <Routes>
    <Route path="/products" element={<ProductList selectedCategory={selectedCategory}/>} />
    <Route path="/" exact element={<Home/>} />
    <Route  path="/not-found" element={<NotFound/>} />
    </Routes>
    </Router>
  );
}

export default App;
