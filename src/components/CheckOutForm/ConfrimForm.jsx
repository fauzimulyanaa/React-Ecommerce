/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import Confetti from 'react-confetti';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom'; // Ganti useHistory dengan useNavigate
import { commerce } from '../../lib/Commerce';

function ConfirmationForm({ prevStep }) {
  const [showConfetti, setShowConfetti] = useState(false);
  const [cart, setCart] = useState({});
  const [loading, setLoading] = useState(false);
  const carts = cart?.line_items;
  const navigate = useNavigate(); // Gunakan useNavigate untuk melakukan pengalihan halaman

  const fetchCart = async () => {
    setLoading(true);
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
    }
  };

  const handleConfirm = async () => {
    setShowConfetti(true);
    Swal.fire({
      icon: 'success',
      title: 'Pembelian berhasil!',
      text: 'Terima kasih atas pembelian Anda.',
    });

    setTimeout(() => {
      setShowConfetti(false);
      // Clear the cart after confirmation
      clearCart();
      // Redirect to the home page after confirmation
      navigate('/'); // Gunakan navigate untuk pengalihan halaman
    }, 6000);
  };

  const clearCart = async () => {
    try {
      await commerce.cart.empty();
      setCart({}); // Clear the cart state
    } catch (error) {
      console.error('Error clearing cart:', error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Terjadi kesalahan saat mengosongkan keranjang.',
      });
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4 font-custom">Confirmation</h2>
      <div className="">
        <div className="flex gap-5 items-center justify-between">
          <h1 className="text-[19px] font-bold">
            Status Payment : <span className="text-[17px] text-green-500 font-bold">Sucsses</span>
          </h1>
          <h1 className="text-[19px] font-bold">
            Total Order : <span className="text-[17px] text-green-500 font-bold">{carts?.length} item</span>
          </h1>
        </div>
        <div className="">
          <div className="flex flex-col pb-[300px]">
            {carts?.map((item) => (
              <div className="card mt-20 flex items-start px-20 gap-10" key={item.id}>
                <div className="">
                  <div className="left w-[300px] h-[200px] border-2 border-black flex justify-center items-center bg-white rounded-lg transition duration-300 transform hover:scale-105">
                    <img src={item.image.url} alt={item.name} />
                  </div>
                </div>
                <div className="right w-[350px] mt-5">
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
            ))}
          </div>
        </div>
      </div>

      <div className="flex pb-20">
        <button onClick={prevStep} className="mr-2 bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">
          Back
        </button>
        <button onClick={handleConfirm} className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
          Confirm
        </button>
      </div>
      {showConfetti && <Confetti />}
    </div>
  );
}

export default ConfirmationForm;
