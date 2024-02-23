// /* eslint-disable react/prop-types */

// import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { commerce } from "../../lib/Commerce";

// function CartPages() {
//   const [cart, setCart] = useState({});
//   // const isEmpty = !carts?.line_items?.length;

//    const fetchCart = async () => {
//      setCart(await commerce.cart.retrieve());
//    };

//   const EmptyCart = () => {
//     return (
//       <div className="flex justify-center flex-col m-auto text-center">
//         <h1 className="text-xl mb-6">You have no items in your shopping cart, start adding some! </h1>
//         <Link to="/">
//           <h1 className="underline">Strat Add Products</h1>
//         </Link>
//       </div>
//     );
//   };

//   const FilledCart = () => {
//     return (
//       <>
//         <div className="container-fluid  flex mb-10 justify-center items-center gap-10 p-6 flex-wrap m-auto">
//           {carts.line_items.map((cart) => {
//             return (
//               <div className="group my-10 flex w-full max-w-xs flex-col overflow-hidden border border-gray-100 bg-white shadow-md" key={cart.id}>
//                 <a className="relative flex h-60 overflow-hidden" href="#">
//                   <img className="absolute top-0 right-0 h-full w-full object-cover" src={cart.image.url} alt="product image" />
//                   <div className="absolute -right-16 bottom-0 mr-2 mb-4 space-y-2 transition-all duration-300 group-hover:right-0">
//                     <button className="flex h-10 w-10 items-center justify-center bg-gray-900 text-white transition hover:bg-gray-700">
//                       <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//                         <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
//                       </svg>
//                     </button>
//                   </div>
//                 </a>
//                 <div className="mt-4 px-5 pb-5">
//                   <a href="#">
//                     <h5 className="text-xl tracking-tight text-slate-900">{cart.name}</h5>
//                   </a>
//                   <div className="mt-2 mb-5 flex items-center justify-between">
//                     <p>
//                       <span className="text-3xl font-bold text-slate-900">{cart.line_total.formatted_with_symbol}</span>
//                     </p>
//                   </div>
//                 </div>
//                 <div className="btn flex justify-between items-center pb-7 px-5">
//                   <div className="flex w-[60%] justify-between">
//                     <button className="bg-gray-100 w-[50px] text-xl" onClick={() => handleUpdateCartQty(cart.id, cart.quantity - 1)}>
//                       -
//                     </button>
//                     <p className="text-center text-1xl font-bold">{cart.quantity}</p>
//                     <button className="bg-gray-100 w-[50px] text-xl" onClick={() => handleUpdateCartQty(cart.id, cart.quantity + 1)}>
//                       +
//                     </button>
//                   </div>
//                   <div className="">
//                     <button className="bg-red-700 text-white px-4 py-1 rounded-lg" onClick={() => handleRemoveCart(cart.id)}>
//                       Remove
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//         <div className="cart-detail flex justify-between items-center w-[100%] m-auto mb-32 bo border-t-2 border-gray-400">
//           <div className="total pt-7">
//             <h1 className="text-2xl font-bold">Subtotal : {carts?.subtotal?.formatted_with_symbol}</h1>
//           </div>
//           <div className="btn flex gap-6 pt-7">
//             <button className="bg-red-600 text-white px-9 uppercase py-2 rounded-md" onClick={handleEmptyCart}>
//               Empty Cart
//             </button>
//             <Link to="/checkout">
//               <button className="bg-blue-700 text-white px-9 uppercase py-2 rounded-md">Checkout</button>
//             </Link>
//           </div>
//         </div>
//       </>
//     );
//   };

//   return (
//     <div className="flex justify-center items-center flex-col">
//       <div className="title p-20">
//         <h1 className="text-4xl font-bold">Your Shopping Cart</h1>
//       </div>
//       <div className="cart-item w-full px-20">{isEmpty ? <EmptyCart /> : <FilledCart />}</div>
//     </div>
//   );
// }

// export default CartPages;
