/* eslint-disable react/prop-types */

import { useState, useEffect } from 'react';
import cart from '../../assets/cart.png';
import { Link, useLocation } from 'react-router-dom';
import { commerce } from '../../lib/Commerce';

function Navbar() {
  const [total, setTotal] = useState({});
  const location = useLocation();

  const fetchCart = async () => {
    const fetchedCart = await commerce.cart.retrieve();
    setTotal(fetchedCart);
  };

  useEffect(() => {
    fetchCart();
  }, [total]);
  return (
    <nav className="bg-white text-black shadow-md font-custom">
      <div className="flex justify-between px-20 h-[63px] items-center">
        <div className="logo">
          <Link to="/" className="flex items-center gap-2">
            <h1 className="text-[20px] tracking-widest font-700 ">Skyline Treasures</h1>
          </Link>
        </div>
        <div>
          <ul className="flex gap-20 text-[13px] tracking-widest items-center">
            <li>
              <Link to="/" className=" hover:text-gray-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="/product" className=" hover:text-gray-300">
                Products
              </Link>
            </li>
            <li>
              <a href="#" className=" hover:text-gray-300">
                About
              </a>
            </li>
            <li>
              <a href="#" className=" hover:text-gray-300">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-4">
          <div className="">
            <button className="bg-white text-black px-5 py-1 rounded-lg">Login</button>
          </div>
          {location.pathname !== '/cart' && (
            <div className="w-[35px] h-[35px] bg-gray-300 rounded-full flex items-center justify-center">
              <Link to="/cart" className="wrapper">
                <img src={cart} alt="cart icon" className=" icon" />
                {total.total_items === 0 ? <p className="item-count">0</p> : <p className="item-count">{total.total_items}</p>}
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
