// src/components/InvoicePage.tsx
import React from 'react';
import SvgIcon from './components/SvgIcon';

const InvoicePage: React.FC = () => {
  return (
    <div className="bg-lightBlue min-h-screen p-6 flex flex-col items-center">
      {/* Back Button */}
      <button className="self-start text-blue-600 mb-5 mt-5">
        <SvgIcon src="./icons/chevron-left.svg" />
      </button>

      {/* Order Summary Card */}
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md mt-5">
        {/* Header */}
        <div className="bg-blue text-white text-center py-5 rounded-t-lg">
          <h2 className="text-lg font-bold">ORDER SUMMARY</h2>
        </div>

        {/* Order Details */}
        <div className="p-4 space-y-4">
          {/* Order Number */}
          <div className="flex justify-between">
            <p className="text-sm text-blue text-right font-medium">
              ORDER #21340
            </p>
          </div>

          {/* Customer Details */}
          <div>
            <p className="font-semibold text-gray-800">John Doe</p>
            <p className="text-sm text-gray-800">
              123 Pasir Ris, 13810, Singapore
            </p>
          </div>

          {/* Order Items */}
          <div className="space-y-2">
            {/* Item 1 */}
            <div className="flex items-center justify-between border-b border-blue pb-2">
              <div className="flex items-center">
                <img
                  src="https://via.placeholder.com/50"
                  alt="Bag of Laundry"
                  className="w-10 h-10 rounded-md"
                />
                <div className="ml-3">
                  <p className="text-gray-800 font-medium">Bag of Laundry</p>
                  <p className="text-sm text-electricBlue">Qty: 2</p>
                </div>
              </div>
              <p className="text-blue font-semibold">$ 180.00</p>
            </div>

            {/* Item 2 */}
            <div className="flex items-center justify-between border-b border-blue pb-2">
              <div className="flex items-center">
                <img
                  src="https://via.placeholder.com/50"
                  alt="Dry Cleaning"
                  className="w-10 h-10 rounded-md"
                />
                <div className="ml-3">
                  <p className="text-gray-800 font-medium">Dry Cleaning</p>
                  <p className="text-sm text-electricBlue">Qty: 3</p>
                </div>
              </div>
              <p className="text-blue font-semibold">$ 10.00</p>
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
                  <p className="text-sm text-electricBlue">Qty: 1</p>
                </div>
              </div>
              <p className="text-blue font-semibold">$ 14.00</p>
            </div>
          </div>
        </div>

        {/* Total Order */}
        <div className="bg-blue text-white flex justify-between items-center py-5 px-4 rounded-b-lg">
          <span className="font-semibold">TOTAL ORDER</span>
          <span className="font-semibold text-lg">$ 204.00</span>
        </div>
      </div>

      {/* WhatsApp Button */}
      <button className="bg-mintGreen text-white font-semibold mt-6 py-2 w-full rounded-lg flex items-center shadow-lg">
        <SvgIcon src="./icons/message.svg" width={32} className="mr-3" />
        WHATSAPP US
      </button>
    </div>
  );
};

export default InvoicePage;
