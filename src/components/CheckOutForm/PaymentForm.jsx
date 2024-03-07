/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import paypal from '../../assets/paypal.png';
import visa from '../../assets/visa.png';
import card from '../../assets/card.png';
import lock from '../../assets/lock.png';

function PaymentForm({ nextStep, prevStep }) {
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: '',
    expiryDate: '',
    cvc: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails({ ...paymentDetails, [name]: value });
  };
  const handlePaymentClick = async () => {
    try {
      Swal.fire({
        title: 'Success!',
        text: 'Payment  successful!',
        icon: 'success',
      });

      // router.push('/profile');
    } catch (error) {
      console.error('Error during payment:', error);
      Swal.fire({
        title: 'Failed!',
        text: error.response.data.data.message,
        icon: 'error',
      });
    }
  };
  return (
    <div className="w-full mb-10">
      <h2 className="text-lg font-semibold mb-4">Payment Form</h2>
      <div className="bg-[#2395FF] w-full h-[750px] flex items-center justify-center">
        <div className="wrappper bg-white w-[80%] h-[70%] flex px-20 gap-6">
          <div className="method py-10 w-[60%]">
            <div className="title">
              <h1 className="font-[600] mb-3">Payment Method</h1>
            </div>
            <div className="list bg-slate-200  p-5">
              <div className="one flex items-center justify-between mb-5">
                <h1 className="text-[16px] font-[500]">Paypal</h1>
                <img src={paypal} width={20} height={20}></img>
              </div>
              <div className="one flex items-center justify-between">
                <h1 className="text-[16px] font-[500]">Credit Card</h1>
                <div className="flex items-center gap-3">
                  <img src={card} width={20} height={20}></img>
                  <img src={visa} width={20} height={20}></img>
                  <img src={card} width={20} height={20}></img>
                </div>
              </div>
            </div>
            <div className="mt-3">
              <form className="">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cardNumber">
                  Card Number
                </label>
                <input type="text" id="cardNumber" name="cardNumber" placeholder="1234 5678 9012 3456" className="w-full p-2 border rounded mb-4" required />
                <div className="flex items-center justify-between">
                  <div className="">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="expiryDate">
                      Expiry Date
                    </label>
                    <input type="text" id="expiryDate" name="expiryDate" placeholder="MM/YY" className="w-[100%] p-2 border rounded mr-2" required />
                  </div>
                  <div className="">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cvc">
                      CVC/CVV
                    </label>
                    <input type="text" id="cvc" name="cvc" placeholder="123" className="w-[100%] p-2 border rounded" required />
                  </div>
                </div>
                <div className="lock mt-4 flex items-center gap-2">
                  <img src={lock} alt="icon lock" width={15} height={15}></img>
                  <p className="text-slate-400">Your transaction is secured with ssl certificate</p>
                </div>
                <button type="button" onClick={handlePaymentClick} className="w-full bg-blue-500 text-white p-2 rounded mt-3 hover:bg-blue-600">
                  Payment
                </button>
              </form>
            </div>
          </div>
          <div className="payment py-10 w-[40%]">
            <div className="title">
              <h1 className="font-[600] mb-3">Summary</h1>
            </div>
            <div className="flex border-b-2 pb-3 items-center justify-between">
              <div className="">
                <select className="font-[500]">
                  <option value="1">Pro(Billed Monthly)</option>
                </select>
                <p className="text-[12px] text-blue-600 ml-1 underline">Save 20% with annual billing</p>
              </div>
              <div className="">
                <h1 className="text-[16px] font-[700]">
                  $9.99 <span className="text-[12px] font-[400] text-slate-500">/month</span>
                </h1>
              </div>
            </div>
            <div className="mt-7 border-b-2 pb-3">
              <div className="one flex items-center justify-between">
                <p className="font-[500]">Refferal Bonouses</p>
                <p>-$2.00</p>
              </div>
              <div className="two  mt-2 flex items-center justify-between">
                <p className="text-[12px]">Vat </p>
                <p className="text-[12px]">-20%</p>
              </div>
            </div>
            <div className="mt-7  pb-3">
              <div className="one flex items-center justify-between">
                <p className="font-[500]">Today you pay(US Dollars)</p>
                <p>$0</p>
              </div>
              <div className="two">
                <p className="text-[12px]">After 30 days $9.95</p>
              </div>
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded mt-4 hover:bg-blue-600">
              Try it free for 30 days
            </button>
            <p className="text-blue-500 font-[13px] text-center mt-1 underline">Have a promo code?</p>
          </div>
        </div>
      </div>
      <div className="flex mt-10 ">
        <button onClick={prevStep} className="mr-2 bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">
          Back
        </button>
        <button onClick={nextStep} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Next
        </button>
      </div>
    </div>
  );
}

export default PaymentForm;
