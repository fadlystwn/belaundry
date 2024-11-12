// src/components/InvoicePage.tsx
import React from 'react';

const InvoicePage: React.FC = () => {
  return (
    <div className="bg-blue-50 min-h-screen p-4 flex flex-col items-center">
      {/* Back Button */}
      <button className="self-start text-blue-600 mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      {/* Order Summary Card */}
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md">
        {/* Header */}
        <div className="bg-blue-500 text-white text-center py-2 rounded-t-lg">
          <h2 className="text-lg font-bold">ORDER SUMMARY</h2>
        </div>

        {/* Order Details */}
        <div className="p-4 space-y-4">
          {/* Order Number */}
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-600 font-medium">ORDER #21340</p>
          </div>

          {/* Customer Details */}
          <div>
            <p className="font-semibold text-gray-800">John Doe</p>
            <p className="text-sm text-gray-600">
              123 Pasir Ris, 13810, Singapore
            </p>
          </div>

          {/* Order Items */}
          <div className="space-y-2">
            {/* Item 1 */}
            <div className="flex items-center justify-between border-b pb-2">
              <div className="flex items-center">
                <img
                  src="https://via.placeholder.com/50"
                  alt="Bag of Laundry"
                  className="w-10 h-10 rounded-md"
                />
                <div className="ml-3">
                  <p className="text-gray-800 font-medium">Bag of Laundry</p>
                  <p className="text-sm text-gray-600">Qty: 2</p>
                </div>
              </div>
              <p className="text-blue-500 font-semibold">$ 180.00</p>
            </div>

            {/* Item 2 */}
            <div className="flex items-center justify-between border-b pb-2">
              <div className="flex items-center">
                <img
                  src="https://via.placeholder.com/50"
                  alt="Dry Cleaning"
                  className="w-10 h-10 rounded-md"
                />
                <div className="ml-3">
                  <p className="text-gray-800 font-medium">Dry Cleaning</p>
                  <p className="text-sm text-gray-600">Qty: 3</p>
                </div>
              </div>
              <p className="text-blue-500 font-semibold">$ 10.00</p>
            </div>

            {/* Item 3 */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <img
                  src="https://via.placeholder.com/50"
                  alt="Rug"
                  className="w-10 h-10 rounded-md"
                />
                <div className="ml-3">
                  <p className="text-gray-800 font-medium">Rug</p>
                  <p className="text-sm text-gray-600">Qty: 1</p>
                </div>
              </div>
              <p className="text-blue-500 font-semibold">$ 14.00</p>
            </div>
          </div>
        </div>

        {/* Total Order */}
        <div className="bg-blue-500 text-white flex justify-between items-center py-3 px-4 rounded-b-lg">
          <span className="font-semibold">TOTAL ORDER</span>
          <span className="font-semibold text-lg">$ 204.00</span>
        </div>
      </div>

      {/* WhatsApp Button */}
      <button className="bg-green-500 text-white mt-6 py-2 px-6 rounded-lg flex items-center shadow-lg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M16.18 5.318A9 9 0 118.82 18.682l-2.4.6.6-2.4a9 9 0 119.16-11.564zM8.25 9.75h-.5a1 1 0 00-.99 1.156l.083.553a7.008 7.008 0 004.427 4.427l.553.083a1 1 0 001.156-.99v-.5a1 1 0 00-.743-.959 2.007 2.007 0 01-1.233-1.233 1 1 0 00-.958-.743h-.5a1 1 0 00-.958.743 2.007 2.007 0 01-1.233 1.233 1 1 0 00-.743.958z"
          />
        </svg>
        WHATSAPP US
      </button>
    </div>
  );
};

export default InvoicePage;
