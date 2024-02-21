/* eslint-disable react/prop-types */
import Icons from '../../assets/icon.png';
import cart from '../../assets/cart.png';
import { Link, useLocation } from 'react-router-dom';

function Navbar({ totalItems }) {
  const location = useLocation();
  return (
    <nav>
      <div className="flex justify-between px-20 h-8 items-center py-5 bg-slate-100 shadow-lg">
        <div className="logo">
          <Link to="/" className="flex items-center gap-2">
            <h1 className="text-1xl font-bold italic">My-Commerce</h1>
            <img src={Icons} alt="icons" />
          </Link>
        </div>
        {location.pathname === '/' && (
          <Link to="/cart" className="wrapper">
            <img src={cart} alt="cart icon" className=" icon" />
            <p className="item-count">{totalItems}</p>
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
