/* eslint-disable react/prop-types */

function PaymentForm({ nextStep, prevStep }) {
  // Payment form content goes here
  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Payment Form</h2>
      {/* Your payment form fields */}
      <div className="flex">
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
