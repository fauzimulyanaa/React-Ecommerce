/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useForm, Controller } from 'react-hook-form';

function AddressForm({ nextStep }) {
  const { handleSubmit, control } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-lg font-semibold mb-4">Address Form</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label htmlFor="firstName" className="block text-gray-700 text-sm font-bold mb-2">
            First Name
          </label>
          <Controller
            name="firstName"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <input {...field} id="firstName" type="text" placeholder="First Name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            )}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="lastName" className="block text-gray-700 text-sm font-bold mb-2">
            Last Name
          </label>
          <Controller
            name="lastName"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <input {...field} id="lastName" type="text" placeholder="Last Name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            )}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="address" className="block text-gray-700 text-sm font-bold mb-2">
            Address
          </label>
          <Controller
            name="address"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <textarea {...field} id="address" type="text" placeholder="Address" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            )}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <Controller
            name="email"
            control={control}
            defaultValue=""
            render={({ field }) => <input {...field} id="email" type="email" placeholder="Email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="city" className="block text-gray-700 text-sm font-bold mb-2">
            City
          </label>
          <Controller
            name="city"
            control={control}
            defaultValue=""
            render={({ field }) => <input {...field} id="city" type="text" placeholder="City" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="zip" className="block text-gray-700 text-sm font-bold mb-2">
            Zip Code
          </label>
          <Controller
            name="zip"
            control={control}
            defaultValue=""
            render={({ field }) => <input {...field} id="zip" type="text" placeholder="Zip Code" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />}
          />
        </div>
        <div className="flex items-center justify-between">
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={nextStep}>
            Next
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddressForm;
