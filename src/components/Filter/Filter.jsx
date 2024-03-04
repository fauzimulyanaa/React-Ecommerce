/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { commerce } from '../../lib/Commerce';

function Filter({ onFilterChange }) {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [products, setProducts] = useState([]);

  const handleCategoryChange = (event) => {
    const categorySlug = event.target.value;
    setSelectedCategory(categorySlug);
    onFilterChange(categorySlug); // Panggil fungsi onFilterChange dengan slug kategori yang dipilih
  };

  return (
    <div className="w-[400px] mx-9 font-custom  p-4 border-[0.8px] border-black rounded-lg shadow-lg h-[400px]">
      <h1 className="text-xl font-bold mb-4">Filterable Sneakers</h1>
      <div className="space-y-4">
        <div>
          <h2 className="text-lg font-semibold mb-2">Category</h2>
          <div className="relative">
            <select
              className="block appearance-none w-full bg-white border border-gray-400 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:border-blue-500"
              onChange={handleCategoryChange}
              value={selectedCategory}
            >
              <option value="">All</option>
              <option value="nike-dunk">Nike Dunk</option>
              <option value="nike-air-max">Nike Air Max</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9 11l4 4 4-4h-8z" />
              </svg>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-2">Brand</h2>
          <div className="relative">
            <select className="block appearance-none w-full bg-white border border-gray-400 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:border-blue-500">
              <option>All</option>
              <option>Nike</option>
              <option>Adidas</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9 11l4 4 4-4h-8z" />
              </svg>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-2">Price</h2>
          <input type="number" placeholder="Max Price" className="border border-gray-400 px-4 py-2 w-full" />
        </div>
      </div>
    </div>
  );
}

export default Filter;
