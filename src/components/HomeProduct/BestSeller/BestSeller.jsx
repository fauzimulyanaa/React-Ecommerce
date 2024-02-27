import { useState, useEffect } from 'react';
import { commerce } from '../../../lib/Commerce';
import { useNavigate } from 'react-router-dom';

function BestSeller() {
  const [product, setProduct] = useState([]);
  const fetchProduct = async () => {
    const { data } = await commerce.products.list();

    setProduct(data);
  };
  useEffect(() => {
    fetchProduct();
  }, []);

  const navigate = useNavigate();

  const handleItemClick = (itemId) => {
    navigate(`/detail-product/${itemId}`);
  };

  const limitedProducts = product.slice(3, 5);

  return (
    <div className="px-[50px] mb-[100px] ">
      <h1 className="font-custom text-3xl font-bold">Best Deals</h1>
      <div className="flex justify-between items-center flex-wrap gap-3 w-full mt-10">
        {limitedProducts.map((item) => {
          return (
            <div className="font-custom w-[520px] bg-gray-100 group  cursor-pointer relative" key={item.id}>
              <div className="absolute h-full w-full bg-black/20 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <button className="bg-black text-white py-2 px-5" onClick={() => handleItemClick(item.id)}>
                  View Detail
                </button>
              </div>
              <div className="img flex justify-center">
                <img src={item.image.url} alt="" />
              </div>
              <div className="desc flex justify-between px-6 pb-5">
                <p className="font-bold text-[16px]">{item.name}</p>
                <p className="font-bold">{item.price.formatted_with_symbol}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BestSeller;
