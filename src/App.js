import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home.jsx';
import Cart from './Pages/Cart.jsx';
import Wishlist from './Pages/Wishlist.jsx'
import Footer from './Component/Footer';
import Header from './Component/Header';

function App() {
  return (
    
    <>
      <Header />
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
      <Footer />
    </>
  
  );
}

export default App;
