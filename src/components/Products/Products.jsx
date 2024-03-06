/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// import Product from './Product/ProductCard';

import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { commerce } from '../../lib/Commerce';
import Love from '../../assets/love.png';
import Filter from '../Filter/Filter';
import Pagination from '../Pagination/Pagination';

function Products() {
  const [product, setProduct] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(8);
  const navigate = useNavigate();

  useEffect(() => {
    fetchProduct();
  }, []);

  useEffect(() => {
    setFilteredProducts(product);
  }, [product]);

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
      setFilteredProducts(data);
      console.log(product);
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

  const handleFilterChange = async (categorySlug) => {
    setSelectedCategory(categorySlug);
    if (categorySlug === '') {
      setFilteredProducts(product);
    } else {
      const filtered = product.filter((product) => product.categories.find((category) => category.slug === categorySlug));
      setFilteredProducts(filtered);
    }
  };

  const handleItemClick = (itemId) => {
    navigate(`/detail-product/${itemId}`);
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };

  return (
    <main className="container-fluid pb-[200px] h-auto">
      <div className="font-custom mx-10 mt-28 mb-10 flex justify-between items-center">
        <p className="tracking-widest	flex gap-7 items-center">
          <Link to="/">Home</Link> {'>'}{' '}
          <Link to="/products" style={{ fontWeight: 'bold' }}>
            All Products
          </Link>
        </p>
        <div className="">
          <p>
            Showing <span className="font-bold">{(currentPage - 1) * productsPerPage + 1}</span> - <span className="font-bold">{Math.min(currentPage * productsPerPage, filteredProducts.length)}</span> of{' '}
            <span className="font-bold">{filteredProducts.length}</span> total results
          </p>
        </div>
      </div>
      <div className="flex justify-between ">
        <Filter onFilterChange={handleFilterChange} />
        <div className="flex  w-[70%] flex-wrap justify-center items-center gap-10">
          {currentProducts.map((item) => {
            return (
              <div className="product-item" key={item.id}>
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
      </div>
      <div className="mt-20">
        <Pagination productsPerPage={productsPerPage} totalProducts={filteredProducts.length} paginate={paginate} currentPage={currentPage} />
      </div>
    </main>
  );
}

export default Products;
