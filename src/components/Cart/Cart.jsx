/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { commerce } from '../../lib/Commerce';
import { Link } from 'react-router-dom';
import close from '../../assets/close.png';
import Swal from 'sweetalert2';
import Pagination from '../Pagination/Pagination';

function Cart() {
  const [cart, setCart] = useState({});
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(2);

  const isEmpty = !cart?.line_items?.length;

  const fetchCart = async () => {
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
      const res = await commerce.cart.retrieve();
      setCart(res);
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

  const handleUpdateCartQty = async (productId, quantity) => {
    setLoading(true);
    Swal.fire({
      title: 'Update Quantity',
      html: 'Please wait...',
      allowOutsideClick: false,
      showConfirmButton: false,
      onBeforeOpen: () => {
        Swal.showLoading();
      },
    });
    try {
      const item = await commerce.cart.update(productId, { quantity });
      setCart(item);
    } catch (error) {
      console.error('Error add item:', error);

      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Error add item',
      });
    } finally {
      setLoading(false);
      Swal.close();
    }
  };

  const handleRemoveCart = async (productId) => {
    Swal.fire({
      title: 'Delete Item',
      text: 'Are you sure you want to remove this item from your cart?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, remove it!',
      cancelButtonText: 'Cancel',
    }).then(async (result) => {
      if (result.isConfirmed) {
        setLoading(true);
        Swal.fire({
          title: 'Deleting Item',
          html: 'Please wait...',
          allowOutsideClick: false,
          showConfirmButton: false,
          onBeforeOpen: () => {
            Swal.showLoading();
          },
        });
        try {
          const item = await commerce.cart.remove(productId);
          setCart(item);
          Swal.fire({
            icon: 'success',
            title: 'Success',
            text: 'Product removed from cart successfully!',
            showConfirmButton: false,
            timer: 2000,
          });
        } catch (error) {
          console.error('Error removing item:', error);
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Error removing item from cart',
          });
        } finally {
          setLoading(false);
          await new Promise((resolve) => setTimeout(resolve, 2000)); // Tunggu 2 detik sebelum menutup Swal
          Swal.close();
        }
      }
    });
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = cart.line_items?.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };

  const EmptyCart = () => {
    return (
      <div className="flex justify-center items-center mt-20 mx-20">
        <div className="flex justify-center flex-col items-center">
          <h1 className="text-xl mb-6">You have no items in your shopping cart, start adding some! </h1>
          <Link to="/product">
            <h1 className="underline">Strat Add Products</h1>
          </Link>
        </div>
      </div>
    );
  };

  const FilledCart = () => {
    return (
      <div className="flex flex-col pb-[300px]">
        {currentProducts.map((item) => {
          return (
            <>
              <div className="card mt-20 flex items-start px-20 gap-10" key={item.id}>
                <div className="">
                  <div className="left w-[300px] h-[200px] border-2 border-black flex justify-center items-center bg-white rounded-lg transition duration-300 transform hover:scale-105">
                    <img src={item.image.url} alt={item.name} />
                  </div>
                  <div className="qty mt-5 flex justify-center">
                    <button className="bg-red-500 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-l transition duration-200" onClick={() => handleUpdateCartQty(item.id, item.quantity - 1)}>
                      -
                    </button>
                    <span className="bg-white text-gray-700 py-2 px-4">{item.quantity}</span>
                    <button className="bg-blue-500 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-r transition duration-200" onClick={() => handleUpdateCartQty(item.id, item.quantity + 1)}>
                      +
                    </button>
                  </div>
                </div>
                <div className="right w-[350px] mt-5">
                  <div className="flex gap-10 items-center justify-between mb-5">
                    <h1 className="font-bold text-2xl">{item.name}</h1>
                    <button className="w-[20px] h-[20px] bg-red-600 rounded-full flex items-center justify-center transition duration-300 transform hover:scale-105 cursor-pointer" onClick={() => handleRemoveCart(item.id)}>
                      <img src={close} alt="close icon" />
                    </button>
                  </div>
                  <div className="">
                    <h1 className="">Experience luxury on your feet...</h1>
                  </div>
                  <div className="">
                    <div className="flex items-center justify-between mt-5">
                      <p className="text-lg uppercase">Size </p>
                      <p className="font-bold">{item.selected_options[0].option_name}</p>
                    </div>
                  </div>
                  <div className="">
                    <div className="flex items-center justify-between mt-3">
                      <h1 className="text-lg uppercase">Total</h1>
                      <p className="qty font-bold">{item.line_total.formatted_with_symbol}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-[1px] border-black w-[700px] mx-20 mt-20"></div>
            </>
          );
        })}
        <div className="mt-10">
          <Pagination productsPerPage={productsPerPage} totalProducts={cart.total_items} paginate={paginate} currentPage={currentPage} />
        </div>
      </div>
    );
  };

  return (
    <div className=" font-custom">
      <div className="title mt-10 px-20 text-3xl tracking-widest">
        <h1>SHOPPING CART</h1>
      </div>
      <div className="flex gap-10 ">
        <div className="">{isEmpty ? <EmptyCart /> : <FilledCart />}</div>

        {isEmpty ? (
          <></>
        ) : (
          <div className="order mt-20 border-[1px] border-black h-[290px]  mr-20 px-10 py-5 rounded-md shadow-lg w-[500px] bg-white">
            <h1 className="uppercase font-bold">Order Summary</h1>
            <div className="tax flex items-center justify-between mt-5">
              <p>Subtotal</p>
              <p className="font-bold">{cart?.subtotal?.formatted_with_symbol}</p>
            </div>
            <div className="tax flex items-center justify-between mt-3">
              <p>Tax</p>
              <p className="font-bold text-orange-500">Free</p>
            </div>
            <div className="tax flex items-center justify-between mt-3">
              <p>Shipping</p>
              <p className="font-bold text-orange-500">Free</p>
            </div>
            <div className="tax flex items-center justify-between mt-3">
              <p>Total</p>
              <p className="font-bold">{cart?.subtotal?.formatted_with_symbol}</p>
            </div>
            <div className="mt-7">
              <Link to="/checkout" className="flex items-center justify-center gap-3 py-2 rounded-xl bg-orange-500 w-full transition duration-300 transform hover:scale-105 text-white">
                <p>Checkout</p>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
