// import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import { commerce } from './lib/Commerce';
// import Cart from './components/Cart/CartPages';
// import CartPages from './components/Cart/CartPages';
import CheckoutForm from './components/CheckOutForm/CheckOut/CheckOut';
import Home from './pages/Home';
import DetailProductPage from './pages/DetailProductPage/DetailProductPage';
import CartPages from './pages/CartPages/CartPages';
import Products from './pages/ProductPages/ProductPages';
import AboutPages from './pages/AboutPages/AboutPages';
import ContactPages from './pages/ContactPages/ContactPages';
import CheckOutPage from './pages/CheckOut/CheckOut';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Products />} />
        <Route path="/detail-product/:id" element={<DetailProductPage />} />
        <Route path="/checkout" element={<CheckoutForm />} />
        <Route path="/cart" element={<CartPages />} />
        <Route path="/about" element={<AboutPages />} />
        <Route path="/contact" element={<ContactPages />} />
        <Route path="/checkout" element={<CheckOutPage />} />
      </Routes>
    </Router>
  );
}

export default App;
