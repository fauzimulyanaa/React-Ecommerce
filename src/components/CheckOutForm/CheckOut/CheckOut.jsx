/* eslint-disable react/prop-types */
import { useState } from 'react';
import AddressForm from '../AddressForm';
import PaymentForm from '../PaymentForm';
import ConfirmationForm from '../ConfrimForm';

function CheckoutForm() {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const activeStepClass = 'bg-blue-500';

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
    <div className="max-w-[900px] mx-auto mt-8">
      <div className="flex items-center mb-4">
        <div className={`mr-4 rounded-full h-8 w-8 flex items-center justify-center ${step >= 1 ? activeStepClass : 'bg-gray-300'}`}>
          <span className="text-white">{step >= 1 ? '1' : null}</span>
        </div>
        <div className={`mr-4 h-1 flex-1 ${step >= 2 ? activeStepClass : 'bg-gray-300'}`}></div>
        <div className={`mr-4 rounded-full h-8 w-8 flex items-center justify-center ${step >= 2 ? activeStepClass : 'bg-gray-300'}`}>
          <span className="text-white">{step >= 2 ? '2' : null}</span>
        </div>
        <div className={`h-1 flex-1 ${step === 3 ? activeStepClass : 'bg-gray-300'}`}></div>
        <div className={`rounded-full h-8 w-8 flex items-center justify-center ${step === 3 ? activeStepClass : 'bg-gray-300'}`}>
          <span className="text-white">{step === 3 ? '3' : null}</span>
        </div>
      </div>
      {renderStepContent()}
    </div>
  );
}

export default CheckoutForm;
