/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// import Product from './Product/ProductCard';

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import BuyNow from '../HomeProduct/BuyNow/BuyNow';
import { commerce } from '../../lib/Commerce';
import Love from '../../assets/love.png';
import Filter from '../Filter/Filter';

function Products() {
  const [product, setProduct] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [cart, setCart] = useState({});
  const [loading, setLoading] = useState(false);

  const fetchProduct = async () => {
    setLoading(true);
    Swal.fire({
      title: 'Now loading',
      allowEscapeKey: false,
      allowOutsideClick: false,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
      },
    });
    try {
      const { data } = await commerce.products.list();
      setProduct(data);
    } catch (error) {
      console.error('Error fetching item:', error);

      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Terjadi kesalahan saat mengambil data produk.',
      });
    } finally {
      setLoading(false);
      Swal.close();
    }
  };

  const navigate = useNavigate();

  const handleItemClick = (itemId) => {
    navigate(`/detail-product/${itemId}`);
  };

  useEffect(() => {
    fetchProduct();
  }, []);
  return (
    <main className="container-fluid pb-[100px]">
      <BuyNow />
      <Filter />
      <div className="flex px-[10px] flex-wrap justify-center items-center gap-10">
        {product.map((item) => {
          return (
            <div className="" key={item.id}>
              <div className="font-custom w-[400px] bg-gray-100 group  cursor-pointer relative">
                <div className="img flex justify-center">
                  <img src={item.image.url} alt="" />
                </div>
                <div className="w-[35px] h-[35px] bg-white rounded-full flex items-center justify-center absolute top-3 left-5 transition duration-300 transform hover:scale-105">
                  <img src={Love} alt="Love icon" className=" icon" />
                </div>
              </div>
              <div className="">
                <div className="desc flex justify-between mt-5 pb-5">
                  <p className="font-bold text-[16px]">{item.name}</p>
                  <p className="font-bold">{item.price.formatted_with_symbol}</p>
                </div>

                <div className="btn">
                  <button className="flex items-center justify-center gap-3 py-2 px-4 rounded-full bg-[#030637] text-white shadow-md  transition duration-300 transform hover:scale-105" onClick={() => handleItemClick(item.id)}>
                    <p>View Detail</p>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}

export default Products;

{
  /* */
}
