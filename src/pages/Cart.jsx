import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import UpiModal from '../components/cart/UpiModal'; // Make sure the path is correct
import './Cart.css'
const Cart = () => {
  const { userData, updateCartItemQuantity, removeCartItem, clearCartItems, cartItems, d, userId, quantity, seUserOrderDetails,
    userOrderDetails} = useContext(CartContext);
  
  const [isModalOpen, setModalOpen] = useState(false);
  console.log(cartItems);

  const validationSchema = Yup.object({
    phoneNumber: Yup.string()
      .matches(/^[0-9]+$/, 'Must be only digits')
      .min(10, 'Must be exactly 10 digits')
      .max(10, 'Must be exactly 10 digits')
      .required('Phone number is required'),
    address: Yup.string().required('Address is required'),
    pincode: Yup.string()
      .matches(/^[0-9]+$/, 'Must be only digits')
      .min(6, 'Must be exactly 6 digits')
      .max(6, 'Must be exactly 6 digits')
      .required('Pincode is required'),
  });

  return (
    <>
      <div className="container mx-auto p-6">
        <h2 className="text-2xl font-semibold mb-4">Your Shopping Cart</h2>

        {userData ? (
          <>
            <Formik
              initialValues={{
                phoneNumber: '',
                address: '',
                pincode: '',
              }}
              validationSchema={validationSchema}
              onSubmit={(values) => {
                console.log('Form data:', values);
                seUserOrderDetails(values)
                setModalOpen(true); // Open modal on form submit
              }}
            >
              {({ handleSubmit }) => (
                <Form className="mb-6">
                  <div className="mb-4">
                    <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
                      Phone Number
                    </label>
                    <Field
                      name="phoneNumber"
                      type="text"
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder="Enter phone number"
                    />
                    <ErrorMessage name="phoneNumber" component="div" className="text-red-500 text-sm" />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                      Address
                    </label>
                    <Field
                      name="address"
                      type="text"
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder="Enter address"
                    />
                    <ErrorMessage name="address" component="div" className="text-red-500 text-sm" />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="pincode" className="block text-sm font-medium text-gray-700">
                      Pincode
                    </label>
                    <Field
                      name="pincode"
                      type="text"
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder="Enter pincode"
                    />
                    <ErrorMessage name="pincode" component="div" className="text-red-500 text-sm" />
                  </div>

                  <button
                    type="submit"
                    className="bg-indigo-600 text-white px-4 py-2 rounded-md shadow hover:bg-indigo-700"
                  >
                    Submit
                  </button>
                </Form>
              )}
            </Formik>

            <div className="space-y-4">
              {cartItems.map((item, ind) => (
                <div
                  key={ind}
                  className="flex justify-between items-center p-4 border border-gray-200 rounded-lg shadow-sm"
                >
                  <div className="w-16 h-16">
                    {item.pic && Array.isArray(item.pic) && item.pic.length > 0 ? (
                      <img src={item.pic[0]} alt={item.name} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                        <span>No Image</span>
                      </div>
                    )}
                  </div>

                  <div className="flex-grow ml-4">
                    <h3 className="text-lg font-medium">{item.name}</h3>
                    <p className="text-gray-500">${item.price}</p>
                  </div>
                  <div className="button-div flex items-center space-x-2">
                    <button
                      onClick={() => updateCartItemQuantity(item, 1)}
                      className="px-1 py-0.5  text-black rounded"
                    >
                      +
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => updateCartItemQuantity(item, -1)}
                      className="px-1 py-0.5  text-black rounded"
                    >
                      -
                    </button>
                    <button
                      onClick={() => removeCartItem(item)}
                      className="px-2 py-1 text-xl text-black rounded-2xl"
                    >
                      x
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 p-4 border border-gray-300 rounded-lg shadow-sm">
              <h3 className="text-lg font-medium">Total Price</h3>
              <p className="text-xl font-bold">${quantity.toFixed(2)}</p>
            </div>

            {isModalOpen&&<UpiModal
              isOpen={isModalOpen}
              onClose={() => setModalOpen(false)}
              onSubmit={(upiId) => {
                setModalOpen(false)
                console.log("UPI ID submitted:", upiId);
                clearCartItems();
              }}
            />}
          </>
        ) : (
          <p className="text-center text-gray-500">No items in the cart</p>
        )}
      </div>
    </>
  );
};

export default Cart;
