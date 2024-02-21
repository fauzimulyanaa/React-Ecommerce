/* eslint-disable react/prop-types */
import { useState } from 'react';
import AddressForm from '../AddressForm';
import PaymentForm from '../PaymentForm';

function CheckoutForm() {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return <AddressForm nextStep={nextStep} />;
      case 2:
        return <PaymentForm nextStep={nextStep} prevStep={prevStep} />;
      case 3:
        return <ConfirmationForm prevStep={prevStep} />;
      default:
        return null;
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-8">
      <div className="flex items-center mb-4">
        <div className={`mr-4 rounded-full h-8 w-8 flex items-center justify-center bg-gray-300 ${step >= 1 ? 'bg-blue-500' : 'bg-gray-300'}`}>
          <span className="text-white">{step >= 1 ? '1' : null}</span>
        </div>
        <div className={`mr-4 h-1 flex-1 bg-gray-300 ${step >= 2 ? 'bg-blue-500' : 'bg-gray-300'}`}></div>
        <div className={`mr-4 rounded-full h-8 w-8 flex items-center justify-center bg-gray-300 ${step >= 2 ? 'bg-blue-500' : 'bg-gray-300'}`}>
          <span className="text-white">{step >= 2 ? '2' : null}</span>
        </div>
        <div className={`h-1 flex-1 bg-gray-300 ${step === 3 ? 'bg-blue-500' : 'bg-gray-300'}`}></div>
        <div className={`rounded-full h-8 w-8 flex items-center justify-center bg-gray-300 ${step === 3 ? 'bg-blue-500' : 'bg-gray-300'}`}>
          <span className="text-white">{step === 3 ? '3' : null}</span>
        </div>
      </div>
      {renderStepContent()}
    </div>
  );
}

function ConfirmationForm({ prevStep }) {
  // Confirmation form content goes here
  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Confirmation</h2>
      {/* Your confirmation content */}
      <div className="flex">
        <button onClick={prevStep} className="mr-2 bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">
          Back
        </button>
        <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">Confirm</button>
      </div>
    </div>
  );
}

export default CheckoutForm;
