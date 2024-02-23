import { useState, useEffect } from 'react';
import { commerce } from '../../lib/Commerce';
import ProductCard from '../Products/ProductCard/ProductCard';

function HomeProduct() {
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
    <div className="px-[50px] mb-[200px]">
      <div className="">
        <h1 className="font-custom text-3xl font-bold">Popular Collections</h1>
      </div>
      <div className="flex justify-between items-center flex-wrap gap-3 w-full mt-10">
        <ProductCard product={product} />
      </div>
    </div>
  );
}

export default HomeProduct;
