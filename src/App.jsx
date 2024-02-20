import { useState, useEffect } from 'react';
import { Products, Navbar } from './components';
import { commerce } from './lib/Commerce';

function App() {
  const [product, setProduct] = useState([]);

  const fetchProduct = async () => {
    const { data } = await commerce.products.list();

    setProduct(data);
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  console.log(product);

  return (
    <>
      <Navbar />
      <Products products={product} />
    </>
  );
}

export default App;
