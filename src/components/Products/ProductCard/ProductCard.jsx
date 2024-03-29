/* eslint-disable react/prop-types */

import { useNavigate } from 'react-router-dom';

function ProductCard({ product }) {
  const navigate = useNavigate();

  const handleItemClick = (itemId) => {
    navigate(`/detail-product/${itemId}`);
  };

  const limitedProducts = product.slice(0, 3);

  return (
    <>
      {limitedProducts.map((item) => {
        return (
          <div className="font-custom w-[400px] box-border	rounded-xl shadow-md bg-gray-100 py-4 group  cursor-pointer relative" key={item.id}>
            <div className="absolute h-full w-full bg-black/20 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <button className="bg-black text-white py-2 px-5" onClick={() => handleItemClick(item.id)}>
                View Detail
              </button>
            </div>
            <div className="img flex justify-center">
              <img src={item.image.url} alt="" className="w-[250px]" />
            </div>
            <div className="desc flex justify-between px-6  mt-8">
              <p className="font-bold text-[16px]">{item.name}</p>
              <p className="font-bold">{item.price.formatted_with_symbol}</p>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default ProductCard;
