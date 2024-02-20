import Icons from '../../assets/icon.png';
import cart from '../../assets/cart.png';

function Navbar() {
  return (
    <nav>
      <div className="flex justify-between px-20 h-8 items-center py-5 bg-slate-100 shadow-lg">
        <div className="logo flex items-center gap-2">
          <h1 className="text-1xl font-bold italic">My-Commerce</h1>
          <img src={Icons} alt="icons" />
        </div>
        <div className="wrapper">
          <img src={cart} alt="cart icon" className=" icon" />
          <p className="item-count">4</p>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
