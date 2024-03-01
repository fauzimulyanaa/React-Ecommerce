import { useState, useEffect } from 'react';
import { commerce } from '../../../lib/Commerce';
import { Link, useNavigate } from 'react-router-dom';
import LoadingCard from '../../Products/ProductCard/LoadingCard';

function BestSeller() {
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

  const navigate = useNavigate();

  const handleItemClick = (itemId) => {
    navigate(`/detail-product/${itemId}`);
  };

  const limitedProducts = product.slice(3, 6);

  return (
    <div className="px-[50px] mb-[100px] ">
      <h1 className="font-custom text-3xl font-bold">Best Deals</h1>
      <div className="flex justify-between items-center flex-wrap gap-3 w-full mt-10">
        {loading ? (
          <>
            <LoadingCard />
            <LoadingCard />
            <LoadingCard />
          </>
        ) : (
          <>
            {limitedProducts.map((item) => {
              return (
                <div className="font-custom w-[400px] box-border	rounded-xl shadow-md py-4 bg-gray-100 group  cursor-pointer relative" key={item.id}>
                  <div className="absolute h-full w-full bg-black/20 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <button className="bg-black text-white py-2 px-5" onClick={() => handleItemClick(item.id)}>
                      View Detail
                    </button>
                  </div>
                  <div className="img flex justify-center">
                    <img src={item.image.url} alt={item.name} className="w-[250px]" />
                  </div>
                  <div className="desc flex justify-between px-6  mt-8">
                    <p className="font-bold text-[16px]">{item.name}</p>
                    <p className="font-bold">{item.price.formatted_with_symbol}</p>
                  </div>
                </div>
              );
            })}
          </>
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

export default BestSeller;
