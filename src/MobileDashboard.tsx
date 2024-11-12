// src/components/Dashboard.tsx
import React from 'react';

const Dashboard: React.FC = () => {
  return (
    <div className="bg-gray-100 p-4 sm:p-6 md:p-8 w-full max-w-md mx-auto space-y-6">
      {/* Welcome and Balance Card */}
      <div className="bg-coralRed p-4 rounded-lg text-white">
        <h2 className="text-lg sm:text-xl font-semibold">Welcome, John</h2>
        <div className="bg-white text-center p-4 mt-4 rounded-lg text-gray-800 shadow-md">
          <div className="flex items-center justify-center mb-2">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue rounded-full mr-2"></div>
            <span className="text-sm sm:text-lg font-medium">Your Balance</span>
          </div>
          <p className="text-xl sm:text-2xl font-bold text-blue-500">
            $ 200.00
          </p>
        </div>
      </div>

      {/* Previous Order */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-gray-700 text-sm sm:text-base font-semibold">
          Previous Order
        </h3>
        <div className="flex items-center mt-3">
          <img
            src="https://via.placeholder.com/50"
            alt="Previous order"
            className="w-12 h-12 rounded-lg"
          />
          <div className="ml-3">
            <p className="text-gray-800 font-medium text-sm sm:text-base">
              Bag of Laundry
            </p>
            <p className="text-blue-500 text-sm sm:text-base">$ 180.00</p>
          </div>
          <button className="ml-auto text-blue-500 bg-blue-100 px-3 py-1 rounded-lg text-xs sm:text-sm">
            INVOICE
          </button>
        </div>
      </div>

      {/* Most Ordered */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-gray-700 text-sm sm:text-base font-semibold">
          Your Most Ordered
        </h3>
        <div className="relative mt-3">
          <img
            src="https://via.placeholder.com/150"
            alt="Most ordered"
            className="w-full h-32 sm:h-40 object-cover rounded-lg"
          />
          <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black to-transparent w-full p-2 text-white text-xs sm:text-sm">
            <p className="font-semibold">Dry Cleaning</p>
            <p>12x | total of $ 4,000</p>
          </div>
        </div>
      </div>

      {/* Latest Product */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-gray-700 text-sm sm:text-base font-semibold">
          Our Latest Product
        </h3>
        <div className="flex mt-3 space-x-3">
          {/* Jeans */}
          <div className="relative w-1/2">
            <img
              src="https://via.placeholder.com/100"
              alt="Jeans"
              className="w-full h-24 sm:h-28 object-cover rounded-lg"
            />
            <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black to-transparent w-full p-2 text-white text-xs sm:text-sm">
              <p className="font-semibold">Jeans</p>
              <p>$ 10.00/pc</p>
            </div>
          </div>
          {/* T-Shirt */}
          <div className="relative w-1/2">
            <img
              src="https://via.placeholder.com/100"
              alt="T-Shirt"
              className="w-full h-24 sm:h-28 object-cover rounded-lg"
            />
            <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black to-transparent w-full p-2 text-white text-xs sm:text-sm">
              <p className="font-semibold">T-Shirt</p>
              <p>$ 6.00/pc</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
