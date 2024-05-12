import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Home from './components/Home';
import Products from './components/Products';
import Contact from './components/Contact';
import {Route,Routes} from 'react-router-dom'
import Footer from './components/Footer';
import ProductsDetails from './components/ProductsDetails';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
function App() {
  return (
    <>
      <Header/>
     <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>}/>
        <Route path="/products" element={<Products/>} />
        <Route path="/products/:id" element={<ProductsDetails/>} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/checkout" element={<Checkout/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
