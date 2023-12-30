import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import ProductList from './components/ProductList';
import Home from './components/Home';
import NotFound from './components/NotFound';


function App() {
  return (
    <Router>

    <div className="App">
     <h1 className='bg-green-100'>E_Commerce</h1>
     <NavBar/>
    </div>
    <Routes>
    <Route path="/products" element={<ProductList/>} />
    <Route path="/" exact element={<Home/>} />
    <Route  path="/not-found" element={<NotFound/>} />
    </Routes>
    </Router>
  );
}

export default App;
