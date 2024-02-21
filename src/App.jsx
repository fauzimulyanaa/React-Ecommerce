import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Products, Navbar } from './components';
import { commerce } from './lib/Commerce';
// import Cart from './components/Cart/CartPages';
import CartPages from './components/Cart/CartPages';
import CheckoutForm from './components/CheckOutForm/CheckOut/CheckOut';

function App() {
  const [product, setProduct] = useState([]);
  const [cart, setCart] = useState({});

  const fetchProduct = async () => {
    const { data } = await commerce.products.list();

    setProduct(data);
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const handleAdd = async (productId, quantity) => {
    try {
      const item = await commerce.cart.add(productId, quantity);

      setCart(item);
    } catch (error) {
      console.error('Error adding item to cart:', error);
    }
  };

  const handleUpdateCartQty = async (productId, quantity) => {
    try {
      const item = await commerce.cart.update(productId, { quantity });
      setCart(item);
    } catch (error) {
      console.error('Error adding item to cart:', error);
    }
  };

  const handleRemoveCart = async (productId) => {
    try {
      const item = await commerce.cart.remove(productId);
      setCart(item);
    } catch (error) {
      console.error('Error adding item to cart:', error);
    }
  };

  const handleEmptyCart = async () => {
    const item = await commerce.cart.empty();
    setCart(item);
  };

  useEffect(() => {
    fetchProduct();
    fetchCart();
  }, []);

  console.log(cart);

  return (
    <Router>
      <>
        <Navbar totalItems={cart.total_items} />
        <Routes>
          <Route path="/" element={<Products products={product} onAddCart={handleAdd} />} />
          <Route path="/cart" element={<CartPages carts={cart} handleUpdateCartQty={handleUpdateCartQty} handleRemoveCart={handleRemoveCart} handleEmptyCart={handleEmptyCart} />} />
          <Route path="/checkout" element={<CheckoutForm />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
