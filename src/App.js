import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CartProvider } from './components/CartContext';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ProductDetail from './components/ProductDetail/ProductDetail';
import CartPage from './components/CartPage/CartPage';
import Checkout from './components/Checkout/Checkout';
import Home from './components/home/Home';

const App = () => {
  return (
    <CartProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cremas" element={<ItemListContainer />} />
          <Route path="/maquillajes" element={<ItemListContainer />} />
          <Route path="/exfoliantes" element={<ItemListContainer />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;