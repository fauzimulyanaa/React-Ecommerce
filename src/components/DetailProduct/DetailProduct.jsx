/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useParams } from 'react-router-dom';
import { commerce } from '../../lib/Commerce';
import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import truck from '../../assets/truck.png';
import cart1 from '../../assets/cart-1.png';
import love from '../../assets/love.png';
import { Navbar } from '../../components';

function DetailProduct() {
  const [item, setItem] = useState({});
  const [cart, setCart] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  const fetchItem = async () => {
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
      const res = await commerce.products.retrieve(id);
      setItem(res);
    } catch (error) {
      console.error('Error fetching item:', error);
      // Tampilkan pesan kesalahan jika terjadi kesalahan saat mengambil data
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

  const addToCart = async (productId, quantity) => {
    setLoading(true);
    Swal.fire({
      title: 'Add to Cart',
      html: 'Please wait...',
      allowOutsideClick: false,
      showConfirmButton: false,
      onBeforeOpen: () => {
        Swal.showLoading();
      },
    });
    try {
      const res = await commerce.cart.add(productId, quantity);
      setCart(res);
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Product added to cart successfully!',
        showConfirmButton: true,
        timer: null,
      });
    } catch (error) {
      console.error('Error fetching item:', error);
      // Tampilkan pesan kesalahan jika terjadi kesalahan saat menambahkan produk
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'An error occurred while adding the product to the cart.',
        showConfirmButton: true,
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchItem();
  }, []);

  console.log(cart);

  return (
    <>
      <Navbar totalItems={cart?.total_items} />
      <div className=" h-screen flex justify-around pt-20 gap-7 px-20 font-custom bg-gray-100">
        <div className="img    bg-gray-200 w-[600px] flex justify-center items-center h-[400px]">
          <img src={item?.image?.url} alt="" />
        </div>
        <div className="detail w-[500px] text-start mt-4">
          <h1 className="text-4xl  font-bold">{item?.name}</h1>
          <p className="text-2xl mt-6 font-semibold">Price : {item?.price?.formatted_with_symbol}</p>
          <div className="rating flex items-center gap-3 mt-4 text-[18px] border-b-2 border-gray-300 pb-8">
            <p>&#11088;</p>
            <p className="text-gray-600 "> 4,8 (98 Ulasan)</p>
          </div>
          <div className="size mt-8">
            <p className="uppercase font-bold mb-2">Pilih Ukuran</p>
            <div className="flex gap-2">
              {item && item.variant_groups && item.variant_groups[0] && item.variant_groups[0].options ? (
                item.variant_groups[0].options.map((size) => (
                  <button key={size.id} className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded transition duration-200">
                    {size.name}
                  </button>
                ))
              ) : (
                <div>Loading...</div> // Atau tampilan lain yang sesuai dengan keadaan loading
              )}
            </div>
          </div>
          {/* <div className="desc mt-5">
          <p className="uppercase font-bold mb-2">deskripsi</p>
          <div className="text-justify text-gray-500" dangerouslySetInnerHTML={{ __html: description }} />
        </div> */}
        </div>
        <div className="detail w-[500px] bg-white h-[600px] mt-4 px-7 py-4 rounded-lg ">
          <h1 className="text-2xl font-bold uppercase mb-5 ">Atur pesanan</h1>
          <div className="border-2 border-gray-200"></div>
          <div className="flex items-center justify-between mt-7">
            <h1 className="text-[19px] uppercase">Quantity</h1>
            <div className="qty">
              <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-l transition duration-200">-</button>
              <span className="bg-gray-200 text-gray-700 py-2 px-4">0</span>
              <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-r transition duration-200">+</button>
            </div>
          </div>
          <div className="onkir flex items-center gap-5 mt-8 bg-gray-100 p-2 w-full rounded-md mb-10">
            <img src={truck} alt="truck icon" className="pl-2" />
            <p className="text-[11px] text-[#5C7CFA] pt-2">Ongkos kirim dihitung pada prosses pembayaran.</p>
          </div>
          <div className="border-2 border-gray-200"></div>
          <div className="total flex justify-between items-center mt-7">
            <p className="text-[17px] uppercase">estimasi total</p>
            <p className="text-[17px] font-bold">{item?.price?.formatted_with_symbol}</p>
          </div>
          <div className="btn mt-7">
            <button className="flex items-center justify-center gap-3 py-2 rounded-xl bg-orange-500 w-full transition duration-300 transform hover:scale-105" onClick={() => addToCart(item?.id, 1)}>
              <img src={cart1} alt="cart icon" />
              <p>Tambah ke Keranjang</p>
            </button>

            <button className="flex items-center justify-center gap-3 py-2 rounded-xl bg-lime-500 w-full mt-7">
              <img src={love} alt="love icon" />
              <p>Tambah ke Favorite</p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailProduct;
