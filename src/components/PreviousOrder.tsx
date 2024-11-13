// src/components/PreviousOrder.tsx
import React from 'react';
import SvgIcon from './SvgIcon';

const PreviousOrder: React.FC = () => {
  return (
    <div className="mb-10 rounded-lg shadow-md">
      <h3 className="text-blue text-sm sm:text-base uppercase font-bold mb-2">
        Previous Order
      </h3>
      <div className="bg-white rounded-lg shadow-md">
        <div className="flex items-center">
          <div className="p-2">
            <img
              src="https://via.placeholder.com/50"
              alt="Previous order"
              className="rounded-lg"
            />
          </div>
          <div className="ml-3">
            <p className="text-gray-800 font-medium text-sm sm:text-base mb-3">
              Bag of Laundry
            </p>
            <p className="text-xs text-gray-700">Total Order</p>
            <p className="text-blue text-sm sm:text-base font-semibold">
              $ 180.00
            </p>
          </div>
          <div className="ml-auto p-2 text-center bg-gradient-to-t from-blue to-electricBlue rounded">
            <SvgIcon
              src="./icons/note.svg"
              width={48}
              className="mx-auto my-2"
            />
            <button className="text-blue-500 bg-blue-100 px-3 text-white text-xs sm:text-sm">
              INVOICE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviousOrder;
