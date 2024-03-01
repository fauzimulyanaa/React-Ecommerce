import { useState, useEffect } from 'react';
import { commerce } from '../../lib/Commerce';
import ProductCard from '../Products/ProductCard/ProductCard';
import LoadingCard from '../Products/ProductCard/LoadingCard';
import { Link } from 'react-router-dom';

function HomeProduct() {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchProduct = async () => {
    setLoading(true);
    const { data } = await commerce.products.list();
    setProduct(data);
    setLoading(false);
  };
  useEffect(() => {
    fetchProduct();
  }, []);

  console.log(product);

  return (
    <div className="px-[50px] mb-[100px] mt-12">
      <div className="flex justify-between items-center">
        <h1 className="font-custom text-3xl font-bold">Popular Collections</h1>
      </div>
      <div className="flex justify-between items-center flex-wrap gap-3 w-full mt-10">
        {loading ? (
          <>
            <LoadingCard />
            <LoadingCard />
            <LoadingCard />
          </>
        ) : (
          <ProductCard product={product} />
        )}
      </div>
      <div className="mx-auto flex justify-center mt-10">
        <Link to="/product" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          View More
        </Link>
      </div>
    </div>
  );
}

export default HomeProduct;
