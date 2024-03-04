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

function App() {
  // const [product, setProduct] = useState([]);
  // const [cart, setCart] = useState({});

  // const fetchProduct = async () => {
  //   const { data } = await commerce.products.list();

  //   setProduct(data);
  // };

  // const handleAdd = async (productId, quantity) => {
  //   try {
  //     const item = await commerce.cart.add(productId, quantity);

  //     setCart(item);
  //   } catch (error) {
  //     console.error('Error adding item to cart:', error);
  //   }
  // };

  // const handleRemoveCart = async (productId) => {
  //   try {
  //     const item = await commerce.cart.remove(productId);
  //     setCart(item);
  //   } catch (error) {
  //     console.error('Error adding item to cart:', error);
  //   }
  // };

  // const handleEmptyCart = async () => {
  //   const item = await commerce.cart.empty();
  //   setCart(item);
  // };

  // useEffect(() => {
  //   fetchProduct();
  //   // fetchCart();
  // }, []);

  // console.log(cart);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Products />} />
        <Route path="/detail-product/:id" element={<DetailProductPage />} />
        <Route path="/checkout" element={<CheckoutForm />} />
        <Route path="/cart" element={<CartPages />} />
        <Route path="/about" element={<AboutPages />} />
      </Routes>
    </Router>
  );
}

export default App;
